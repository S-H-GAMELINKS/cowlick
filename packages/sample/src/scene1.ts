"use strict";
import * as novel from "cowlick-core";

export const scene1 = new novel.Scene({
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