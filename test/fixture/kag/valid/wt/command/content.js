import {Scenario, Scene, Frame} from "cowlick";

module.exports = new Scenario([
  new Scene({
    label: "content",
    frames: [
      new Frame([
        {
          tag: "waitTransition",
          data: {
            scripts: [
              {
                tag: "fadeIn",
                data: {
                  layer: "test",
                  duration: 10
                }
              }
            ],
            skippable: true
          }
        }
      ]),
      new Frame([
        {
          tag: "text",
          data: {
            values: [
              "テスト"
            ]
          }
        }
      ])
    ]
  })
]);