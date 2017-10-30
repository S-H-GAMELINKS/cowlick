module.exports=function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=50)}({0:function(e,t,a){"use strict";function r(e){for(var a in e)t.hasOwnProperty(a)||(t[a]=e[a])}Object.defineProperty(t,"__esModule",{value:!0}),r(a(4)),r(a(1)),r(a(5)),r(a(6)),r(a(7)),r(a(3)),r(a(2))},1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.choice="choice",e.image="image",e.pane="pane",e.jump="jump",e.text="text",e.layerConfig="layerConfig",e.playAudio="playAudio",e.changeVolume="changeVolume",e.stopAudio="stopAudio",e.playVideo="playVideo",e.stopVideo="stopVideo",e.click="click",e.skip="skip",e.button="button",e.trigger="trigger",e.save="save",e.load="load",e.evaluate="eval",e.link="link",e.openSaveWindow="openSaveWindow",e.openLoadWindow="openLoadWindow",e.condition="condition",e.backlog="backlog",e.removeLayer="removeLayer",e.clearCurrentVariables="clearCurrentVariables",e.clearSystemVariables="clearSystemVariables",e.fadeIn="fadeIn",e.fadeOut="fadeOut",e.timeout="timeout",e.ifElse="ifElse",e.exception="exception",e.waitTransition="waitTransition",e.slider="slider"}(t.Tag||(t.Tag={}));!function(e){e.system="system",e.background="background",e.choice="choice",e.message="message",e.backlog="backlog"}(t.Layer||(t.Layer={}));!function(e){e.selectedFont="selectedFont"}(t.BuiltinVariable||(t.BuiltinVariable={}));!function(e){e.system="system",e.current="current"}(t.VariableType||(t.VariableType={}))},2:function(e,t,a){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])};return function(t,a){function r(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t,a){var r=this.constructor,n=e.call(this,t)||this;return Object.setPrototypeOf(n,r.prototype),n.data=a,n}return r(t,e),t}(Error);t.GameError=n},3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.collectAssetIds=function(e){for(var t=[],a=0,r=e;a<r.length;a++){var n=r[a];"object"==typeof n.data&&(n.data.assetId?t.push(n.data.assetId):n.data.backgroundImage&&t.push(n.data.backgroundImage))}return t}},4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1);t.defaultConfig={window:{message:{layer:{name:r.Layer.message,x:10,y:10},width:g.game.width-20,height:g.game.height-20,touchable:!0},system:[],load:[],save:[]},font:{list:[new g.DynamicFont({game:g.game,fontFamily:g.FontFamily.SansSerif,size:18})],color:"black"},system:{maxSaveCount:100},audio:{voice:.5,se:.5,bgm:.5}}},5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),n=function(){function e(e){this.index=0,this.scenes=e,this.onLoaded=new g.Trigger,this.log=[]}return e.load=function(e){return g._require(e,"scenario")},Object.defineProperty(e.prototype,"backlog",{get:function(){return this.log},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scene",{get:function(){if(this.index<this.scenes.length)return this.scenes[this.index];throw new r.GameError("scene not found",{index:this.index})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this.scene.frame},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this.scenes.findIndex(function(t){return t.label===e.label});if(!(t>-1))throw new r.GameError("scene not found",e);this.index=t,this.scenes[this.index].reset(e.frame)},e.prototype.load=function(e){var t=e||this.frame;if(!t)throw new r.GameError("target frame not found");this.onLoaded.fire(t)},e.prototype.next=function(){this.load(this.scene.next())},e.prototype.findScene=function(e){return this.scenes.find(function(t){return t.label===e.label})},e.prototype.clear=function(){this.log=[],this.onLoaded.removeAll()},e.prototype.pushLog=function(e){this.log.push(e)},e}();t.Scenario=n},50:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=a(51),o=a(52),i=a(53),s=a(54),c=a(55);e.exports=new r.Scenario([n.logo,o.title,i.scene0,s.scene1,c.scene2])},51:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.logo=new r.Scene({label:"logo",frames:[new r.Frame([{tag:r.Tag.layerConfig,data:{name:r.Layer.message,visible:!1}},{tag:r.Tag.layerConfig,data:{name:r.Layer.system,visible:!1}},{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.image,data:{assetId:"cowlick",layer:{name:"logo",opacity:0,x:256,y:176}}},{tag:"logo",data:{layer:"logo",duration:1e3,wait:3e3}},{tag:r.Tag.click,data:[{tag:r.Tag.skip,data:{}}]}]),new r.Frame([{tag:"jump",data:{label:"title"}}])]})},52:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.title=new r.Scene({label:"title",frames:[new r.Frame([{tag:r.Tag.layerConfig,data:{name:r.Layer.message,visible:!1}},{tag:r.Tag.layerConfig,data:{name:r.Layer.system,visible:!1}},{tag:r.Tag.choice,data:{layer:r.Layer.choice,values:[{tag:r.Tag.jump,data:{label:"0"},text:"はじめる"}],backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4}}}])]})},53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.scene0=new r.Scene({label:"0",frames:[new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:["Hello\nAkashic Novel!"]}}]),new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:[[{value:'{ "rb": "ル　　　　　", "rt": "テ　　" }'},{value:'{ "rb": "ルビ　　　　", "rt": "テ　　" }'},{value:'{ "rb": "ルビの　　　", "rt": "テス　" }'},{value:'{ "rb": "ルビのテ　　", "rt": "テス　" }'},{value:'{ "rb": "ルビのテス　", "rt": "テスト" }'},{value:'{ "rb": "ルビのテスト", "rt": "テスト" }'}]]}}]),new r.Frame([{tag:r.Tag.evaluate,data:{path:"eval"}},{tag:r.Tag.text,data:{clear:!0,values:["画像が指定なされていない場合は前フレームを引き継ぐ"]}}]),new r.Frame([{tag:r.Tag.text,data:{clear:!0,values:["変数表示のサンプル: ",{type:"current",name:"sample"}]}}]),new r.Frame([{tag:r.Tag.choice,data:{layer:{name:r.Layer.choice},values:[{tag:r.Tag.jump,data:{label:"1"},text:"シーン1へ"},{tag:r.Tag.jump,data:{label:"2"},text:"シーン2へ"}],backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4}}},{tag:r.Tag.trigger,data:1}])]})},54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.scene1=new r.Scene({label:"1",frames:[new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:["シーン1です"]}}]),new r.Frame([{tag:r.Tag.text,data:{clear:!0,values:["タイトル画面に戻ります"]}}]),new r.Frame([{tag:r.Tag.jump,data:{label:"title"}}])]})},55:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0);t.scene2=new r.Scene({label:"2",frames:[new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:["シーン2です"]}}]),new r.Frame([{tag:r.Tag.text,data:{clear:!0,values:["タイトル画面に戻ります"]}}]),new r.Frame([{tag:r.Tag.jump,data:{label:"title"}}])]})},6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.index=0,this._label=e.label,this.frames=e.frames}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this.index<this.frames.length?this.frames[this.index]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"assetIds",{get:function(){if(!this.cacheAssetIds){this.cacheAssetIds=[];for(var e=0,t=this.frames;e<t.length;e++){var a=t[e];this.cacheAssetIds=this.cacheAssetIds.concat(a.assetIds)}}return this.cacheAssetIds},enumerable:!0,configurable:!0}),e.prototype.next=function(){return this.index<this.frames.length?(this.index++,this.frames[this.index]):void 0},e.prototype.reset=function(e){this.index=e||0},e.prototype.createSaveData=function(e,t){var a={label:this._label,frame:this.index,variables:e};return t&&(a.description=t),a},e}();t.Scene=r},7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),n=function(){function e(e){this._scripts=e}return Object.defineProperty(e.prototype,"scripts",{get:function(){return this._scripts},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"assetIds",{get:function(){return this.cacheAssetIds||(this.cacheAssetIds=r.collectAssetIds(this._scripts)),this.cacheAssetIds},enumerable:!0,configurable:!0}),e}();t.Frame=n}});