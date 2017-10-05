module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tag;
(function (Tag) {
    Tag.choice = "choice";
    Tag.image = "image";
    Tag.pane = "pane";
    Tag.jump = "jump";
    Tag.text = "text";
    Tag.visible = "visible";
    Tag.playAudio = "playAudio";
    Tag.changeVolume = "changeVolume";
    Tag.stopAudio = "stopAudio";
    Tag.playVideo = "playVideo";
    Tag.stopVideo = "stopVideo";
    Tag.click = "click";
    Tag.button = "button";
    Tag.trigger = "trigger";
    Tag.save = "save";
    Tag.load = "load";
    Tag.evaluate = "eval";
    Tag.link = "link";
    Tag.openSaveWindow = "openSaveWindow";
    Tag.openLoadWindow = "openLoadWindow";
})(Tag = exports.Tag || (exports.Tag = {}));
var Layer;
(function (Layer) {
    Layer.system = "system";
    Layer.background = "background";
    Layer.choice = "choice";
    Layer.message = "message";
})(Layer = exports.Layer || (exports.Layer = {}));
exports.gameId = "$gameId";
var Region;
(function (Region) {
    Region.system = "system";
    Region.saveDataPrefix = "data";
})(Region = exports.Region || (exports.Region = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function collectAssetIds(scripts) {
    let ids = [];
    for (const s of scripts) {
        if (typeof (s.data) === "object") {
            if (s.data.assetId) {
                ids.push(s.data.assetId);
            }
            else if (s.data.backgroundImage) {
                ids.push(s.data.backgroundImage);
            }
        }
    }
    return ids;
}
exports.collectAssetIds = collectAssetIds;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Scenario {
    constructor(scenes) {
        this.index = 0;
        this.scenes = scenes;
    }
    static load(game) {
        return g._require(game, "scenario");
    }
    get scene() {
        if (this.index < this.scenes.length) {
            return this.scenes[this.index];
        }
        else {
            return undefined;
        }
    }
    get frame() {
        if (this.index < this.scenes.length) {
            return this.scenes[this.index].frame;
        }
        else {
            return undefined;
        }
    }
    nextFrame() {
        if (this.index < this.scenes.length) {
            return this.scenes[this.index].next();
        }
        else {
            return undefined;
        }
    }
    update(target) {
        const i = this.scenes.findIndex(s => s.label === target.label);
        if (i > -1) {
            this.index = i;
            this.scenes[this.index].reset(target.frame);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Scenario = Scenario;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RubyAlign;
(function (RubyAlign) {
    /**
     * rtの字間は固定で中央に揃える。
     */
    RubyAlign[RubyAlign["Center"] = 0] = "Center";
    /**
     * rb幅に合わせてrtの字間を揃える。
     */
    RubyAlign[RubyAlign["SpaceAround"] = 1] = "SpaceAround";
})(RubyAlign = exports.RubyAlign || (exports.RubyAlign = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 行に含まれる文字列要素。
 */
var StringDrawInfo = /** @class */ (function () {
    function StringDrawInfo(text, width, glyphs) {
        this.text = text;
        this.width = width;
        this.glyphs = glyphs;
    }
    return StringDrawInfo;
}());
exports.StringDrawInfo = StringDrawInfo;
/**
 * 行に含まれるルビ要素。
 */
var RubyFragmentDrawInfo = /** @class */ (function () {
    function RubyFragmentDrawInfo(fragment, width, rbWidth, rtWidth, glyphs, rubyGlyphs) {
        this.text = fragment.text;
        this.fragment = fragment;
        this.width = width;
        this.rbWidth = rbWidth;
        this.rtWidth = rtWidth;
        this.glyphs = glyphs;
        this.rubyGlyphs = rubyGlyphs;
    }
    return RubyFragmentDrawInfo;
}());
exports.RubyFragmentDrawInfo = RubyFragmentDrawInfo;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 文字列からルビをパースする。
 * このパーサは、akashic-labelのデフォルトルビ記法のためのパーサである。
 *
 * このパーサを使う場合、ラベルに与える文字列にJSONのオブジェクトを表す文字列を含むことができる。
 * 文字列中のオブジェクトはルビを表す要素として扱われる。
 * オブジェクトのメンバーには、ルビを表す `rt` と、本文を表す `rb` を含む必要がある。
 * これらのメンバー以外に、RubyOptions型が持つメンバーを含むことができる。
 *
 * 入力の例として、
 * 'これは{"rb":"本文","rt":"ルビ", "rubyFontSize": 2}です。'
 * という文字列が与えられた場合、このパーサは
 * ["これは", {rb:"本文", rt: "ルビ", rubyFontSize: 2}, "です。"]
 * という配列を返す。
 * また、 `{` や `}` は `\\` でエスケープする必要がある。
 * 例として、括弧は `\\{` 、 バックスラッシュは `\\` を用いて表現する。
 * 注意すべき点として、オブジェクトのプロパティ名はダブルクォートでくくられている必要がある。
 */
function parse(text) {
    var pattern = /^((?:[^\\{]|\\+.)*?)({(?:[^\\}]|\\+.)*?})([\s\S]*)/;
    // ((?:[^\\{]|\\+.)*?) -> オブジェクトリテラルの直前まで
    // ({(?:[^\\}]|\\+.)*?}) -> 最前のオブジェクトリテラル
    // ([\s\S]*) -> オブジェクトリテラル以降の、改行を含む文字列
    var result = [];
    while (text.length > 0) {
        var parsedText = text.match(pattern);
        if (parsedText !== null) {
            var headStr = parsedText[1];
            var rubyStr = parsedText[2];
            text = parsedText[3];
            if (headStr.length > 0) {
                result.push(headStr.replace(/\\{/g, "{").replace(/\\}/g, "}"));
            }
            var parseResult = JSON.parse(rubyStr.replace(/\\/g, "\\\\"));
            if (parseResult.hasOwnProperty("rt") && parseResult.hasOwnProperty("rb")) {
                parseResult.rt = parseResult.rt.replace(/\\{/g, "{").replace(/\\}/g, "}");
                parseResult.rb = parseResult.rb.replace(/\\{/g, "{").replace(/\\}/g, "}");
                parseResult.text = rubyStr;
                result.push(parseResult);
            }
            else {
                throw g.ExceptionFactory.createTypeMismatchError("parse", "RubyFragment");
            }
        }
        else {
            result.push(text.replace(/\\{/g, "{").replace(/\\}/g, "}"));
            break;
        }
    }
    return result;
}
exports.parse = parse;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GameState_1 = __webpack_require__(7);
const Constant_1 = __webpack_require__(0);
const prefixLength = Constant_1.Region.saveDataPrefix.length;
function loadFromStorage(scene, keys, max) {
    const variables = {
        system: {},
        current: {}
    };
    const data = [];
    for (const key of keys) {
        for (const value of scene.storageValues.get(key)) {
            const v = typeof value.data === "number" ? value.data : JSON.parse(value.data);
            if (key.regionKey === Constant_1.Region.system) {
                variables.system = v;
            }
            else {
                let s = data.find((kv) => kv.key === value.storageKey);
                const keys = key.regionKey.split(".");
                if (!s) {
                    const i = parseInt(keys[0].substring(prefixLength), 10);
                    s = {
                        key: value.storageKey,
                        value: {
                            label: "",
                            frame: 0,
                            variables: {}
                        }
                    };
                    data[i] = s;
                }
                const label = keys[keys.length - 1];
                switch (label) {
                    case "frame":
                        s.value.frame = v;
                        break;
                    case "label":
                        s.value.label = v;
                        break;
                    default:
                        s.value.variables = v;
                        break;
                }
            }
        }
    }
    return {
        data: data.map((kv) => kv.value),
        variables
    };
}
function loadGameState(scene, keys, max) {
    const result = loadFromStorage(scene, keys, max);
    return new GameState_1.GameState(result.data, result.variables, max);
}
exports.loadGameState = loadGameState;
function createStorageKeys(player, max) {
    const ks = [
        { region: g.StorageRegion.Values, regionKey: Constant_1.Region.system, userId: player.id, gameId: Constant_1.gameId },
    ];
    for (let i = 0; i < max - 1; i++) {
        ks.push({ region: g.StorageRegion.Values, regionKey: Constant_1.Region.saveDataPrefix + i, userId: player.id, gameId: Constant_1.gameId });
    }
    return ks;
}
exports.createStorageKeys = createStorageKeys;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GameState {
    constructor(data, variables, max) {
        this.data = data;
        this._variables = variables;
        this.max = max;
    }
    get variables() {
        return this._variables;
    }
    exists(index) {
        return typeof this.data[index] === "undefined";
    }
    save(scene, info) {
        if (info.index > this.max || info.index < 0) {
            return "storage out of range: " + info.index;
        }
        const saveData = scene.createSaveData(this._variables.current);
        if (info.force) {
            this.data[info.index] = saveData;
            return saveData;
        }
        else {
            if (this.exists(info.index)) {
                return "save data already exists: " + info.index;
            }
            else {
                this.data[info.index] = saveData;
                return saveData;
            }
        }
    }
    load(index) {
        const saveData = this.data[index];
        if (saveData) {
            this._variables.current = saveData.variables;
        }
        return saveData;
    }
}
exports.GameState = GameState;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Button extends g.Pane {
    constructor(params) {
        super({
            scene: params.scene,
            width: params.width,
            height: params.height,
            backgroundImage: params.backgroundImage ? params.scene.assets[params.backgroundImage] : undefined,
            padding: params.padding,
            backgroundEffector: params.backgroundEffector ? new g.NinePatchSurfaceEffector(params.scene.game, params.backgroundEffector.borderWidth) : undefined
        });
        this.touchable = true;
        this.pointDown.add(this.onPointDown, this);
        this.pointMove.add(this.onPointMove, this);
        this.pointUp.add(this.onPointUp, this);
        this.click = new g.Trigger();
        this.pushed = false;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
        this.modified();
    }
    onPointDown(e) {
        if (!this.pushed) {
            this.push();
        }
    }
    push() {
        this.y += 2;
        this.height -= 2;
        this.pushed = true;
        this.modified();
    }
    unpush() {
        this.y -= 2;
        this.height += 2;
        this.pushed = false;
        this.modified();
    }
    isHover(e) {
        let p = {
            x: e.point.x + e.startDelta.x,
            y: e.point.y + e.startDelta.y
        };
        if (p.x < 0 || p.y < 0)
            return false;
        if (p.x >= this.width || p.y >= this.height)
            return false;
        return true;
    }
    onPointMove(e) {
        let hover = this.isHover(e);
        if (this.pushed && !hover) {
            this.unpush();
        }
        else if (!this.pushed && hover) {
            this.push();
        }
    }
    onPointUp(e) {
        if (this.pushed) {
            this.click.fire(this);
            this.unpush();
        }
    }
}
exports.Button = Button;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createImage(scene, image) {
    const asset = scene.assets[image.assetId];
    let sprite;
    if (image.frame) {
        let s = new g.FrameSprite({
            scene,
            src: asset,
            width: image.frame.width,
            height: image.frame.height
        });
        s.frames = image.frame.frames;
        s.interval = 1000;
        s.start();
        sprite = s;
    }
    else {
        sprite = new g.Sprite({
            scene,
            src: asset
        });
    }
    if (image.x !== undefined) {
        sprite.x = image.x;
    }
    if (image.y !== undefined) {
        sprite.y = image.y;
    }
    sprite.invalidate();
    return sprite;
}
exports.createImage = createImage;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constant_1 = __webpack_require__(0);
exports.defaultConfig = {
    window: {
        message: {
            layer: {
                name: Constant_1.Layer.message
            },
            width: g.game.width - 20,
            height: g.game.height - 20,
            x: 10,
            y: 10,
            touchable: true
        },
        system: [],
        load: [],
        save: []
    },
    font: {
        color: "black"
    },
    system: {
        maxSaveCount: 100
    },
    audio: {
        voice: 0.5,
        se: 0.5,
        bgm: 0.5
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const Engine_1 = __webpack_require__(12);
__export(__webpack_require__(10));
var Constant_1 = __webpack_require__(0);
exports.Tag = Constant_1.Tag;
exports.Layer = Constant_1.Layer;
__export(__webpack_require__(2));
__export(__webpack_require__(24));
__export(__webpack_require__(25));
__export(__webpack_require__(1));
__export(__webpack_require__(7));
exports.engine = new Engine_1.Engine(g.game);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Scenario_1 = __webpack_require__(2);
const script = __webpack_require__(1);
const Scene_1 = __webpack_require__(13);
const ImageButton_1 = __webpack_require__(21);
const LabelButton_1 = __webpack_require__(22);
const Image_1 = __webpack_require__(9);
const Config_1 = __webpack_require__(10);
const ScriptManager_1 = __webpack_require__(23);
const Constant_1 = __webpack_require__(0);
const GameStateHelper_1 = __webpack_require__(6);
class Engine {
    constructor(game) {
        this.game = game;
        Engine.scriptManager.register(Constant_1.Tag.image, Engine.image);
        Engine.scriptManager.register(Constant_1.Tag.pane, Engine.pane);
        Engine.scriptManager.register(Constant_1.Tag.jump, Engine.jump);
        Engine.scriptManager.register(Constant_1.Tag.button, Engine.button);
        Engine.scriptManager.register(Constant_1.Tag.choice, Engine.choice);
        Engine.scriptManager.register(Constant_1.Tag.link, Engine.link);
        Engine.scriptManager.register(Constant_1.Tag.text, Engine.text);
        Engine.scriptManager.register(Constant_1.Tag.visible, Engine.visible);
        Engine.scriptManager.register(Constant_1.Tag.playAudio, Engine.playAudio);
        Engine.scriptManager.register(Constant_1.Tag.stopAudio, Engine.stopAudio);
        Engine.scriptManager.register(Constant_1.Tag.playVideo, Engine.playVideo);
        Engine.scriptManager.register(Constant_1.Tag.changeVolume, Engine.changeVolume);
        Engine.scriptManager.register(Constant_1.Tag.stopVideo, Engine.stopVideo);
        Engine.scriptManager.register(Constant_1.Tag.click, Engine.click);
        Engine.scriptManager.register(Constant_1.Tag.trigger, Engine.trigger);
        Engine.scriptManager.register(Constant_1.Tag.save, Engine.save);
        Engine.scriptManager.register(Constant_1.Tag.load, Engine.load);
        Engine.scriptManager.register(Constant_1.Tag.evaluate, Engine.evaluate);
    }
    set config(value) {
        Engine._config = value;
    }
    start(scenario) {
        const s = scenario ? scenario : Scenario_1.Scenario.load(this.game);
        const storageKeys = GameStateHelper_1.createStorageKeys(Engine.player, Engine._config.system.maxSaveCount);
        const scene = new Scene_1.Scene({
            game: this.game,
            scenario: s,
            scriptManager: Engine.scriptManager,
            config: Engine.config,
            player: Engine.player,
            storageKeys
        });
        this.game.pushScene(scene);
    }
    script(name, f) {
        Engine.scriptManager.register(name, f);
    }
    static get config() {
        return Engine._config;
    }
    static image(scene, image) {
        scene.appendLayer(Image_1.createImage(scene, image), image.layer);
    }
    static pane(scene, pane) {
        const p = new g.Pane({
            scene,
            width: pane.width,
            height: pane.height,
            x: pane.x,
            y: pane.y,
            backgroundImage: pane.backgroundImage ? scene.assets[pane.backgroundImage] : undefined,
            padding: pane.padding,
            backgroundEffector: pane.backgroundEffector ? new g.NinePatchSurfaceEffector(scene.game, pane.backgroundEffector.borderWidth) : undefined
        });
        p.touchable = !!pane.touchable;
        scene.appendLayer(p, pane.layer);
    }
    static jump(scene, target) {
        scene.jump(target);
    }
    static button(scene, data) {
        const button = ImageButton_1.ImageButton.create(scene, data);
        button.move(data.x, data.y);
        button.click.add(() => {
            for (const s of data.scripts) {
                Engine.scriptManager.call(scene, s);
            }
        });
        scene.appendLayer(button, data.layer);
    }
    static choice(scene, choice) {
        const game = scene.game;
        const count = choice.values.length;
        // TODO: 計算式を書き直す
        const width = choice.width ? choice.width : game.width / 4 * 3;
        const height = choice.height ? choice.height : 32;
        const space = 10;
        const baseX = choice.x ? choice.x : width / 6;
        const baseY = choice.y ? choice.y : (game.height / 3 * 2 - height * count - space * (count - 1)) / 2;
        choice.values.forEach((item, i) => {
            let button = new LabelButton_1.LabelButton({
                scene,
                width,
                height,
                backgroundImage: choice.backgroundImage,
                padding: choice.padding,
                backgroundEffector: choice.backgroundEffector,
                text: item.text,
                config: Engine.config
            });
            button.click.add(() => {
                Engine.scriptManager.call(scene, item);
            });
            const direction = choice.direction ? choice.direction : 0 /* Vertical */;
            switch (direction) {
                case 0 /* Vertical */:
                    button.move(baseX, baseY + (height + space) * i);
                    break;
                case 1 /* Horizontal */:
                    button.move(baseX + (width + space) * i, baseY);
                    break;
            }
            scene.appendLayer(button, choice.layer);
        });
    }
    static link(scene, link) {
        const game = scene.game;
        const button = new LabelButton_1.LabelButton({
            scene,
            width: link.width,
            height: link.height,
            backgroundImage: link.backgroundImage,
            padding: link.padding,
            backgroundEffector: link.backgroundEffector,
            text: link.text,
            config: Engine.config
        });
        for (const script of link.scripts) {
            button.click.add(() => {
                Engine.scriptManager.call(scene, script);
            });
        }
        button.move(link.x, link.y);
        scene.appendLayer(button, link.layer);
    }
    static text(scene, text) {
        scene.updateText(text);
    }
    static visible(scene, visibility) {
        scene.visible(visibility);
    }
    static playAudio(scene, audio) {
        scene.playAudio(audio);
    }
    static changeVolume(scene, data) {
        scene.changeVolume(data);
    }
    static stopAudio(scene, audio) {
        scene.stopAudio(audio);
    }
    static playVideo(scene, video) {
        scene.playVideo(video);
    }
    static stopVideo(scene, video) {
        scene.stopVideo(video);
    }
    static click(scene, data) {
        scene.addSkipTrigger();
    }
    static trigger(scene, trigger) {
        switch (trigger) {
            case 1 /* Off */:
                scene.disableWindowClick();
                break;
            case 0 /* On */:
                scene.enableWindowClick();
                break;
        }
    }
    static save(scene, data) {
        const result = scene.save(scene.source.scene, data);
        if (typeof result === "string") {
            scene.game.logger.warn(result);
        }
    }
    static load(scene, data) {
        const s = scene.load(data.index);
        if (s) {
            Engine.jump(scene, s);
        }
        else {
            scene.game.logger.warn("save data not found: " + data.index);
        }
    }
    static evaluate(scene, info) {
        const f = g._require(scene.game, info.path);
        f(scene.gameState.variables);
    }
}
Engine.scriptManager = new ScriptManager_1.ScriptManager();
Engine._config = Config_1.defaultConfig;
// 仮置き
Engine.player = { id: "0" };
exports.Engine = Engine;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ScenarioViewModel_1 = __webpack_require__(14);
const StorageViewModel_1 = __webpack_require__(15);
const script = __webpack_require__(1);
const Message_1 = __webpack_require__(16);
const LayerGroup_1 = __webpack_require__(19);
const AudioGroup_1 = __webpack_require__(20);
const GameStateHelper_1 = __webpack_require__(6);
const Constant_1 = __webpack_require__(0);
class Scene extends g.Scene {
    constructor(params) {
        super({
            game: params.game,
            assetIds: Scene.collectAssetIds(params),
            storageKeys: params.state ? undefined : params.storageKeys
        });
        // 実行時のthisの問題やTrigger.removeできない問題を回避するための措置
        this._onWindowClick = this.onWindowClick.bind(this);
        this._requestNextFrame = this.requestNextFrame.bind(this);
        this._loadFrame = this.loadFrame.bind(this);
        this.layerGroup = new LayerGroup_1.LayerGroup(this);
        this.scriptManager = params.scriptManager;
        this.config = params.config;
        this.audioGroup = new AudioGroup_1.AudioGroup(this.game, params.config.audio);
        this.videos = [];
        this.player = params.player;
        this.storageKeys = params.storageKeys;
        if (params.state) {
            this._gameState = params.state;
        }
        this.loaded.add(this.onLoaded, this);
        this.scenario = new ScenarioViewModel_1.ScenarioViewModel(params.scenario);
        this.scenario.loadFrame(this._loadFrame);
    }
    get source() {
        return this.scenario.source;
    }
    get gameState() {
        return this._gameState;
    }
    jump(target) {
        const previous = this.source.scene.label;
        if (this.source.update(target)) {
            if (previous === this.source.scene.label) {
                if (!this.scenario.load()) {
                    this.game.logger.warn("scene not found", target);
                }
            }
            else {
                this.game.pushScene(new Scene({
                    game: this.game,
                    scenario: this.source,
                    scriptManager: this.scriptManager,
                    config: this.config,
                    player: this.player,
                    state: this._gameState
                }));
            }
        }
        else {
            // TODO: 続行不可能としてタイトルに戻る?
            this.game.logger.warn("scene not found", target);
        }
    }
    appendLayer(e, config) {
        this.layerGroup.append(e, config);
    }
    updateText(text) {
        this._message.updateText(text);
        this.disableTrigger(this._requestNextFrame);
        this.enableWindowClick();
    }
    visible(visibility) {
        this.layerGroup.visible(visibility);
    }
    addSkipTrigger() {
        this.pointUpCapture.addOnce(this._requestNextFrame, this);
    }
    disableWindowClick() {
        if (this._message.finished) {
            this.disableTrigger(this._requestNextFrame);
        }
        else {
            this.disableTrigger(this._onWindowClick);
        }
    }
    enableWindowClick() {
        this.layerGroup.evaluate(Constant_1.Layer.message, (layer) => {
            layer.touchable = true;
            if (this._message.finished) {
                layer.pointUp.add(this._requestNextFrame, layer);
                for (const c of layer.children) {
                    c.pointUp.add(this._requestNextFrame, c);
                }
            }
            else {
                layer.pointUp.addOnce(this._onWindowClick, layer);
                for (const c of layer.children) {
                    c.pointUp.addOnce(this._onWindowClick, c);
                }
            }
        });
    }
    transition(layer, f) {
        this.layerGroup.evaluate(layer, f);
    }
    requestNextFrame() {
        if (!this.scenario.next()) {
            this.game.logger.warn("next frame not found: " + this.scenario.source.scene.label);
        }
    }
    playAudio(audio) {
        const a = this.assets[audio.assetId];
        const player = a.play();
        this.audioGroup.add(audio.groupName, player);
    }
    changeVolume(data) {
        this.audioGroup.changeVolume(data.groupName, data.volume);
    }
    stopAudio(audio) {
        this.audioGroup.remove(audio);
    }
    playVideo(video) {
        // TODO: 最後まで流し終わったことを検知できるようになったら作り直す
        const v = this.assets[video.assetId];
        v.play();
        this.videos.push(v);
    }
    stopVideo(video) {
        const i = this.videos.findIndex(asset => asset.id === video.assetId);
        if (i > 0) {
            const v = this.videos[i];
            v.stop();
            v.destroy();
            this.videos.splice(i, 1);
        }
        else {
            this.game.logger.warn("video not found: " + video.assetId);
        }
    }
    save(scene, info) {
        return this.storage.save(scene, info);
    }
    load(index) {
        return this.storage.load(index);
    }
    onLoaded() {
        const frame = this.scenario.source.frame;
        if (!this._gameState) {
            this._gameState = GameStateHelper_1.loadGameState(this, this.storageKeys, this.config.system.maxSaveCount);
        }
        this.storage = new StorageViewModel_1.StorageViewModel(this.game.storage, this.player, this._gameState);
        if (frame) {
            this.removeLayers(frame.scripts);
            this.createWindowLayer();
            this.createSystemLayer();
            this.applyScripts(frame.scripts);
        }
        else {
            this.createWindowLayer();
            this.createSystemLayer();
        }
        this.topMessageLayer();
        this.layerGroup.top(Constant_1.Layer.system);
    }
    disableTrigger(callback) {
        this.layerGroup.evaluate(Constant_1.Layer.message, (layer) => {
            layer.touchable = false;
            layer.pointUp.remove(callback, layer);
            for (const c of layer.children) {
                c.pointUp.remove(callback, c);
            }
        });
    }
    loadFrame(frame) {
        if (frame) {
            this.removeLayers(frame.scripts);
            this.applyScripts(frame.scripts);
        }
        this.topMessageLayer();
        this.layerGroup.top(Constant_1.Layer.system);
    }
    topMessageLayer() {
        this.layerGroup.evaluate(Constant_1.Layer.message, (layer) => {
            if (layer.touchable) {
                this.layerGroup.top(Constant_1.Layer.message);
            }
        });
    }
    createWindowLayer() {
        this.scriptManager.call(this, {
            tag: Constant_1.Tag.pane,
            data: this.config.window.message
        });
        this.layerGroup.evaluate(Constant_1.Layer.message, (layer) => {
            this._message = new Message_1.Message(this, this.config);
            layer.append(this._message);
        });
        this.enableWindowClick();
    }
    createSystemLayer() {
        for (const s of this.config.window.system) {
            this.scriptManager.call(this, s);
        }
    }
    removeLayers(scripts) {
        const names = new Set();
        scripts.forEach((s) => {
            if (s.data.layer) {
                names.add(s.data.layer);
            }
        });
        names.forEach(name => {
            this.layerGroup.remove(name);
        });
    }
    applyScripts(scripts) {
        scripts.forEach(s => {
            this.scriptManager.call(this, s);
        });
    }
    static collectAssetIds(params) {
        const assetIds = params.scenario.scene.assetIds
            .concat(script.collectAssetIds(params.config.window.system));
        if (params.config.window.message.backgroundImage) {
            assetIds.push(params.config.window.message.backgroundImage);
        }
        return assetIds;
    }
    onWindowClick() {
        if (!this._message.finished) {
            this._message.showAll();
            this.enableWindowClick();
        }
        else {
            this.requestNextFrame();
        }
    }
}
exports.Scene = Scene;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ScenarioViewModel {
    constructor(scenario) {
        this.scenario = scenario;
        this.frameTrigger = new g.Trigger();
    }
    get source() {
        return this.scenario;
    }
    loadFrame(callback) {
        this.frameTrigger.add(callback);
    }
    load(frame) {
        const f = frame ? frame : this.source.scene.frame;
        if (f) {
            this.frameTrigger.fire(f);
            return true;
        }
        else {
            return false;
        }
    }
    next() {
        return this.load(this.source.nextFrame());
    }
}
exports.ScenarioViewModel = ScenarioViewModel;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constant_1 = __webpack_require__(0);
class StorageViewModel {
    constructor(storage, player, state) {
        this.storage = storage;
        this.player = player;
        this.state = state;
    }
    load(index) {
        return this.state.load(index);
    }
    save(scene, info) {
        const result = this.state.save(scene, info);
        if (typeof result === "string") {
            return result;
        }
        else {
            const prefix = Constant_1.Region.saveDataPrefix + info.index + ".";
            this.write(result.variables, prefix + "variables");
            this.write(result.label, prefix + "label");
            this.write(result.frame, prefix + "frame");
            return;
        }
    }
    saveSystemVariables() {
        this.write(this.state.variables.system, Constant_1.Region.system);
    }
    write(value, regionKey) {
        this.storage.write({
            region: g.StorageRegion.Values,
            regionKey,
            userId: this.player.id,
            gameId: Constant_1.gameId
        }, {
            data: JSON.stringify(value)
        });
    }
}
exports.StorageViewModel = StorageViewModel;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const al = __webpack_require__(17);
class Message extends al.Label {
    constructor(scene, config) {
        super({
            scene,
            font: new g.DynamicFont({
                game: scene.game,
                fontFamily: g.FontFamily.SansSerif,
                size: 18
            }),
            text: "",
            fontSize: 18,
            textColor: config.font.color,
            width: scene.game.width - 40,
            x: config.window.message.x + 20,
            y: config.window.message.y + 20
        });
        this.index = 0;
        this.counter = 0;
        this.original = {
            values: []
        };
        this.current = [];
        this.textAlign = g.TextAlign.Left;
        this.update.add(this.onUpdated, this);
    }
    get finished() {
        return this.index >= this.original.values.length;
    }
    updateText(text) {
        if (text.clear) {
            this.text = "";
            this.original = text;
            this.index = 0;
            this.counter = 0;
            this.setCurrent();
        }
        else {
            this.original = {
                values: this.original.values.concat(text.values)
            };
        }
    }
    showAll() {
        if (!this.finished) {
            // 自動更新を止めておかないと二重登録されかねない
            this.update.remove(this.onUpdated, this);
            this.text = "";
            for (const t of this.original.values) {
                if (typeof t === "string") {
                    this.text += t;
                }
                else {
                    this.text += t[t.length - 1].value;
                }
            }
            this.index = this.original.values.length;
            this.invalidate();
            this.update.add(this.onUpdated, this);
        }
    }
    onUpdated() {
        if (!this.finished && this.counter >= this.current.length) {
            this.counter = 0;
            this.index++;
            this.setCurrent();
        }
        if (!this.finished) {
            const t = this.current[this.counter];
            if (typeof t === "string") {
                this.text += t;
            }
            else {
                if (this.counter !== 0) {
                    this.text = this.text.substring(0, this.text.length - t.value.length);
                }
                this.text += t.value;
            }
            this.invalidate();
            this.counter++;
        }
    }
    setCurrent() {
        const ts = this.original.values[this.index];
        if (typeof ts === "string") {
            this.current = ts.split(/.*?/);
        }
        else {
            this.current = ts;
        }
    }
}
exports.Message = Message;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = __webpack_require__(18);
exports.FragmentDrawInfo = __webpack_require__(4);
exports.RubyParser = __webpack_require__(3);
exports.RubyAlign = exports.RubyParser.RubyAlign;
// tslintが誤動作するので一時的に無効化する
/* tslint:disable: no-unused-variable */
var DRP = __webpack_require__(5);
exports.defaultRubyParser = DRP.parse;
/* tslint:enable: no-unused-variable */


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var rp = __webpack_require__(3);
var fr = __webpack_require__(4);
var dr = __webpack_require__(5);
/**
 * 複数行のテキストを描画するエンティティ。
 * 文字列内の"\r\n"、"\n"、"\r"を区切りとして改行を行う。
 * また、自動改行が有効な場合はエンティティの幅に合わせて改行を行う。
 * 本クラスの利用にはg.BitmapFontが必要となる。
 */
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    /**
     * 各種パラメータを指定して `Label` のインスタンスを生成する。
     * @param param このエンティティに対するパラメータ
     */
    function Label(param) {
        var _this = this;
        if (!param.font && !param.bitmapFont) {
            throw g.ExceptionFactory.createAssertionError("Label#constructor: 'font' or 'bitmapFont' must be given to LabelParameterObject");
        }
        _this = _super.call(this, param) || this;
        _this.text = param.text;
        _this.bitmapFont = param.bitmapFont;
        _this.font = param.font ? param.font : param.bitmapFont;
        _this.fontSize = param.fontSize;
        _this._lineBreakWidth = param.width;
        _this.lineBreak = "lineBreak" in param ? param.lineBreak : true;
        _this.lineGap = param.lineGap || 0;
        _this.textAlign = "textAlign" in param ? param.textAlign : g.TextAlign.Left;
        _this.textColor = param.textColor;
        _this.trimMarginTop = "trimMarginTop" in param ? param.trimMarginTop : false;
        _this.widthAutoAdjust = "widthAutoAdjust" in param ? param.widthAutoAdjust : false;
        _this.rubyEnabled = "rubyEnabled" in param ? param.rubyEnabled : true;
        _this.fixLineGap = "fixLineGap" in param ? param.fixLineGap : false;
        _this.rubyParser = "rubyParser" in param ? param.rubyParser : dr.parse;
        if (!param.rubyOptions) {
            param.rubyOptions = {};
        }
        _this.rubyOptions = param.rubyOptions;
        _this.rubyOptions.rubyFontSize = "rubyFontSize" in param.rubyOptions ? param.rubyOptions.rubyFontSize : param.fontSize / 2;
        _this.rubyOptions.rubyBitmapFont = "rubyBitmapFont" in param.rubyOptions ? param.rubyOptions.rubyBitmapFont : _this.bitmapFont;
        _this.rubyOptions.rubyFont = "rubyFont" in param.rubyOptions ? param.rubyOptions.rubyFont : _this.font;
        _this.rubyOptions.rubyGap = "rubyGap" in param.rubyOptions ? param.rubyOptions.rubyGap : 0;
        _this.rubyOptions.rubyAlign = "rubyAlign" in param.rubyOptions ? param.rubyOptions.rubyAlign : rp.RubyAlign.SpaceAround;
        _this._lines = [];
        _this._beforeText = undefined;
        _this._beforeTextAlign = undefined;
        _this._beforeFontSize = undefined;
        _this._beforeLineBreak = undefined;
        _this._beforeFont = undefined;
        _this._beforeWidth = undefined;
        _this._beforeRubyEnabled = undefined;
        _this._beforeFixLineGap = undefined;
        _this._beforeTrimMarginTop = undefined;
        _this._beforeWidthAutoAdjust = undefined;
        _this._beforeRubyOptions = {};
        _this._invalidateSelf();
        return _this;
    }
    /**
     * このエンティティの描画キャッシュ無効化をエンジンに通知する。
     * このメソッドを呼び出し後、描画キャッシュの再構築が行われ、各 `g.Renderer` に描画内容の変更が反映される。
     */
    Label.prototype.invalidate = function () {
        this._invalidateSelf();
        _super.prototype.invalidate.call(this);
    };
    Label.prototype.renderCache = function (renderer) {
        if (!this.rubyEnabled && this.fontSize === 0)
            return;
        renderer.save();
        var currentLineHeight = 0;
        for (var i = 0; i < this._lines.length; ++i) {
            if (this._lines[i].width > 0 && this._lines[i].height > 0) {
                renderer.drawImage(this._lines[i].surface, 0, 0, this._lines[i].width, this._lines[i].height, this._offsetX(this._lines[i].width), currentLineHeight);
            }
            currentLineHeight += this._lines[i].height + this.lineGap;
        }
        if (this.textColor) {
            renderer.setCompositeOperation(g.CompositeOperation.SourceAtop);
            renderer.fillRect(0, 0, this._lineBreakWidth, this.height, this.textColor);
        }
        renderer.restore();
    };
    /**
     * 利用している `g.Surface` を破棄した上で、このエンティティを破棄する。
     * 利用している `g.BitmapFont` の破棄は行わないため、 `g.BitmapFont` の破棄はコンテンツ製作者が明示的に行う必要がある。
     */
    Label.prototype.destroy = function () {
        this._destroyLines();
        _super.prototype.destroy.call(this);
    };
    Label.prototype._offsetX = function (width) {
        switch (this.textAlign) {
            case g.TextAlign.Left:
                return 0;
            case g.TextAlign.Right:
                return (this._lineBreakWidth - width);
            case g.TextAlign.Center:
                return ((this._lineBreakWidth - width) / 2);
            default:
                return 0;
        }
    };
    Label.prototype._destroyLines = function () {
        for (var i = 0; i < this._lines.length; i++) {
            if (this._lines[i].surface && !this._lines[i].surface.destroyed()) {
                this._lines[i].surface.destroy();
            }
        }
        this._lines = undefined;
    };
    Label.prototype._invalidateSelf = function () {
        if (this.fontSize < 0)
            throw g.ExceptionFactory.createAssertionError("Label#_invalidateSelf: fontSize must not be negative.");
        if (this.lineGap < -1 * this.fontSize)
            throw g.ExceptionFactory.createAssertionError("Label#_invalidateSelf: lineGap must be greater than -1 * fontSize.");
        // bitmapFontが定義されている場合、bitmapfontを利用する。
        if (this.bitmapFont !== undefined) {
            this.font = this.bitmapFont;
        }
        if (this.rubyOptions.rubyBitmapFont !== undefined) {
            this.rubyOptions.rubyFont = this.rubyOptions.rubyBitmapFont;
        }
        // this.width がユーザから変更された場合、this._lineBreakWidth は this.width に追従する。
        if (this._beforeWidth !== this.width)
            this._lineBreakWidth = this.width;
        if (this._beforeText !== this.text
            || this._beforeFontSize !== this.fontSize
            || this._beforeFont !== this.font
            || this._beforeLineBreak !== this.lineBreak
            || (this._beforeWidth !== this.width && this._beforeLineBreak === true)
            || this._beforeTextAlign !== this.textAlign
            || this._beforeRubyEnabled !== this.rubyEnabled
            || this._beforeFixLineGap !== this.fixLineGap
            || this._beforeTrimMarginTop !== this.trimMarginTop
            || this._beforeWidthAutoAdjust !== this.widthAutoAdjust
            || this._isDifferentRubyOptions(this._beforeRubyOptions, this.rubyOptions)) {
            this._updateLines();
        }
        if (this.widthAutoAdjust) {
            // this.widthAutoAdjust が真の場合、 this.width は描画幅に応じてトリミングされる。
            this.width = Math.ceil(this._lines.reduce(function (width, line) { return Math.max(width, line.width); }, 0));
        }
        var height = this.lineGap * (this._lines.length - 1);
        for (var i = 0; i < this._lines.length; i++) {
            height += this._lines[i].height;
        }
        this.height = height;
        this._beforeText = this.text;
        this._beforeTextAlign = this.textAlign;
        this._beforeFontSize = this.fontSize;
        this._beforeLineBreak = this.lineBreak;
        this._beforeFont = this.font;
        this._beforeWidth = this.width;
        this._beforeRubyEnabled = this.rubyEnabled;
        this._beforeFixLineGap = this.fixLineGap;
        this._beforeTrimMarginTop = this.trimMarginTop;
        this._beforeWidthAutoAdjust = this.widthAutoAdjust;
        this._beforeRubyOptions.rubyFontSize = this.rubyOptions.rubyFontSize;
        this._beforeRubyOptions.rubyFont = this.rubyOptions.rubyFont;
        this._beforeRubyOptions.rubyGap = this.rubyOptions.rubyGap;
        this._beforeRubyOptions.rubyAlign = this.rubyOptions.rubyAlign;
    };
    Label.prototype._updateLines = function () {
        var fragments = this.rubyEnabled ? this.rubyParser(this.text) : [this.text];
        var undrawnLineInfos = this._divideToLines(fragments);
        var lines = [];
        var hasNotChanged = this._beforeFontSize === this.fontSize
            && this._beforeFont === this.font
            && !this._isDifferentRubyOptions(this._beforeRubyOptions, this.rubyOptions);
        for (var i = 0; i < undrawnLineInfos.length; i++) {
            var undrawnLineInfo = undrawnLineInfos[i];
            var line = this._lines[i];
            if (hasNotChanged && line !== undefined
                && undrawnLineInfo.sourceText === line.sourceText
                && undrawnLineInfo.width === line.width
                && undrawnLineInfo.height === line.height) {
                lines.push(line);
            }
            else {
                if (line && line.surface && !line.surface.destroyed()) {
                    line.surface.destroy();
                }
                this._drawLineInfoSurface(undrawnLineInfo);
                lines.push(undrawnLineInfo);
            }
        }
        // 行数が減った場合、使われない行のSurfaceをdestroyする。
        for (var i = lines.length; i < this._lines.length; i++) {
            var line = this._lines[i];
            if (line.surface && !line.surface.destroyed()) {
                line.surface.destroy();
            }
        }
        this._lines = lines;
    };
    Label.prototype._drawLineInfoSurface = function (lineInfo) {
        var lineDrawInfo = lineInfo.fragmentDrawInfoArray;
        var rhi = this._calcRubyHeightInfo(lineDrawInfo);
        var lineSurface = this.scene.game.resourceFactory.createSurface(Math.ceil(lineInfo.width), Math.ceil(lineInfo.height));
        var lineRenderer = lineSurface.renderer();
        lineRenderer.begin();
        lineRenderer.save();
        var rbOffsetY = (rhi.hasRubyFragmentDrawInfo || this.fixLineGap) ? this.rubyOptions.rubyGap + rhi.maxRubyGlyphHeightWithOffsetY : 0;
        var minMinusOffsetY = lineInfo.minMinusOffsetY;
        for (var i = 0; i < lineDrawInfo.length; i++) {
            var drawInfo = lineDrawInfo[i];
            if (drawInfo instanceof fr.RubyFragmentDrawInfo) {
                this._drawRubyFragmentDrawInfo(lineRenderer, drawInfo, rbOffsetY - minMinusOffsetY, -rhi.minRubyMinusOffsetY);
            }
            else if (drawInfo instanceof fr.StringDrawInfo) {
                this._drawStringGlyphs(lineRenderer, this.font, drawInfo.glyphs, this.fontSize, 0, rbOffsetY - minMinusOffsetY, 0);
            }
            lineRenderer.translate(drawInfo.width, 0);
        }
        lineRenderer.restore();
        lineRenderer.end();
        lineInfo.surface = lineSurface;
    };
    // 文字列の等幅描画
    Label.prototype._drawStringGlyphs = function (renderer, font, glyphs, fontSize, offsetX, offsetY, margin) {
        if (margin === void 0) { margin = 0; }
        renderer.save();
        renderer.translate(offsetX, offsetY);
        for (var i = 0; i < glyphs.length; i++) {
            var glyph = glyphs[i];
            var glyphScale = fontSize / font.size;
            var glyphWidth = glyph.advanceWidth * glyphScale;
            renderer.save();
            renderer.transform([glyphScale, 0, 0, glyphScale, 0, 0]);
            if (glyph.width > 0 && glyph.height > 0) {
                renderer.drawImage(glyph.surface, glyph.x, glyph.y, glyph.width, glyph.height, glyph.offsetX, glyph.offsetY);
            }
            renderer.restore();
            renderer.translate(glyphWidth + margin, 0);
        }
        renderer.restore();
    };
    // ルビベースとルビテキストの描画
    Label.prototype._drawRubyFragmentDrawInfo = function (renderer, rubyDrawInfo, rbOffsetY, rtOffsetY) {
        var f = rubyDrawInfo.fragment;
        var rubyFontSize = "rubyFontSize" in f ? f.rubyFontSize : this.rubyOptions.rubyFontSize;
        var rubyAlign = "rubyAlign" in f ? f.rubyAlign : this.rubyOptions.rubyAlign;
        var rubyFont = "rubyFont" in f ? f.rubyFont : this.rubyOptions.rubyFont;
        var isRtWideThanRb = rubyDrawInfo.rtWidth > rubyDrawInfo.rbWidth;
        var width = rubyDrawInfo.width;
        var rtWidth = rubyDrawInfo.rtWidth;
        var rbWidth = rubyDrawInfo.rbWidth;
        var rtStartPositionX;
        var rbStartPositionX;
        var rtUnitMargin;
        var rbUnitMargin;
        switch (rubyAlign) {
            case rp.RubyAlign.Center:
                rtUnitMargin = 0;
                rbUnitMargin = 0;
                rtStartPositionX = isRtWideThanRb ? 0 : (width - rtWidth) / 2;
                rbStartPositionX = isRtWideThanRb ? (width - rbWidth) / 2 : 0;
                break;
            case rp.RubyAlign.SpaceAround:
                rtUnitMargin = (rubyDrawInfo.rubyGlyphs.length > 0) ? (width - rtWidth) / rubyDrawInfo.rubyGlyphs.length : 0;
                rbUnitMargin = 0;
                rtStartPositionX = isRtWideThanRb ? 0 : rtUnitMargin / 2;
                rbStartPositionX = isRtWideThanRb ? (width - rbWidth) / 2 : 0;
                break;
            default:
                throw g.ExceptionFactory.createAssertionError("Label#_drawRubyFragmentDrawInfo: unknown rubyAlign.");
        }
        this._drawStringGlyphs(renderer, this.font, rubyDrawInfo.glyphs, this.fontSize, rbStartPositionX, rbOffsetY, rbUnitMargin);
        this._drawStringGlyphs(renderer, rubyFont, rubyDrawInfo.rubyGlyphs, rubyFontSize, rtStartPositionX, rtOffsetY, rtUnitMargin);
    };
    Label.prototype._calcRubyHeightInfo = function (drawInfoArray) {
        var maxRubyFontSize = this.rubyOptions.rubyFontSize;
        var maxRubyGlyphHeightWithOffsetY = 0;
        var maxRubyGap = this.rubyOptions.rubyGap;
        var hasRubyFragmentDrawInfo = false;
        var maxRealDrawHeight = 0;
        var realOffsetY;
        for (var i = 0; i < drawInfoArray.length; i++) {
            var ri = drawInfoArray[i];
            if (ri instanceof fr.RubyFragmentDrawInfo) {
                var f = ri.fragment;
                if (f.rubyFontSize > maxRubyFontSize) {
                    maxRubyFontSize = f.rubyFontSize;
                }
                if (f.rubyGap > maxRubyGap) {
                    maxRubyGap = f.rubyGap;
                }
                var rubyGlyphScale = (f.rubyFontSize ? f.rubyFontSize : this.rubyOptions.rubyFontSize) / (f.rubyFont ? f.rubyFont.size : this.rubyOptions.rubyFont.size);
                var currentMaxRubyGlyphHeightWithOffsetY = Math.max.apply(Math, ri.rubyGlyphs.map(function (glyph) { return (glyph.offsetY > 0) ? glyph.height + glyph.offsetY : glyph.height; }));
                var currentMinRubyOffsetY = Math.min.apply(Math, ri.rubyGlyphs.map(function (glyph) { return (glyph.offsetY > 0) ? glyph.offsetY : 0; }));
                if (maxRubyGlyphHeightWithOffsetY < currentMaxRubyGlyphHeightWithOffsetY * rubyGlyphScale) {
                    maxRubyGlyphHeightWithOffsetY = currentMaxRubyGlyphHeightWithOffsetY * rubyGlyphScale;
                }
                var rubyFont = (f.rubyFont ? f.rubyFont : this.rubyOptions.rubyFont);
                var currentRubyStandardOffsetY = this._calcStandardOffsetY(rubyFont);
                var currentFragmentRealDrawHeight = (currentMaxRubyGlyphHeightWithOffsetY - Math.min(currentMinRubyOffsetY, currentRubyStandardOffsetY)) * rubyGlyphScale;
                if (maxRealDrawHeight < currentFragmentRealDrawHeight) {
                    maxRealDrawHeight = currentFragmentRealDrawHeight;
                    // その行で描画されるルビのうち、もっとも実描画高さが高い文字が持つoffsetYを求める
                    realOffsetY = Math.min(currentMinRubyOffsetY, currentRubyStandardOffsetY) * rubyGlyphScale;
                }
                hasRubyFragmentDrawInfo = true;
            }
        }
        // ルビが無い行でもfixLineGapが真の場合ルビの高さを使う
        if (maxRubyGlyphHeightWithOffsetY === 0) {
            maxRubyGlyphHeightWithOffsetY = this.rubyOptions.rubyFontSize;
        }
        var minRubyMinusOffsetY = this.trimMarginTop ? realOffsetY : 0;
        return {
            maxRubyFontSize: maxRubyFontSize,
            maxRubyGlyphHeightWithOffsetY: maxRubyGlyphHeightWithOffsetY,
            minRubyMinusOffsetY: minRubyMinusOffsetY,
            maxRubyGap: maxRubyGap,
            hasRubyFragmentDrawInfo: hasRubyFragmentDrawInfo
        };
    };
    Label.prototype._divideToLines = function (fragmentArray) {
        var state = {
            resultLines: [],
            currentStringDrawInfo: new fr.StringDrawInfo("", 0, []),
            currentLineInfo: {
                sourceText: "",
                fragmentDrawInfoArray: [],
                width: 0,
                height: 0,
                minMinusOffsetY: 0,
                surface: undefined
            }
        };
        for (var i = 0; i < fragmentArray.length; i++) {
            var fragment = fragmentArray[i];
            if (typeof fragment === "string") {
                var text = fragment.replace(/\r\n|\n/g, "\r");
                for (var j = 0; j < text.length; j++) {
                    if (text[j] === "\r") {
                        this._tryPushCurrentStringDrawInfo(state);
                        this._feedLine(state);
                    }
                    else {
                        var glyph = this.font.glyphForCharacter(text[j].charCodeAt(0));
                        var glyphScale = this.fontSize / this.font.size;
                        var glyphWidth = glyph.advanceWidth * glyphScale;
                        if (glyphWidth <= 0) {
                            continue;
                        }
                        if (this._needLineBreak(state, glyphWidth)) {
                            this._tryPushCurrentStringDrawInfo(state);
                            this._feedLine(state);
                        }
                        this._addToCurrentStringDrawInfo(state, glyphWidth, glyph, text[j]);
                    }
                }
                this._tryPushCurrentStringDrawInfo(state);
            }
            else {
                var ri = this._createRubyFragmentDrawInfo(fragment);
                if (ri.width <= 0) {
                    continue;
                }
                if (this._needLineBreak(state, ri.width)) {
                    this._feedLine(state);
                }
                state.currentLineInfo.fragmentDrawInfoArray.push(ri);
                state.currentLineInfo.width += ri.width;
                state.currentLineInfo.sourceText += fragment.text;
            }
        }
        this._feedLine(state); // 行末ではないが、状態をflushするため改行処理を呼ぶ
        return state.resultLines;
    };
    Label.prototype._createStringGlyph = function (text, font) {
        return Array.prototype.map.call(text, function (e, index, text) {
            return font.glyphForCharacter(text.charCodeAt(index));
        });
    };
    Label.prototype._createRubyFragmentDrawInfo = function (fragment) {
        var glyphs = this._createStringGlyph(fragment.rb, this.font);
        var rubyGlyphs = this._createStringGlyph(fragment.rt, this.rubyOptions.rubyFont);
        var rubyFont = "rubyFont" in fragment ? fragment.rubyFont : this.rubyOptions.rubyFont;
        var rubyFontSize = "rubyFontSize" in fragment ? fragment.rubyFontSize : this.rubyOptions.rubyFontSize;
        var glyphScale = this.fontSize / this.font.size;
        var rubyGlyphScale = rubyFontSize / rubyFont.size;
        var rbWidth = glyphs.length > 0 ?
            glyphs.map(function (glyph) { return glyph.advanceWidth; }).reduce(function (pre, cu) { return pre + cu; }) * glyphScale :
            0;
        var rtWidth = rubyGlyphs.length > 0 ?
            rubyGlyphs.map(function (glyph) { return glyph.advanceWidth; }).reduce(function (pre, cu) { return pre + cu; }) * rubyGlyphScale :
            0;
        var width = rbWidth > rtWidth ? rbWidth : rtWidth;
        return new fr.RubyFragmentDrawInfo(fragment, width, rbWidth, rtWidth, glyphs, rubyGlyphs);
    };
    Label.prototype._tryPushCurrentStringDrawInfo = function (state) {
        if (state.currentStringDrawInfo.width > 0) {
            state.currentLineInfo.fragmentDrawInfoArray.push(state.currentStringDrawInfo);
            state.currentLineInfo.width += state.currentStringDrawInfo.width;
            state.currentLineInfo.sourceText += state.currentStringDrawInfo.text;
        }
        state.currentStringDrawInfo = new fr.StringDrawInfo("", 0, []);
    };
    Label.prototype._feedLine = function (state) {
        var glyphScale = this.fontSize / this.font.size;
        var minOffsetY = Infinity;
        var minMinusOffsetY = 0;
        var maxGlyphHeightWithOffsetY = 0;
        state.currentLineInfo.fragmentDrawInfoArray.forEach(function (fragmentDrawInfo) {
            fragmentDrawInfo.glyphs.forEach(function (glyph) {
                if (minMinusOffsetY > glyph.offsetY) {
                    minMinusOffsetY = glyph.offsetY;
                }
                // offsetYの一番小さな値を探す
                if (minOffsetY > glyph.offsetY)
                    minOffsetY = glyph.offsetY;
                var heightWithOffsetY = (glyph.offsetY > 0) ? glyph.height + glyph.offsetY : glyph.height;
                if (maxGlyphHeightWithOffsetY < heightWithOffsetY) {
                    maxGlyphHeightWithOffsetY = heightWithOffsetY;
                }
            });
        });
        minMinusOffsetY = minMinusOffsetY * glyphScale;
        maxGlyphHeightWithOffsetY =
            (state.currentLineInfo.fragmentDrawInfoArray.length > 0) ?
                maxGlyphHeightWithOffsetY * glyphScale - minMinusOffsetY :
                this.fontSize;
        maxGlyphHeightWithOffsetY = Math.ceil(maxGlyphHeightWithOffsetY);
        var rhi = this._calcRubyHeightInfo(state.currentLineInfo.fragmentDrawInfoArray);
        state.currentLineInfo.height =
            rhi.hasRubyFragmentDrawInfo || this.fixLineGap ?
                maxGlyphHeightWithOffsetY + rhi.maxRubyGlyphHeightWithOffsetY + rhi.maxRubyGap :
                maxGlyphHeightWithOffsetY;
        state.currentLineInfo.minMinusOffsetY = minMinusOffsetY;
        if (this.trimMarginTop) {
            var minOffsetYInRange = Math.min(minOffsetY, this._calcStandardOffsetY(this.font)) * glyphScale;
            state.currentLineInfo.height -= minOffsetYInRange;
            state.currentLineInfo.minMinusOffsetY += minOffsetYInRange;
        }
        state.resultLines.push(state.currentLineInfo);
        state.currentLineInfo = {
            sourceText: "",
            fragmentDrawInfoArray: [],
            width: 0,
            height: 0,
            minMinusOffsetY: 0,
            surface: undefined
        };
    };
    Label.prototype._addToCurrentStringDrawInfo = function (state, width, glyph, character) {
        state.currentStringDrawInfo.width += width;
        state.currentStringDrawInfo.glyphs.push(glyph);
        state.currentStringDrawInfo.text += character;
    };
    Label.prototype._needLineBreak = function (state, width) {
        return (this.lineBreak && width > 0 &&
            state.currentLineInfo.width + state.currentStringDrawInfo.width + width > this._lineBreakWidth &&
            state.currentLineInfo.width + state.currentStringDrawInfo.width > 0); // 行頭文字の場合は改行しない
    };
    Label.prototype._isDifferentRubyOptions = function (ro0, ro1) {
        return (ro0.rubyFontSize !== ro1.rubyFontSize
            || ro0.rubyFont !== ro1.rubyFont
            || ro0.rubyGap !== ro1.rubyGap
            || ro0.rubyAlign !== ro1.rubyAlign);
    };
    Label.prototype._calcStandardOffsetY = function (font) {
        // 標準的な高さを持つグリフとして `M` を利用するが明確な根拠は無い
        var text = "M";
        var glyphM = font.glyphForCharacter(text.charCodeAt(0));
        return glyphM.offsetY;
    };
    return Label;
}(g.CacheableE));
module.exports = Label;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LayerGroup {
    constructor(scene) {
        this.scene = scene;
        this.group = new Map();
    }
    append(e, config) {
        let layer = this.group.get(config.name);
        if (layer) {
            layer.append(e);
        }
        else {
            layer = new g.Pane({
                scene: this.scene,
                width: this.scene.game.width,
                height: this.scene.game.height,
                x: 0,
                y: 0,
                opacity: config.opacity
            });
            layer.append(e);
            this.scene.append(layer);
            this.group.set(config.name, layer);
        }
    }
    remove(name) {
        const layer = this.group.get(name);
        if (layer) {
            if (this.group.delete(name)) {
                this.scene.remove(layer);
                layer.destroy();
            }
        }
    }
    visible(visibility) {
        this.evaluate(visibility.layer, (layer) => {
            if (visibility.visible) {
                layer.show();
            }
            else {
                layer.hide();
            }
        });
    }
    top(name) {
        this.evaluate(name, (layer) => this.scene.append(layer));
    }
    evaluate(name, f) {
        const layer = this.group.get(name);
        if (layer) {
            f(layer);
        }
        else {
            this.scene.game.logger.warn("layer not found: " + name);
        }
    }
}
exports.LayerGroup = LayerGroup;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AudioGroup {
    constructor(game, config) {
        this.game = game;
        this.group = new Map();
        this.config = config;
    }
    add(name, audio) {
        // TODO: 型変換を消す
        const volume = this.config[name];
        if (volume) {
            audio.changeVolume(volume);
        }
        let ps = this.group.get(name);
        if (!ps) {
            ps = [];
            this.group.set(name, ps);
        }
        ps.push(audio);
    }
    changeVolume(name, volume) {
        let ps = this.group.get(name);
        if (ps) {
            for (const player of ps) {
                player.changeVolume(volume);
            }
        }
    }
    remove(audio) {
        let ps = this.group.get(audio.groupName);
        if (ps) {
            if (audio.assetId) {
                const i = ps.findIndex(p => p.currentAudio.id === audio.assetId);
                if (i > 0) {
                    ps[i].stop();
                    ps.splice(i, 1);
                }
                else {
                    this.game.logger.warn("audio not found", audio);
                }
            }
            else if (this.group.delete(audio.groupName)) {
                for (const player of ps) {
                    player.stop();
                }
            }
            else {
                this.game.logger.warn("audio group not found", audio);
            }
        }
    }
}
exports.AudioGroup = AudioGroup;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __webpack_require__(8);
const Image_1 = __webpack_require__(9);
class ImageButton extends Button_1.Button {
    constructor(scene, image) {
        super({
            scene,
            width: image.width,
            height: image.height
        });
        this.append(image);
    }
    static create(scene, data) {
        return new ImageButton(scene, Image_1.createImage(scene, data));
    }
}
exports.ImageButton = ImageButton;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __webpack_require__(8);
class LabelButton extends Button_1.Button {
    constructor(params) {
        super(params);
        let label = new g.Label({
            scene: this.scene,
            text: params.text,
            font: new g.DynamicFont({
                game: this.scene.game,
                fontFamily: g.FontFamily.SansSerif,
                size: 18
            }),
            fontSize: 18,
            textColor: params.config.font.color
        });
        label.aligning(this.width, g.TextAlign.Center);
        label.invalidate();
        this.append(label);
    }
}
exports.LabelButton = LabelButton;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ScriptManager {
    constructor() {
        this.scripts = new Map();
    }
    register(name, f) {
        this.scripts.set(name, f);
    }
    call(scene, script) {
        let f = this.scripts.get(script.tag);
        if (f) {
            f(scene, script.data);
        }
        else {
            scene.game.logger.warn("script not found: " + script.tag);
        }
    }
}
exports.ScriptManager = ScriptManager;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Scene {
    constructor(params) {
        this.index = 0;
        this._label = params.label;
        this.frames = params.frames;
    }
    get label() {
        return this._label;
    }
    get frame() {
        if (this.index < this.frames.length) {
            return this.frames[this.index];
        }
        else {
            return undefined;
        }
    }
    get assetIds() {
        let ids = [];
        this.frames.forEach(f => {
            ids = ids.concat(f.assetIds);
        });
        return ids;
    }
    next() {
        if (this.index < this.frames.length) {
            this.index++;
            return this.frames[this.index];
        }
        else {
            return undefined;
        }
    }
    reset(index) {
        this.index = index ? index : 0;
    }
    createSaveData(variables) {
        return {
            label: this._label,
            frame: this.index,
            variables
        };
    }
}
exports.Scene = Scene;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Script_1 = __webpack_require__(1);
class Frame {
    constructor(scripts) {
        this._scripts = scripts;
    }
    get scripts() {
        return this._scripts;
    }
    get assetIds() {
        return Script_1.collectAssetIds(this._scripts);
    }
}
exports.Frame = Frame;


/***/ })
/******/ ]);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __webpack_require__(0);
const logo_1 = __webpack_require__(9);
const title_1 = __webpack_require__(10);
const scene0_1 = __webpack_require__(11);
const scene1_1 = __webpack_require__(12);
const scene2_1 = __webpack_require__(13);
module.exports = new index_1.Scenario([
    logo_1.logo,
    title_1.title,
    scene0_1.scene0,
    scene1_1.scene1,
    scene2_1.scene2
]);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const novel = __webpack_require__(0);
exports.logo = new novel.Scene({
    label: "logo",
    frames: [
        new novel.Frame([
            {
                tag: novel.Tag.visible,
                data: {
                    layer: novel.Layer.message,
                    visible: false
                }
            },
            {
                tag: novel.Tag.visible,
                data: {
                    layer: novel.Layer.system,
                    visible: false
                }
            },
            {
                tag: novel.Tag.image,
                data: {
                    assetId: "black",
                    layer: {
                        name: novel.Layer.background
                    }
                }
            },
            {
                tag: novel.Tag.image,
                data: {
                    assetId: "logo",
                    layer: {
                        name: "logo",
                        opacity: 0
                    },
                    x: 250,
                    y: 170
                }
            },
            {
                tag: "logo",
                data: {
                    layer: "logo",
                    duration: 1000,
                    wait: 3000
                }
            },
            {
                tag: novel.Tag.click,
                data: {}
            }
        ]),
        new novel.Frame([
            {
                tag: "jump",
                data: {
                    label: "title"
                }
            }
        ])
    ]
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const novel = __webpack_require__(0);
exports.title = new novel.Scene({
    label: "title",
    frames: [
        new novel.Frame([
            {
                tag: "visible",
                data: {
                    layer: novel.Layer.message,
                    visible: false
                }
            },
            {
                tag: "visible",
                data: {
                    layer: novel.Layer.system,
                    visible: false
                }
            },
            {
                tag: novel.Tag.choice,
                data: {
                    layer: novel.Layer.choice,
                    values: [
                        {
                            tag: novel.Tag.jump,
                            data: {
                                label: "0"
                            },
                            text: "はじめる"
                        }
                    ],
                    backgroundImage: "pane",
                    padding: 4,
                    backgroundEffector: {
                        borderWidth: 4
                    }
                }
            }
        ])
    ]
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const novel = __webpack_require__(0);
exports.scene0 = new novel.Scene({
    label: "0",
    frames: [
        new novel.Frame([
            {
                tag: novel.Tag.image,
                data: {
                    assetId: "black",
                    layer: {
                        name: novel.Layer.background
                    }
                }
            },
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        "Hello\nAkashic Novel!"
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.image,
                data: {
                    assetId: "black",
                    layer: {
                        name: novel.Layer.background
                    }
                }
            },
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        [
                            {
                                value: '{ "rb": "ル　　　　　", "rt": "テ　　" }'
                            },
                            {
                                value: '{ "rb": "ルビ　　　　", "rt": "テ　　" }'
                            },
                            {
                                value: '{ "rb": "ルビの　　　", "rt": "テス　" }'
                            },
                            {
                                value: '{ "rb": "ルビのテ　　", "rt": "テス　" }'
                            },
                            {
                                value: '{ "rb": "ルビのテス　", "rt": "テスト" }'
                            },
                            {
                                value: '{ "rb": "ルビのテスト", "rt": "テスト" }'
                            }
                        ]
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.evaluate,
                data: {
                    path: "eval"
                }
            },
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        "画像が指定なされていない場合は前フレームを引き継ぐ"
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.choice,
                data: {
                    layer: {
                        name: novel.Layer.choice
                    },
                    values: [
                        {
                            tag: novel.Tag.jump,
                            data: {
                                label: "1"
                            },
                            text: "シーン1へ"
                        },
                        {
                            tag: novel.Tag.jump,
                            data: {
                                label: "2"
                            },
                            text: "シーン2へ"
                        }
                    ],
                    backgroundImage: "pane",
                    padding: 4,
                    backgroundEffector: {
                        borderWidth: 4
                    }
                }
            },
            {
                tag: novel.Tag.trigger,
                data: 1 /* Off */
            }
        ])
    ]
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const novel = __webpack_require__(0);
exports.scene1 = new novel.Scene({
    label: "1",
    frames: [
        new novel.Frame([
            {
                tag: novel.Tag.image,
                data: {
                    assetId: "black",
                    layer: {
                        name: novel.Layer.background
                    }
                }
            },
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        "シーン1です"
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        "タイトル画面に戻ります"
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.jump,
                data: {
                    label: "title"
                }
            }
        ])
    ]
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const novel = __webpack_require__(0);
exports.scene2 = new novel.Scene({
    label: "2",
    frames: [
        new novel.Frame([
            {
                tag: novel.Tag.image,
                data: {
                    assetId: "black",
                    layer: {
                        name: novel.Layer.background
                    }
                }
            },
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        "シーン2です"
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.text,
                data: {
                    clear: true,
                    values: [
                        "タイトル画面に戻ります"
                    ]
                }
            }
        ]),
        new novel.Frame([
            {
                tag: novel.Tag.jump,
                data: {
                    label: "title"
                }
            }
        ])
    ]
});


/***/ })
/******/ ]);