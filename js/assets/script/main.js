window.gLocalAssetContainer["main"] = function(g) { !function(e,n,o,s,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n("cowlick-engine");o.exports=function(e){if(e.snapshot)n("snapshotLoader")(e.snapshot);else{n("load")(t.engine);var o=t.engine.load("first");g.game.snapshotRequest.add(function(){g.game.shouldSaveSnapshot()&&g.game.saveSnapshot(o.snapshot())})}}}(g.module.exports,g.module.require,g.module,g.filename,g.dirname);}