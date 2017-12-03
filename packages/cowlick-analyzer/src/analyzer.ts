"use strict";
import * as estree from "estree";
import * as estraverse from "estraverse";
import * as core from "cowlick-core";
import * as util from "./util";
import * as ast from "./ast";
import {InlineScript} from "./InlineScript";
import {Script} from "cowlick-core";

/**
 * 解析結果
 */
export interface Result {
  /**
   * シナリオ
   */
  scenario: estree.Program;
  /**
   * 埋め込みスクリプト
   */
  scripts: InlineScript[];
}

type ReplaceLabel = (expression: estree.ObjectExpression, scene: string, frame: string) => void;

interface State {
  replaces: ((f: ReplaceLabel) => void)[];
  scripts: InlineScript[];
  indexes: LabelIndex[];
}

interface LabelIndex {
  scene: string;
  frame: string;
  index: number;
}

interface VisitorOptions {
  scene: string;
  frame: number;
  indexes: number[];
  state: State;
}

const Program = "Program";
const ExpressionStatement = "ExpressionStatement";
const AssignmentExpression = "AssignmentExpression";
const MemberExpression = "MemberExpression";
const Identifier = "Identifier";
const ObjectExpression = "ObjectExpression";
const NewExpression = "NewExpression";
const ArrayExpression = "ArrayExpression";
const ReturnStatement = "ReturnStatement";
const Property = "Property";
const Literal = "Literal";

const corePackage: estree.Identifier = {
  type: Identifier,
  name: "core"
};

const Scenario: estree.MemberExpression = {
  type: MemberExpression,
  object: corePackage,
  property: {
    type: Identifier,
    name: "Scenario"
  },
  computed: false
};
const Scene: estree.MemberExpression = {
  type: MemberExpression,
  object: corePackage,
  property: {
    type: Identifier,
    name: "Scene"
  },
  computed: false
};
const Frame: estree.MemberExpression = {
  type: MemberExpression,
  object: corePackage,
  property: {
    type: Identifier,
    name: "Frame"
  },
  computed: false
};

function program(body: (estree.Statement | estree.ModuleDeclaration)[]): estree.Program {
  return {
    type: Program,
    body,
    sourceType: "module"
  };
}

function moduleExports(right: estree.Expression): estree.ExpressionStatement {
  return {
    type: ExpressionStatement,
    expression: {
      type: AssignmentExpression,
      operator: "=",
      left: {
        type: MemberExpression,
        object: {
          type: Identifier,
          name: "module"
        },
        property: {
          type: Identifier,
          name: "exports"
        },
        computed: false
      },
      right
    }
  };
}

function object(properties: estree.Property[]): estree.ObjectExpression {
  return {
    type: ObjectExpression,
    properties
  };
}

function property(name: string, value: estree.Expression): estree.Property {
  return {
    type: Property,
    method: false,
    shorthand: false,
    computed: false,
    kind: "init",
    key: {
      type: Identifier,
      name
    },
    value
  };
}

function literal(value: any): estree.Literal {
  let raw: string;
  if (typeof value === "string") {
    raw = JSON.stringify(value);
  } else {
    raw = String(value);
  }
  return {
    type: Literal,
    value,
    raw
  };
}

function scriptAst(tag: string, data: estree.Property[]): estree.ObjectExpression {
  return object([property("tag", literal(tag)), property("data", object(data))]);
}

function name(value: string): estree.Property {
  return property("name", literal(value));
}

function text(original: core.Text): estree.ObjectExpression {
  const data: estree.Property[] = [];
  if (original.clear) {
    data.push(property("clear", literal(original.clear)));
  }
  const values: estree.Expression[] = [];
  for (const value of original.values) {
    if (typeof value === "string") {
      values.push(literal(value));
    } else if (Array.isArray(value)) {
      values.push({
        type: ArrayExpression,
        elements: value.map(v => object([property("value", literal(v.value))]))
      });
    } else {
      values.push(object([property("type", literal(value.type)), name(value.name)]));
    }
  }
  data.push(property("values", {type: ArrayExpression, elements: values}));
  return scriptAst(core.Tag.text, data);
}

