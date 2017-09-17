"use strict";
import * as novel from "../../lib/index";

export const logo = new novel.Scene({
  label: "logo",
  frames: [
    new novel.Frame([
      {
        tag: "visible",
        data: {
          layer: novel.Layer.system,
          visible: false
        }
      },
      {
        tag: novel.Tag.image,
        data: {
          assetId: "black",
          layer: novel.Layer.background
        }
      },
      {
        tag: novel.Tag.image,
        data: {
          assetId: "logo",
          layer: "logo",
          x: 250,
          y: 170
        }
      },
      {
        tag: "logo",
        data: {
          layer: "logo",
          duration: 3000,
          wait: 5000
        }
      }/*,
      {
        tag: "jump",
        data: {
          label: "title"
        }
      }*/
    ])
  ]
});