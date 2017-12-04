module.exports=function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=55)}({0:function(e,t,a){"use strict";function n(e){for(var a in e)t.hasOwnProperty(a)||(t[a]=e[a])}Object.defineProperty(t,"__esModule",{value:!0}),n(a(3)),n(a(4)),n(a(5)),n(a(6)),n(a(2)),n(a(1))},1:function(e,t,a){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t,a){var n=this.constructor,r=e.call(this,t)||this;return Object.setPrototypeOf(r,n.prototype),r.data=a,r}return n(t,e),t}(Error);t.GameError=r},2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.collectAssetIds=function(e){for(var t=[],a=0,n=e;a<n.length;a++){var r=n[a];"object"==typeof r.data&&(r.data.assetId?t.push(r.data.assetId):r.data.backgroundImage&&t.push(r.data.backgroundImage))}return t}},3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.choice="choice",e.image="image",e.pane="pane",e.jump="jump",e.text="text",e.layerConfig="layerConfig",e.playAudio="playAudio",e.changeVolume="changeVolume",e.stopAudio="stopAudio",e.playVideo="playVideo",e.stopVideo="stopVideo",e.click="click",e.skip="skip",e.button="button",e.trigger="trigger",e.save="save",e.load="load",e.evaluate="eval",e.link="link",e.openSaveScene="openSaveScene",e.openLoadScene="openLoadScene",e.condition="condition",e.backlog="backlog",e.removeLayer="removeLayer",e.clearCurrentVariables="clearCurrentVariables",e.clearSystemVariables="clearSystemVariables",e.fadeIn="fadeIn",e.fadeOut="fadeOut",e.timeout="timeout",e.ifElse="ifElse",e.exception="exception",e.slider="slider",e.autoMode="autoMode"}(t.Tag||(t.Tag={}));!function(e){e.system="system",e.background="background",e.choice="choice",e.message="message",e.backlog="backlog"}(t.Layer||(t.Layer={}));!function(e){e.selectedFont="selectedFont",e.autoMode="autoMode",e.autoMilliSeconds="autoMilliSeconds"}(t.BuiltinVariable||(t.BuiltinVariable={}));!function(e){e.builtin="builtin",e.system="system",e.current="current"}(t.VariableType||(t.VariableType={}))},4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=function(){function e(e){this.index=0,this.scenes=e,this.onLoaded=new g.Trigger,this.log=[]}return e.load=function(e){return g._require(e,"scenario")},Object.defineProperty(e.prototype,"backlog",{get:function(){return this.log},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scene",{get:function(){if(this.index<this.scenes.length)return this.scenes[this.index];throw new n.GameError("scene not found",{index:this.index})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this.scene.frame},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this.scenes.findIndex(function(t){return t.label===e.label});if(!(t>-1))throw new n.GameError("scene not found",e);this.index=t,this.scenes[this.index].reset(e.frame)},e.prototype.load=function(e){var t=e||this.frame;if(!t)throw new n.GameError("target frame not found");this.onLoaded.fire(t)},e.prototype.next=function(){this.load(this.scene.next())},e.prototype.findScene=function(e){return this.scenes.find(function(t){return t.label===e.label})},e.prototype.clear=function(){this.log=[],this.onLoaded.removeAll()},e.prototype.pushLog=function(e){this.log.push(e)},e}();t.Scenario=r},5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.index=0,this._label=e.label,this.frames=e.frames}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this.index<this.frames.length?this.frames[this.index]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"assetIds",{get:function(){if(!this.cacheAssetIds){this.cacheAssetIds=[];for(var e=0,t=this.frames;e<t.length;e++){var a=t[e];this.cacheAssetIds=this.cacheAssetIds.concat(a.assetIds)}}return this.cacheAssetIds},enumerable:!0,configurable:!0}),e.prototype.next=function(){return this.index<this.frames.length?(this.index++,this.frames[this.index]):void 0},e.prototype.reset=function(e){this.index=e||0},e.prototype.createSaveData=function(e,t){var a={label:this._label,frame:this.index,variables:e};return t&&(a.description=t),a},e}();t.Scene=n},55:function(e,t,a){var n=a(0);e.exports=new n.Scenario([new n.Scene({label:"first",frames:[new n.Frame([{tag:"layerConfig",data:{name:"message",visible:!1}},{tag:"layerConfig",data:{name:"system",visible:!1}},{tag:"image",data:{assetId:"black",layer:{name:"background"}}},{tag:"image",data:{assetId:"cowlick",layer:{name:"logo",x:"256",y:"176",opacity:"0"}}},{tag:"logo",data:{layer:"logo",duration:1e3,wait:3e3}},{tag:"click",data:[{tag:"skip",data:{}}]}]),new n.Frame([{tag:"jump",data:{label:"title"}}])]}),new n.Scene({label:"title",frames:[new n.Frame([{tag:"layerConfig",data:{name:"message",visible:!1}},{tag:"layerConfig",data:{name:"system",visible:!1}},{tag:"choice",data:{layer:{name:"choice"},values:[{tag:"jump",data:{label:"scene0"},text:"はじめる"}]}}])]}),new n.Scene({label:"scene0",frames:[new n.Frame([{tag:"image",data:{assetId:"black",layer:{name:"background"}}},{tag:"text",data:{clear:!0,values:["Hello\nAkashic Novel!"]}}]),new n.Frame([{tag:"text",data:{clear:!0,values:["ル",[{value:'{"rb":"ビ","rt":"テ"}'}],"の",[{value:'{"rb":"テ","rt":"ス"}'}],[{value:'{"rb":"ス","rt":"ト"}'}],"ト"]}}]),new n.Frame([{tag:"eval",data:{path:"scene0_2_0"}},{tag:"text",data:{clear:!0,values:["画像が指定なされていない場合は前フレームを引き継ぐ"]}}]),new n.Frame([{tag:"text",data:{clear:!0,values:["変数表示のサンプル: ",{type:"current",name:"sample"}]}}]),new n.Frame([{tag:"choice",data:{layer:{name:"choice"},values:[{tag:"jump",data:{label:"scene1"},text:"シーン1へ"},{tag:"jump",data:{label:"scene2"},text:"シーン2へ"}]}},{tag:"trigger",data:1}])]}),new n.Scene({label:"scene2",frames:[new n.Frame([{tag:"image",data:{assetId:"black",layer:{name:"background"}}},{tag:"text",data:{clear:!0,values:["シーン2です"]}}]),new n.Frame([{tag:"text",data:{clear:!0,values:["タイトル画面に戻ります"]}}]),new n.Frame([{tag:"jump",data:{label:"title"}}])]}),new n.Scene({label:"scene1",frames:[new n.Frame([{tag:"image",data:{assetId:"black",layer:{name:"background"}}},{tag:"text",data:{clear:!0,values:["シーン1です"]}}]),new n.Frame([{tag:"text",data:{clear:!0,values:["タイトル画面に戻ります"]}}]),new n.Frame([{tag:"jump",data:{label:"title"}}])]})])},6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=function(){function e(e,t){this._scripts=e,this.alreadyRead=!!t}return Object.defineProperty(e.prototype,"scripts",{get:function(){return this._scripts},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"assetIds",{get:function(){return this.cacheAssetIds||(this.cacheAssetIds=n.collectAssetIds(this._scripts)),this.cacheAssetIds},enumerable:!0,configurable:!0}),e}();t.Frame=r}});