function assetId(id: string): estree.Property {
  return property("assetId", literal(id));
}

function layerConfig(config: core.LayerConfig): estree.Property[] {
  const ps: estree.Property[] = [name(config.name)];
  if (typeof config.x !== "undefined") {
    ps.push(property("x", literal(config.x)));
  }
  if (typeof config.y !== "undefined") {
    ps.push(property("y", literal(config.y)));
  }
  if (typeof config.opacity !== "undefined") {
    ps.push(property("opacity", literal(config.opacity)));
  }
  if (typeof config.visible !== "undefined") {
    ps.push(property("visible", literal(config.visible)));
  }
  return ps;
}

function layerProperty(config: core.LayerConfig): estree.Property {
  return property("layer", object(layerConfig(config)));
}

function imageProperties(original: core.Image): estree.Property[] {
  return [assetId(original.assetId), layerProperty(original.layer)];
}

function image(original: core.Image): estree.ObjectExpression {
  return scriptAst(core.Tag.image, imageProperties(original));
}

function audio(original: core.Script<core.Audio>): estree.ObjectExpression {
  return scriptAst(original.tag, [assetId(original.data.assetId), property("group", literal(original.data.group))]);
}

function nestOptions(options: VisitorOptions, i: number): VisitorOptions {
  return {
    scene: options.scene,
    frame: options.frame,
    indexes: options.indexes.concat(i),
    state: options.state
  };
}

function click(original: core.Script<any>[], options: VisitorOptions): estree.ObjectExpression {
  return object([
    property("tag", literal(core.Tag.click)),
    property("data", {
      type: ArrayExpression,
      elements: visitScripts(original, options, 0)
    })
  ]);
}

function programToExportFunction(original: estree.Program, requireReturn: boolean) {
  const body: estree.Statement[] = [];
  let index = 0;
  for (const b of original.body) {
    switch (b.type) {
      case ExpressionStatement:
        if (requireReturn && index + 1 === original.body.length) {
          body.push({
            type: ReturnStatement,
            argument: b.expression
          });
        } else {
          body.push(b);
        }
        break;
      case "BlockStatement":
      case "EmptyStatement":
      case "DebuggerStatement":
      case "WithStatement":
      case ReturnStatement:
      case "LabeledStatement":
      case "BreakStatement":
      case "ContinueStatement":
      case "IfStatement":
      case "SwitchStatement":
      case "ThrowStatement":
      case "TryStatement":
      case "WhileStatement":
      case "DoWhileStatement":
      case "ForStatement":
      case "ForInStatement":
      case "ForOfStatement":
        body.push(b);
        break;
      default:
        throw new Error(`unexpected statement: ${JSON.stringify(b)}`);
    }
    index++;
  }
  // FIXME: esprimaでのexpressionプロパティが付与される動作に合わせるため、anyに型変換する
  return moduleExports({
    type: "FunctionExpression",
    id: null,
    expression: false,
    generator: false,
    async: false,
    params: [
      {
        type: Identifier,
        name: "variables"
      }
    ],
    body: {
      type: "BlockStatement",
      body
    }
  } as any);
}

function exportFunction(original: estree.Node, requireReturn: boolean) {
  return estraverse.replace(original, {
    leave: (node, path) => {
      switch (node.type) {
        case Program:
          node.body = [programToExportFunction(node, requireReturn)];
          node.sourceType = "module";
          break;
        default:
          break;
      }
    }
  });
}

function evaluate(original: estree.Program, options: VisitorOptions): estree.ObjectExpression {
  const s = new InlineScript({
    scene: options.scene,
    frame: options.frame,
    indexes: options.indexes,
    source: exportFunction(original, false)
  });
  options.state.scripts.push(s);
  return scriptAst(core.Tag.evaluate, [property("path", literal(s.assetId))]);
}

function conditionBody(is: InlineScript, scripts: core.Script<any>[], options: VisitorOptions): estree.Property[] {
  return [
    property("path", literal(is.assetId)),
    property("scripts", {
      type: ArrayExpression,
      elements: visitScripts(scripts, options, 0)
    })
  ];
}

