window.gLocalAssetContainer["load"] = function(g) { !function(e,i,t,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("@akashic-extension/akashic-timeline"),a=i("cowlick-core"),c=i("cowlick-engine");t.exports=function(e){e.script("logo",function(e,i){var t=e.current;t.transition(i.layer,function(e){var r=new o.Timeline(t);r.create(e,{modified:e.modified,destroyed:e.destroyed}).fadeIn(i.duration).wait(i.wait).fadeOut(i.duration).call(function(){return t.requestNextFrame()})})});var i=c.defaultScripts.get(a.Tag.choice);e.script(a.Tag.choice,function(e,t){t.backgroundImage="pane",t.padding=4,t.backgroundEffector={borderWidth:4},i(e,t)})}}(g.module.exports,g.module.require,g.module,g.filename,g.dirname);}