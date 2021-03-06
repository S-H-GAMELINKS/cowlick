"use strict";
import {BuiltinVariable} from "@cowlick/core";
import {GameScene} from "./GameScene";

export class AutoMode {
  private scene: GameScene;
  private autoIdentifier: g.TimerIdentifier;

  constructor(scene: GameScene) {
    this.scene = scene;
  }

  setTrigger() {
    if (this.autoIdentifier) {
      return;
    }
    this.autoIdentifier = this.scene.setTimeout(
      () => {
        this.scene.requestNextFrame();
        this.autoIdentifier = null;
      },
      this.scene.gameState.variables.builtin[BuiltinVariable.autoMessageDuration],
      this
    );
  }

  clear() {
    if (this.autoIdentifier) {
      this.scene.clearTimeout(this.autoIdentifier);
      this.autoIdentifier = null;
    }
  }
}