function createInlineScript(expression: estree.Node, options: VisitorOptions) {
  const is = new InlineScript({
    scene: options.scene,
    frame: options.frame,
    indexes: options.indexes,
    source: exportFunction(expression, true)
  });
  options.state.scripts.push(is);
  return is;
}

function condition(original: ast.Condition, options: VisitorOptions): estree.ObjectExpression {
  const is = createInlineScript(original.expression, options);
  return scriptAst(core.Tag.condition, conditionBody(is, original.scripts, options));
}

function jump(original: ast.Jump, options: VisitorOptions): estree.ObjectExpression {
  const label = original.scene ? util.filename(original.scene) : options.scene;
  const data = object([property("label", literal(label))]);
  const result = object([property("tag", literal(core.Tag.jump)), property("data", data)]);
  if (original.frame) {
    options.state.replaces.push(f => f(data, label, original.frame));
  }
  return result;
}

function choiceItem(value: ast.ChoiceItem, options: VisitorOptions): estree.ObjectExpression {
  const result = jump(value.data, options);
  result.properties.push(property("text", literal(value.text)));
  if (value.condition) {
    const s = new InlineScript({
      scene: options.scene,
      frame: options.frame,
      indexes: options.indexes,
      source: exportFunction(value.condition, true)
    });
    options.state.scripts.push(s);
    result.properties.push(property("path", literal(s.assetId)));
  }
  return result;
}

function choice(original: ast.Choice, options: VisitorOptions): estree.ObjectExpression {
  return scriptAst(core.Tag.choice, [
    layerProperty(original.layer),
    property("values", {
      type: ArrayExpression,
      elements: original.values.map((v, i) => choiceItem(v, nestOptions(options, i)))
    })
  ]);
}

function timeout(original: core.Timeout, options: VisitorOptions): estree.ObjectExpression {
  return scriptAst(core.Tag.timeout, [
    property("milliseconds", literal(original.milliseconds)),
    property("scripts", {
      type: ArrayExpression,
      elements: visitScripts(original.scripts, options, 0)
    })
  ]);
}

function ifElse(original: ast.IfElse, options: VisitorOptions): estree.ObjectExpression {
  const l = original.conditions.length;
  return scriptAst(core.Tag.ifElse, [
    property("conditions", {
      type: ArrayExpression,
      elements: original.conditions.map((c, i) => {
        const nested = nestOptions(options, i);
        const is = createInlineScript(c.expression, nested);
        return object(conditionBody(is, c.scripts, nested));
      })
    }),
    property("elseBody", {
      type: ArrayExpression,
      elements: visitScripts(original.elseBody, options, l)
    })
  ]);
}

function waitTransition(original: ast.WaitTransition, options: VisitorOptions): estree.ObjectExpression[] {
  let scripts = visitScripts(original.scripts, options, 0);
  if (!!original.skippable) {
    scripts.push(
      click(
        [
          {
            tag: core.Tag.skip,
            data: {}
          }
        ],
        options
      )
    );
  }
  return scripts;
}

function button(original: core.Button, options: VisitorOptions): estree.ObjectExpression {
  return scriptAst(core.Tag.button, [
    property("image", object(imageProperties(original.image))),
    property("x", literal(original.x)),
    property("y", literal(original.y)),
    property("scripts", {
      type: ArrayExpression,
      elements: visitScripts(original.scripts, options, 0)
    })
  ]);
}

function removeLayer(original: core.RemoveLayer): estree.ObjectExpression {
  return scriptAst(core.Tag.removeLayer, [property("name", literal(original.name))]);
}

function trigger(original: core.Trigger): estree.ObjectExpression {
  return object([property("tag", literal(core.Tag.trigger)), property("data", literal(original))]);
}

function userDefined(original: core.Script<any>): estree.ObjectExpression {
  const ps: estree.Property[] = [];
  for (const key of Object.keys(original.data)) {
    // TODO: リテラル以外のデータを解析できるようにする
    const value = literal(original.data[key]);
    ps.push(property(key, value));
  }
  return scriptAst(original.tag, ps);
}

