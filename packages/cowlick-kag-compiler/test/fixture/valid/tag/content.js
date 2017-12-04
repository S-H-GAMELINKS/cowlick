var core = require("cowlick-core");

module.exports = new core.Scenario([
  new core.Scene({
    label: "content",
    frames: [
      new core.Frame([
        {
          tag: "foo",
          data: {
            bar: "test",
            buz: "test"
          }
        }
      ])
    ]
  })
]);
