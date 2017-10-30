module.exports=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=56)}({0:function(e,t,n){"use strict";function a(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),a(n(4)),a(n(1)),a(n(5)),a(n(6)),a(n(7)),a(n(3)),a(n(2))},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.choice="choice",e.image="image",e.pane="pane",e.jump="jump",e.text="text",e.layerConfig="layerConfig",e.playAudio="playAudio",e.changeVolume="changeVolume",e.stopAudio="stopAudio",e.playVideo="playVideo",e.stopVideo="stopVideo",e.click="click",e.skip="skip",e.button="button",e.trigger="trigger",e.save="save",e.load="load",e.evaluate="eval",e.link="link",e.openSaveWindow="openSaveWindow",e.openLoadWindow="openLoadWindow",e.condition="condition",e.backlog="backlog",e.removeLayer="removeLayer",e.clearCurrentVariables="clearCurrentVariables",e.clearSystemVariables="clearSystemVariables",e.fadeIn="fadeIn",e.fadeOut="fadeOut",e.timeout="timeout",e.ifElse="ifElse",e.exception="exception",e.waitTransition="waitTransition",e.slider="slider"}(t.Tag||(t.Tag={}));!function(e){e.system="system",e.background="background",e.choice="choice",e.message="message",e.backlog="backlog"}(t.Layer||(t.Layer={}));!function(e){e.selectedFont="selectedFont"}(t.BuiltinVariable||(t.BuiltinVariable={}));!function(e){e.system="system",e.current="current"}(t.VariableType||(t.VariableType={}))},2:function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t,n){var a=this.constructor,r=e.call(this,t)||this;return Object.setPrototypeOf(r,a.prototype),r.data=n,r}return a(t,e),t}(Error);t.GameError=r},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.collectAssetIds=function(e){for(var t=[],n=0,a=e;n<a.length;n++){var r=a[n];"object"==typeof r.data&&(r.data.assetId?t.push(r.data.assetId):r.data.backgroundImage&&t.push(r.data.backgroundImage))}return t}},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);t.defaultConfig={window:{message:{layer:{name:a.Layer.message,x:10,y:10},width:g.game.width-20,height:g.game.height-20,touchable:!0},system:[],load:[],save:[]},font:{list:[new g.DynamicFont({game:g.game,fontFamily:g.FontFamily.SansSerif,size:18})],color:"black"},system:{maxSaveCount:100},audio:{voice:.5,se:.5,bgm:.5}}},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=function(){function e(e){this.index=0,this.scenes=e,this.onLoaded=new g.Trigger,this.log=[]}return e.load=function(e){return g._require(e,"scenario")},Object.defineProperty(e.prototype,"backlog",{get:function(){return this.log},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scene",{get:function(){if(this.index<this.scenes.length)return this.scenes[this.index];throw new a.GameError("scene not found",{index:this.index})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this.scene.frame},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this.scenes.findIndex(function(t){return t.label===e.label});if(!(t>-1))throw new a.GameError("scene not found",e);this.index=t,this.scenes[this.index].reset(e.frame)},e.prototype.load=function(e){var t=e||this.frame;if(!t)throw new a.GameError("target frame not found");this.onLoaded.fire(t)},e.prototype.next=function(){this.load(this.scene.next())},e.prototype.findScene=function(e){return this.scenes.find(function(t){return t.label===e.label})},e.prototype.clear=function(){this.log=[],this.onLoaded.removeAll()},e.prototype.pushLog=function(e){this.log.push(e)},e}();t.Scenario=r},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var a=n(0),r=a.defaultConfig.system.maxSaveCount,i=[],o=[],s=0;s<r;s++)i.push({tag:a.Tag.link,data:{layer:{name:a.Layer.system},width:g.game.width-20,height:g.game.height/11,x:10,y:10+g.game.height/11*s,backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4},text:String(s),scripts:[{tag:a.Tag.save,data:{index:s}}]}}),o.push({tag:a.Tag.link,data:{layer:{name:a.Layer.system},width:g.game.width-20,height:g.game.height/11,x:10,y:10+g.game.height/11*s,backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4},text:String(s),scripts:[{tag:a.Tag.load,data:{index:s}}]}});var c={window:{message:{layer:{name:a.Layer.message,x:10,y:g.game.height-g.game.height/4-40},width:g.game.width-20,height:g.game.height/4,backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4},touchable:!0},system:[{tag:a.Tag.link,data:{layer:{name:a.Layer.system},width:100,height:24,x:310,y:450,text:"メニュー1",scripts:[{tag:"noop",data:{}}]}},{tag:a.Tag.link,data:{layer:{name:a.Layer.system},width:100,height:24,x:420,y:450,text:"メニュー2",scripts:[{tag:"noop",data:{}}]}},{tag:a.Tag.link,data:{layer:{name:a.Layer.system},width:100,height:24,x:530,y:450,text:"ログ",scripts:[{tag:a.Tag.backlog,data:{scripts:[{tag:a.Tag.pane,data:{layer:{name:a.Layer.backlog,opacity:100,x:10,y:10},width:g.game.width-20,height:g.game.height-20,backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4},touchable:!0}}]}}]}}],load:o,save:i},font:{list:[new g.DynamicFont({game:g.game,fontFamily:g.FontFamily.SansSerif,size:18})],color:"white"},system:a.defaultConfig.system,audio:a.defaultConfig.audio};e.exports=c},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.index=0,this._label=e.label,this.frames=e.frames}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this.index<this.frames.length?this.frames[this.index]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"assetIds",{get:function(){if(!this.cacheAssetIds){this.cacheAssetIds=[];for(var e=0,t=this.frames;e<t.length;e++){var n=t[e];this.cacheAssetIds=this.cacheAssetIds.concat(n.assetIds)}}return this.cacheAssetIds},enumerable:!0,configurable:!0}),e.prototype.next=function(){return this.index<this.frames.length?(this.index++,this.frames[this.index]):void 0},e.prototype.reset=function(e){this.index=e||0},e.prototype.createSaveData=function(e,t){var n={label:this._label,frame:this.index,variables:e};return t&&(n.description=t),n},e}();t.Scene=a},7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=function(){function e(e){this._scripts=e}return Object.defineProperty(e.prototype,"scripts",{get:function(){return this._scripts},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"assetIds",{get:function(){return this.cacheAssetIds||(this.cacheAssetIds=a.collectAssetIds(this._scripts)),this.cacheAssetIds},enumerable:!0,configurable:!0}),e}();t.Frame=r}});