"use strict";
import * as core from "cowlick-core";
import {Scene} from "./Scene";
import {SaveLoadScene} from "./SaveLoadScene";
import {ScriptManager} from "../scripts/ScriptManager";

export interface SceneControllerParameters {
  game: g.Game;
  scenario: core.Scenario;
  scriptManager: ScriptManager;
  config: core.Config;
  player: g.Player;
  storageKeys: g.StorageKey[];
}

export class SceneController {

  game: g.Game;
  private player: g.Player;
  private config: core.Config;
  private scenario: core.Scenario;
  private scriptManager: ScriptManager;

  private _current: Scene;
  private saveLoadScene: SaveLoadScene;

  constructor(params: SceneControllerParameters) {
    this.game = params.game;
    this.scenario = params.scenario;
    this.scriptManager = params.scriptManager;
    this.config = params.config;
    this.player = params.player;
    this._current = new Scene({
      game: this.game,
      scenario: this.scenario,
      scriptManager: this.scriptManager,
      config: this.config,
      controller: this,
      player: this.player,
      storageKeys: params.storageKeys
    });
    this._current.loaded.addOnce(() => {
      this.saveLoadScene = new SaveLoadScene({
        game: this.game,
        scene: this.scenario.scene,
        config: this.config,
        scriptManager: this.scriptManager,
        assetIds: this.collectAssetIds(),
        gameState: this.current.gameState
      });
      this.saveLoadScene.prefetch();
    }, this);
  }

  get current(): Scene {
    return this._current;
  }

  get backlog(): core.Log[] {
    return this.scenario.backlog;
  }

  pushScene() {
    this.game.pushScene(this._current);
  }

  jump(target: core.Jump) {
    const previous = this.scenario.scene.label;
    this.scenario.update(target);
    if(previous === this.scenario.scene.label) {
      this.scenario.load();
    } else {
      this.loadScene();
    }
  }

  openSaveScene() {
    this.game.pushScene(this.saveLoadScene);
  }

  openLoadScene() {
    this.game.pushScene(this.saveLoadScene);
  }

  private loadScene() {
    this.scenario.clear();
    const previous = this.saveLoadScene;
    this._current = new Scene({
      game: this.game,
      scenario: this.scenario,
      scriptManager: this.scriptManager,
      config: this.config,
      controller: this,
      player: this.player,
      state: this._current.gameState
    });
    this._current.loaded.addOnce(() => {
      this.saveLoadScene = new SaveLoadScene({
        game: this.game,
        scene: this.scenario.scene,
        config: this.config,
        scriptManager: this.scriptManager,
        assetIds: this.collectAssetIds(),
        gameState: this.current.gameState
      });
      this.saveLoadScene.prefetch();
    }, this);
    previous.destroy();
    this.game.replaceScene(this._current);
  }

  private collectAssetIds(): string[] {
    return this._current.gameState.collectAssetIds(this.scenario)
      .concat(this.scenario.scene.assetIds);
  }
}