function visitScripts(scripts: core.Script<any>[], options: VisitorOptions, l: number) {
  let result: estree.ObjectExpression[] = [];
  for (const [i, s] of scripts.entries()) {
    result = result.concat(visit(s, nestOptions(options, l + i)));
  }
  return result;
}

function visit(original: core.Script<any>, options: VisitorOptions): estree.ObjectExpression[] {
  switch (original.tag) {
    case core.Tag.text:
      return [text(original.data)];
    case core.Tag.image:
      return [image(original.data)];
    case core.Tag.layerConfig:
      return [scriptAst(core.Tag.layerConfig, layerConfig(original.data))];
    case core.Tag.playAudio:
    case core.Tag.stopAudio:
      return [audio(original)];
    case core.Tag.click:
      return [click(original.data, options)];
    case core.Tag.evaluate:
      return [evaluate(original.data, options)];
    case core.Tag.condition:
      return [condition(original.data, options)];
    case core.Tag.jump:
      return [jump(original.data, options)];
    case core.Tag.choice:
      return [choice(original.data, options)];
    case core.Tag.timeout:
      return [timeout(original.data, options)];
    case core.Tag.ifElse:
      return [ifElse(original.data, options)];
    case util.waitTransition:
      return waitTransition(original.data, options);
    case core.Tag.button:
      return [button(original.data, options)];
    case core.Tag.removeLayer:
      return [removeLayer(original.data)];
    case core.Tag.trigger:
      return [trigger(original.data)];
    default:
      return [userDefined(original)];
  }
}

function frame(original: ast.Frame, scene: string, index: number, state: State): estree.NewExpression {
  let elements: estree.ObjectExpression[] = [];
  for (const [i, s] of original.scripts.entries()) {
    elements = elements.concat(visit(s, {scene, frame: index, indexes: [i], state}));
  }
  const result: estree.NewExpression = {
    type: NewExpression,
    callee: Frame,
    arguments: [
      {
        type: ArrayExpression,
        elements
      }
    ]
  };
  if (original.label) {
    state.indexes.push({
      scene,
      frame: original.label,
      index
    });
  }
  return result;
}

function scene(original: ast.Scene, state: State): estree.NewExpression {
  return {
    type: NewExpression,
    callee: Scene,
    arguments: [
      object([
        property("label", literal(original.label)),
        property("frames", {
          type: ArrayExpression,
          elements: original.frames.map((f, i) => frame(f, original.label, i, state))
        })
      ])
    ]
  };
}

const importCowlick: estree.VariableDeclaration = {
  type: "VariableDeclaration",
  kind: "var",
  declarations: [
    {
      type: "VariableDeclarator",
      id: corePackage,
      init: {
        type: "CallExpression",
        callee: {
          type: Identifier,
          name: "require"
        },
        arguments: [literal("cowlick-core")]
      }
    }
  ]
};

function scenario(original: ast.Scenario, state: State): estree.Program {
  const result: estree.NewExpression = {
    type: NewExpression,
    callee: Scenario,
    arguments: [
      {
        type: ArrayExpression,
        elements: original.map(s => scene(s, state))
      }
    ]
  };
  return program([importCowlick, moduleExports(result)]);
}

/**
 * スクリプトASTを解析してJavaScript AST形式のシナリオデータに変換する。
 *
 * @param original スクリプトAST
 */
export function analyze(original: ast.Scenario): Result {
  const state: State = {
    replaces: [],
    scripts: [],
    indexes: []
  };
  const result = scenario(original, state);
  for (const replace of state.replaces) {
    replace((expression, scene, frame) => {
      const i = state.indexes.find(i => i.scene === scene && i.frame === frame);
      if (i) {
        expression.properties.push(property("frame", literal(i.index)));
      } else {
        throw new Error(`label(scene = ${scene}, frame = ${frame}) not found.`);
      }
    });
  }
  return {
    scenario: result,
    scripts: state.scripts
  };
}
