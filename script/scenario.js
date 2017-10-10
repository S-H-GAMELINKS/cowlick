module.exports=function(e){function t(r){if(i[r])return i[r].exports;var a=i[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=34)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e.choice="choice",e.image="image",e.pane="pane",e.jump="jump",e.text="text",e.layerConfig="layerConfig",e.playAudio="playAudio",e.changeVolume="changeVolume",e.stopAudio="stopAudio",e.playVideo="playVideo",e.stopVideo="stopVideo",e.click="click",e.button="button",e.trigger="trigger",e.save="save",e.load="load",e.evaluate="eval",e.link="link",e.openSaveWindow="openSaveWindow",e.openLoadWindow="openLoadWindow",e.condition="condition",e.backlog="backlog",e.removeLayer="removeLayer"}(t.Tag||(t.Tag={}));!function(e){e.system="system",e.background="background",e.choice="choice",e.message="message",e.backlog="backlog"}(t.Layer||(t.Layer={})),t.gameId="$gameId";!function(e){e.system="system",e.saveDataPrefix="data"}(t.Region||(t.Region={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.collectAssetIds=function(e){let t=[];for(const i of e)"object"==typeof i.data&&(i.data.assetId?t.push(i.data.assetId):i.data.backgroundImage&&t.push(i.data.backgroundImage));return t}},function(e,t,i){"use strict";function r(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}Object.defineProperty(t,"__esModule",{value:!0});const a=i(3);r(i(11));var n=i(0);t.Tag=n.Tag,t.Layer=n.Layer,r(i(4)),r(i(25)),r(i(26)),r(i(1)),r(i(10)),t.engine=new a.Engine(g.game)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(4),a=i(14),n=i(11),s=i(21),o=i(22),u=i(9);class h{constructor(e){this.game=e;const t=g._require(e,"config");t&&(h._config=t)}set config(e){h._config=e}static get scriptManager(){return h._scriptManager}static get config(){return h._config}start(e){const t=e||r.Scenario.load(this.game),i=u.createStorageKeys(h.player,h._config.system.maxSaveCount),n=new a.Scene({game:this.game,scenario:t,scriptManager:h.scriptManager,config:h.config,player:h.player,storageKeys:i});this.game.pushScene(n)}script(e,t){h.scriptManager.register(e,t)}}h._scriptManager=new s.ScriptManager(o.defaultSctipts),h._config=n.defaultConfig,h.player={id:"0"},t.Engine=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.index=0,this.scenes=e}static load(e){return g._require(e,"scenario")}get scene(){return this.index<this.scenes.length?this.scenes[this.index]:void 0}get frame(){return this.index<this.scenes.length?this.scenes[this.index].frame:void 0}nextFrame(){return this.index<this.scenes.length?this.scenes[this.index].next():void 0}update(e){const t=this.scenes.findIndex(t=>t.label===e.label);return t>-1&&(this.index=t,this.scenes[this.index].reset(e.frame),!0)}}t.Scenario=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(17);class a extends r.Label{constructor(e){super({scene:e.scene,font:new g.DynamicFont({game:e.scene.game,fontFamily:g.FontFamily.SansSerif,size:18}),text:"",fontSize:18,textColor:e.config.font.color,width:e.width,x:e.x,y:e.y}),this.index=0,this.counter=0,this.original={values:[]},this.current=[],this.gameState=e.gameState,this.textAlign=g.TextAlign.Left,this.update.add(this.onUpdated,this)}get finished(){return this.index>=this.original.values.length}updateText(e){e.clear?(this.text="",this.original=e,this.index=0,this.counter=0,this.setCurrent()):this.original={values:this.original.values.concat(e.values)}}showAll(){if(!this.finished){this.update.remove(this.onUpdated,this),this.text="";for(const e of this.original.values)if("string"==typeof e)this.text+=e;else if(Array.isArray(e))this.text+=e[e.length-1].value;else{const t=this.gameState.getStringValue(e);t?this.text+=t:this.scene.game.logger.warn("変数の取得に失敗しました",e)}this.index=this.original.values.length,this.invalidate(),this.update.add(this.onUpdated,this)}}onUpdated(){if(!this.finished&&this.counter>=this.current.length&&(this.counter=0,this.index++,this.finished||this.setCurrent()),!this.finished){const e=this.current[this.counter];"string"==typeof e?this.text+=e:(0!==this.counter&&(this.text=this.text.substring(0,this.text.length-e.value.length)),this.text+=e.value),this.invalidate(),this.counter++}}setCurrent(){const e=this.original.values[this.index];if("string"==typeof e)this.current=e.split(/.*?/);else if(Array.isArray(e))this.current=e;else{const t=this.gameState.getStringValue(e);t?this.current=t.split(/.*?/):this.scene.game.logger.warn("変数の取得に失敗しました",e)}}}t.Message=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.Center=0]="Center",e[e.SpaceAround=1]="SpaceAround"}(t.RubyAlign||(t.RubyAlign={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t,i){this.text=e,this.width=t,this.glyphs=i}}();t.StringDrawInfo=r;var a=function(){return function(e,t,i,r,a,n){this.text=e.text,this.fragment=e,this.width=t,this.rbWidth=i,this.rtWidth=r,this.glyphs=a,this.rubyGlyphs=n}}();t.RubyFragmentDrawInfo=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parse=function(e){for(var t=/^((?:[^\\{]|\\+.)*?)({(?:[^\\}]|\\+.)*?})([\s\S]*)/,i=[];e.length>0;){var r=e.match(t);if(null===r){i.push(e.replace(/\\{/g,"{").replace(/\\}/g,"}"));break}var a=r[1],n=r[2];e=r[3],a.length>0&&i.push(a.replace(/\\{/g,"{").replace(/\\}/g,"}"));var s=JSON.parse(n.replace(/\\/g,"\\\\"));if(!s.hasOwnProperty("rt")||!s.hasOwnProperty("rb"))throw g.ExceptionFactory.createTypeMismatchError("parse","RubyFragment");s.rt=s.rt.replace(/\\{/g,"{").replace(/\\}/g,"}"),s.rb=s.rb.replace(/\\{/g,"{").replace(/\\}/g,"}"),s.text=n,i.push(s)}return i}},function(e,t,i){"use strict";function r(e,t,i){const r={system:{},current:{}},a=[];for(const i of t)for(const t of e.storageValues.get(i)){const e="number"==typeof t.data?t.data:JSON.parse(t.data);if(i.regionKey===n.Region.system)r.system=e;else{let r=a.find(e=>e.key===t.storageKey);const n=i.regionKey.split(".");if(!r){const e=parseInt(n[0].substring(s),10);r={key:t.storageKey,value:{label:"",frame:0,variables:{}}},a[e]=r}switch(n[n.length-1]){case"frame":r.value.frame=e;break;case"label":r.value.label=e;break;default:r.value.variables=e}}}return{data:a.map(e=>e.value),variables:r}}Object.defineProperty(t,"__esModule",{value:!0});const a=i(10),n=i(0),s=n.Region.saveDataPrefix.length;t.loadGameState=function(e,t,i){const n=r(e,t,i);return new a.GameState(n.data,n.variables,i)},t.createStorageKeys=function(e,t){const i=[{region:g.StorageRegion.Values,regionKey:n.Region.system,userId:e.id,gameId:n.gameId}];for(let r=0;r<t-1;r++)i.push({region:g.StorageRegion.Values,regionKey:n.Region.saveDataPrefix+r,userId:e.id,gameId:n.gameId});return i}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e,t,i){this.data=e,this._variables=t,this.max=i}get variables(){return this._variables}exists(e){return void 0===this.data[e]}save(e,t){if(t.index>this.max||t.index<0)return"storage out of range: "+t.index;const i=e.createSaveData(this._variables.current);return t.force?(this.data[t.index]=i,i):this.exists(t.index)?"save data already exists: "+t.index:(this.data[t.index]=i,i)}load(e){const t=this.data[e];return t&&(this._variables.current=t.variables),t}getStringValue(e){const t=("system"===e.type?this._variables.system:this._variables.current)[e.name];return t?String(t):void 0}}t.GameState=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(0);t.defaultConfig={window:{message:{layer:{name:r.Layer.message,x:10,y:10},width:g.game.width-20,height:g.game.height-20,touchable:!0},system:[],load:[],save:[]},font:{color:"black"},system:{maxSaveCount:100},audio:{voice:.5,se:.5,bgm:.5}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends g.Pane{constructor(e){super({scene:e.scene,width:e.width,height:e.height,backgroundImage:e.backgroundImage?e.scene.assets[e.backgroundImage]:void 0,padding:e.padding,backgroundEffector:e.backgroundEffector?new g.NinePatchSurfaceEffector(e.scene.game,e.backgroundEffector.borderWidth):void 0}),this.touchable=!0,this.pointDown.add(this.onPointDown,this),this.pointMove.add(this.onPointMove,this),this.pointUp.add(this.onPointUp,this),this.click=new g.Trigger,this.pushed=!1}move(e,t){this.x=e,this.y=t,this.modified()}onPointDown(e){this.pushed||this.push()}push(){this.y+=2,this.height-=2,this.pushed=!0,this.modified()}unpush(){this.y-=2,this.height+=2,this.pushed=!1,this.modified()}isHover(e){let t={x:e.point.x+e.startDelta.x,y:e.point.y+e.startDelta.y};return!(t.x<0||t.y<0)&&!(t.x>=this.width||t.y>=this.height)}onPointMove(e){let t=this.isHover(e);this.pushed&&!t?this.unpush():!this.pushed&&t&&this.push()}onPointUp(e){this.pushed&&(this.click.fire(this),this.unpush())}}t.Button=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createImage=function(e,t){const i=e.assets[t.assetId];let r;if(t.frame){let a=new g.FrameSprite({scene:e,src:i,width:t.frame.width,height:t.frame.height});a.frames=t.frame.frames,a.interval=1e3,a.start(),r=a}else r=new g.Sprite({scene:e,src:i});return void 0!==t.layer.x&&(r.x=t.layer.x),void 0!==t.layer.y&&(r.y=t.layer.y),r.invalidate(),r}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(15),a=i(16),n=i(1),s=i(5),o=i(19),u=i(20),h=i(9),c=i(0);class l extends g.Scene{constructor(e){super({game:e.game,assetIds:l.collectAssetIds(e),storageKeys:e.state?void 0:e.storageKeys}),this._onWindowClick=this.onWindowClick.bind(this),this._requestNextFrame=this.requestNextFrame.bind(this),this._loadFrame=this.loadFrame.bind(this),this.layerGroup=new o.LayerGroup(this),this.scriptManager=e.scriptManager,this.config=e.config,this.audioGroup=new u.AudioGroup(this.game,e.config.audio),this.videos=[],this.player=e.player,this.storageKeys=e.storageKeys,e.state&&(this._gameState=e.state),this.loaded.add(this.onLoaded,this),this.scenario=new r.ScenarioViewModel(e.scenario),this.scenario.loadFrame(this._loadFrame)}get source(){return this.scenario.source}get gameState(){return this._gameState}get backlog(){return this.scenario.backlog}jump(e){const t=this.source.scene.label;this.source.update(e)?t===this.source.scene.label?this.scenario.load()||this.game.logger.warn("scene not found",e):this.game.pushScene(new l({game:this.game,scenario:this.source,scriptManager:this.scriptManager,config:this.config,player:this.player,state:this._gameState})):this.game.logger.warn("scene not found",e)}appendLayer(e,t){this.layerGroup.append(e,t)}removeLayer(e){this.layerGroup.remove(e)}updateText(e){this._message.updateText(e),this.disableTrigger(this._requestNextFrame),this.enableWindowClick()}applyLayerConfig(e){this.layerGroup.applyConfig(e)}addSkipTrigger(){this.pointUpCapture.addOnce(this._requestNextFrame,this)}disableWindowClick(){this._message.finished?this.disableTrigger(this._requestNextFrame):this.disableTrigger(this._onWindowClick)}enableWindowClick(){this.layerGroup.evaluate(c.Layer.message,e=>{if(e.touchable=!0,this._message.finished){e.pointUp.add(this._requestNextFrame,e);for(const t of e.children)t.pointUp.add(this._requestNextFrame,t)}else{e.pointUp.addOnce(this._onWindowClick,e);for(const t of e.children)t.pointUp.addOnce(this._onWindowClick,t)}})}transition(e,t){this.layerGroup.evaluate(e,t)}requestNextFrame(){this.scenario.next()||this.game.logger.warn("next frame not found: "+this.scenario.source.scene.label)}playAudio(e){const t=this.assets[e.assetId].play();this.audioGroup.add(e.groupName,t)}changeVolume(e){this.audioGroup.changeVolume(e.groupName,e.volume)}stopAudio(e){this.audioGroup.remove(e)}playVideo(e){const t=this.assets[e.assetId];t.play(),this.videos.push(t)}stopVideo(e){const t=this.videos.findIndex(t=>t.id===e.assetId);if(t>0){const e=this.videos[t];e.stop(),e.destroy(),this.videos.splice(t,1)}else this.game.logger.warn("video not found: "+e.assetId)}save(e,t){return this.storage.save(e,t)}load(e){return this.storage.load(e)}onLoaded(){const e=this.scenario.source.frame;this._gameState||(this._gameState=h.loadGameState(this,this.storageKeys,this.config.system.maxSaveCount)),this.storage=new a.StorageViewModel(this.game.storage,this.player,this._gameState),e?(this.removeLayers(e.scripts),this.createWindowLayer(),this.createSystemLayer(),this.applyScripts(e.scripts)):(this.createWindowLayer(),this.createSystemLayer()),this.topMessageLayer(),this.layerGroup.top(c.Layer.system)}disableTrigger(e){this.layerGroup.evaluate(c.Layer.message,t=>{t.touchable=!1,t.pointUp.remove(e,t);for(const i of t.children)i.pointUp.remove(e,i)})}loadFrame(e){e&&(this.removeLayers(e.scripts),this.applyScripts(e.scripts)),this.topMessageLayer(),this.layerGroup.top(c.Layer.system)}topMessageLayer(){this.layerGroup.evaluate(c.Layer.message,e=>{e.touchable&&this.layerGroup.top(c.Layer.message)})}createWindowLayer(){this.scriptManager.call(this,{tag:c.Tag.pane,data:this.config.window.message}),this.layerGroup.evaluate(c.Layer.message,e=>{this._message=new s.Message({scene:this,config:this.config,width:this.game.width-40,x:this.config.window.message.layer.x+20,y:this.config.window.message.layer.y+20,gameState:this.gameState}),e.append(this._message)}),this.enableWindowClick()}createSystemLayer(){for(const e of this.config.window.system)this.scriptManager.call(this,e)}removeLayers(e){const t=new Set;e.forEach(e=>{e.data.layer&&t.add(e.data.layer)}),t.forEach(e=>{this.layerGroup.remove(e)})}applyScripts(e){e.forEach(e=>{this.scriptManager.call(this,e)})}static collectAssetIds(e){const t=e.scenario.scene.assetIds.concat(n.collectAssetIds(e.config.window.system));return e.config.window.message.backgroundImage&&t.push(e.config.window.message.backgroundImage),t}onWindowClick(){this._message.finished?this.requestNextFrame():(this._message.showAll(),this.enableWindowClick())}}t.Scene=l},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.scenario=e,this.frameTrigger=new g.Trigger,this.log=[]}get source(){return this.scenario}get backlog(){return this.log}loadFrame(e){this.frameTrigger.add(e)}load(e){const t=e||this.source.frame;return!!t&&(this.frameTrigger.fire(t),!0)}next(){const e=this.source.frame;return!!this.load(this.source.nextFrame())&&(this.log.push(e),!0)}}t.ScenarioViewModel=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(0);class a{constructor(e,t,i){this.storage=e,this.player=t,this.state=i}load(e){return this.state.load(e)}save(e,t){const i=this.state.save(e,t);if("string"==typeof i)return i;{const e=r.Region.saveDataPrefix+t.index+".";return this.write(i.variables,e+"variables"),this.write(i.label,e+"label"),void this.write(i.frame,e+"frame")}}saveSystemVariables(){this.write(this.state.variables.system,r.Region.system)}write(e,t){this.storage.write({region:g.StorageRegion.Values,regionKey:t,userId:this.player.id,gameId:r.gameId},{data:JSON.stringify(e)})}}t.StorageViewModel=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Label=i(18),t.FragmentDrawInfo=i(7),t.RubyParser=i(6),t.RubyAlign=t.RubyParser.RubyAlign;var r=i(8);t.defaultRubyParser=r.parse},function(e,t,i){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),a=i(6),n=i(7),s=i(8),o=function(e){function t(t){var i=this;if(!t.font&&!t.bitmapFont)throw g.ExceptionFactory.createAssertionError("Label#constructor: 'font' or 'bitmapFont' must be given to LabelParameterObject");return i=e.call(this,t)||this,i.text=t.text,i.bitmapFont=t.bitmapFont,i.font=t.font?t.font:t.bitmapFont,i.fontSize=t.fontSize,i._lineBreakWidth=t.width,i.lineBreak=!("lineBreak"in t)||t.lineBreak,i.lineGap=t.lineGap||0,i.textAlign="textAlign"in t?t.textAlign:g.TextAlign.Left,i.textColor=t.textColor,i.trimMarginTop="trimMarginTop"in t&&t.trimMarginTop,i.widthAutoAdjust="widthAutoAdjust"in t&&t.widthAutoAdjust,i.rubyEnabled=!("rubyEnabled"in t)||t.rubyEnabled,i.fixLineGap="fixLineGap"in t&&t.fixLineGap,i.rubyParser="rubyParser"in t?t.rubyParser:s.parse,t.rubyOptions||(t.rubyOptions={}),i.rubyOptions=t.rubyOptions,i.rubyOptions.rubyFontSize="rubyFontSize"in t.rubyOptions?t.rubyOptions.rubyFontSize:t.fontSize/2,i.rubyOptions.rubyBitmapFont="rubyBitmapFont"in t.rubyOptions?t.rubyOptions.rubyBitmapFont:i.bitmapFont,i.rubyOptions.rubyFont="rubyFont"in t.rubyOptions?t.rubyOptions.rubyFont:i.font,i.rubyOptions.rubyGap="rubyGap"in t.rubyOptions?t.rubyOptions.rubyGap:0,i.rubyOptions.rubyAlign="rubyAlign"in t.rubyOptions?t.rubyOptions.rubyAlign:a.RubyAlign.SpaceAround,i._lines=[],i._beforeText=void 0,i._beforeTextAlign=void 0,i._beforeFontSize=void 0,i._beforeLineBreak=void 0,i._beforeFont=void 0,i._beforeWidth=void 0,i._beforeRubyEnabled=void 0,i._beforeFixLineGap=void 0,i._beforeTrimMarginTop=void 0,i._beforeWidthAutoAdjust=void 0,i._beforeRubyOptions={},i._invalidateSelf(),i}return r(t,e),t.prototype.invalidate=function(){this._invalidateSelf(),e.prototype.invalidate.call(this)},t.prototype.renderCache=function(e){if(this.rubyEnabled||0!==this.fontSize){e.save();for(var t=0,i=0;i<this._lines.length;++i)this._lines[i].width>0&&this._lines[i].height>0&&e.drawImage(this._lines[i].surface,0,0,this._lines[i].width,this._lines[i].height,this._offsetX(this._lines[i].width),t),t+=this._lines[i].height+this.lineGap;this.textColor&&(e.setCompositeOperation(g.CompositeOperation.SourceAtop),e.fillRect(0,0,this._lineBreakWidth,this.height,this.textColor)),e.restore()}},t.prototype.destroy=function(){this._destroyLines(),e.prototype.destroy.call(this)},t.prototype._offsetX=function(e){switch(this.textAlign){case g.TextAlign.Left:return 0;case g.TextAlign.Right:return this._lineBreakWidth-e;case g.TextAlign.Center:return(this._lineBreakWidth-e)/2;default:return 0}},t.prototype._destroyLines=function(){for(var e=0;e<this._lines.length;e++)this._lines[e].surface&&!this._lines[e].surface.destroyed()&&this._lines[e].surface.destroy();this._lines=void 0},t.prototype._invalidateSelf=function(){if(this.fontSize<0)throw g.ExceptionFactory.createAssertionError("Label#_invalidateSelf: fontSize must not be negative.");if(this.lineGap<-1*this.fontSize)throw g.ExceptionFactory.createAssertionError("Label#_invalidateSelf: lineGap must be greater than -1 * fontSize.");void 0!==this.bitmapFont&&(this.font=this.bitmapFont),void 0!==this.rubyOptions.rubyBitmapFont&&(this.rubyOptions.rubyFont=this.rubyOptions.rubyBitmapFont),this._beforeWidth!==this.width&&(this._lineBreakWidth=this.width),(this._beforeText!==this.text||this._beforeFontSize!==this.fontSize||this._beforeFont!==this.font||this._beforeLineBreak!==this.lineBreak||this._beforeWidth!==this.width&&!0===this._beforeLineBreak||this._beforeTextAlign!==this.textAlign||this._beforeRubyEnabled!==this.rubyEnabled||this._beforeFixLineGap!==this.fixLineGap||this._beforeTrimMarginTop!==this.trimMarginTop||this._beforeWidthAutoAdjust!==this.widthAutoAdjust||this._isDifferentRubyOptions(this._beforeRubyOptions,this.rubyOptions))&&this._updateLines(),this.widthAutoAdjust&&(this.width=Math.ceil(this._lines.reduce(function(e,t){return Math.max(e,t.width)},0)));for(var e=this.lineGap*(this._lines.length-1),t=0;t<this._lines.length;t++)e+=this._lines[t].height;this.height=e,this._beforeText=this.text,this._beforeTextAlign=this.textAlign,this._beforeFontSize=this.fontSize,this._beforeLineBreak=this.lineBreak,this._beforeFont=this.font,this._beforeWidth=this.width,this._beforeRubyEnabled=this.rubyEnabled,this._beforeFixLineGap=this.fixLineGap,this._beforeTrimMarginTop=this.trimMarginTop,this._beforeWidthAutoAdjust=this.widthAutoAdjust,this._beforeRubyOptions.rubyFontSize=this.rubyOptions.rubyFontSize,this._beforeRubyOptions.rubyFont=this.rubyOptions.rubyFont,this._beforeRubyOptions.rubyGap=this.rubyOptions.rubyGap,this._beforeRubyOptions.rubyAlign=this.rubyOptions.rubyAlign},t.prototype._updateLines=function(){for(var e=this.rubyEnabled?this.rubyParser(this.text):[this.text],t=this._divideToLines(e),i=[],r=this._beforeFontSize===this.fontSize&&this._beforeFont===this.font&&!this._isDifferentRubyOptions(this._beforeRubyOptions,this.rubyOptions),a=0;a<t.length;a++){var n=t[a],s=this._lines[a];r&&void 0!==s&&n.sourceText===s.sourceText&&n.width===s.width&&n.height===s.height?i.push(s):(s&&s.surface&&!s.surface.destroyed()&&s.surface.destroy(),this._drawLineInfoSurface(n),i.push(n))}for(a=i.length;a<this._lines.length;a++)(s=this._lines[a]).surface&&!s.surface.destroyed()&&s.surface.destroy();this._lines=i},t.prototype._drawLineInfoSurface=function(e){var t=e.fragmentDrawInfoArray,i=this._calcRubyHeightInfo(t),r=this.scene.game.resourceFactory.createSurface(Math.ceil(e.width),Math.ceil(e.height)),a=r.renderer();a.begin(),a.save();for(var s=i.hasRubyFragmentDrawInfo||this.fixLineGap?this.rubyOptions.rubyGap+i.maxRubyGlyphHeightWithOffsetY:0,o=e.minMinusOffsetY,u=0;u<t.length;u++){var h=t[u];h instanceof n.RubyFragmentDrawInfo?this._drawRubyFragmentDrawInfo(a,h,s-o,-i.minRubyMinusOffsetY):h instanceof n.StringDrawInfo&&this._drawStringGlyphs(a,this.font,h.glyphs,this.fontSize,0,s-o,0),a.translate(h.width,0)}a.restore(),a.end(),e.surface=r},t.prototype._drawStringGlyphs=function(e,t,i,r,a,n,s){void 0===s&&(s=0),e.save(),e.translate(a,n);for(var o=0;o<i.length;o++){var u=i[o],h=r/t.size,c=u.advanceWidth*h;e.save(),e.transform([h,0,0,h,0,0]),u.width>0&&u.height>0&&e.drawImage(u.surface,u.x,u.y,u.width,u.height,u.offsetX,u.offsetY),e.restore(),e.translate(c+s,0)}e.restore()},t.prototype._drawRubyFragmentDrawInfo=function(e,t,i,r){var n,s,o,u,h=t.fragment,c="rubyFontSize"in h?h.rubyFontSize:this.rubyOptions.rubyFontSize,l="rubyAlign"in h?h.rubyAlign:this.rubyOptions.rubyAlign,d="rubyFont"in h?h.rubyFont:this.rubyOptions.rubyFont,f=t.rtWidth>t.rbWidth,p=t.width,y=t.rtWidth,b=t.rbWidth;switch(l){case a.RubyAlign.Center:o=0,u=0,n=f?0:(p-y)/2,s=f?(p-b)/2:0;break;case a.RubyAlign.SpaceAround:o=t.rubyGlyphs.length>0?(p-y)/t.rubyGlyphs.length:0,u=0,n=f?0:o/2,s=f?(p-b)/2:0;break;default:throw g.ExceptionFactory.createAssertionError("Label#_drawRubyFragmentDrawInfo: unknown rubyAlign.")}this._drawStringGlyphs(e,this.font,t.glyphs,this.fontSize,s,i,u),this._drawStringGlyphs(e,d,t.rubyGlyphs,c,n,r,o)},t.prototype._calcRubyHeightInfo=function(e){for(var t,i=this.rubyOptions.rubyFontSize,r=0,a=this.rubyOptions.rubyGap,s=!1,o=0,u=0;u<e.length;u++){var h=e[u];if(h instanceof n.RubyFragmentDrawInfo){var c=h.fragment;c.rubyFontSize>i&&(i=c.rubyFontSize),c.rubyGap>a&&(a=c.rubyGap);var g=(c.rubyFontSize?c.rubyFontSize:this.rubyOptions.rubyFontSize)/(c.rubyFont?c.rubyFont.size:this.rubyOptions.rubyFont.size),l=Math.max.apply(Math,h.rubyGlyphs.map(function(e){return e.offsetY>0?e.height+e.offsetY:e.height})),d=Math.min.apply(Math,h.rubyGlyphs.map(function(e){return e.offsetY>0?e.offsetY:0}));r<l*g&&(r=l*g);var f=c.rubyFont?c.rubyFont:this.rubyOptions.rubyFont,p=this._calcStandardOffsetY(f),y=(l-Math.min(d,p))*g;o<y&&(o=y,t=Math.min(d,p)*g),s=!0}}return 0===r&&(r=this.rubyOptions.rubyFontSize),{maxRubyFontSize:i,maxRubyGlyphHeightWithOffsetY:r,minRubyMinusOffsetY:this.trimMarginTop?t:0,maxRubyGap:a,hasRubyFragmentDrawInfo:s}},t.prototype._divideToLines=function(e){for(var t={resultLines:[],currentStringDrawInfo:new n.StringDrawInfo("",0,[]),currentLineInfo:{sourceText:"",fragmentDrawInfoArray:[],width:0,height:0,minMinusOffsetY:0,surface:void 0}},i=0;i<e.length;i++){var r=e[i];if("string"==typeof r){for(var a=r.replace(/\r\n|\n/g,"\r"),s=0;s<a.length;s++)if("\r"===a[s])this._tryPushCurrentStringDrawInfo(t),this._feedLine(t);else{var o=this.font.glyphForCharacter(a[s].charCodeAt(0)),u=this.fontSize/this.font.size,h=o.advanceWidth*u;if(h<=0)continue;this._needLineBreak(t,h)&&(this._tryPushCurrentStringDrawInfo(t),this._feedLine(t)),this._addToCurrentStringDrawInfo(t,h,o,a[s])}this._tryPushCurrentStringDrawInfo(t)}else{var c=this._createRubyFragmentDrawInfo(r);if(c.width<=0)continue;this._needLineBreak(t,c.width)&&this._feedLine(t),t.currentLineInfo.fragmentDrawInfoArray.push(c),t.currentLineInfo.width+=c.width,t.currentLineInfo.sourceText+=r.text}}return this._feedLine(t),t.resultLines},t.prototype._createStringGlyph=function(e,t){return Array.prototype.map.call(e,function(e,i,r){return t.glyphForCharacter(r.charCodeAt(i))})},t.prototype._createRubyFragmentDrawInfo=function(e){var t=this._createStringGlyph(e.rb,this.font),i=this._createStringGlyph(e.rt,this.rubyOptions.rubyFont),r="rubyFont"in e?e.rubyFont:this.rubyOptions.rubyFont,a="rubyFontSize"in e?e.rubyFontSize:this.rubyOptions.rubyFontSize,s=this.fontSize/this.font.size,o=a/r.size,u=t.length>0?t.map(function(e){return e.advanceWidth}).reduce(function(e,t){return e+t})*s:0,h=i.length>0?i.map(function(e){return e.advanceWidth}).reduce(function(e,t){return e+t})*o:0,c=u>h?u:h;return new n.RubyFragmentDrawInfo(e,c,u,h,t,i)},t.prototype._tryPushCurrentStringDrawInfo=function(e){e.currentStringDrawInfo.width>0&&(e.currentLineInfo.fragmentDrawInfoArray.push(e.currentStringDrawInfo),e.currentLineInfo.width+=e.currentStringDrawInfo.width,e.currentLineInfo.sourceText+=e.currentStringDrawInfo.text),e.currentStringDrawInfo=new n.StringDrawInfo("",0,[])},t.prototype._feedLine=function(e){var t=this.fontSize/this.font.size,i=1/0,r=0,a=0;e.currentLineInfo.fragmentDrawInfoArray.forEach(function(e){e.glyphs.forEach(function(e){r>e.offsetY&&(r=e.offsetY),i>e.offsetY&&(i=e.offsetY);var t=e.offsetY>0?e.height+e.offsetY:e.height;a<t&&(a=t)})}),r*=t,a=e.currentLineInfo.fragmentDrawInfoArray.length>0?a*t-r:this.fontSize,a=Math.ceil(a);var n=this._calcRubyHeightInfo(e.currentLineInfo.fragmentDrawInfoArray);if(e.currentLineInfo.height=n.hasRubyFragmentDrawInfo||this.fixLineGap?a+n.maxRubyGlyphHeightWithOffsetY+n.maxRubyGap:a,e.currentLineInfo.minMinusOffsetY=r,this.trimMarginTop){var s=Math.min(i,this._calcStandardOffsetY(this.font))*t;e.currentLineInfo.height-=s,e.currentLineInfo.minMinusOffsetY+=s}e.resultLines.push(e.currentLineInfo),e.currentLineInfo={sourceText:"",fragmentDrawInfoArray:[],width:0,height:0,minMinusOffsetY:0,surface:void 0}},t.prototype._addToCurrentStringDrawInfo=function(e,t,i,r){e.currentStringDrawInfo.width+=t,e.currentStringDrawInfo.glyphs.push(i),e.currentStringDrawInfo.text+=r},t.prototype._needLineBreak=function(e,t){return this.lineBreak&&t>0&&e.currentLineInfo.width+e.currentStringDrawInfo.width+t>this._lineBreakWidth&&e.currentLineInfo.width+e.currentStringDrawInfo.width>0},t.prototype._isDifferentRubyOptions=function(e,t){return e.rubyFontSize!==t.rubyFontSize||e.rubyFont!==t.rubyFont||e.rubyGap!==t.rubyGap||e.rubyAlign!==t.rubyAlign},t.prototype._calcStandardOffsetY=function(e){return e.glyphForCharacter("M".charCodeAt(0)).offsetY},t}(g.CacheableE);e.exports=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.scene=e,this.group=new Map}append(e,t){let i=this.group.get(t.name);i?i.append(e):((i=new g.Pane({scene:this.scene,width:this.scene.game.width,height:this.scene.game.height,x:0,y:0,opacity:t.opacity})).append(e),this.scene.append(i),this.group.set(t.name,i))}remove(e){const t=this.group.get(e);t&&this.group.delete(e)&&(this.scene.remove(t),t.destroy())}applyConfig(e){this.evaluate(e.name,t=>{void 0!==e.visible&&(e.visible?t.show():t.hide());let i=!1;void 0!==e.opacity&&(t.opacity=e.opacity,i=!0),void 0!==e.x&&(t.x=e.x,i=!0),void 0!==e.y&&(t.y=e.y,i=!0),i&&t.modified()})}top(e){this.evaluate(e,e=>this.scene.append(e))}evaluate(e,t){const i=this.group.get(e);i?t(i):this.scene.game.logger.warn("layer not found: "+e)}}t.LayerGroup=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e,t){this.game=e,this.group=new Map,this.config=t}add(e,t){const i=this.config[e];i&&t.changeVolume(i);let r=this.group.get(e);r||(r=[],this.group.set(e,r)),r.push(t)}changeVolume(e,t){let i=this.group.get(e);if(i)for(const e of i)e.changeVolume(t)}remove(e){let t=this.group.get(e.groupName);if(t)if(e.assetId){const i=t.findIndex(t=>t.currentAudio.id===e.assetId);i>0?(t[i].stop(),t.splice(i,1)):this.game.logger.warn("audio not found",e)}else if(this.group.delete(e.groupName))for(const e of t)e.stop();else this.game.logger.warn("audio group not found",e)}}t.AudioGroup=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.scripts=e}register(e,t){this.scripts.set(e,t)}call(e,t){let i=this.scripts.get(t.tag);i?i(e,t.data):e.game.logger.warn("script not found: "+t.tag)}}t.ScriptManager=r},function(e,t,i){"use strict";function r(e,t){e.jump(t)}function a(e,t){e.game;const i=new o.LabelButton({scene:e,width:t.width,height:t.height,backgroundImage:t.backgroundImage,padding:t.padding,backgroundEffector:t.backgroundEffector,text:t.text,config:l.Engine.config});for(const r of t.scripts)i.click.add(()=>{l.Engine.scriptManager.call(e,r)});i.move(t.x,t.y),e.appendLayer(i,t.layer)}function n(e,t){switch(t){case 1:e.disableWindowClick();break;case 0:e.enableWindowClick()}}Object.defineProperty(t,"__esModule",{value:!0});i(1);const s=i(23),o=i(24),u=i(13),h=i(5),c=i(0),l=i(3);t.defaultSctipts=new Map([[c.Tag.image,function(e,t){e.appendLayer(u.createImage(e,t),t.layer),e.applyLayerConfig({name:t.layer.name,opacity:t.layer.opacity,visible:t.layer.visible})}],[c.Tag.pane,function(e,t){const i=new g.Pane({scene:e,width:t.width,height:t.height,x:t.layer.x,y:t.layer.y,backgroundImage:t.backgroundImage?e.assets[t.backgroundImage]:void 0,padding:t.padding,backgroundEffector:t.backgroundEffector?new g.NinePatchSurfaceEffector(e.game,t.backgroundEffector.borderWidth):void 0});i.touchable=!!t.touchable,e.appendLayer(i,t.layer)}],[c.Tag.jump,r],[c.Tag.button,function(e,t){const i=s.ImageButton.create(e,t);i.move(t.x,t.y),i.click.add(()=>{for(const i of t.scripts)l.Engine.scriptManager.call(e,i)}),e.appendLayer(i,t.layer)}],[c.Tag.choice,function(e,t){const i=e.game,r=t.values.length,a=t.width?t.width:i.width/4*3,n=t.height?t.height:32,s=t.x?t.x:a/6,u=t.y?t.y:(i.height/3*2-n*r-10*(r-1))/2;t.values.forEach((i,r)=>{let h=new o.LabelButton({scene:e,width:a,height:n,backgroundImage:t.backgroundImage,padding:t.padding,backgroundEffector:t.backgroundEffector,text:i.text,config:l.Engine.config});switch(h.click.add(()=>{l.Engine.scriptManager.call(e,i)}),t.direction?t.direction:0){case 0:h.move(s,u+(n+10)*r);break;case 1:h.move(s+(a+10)*r,u)}e.appendLayer(h,t.layer)})}],[c.Tag.link,a],[c.Tag.text,function(e,t){e.updateText(t)}],[c.Tag.layerConfig,function(e,t){e.applyLayerConfig(t)}],[c.Tag.playAudio,function(e,t){e.playAudio(t)}],[c.Tag.stopAudio,function(e,t){e.stopAudio(t)}],[c.Tag.playVideo,function(e,t){e.playVideo(t)}],[c.Tag.changeVolume,function(e,t){e.changeVolume(t)}],[c.Tag.stopVideo,function(e,t){e.stopVideo(t)}],[c.Tag.click,function(e,t){e.addSkipTrigger()}],[c.Tag.trigger,n],[c.Tag.save,function(e,t){const i=e.save(e.source.scene,t);"string"==typeof i&&e.game.logger.warn(i)}],[c.Tag.load,function(e,t){const i=e.load(t.index);i?r(e,i):e.game.logger.warn("save data not found: "+t.index)}],[c.Tag.evaluate,function(e,t){g._require(e.game,t.path)(e.gameState.variables)}],[c.Tag.condition,function(e,t){g._require(e.game,t.path)(e.gameState.variables)&&l.Engine.scriptManager.call(e,t.script)}],[c.Tag.backlog,function(e,t){const i={name:c.Layer.backlog};for(const i of t.scripts)l.Engine.scriptManager.call(e,i);n(e,1);const r=new h.Message({scene:e,config:l.Engine.config,width:e.game.width-20,x:20,y:20,gameState:e.gameState});let s=[];for(const t of e.backlog)for(const e of t.scripts.filter(e=>e.tag===c.Tag.text).map(e=>e.data.values))s=s.concat("\n",e);r.updateText({values:s}),r.showAll(),e.appendLayer(r,i);const o=[{tag:c.Tag.removeLayer,data:{name:i.name}}];a(e,{layer:i,x:e.game.width-100-10,y:20,width:100,height:24,text:"close",scripts:o})}],[c.Tag.removeLayer,function(e,t){e.removeLayer(t.name)}]])},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(12),a=i(13);class n extends r.Button{constructor(e,t){super({scene:e,width:t.width,height:t.height}),this.append(t)}static create(e,t){return new n(e,a.createImage(e,t))}}t.ImageButton=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(12);class a extends r.Button{constructor(e){super(e);let t=new g.Label({scene:this.scene,text:e.text,font:new g.DynamicFont({game:this.scene.game,fontFamily:g.FontFamily.SansSerif,size:18}),fontSize:18,textColor:e.config.font.color});t.aligning(this.width,g.TextAlign.Center),t.invalidate(),this.append(t)}}t.LabelButton=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.index=0,this._label=e.label,this.frames=e.frames}get label(){return this._label}get frame(){return this.index<this.frames.length?this.frames[this.index]:void 0}get assetIds(){let e=[];return this.frames.forEach(t=>{e=e.concat(t.assetIds)}),e}next(){return this.index<this.frames.length?(this.index++,this.frames[this.index]):void 0}reset(e){this.index=e||0}createSaveData(e){return{label:this._label,frame:this.index,variables:e}}}t.Scene=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(1);class a{constructor(e){this._scripts=e}get scripts(){return this._scripts}get assetIds(){return r.collectAssetIds(this._scripts)}}t.Frame=a},,,,,,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(2),a=i(35),n=i(36),s=i(37),o=i(38),u=i(39);e.exports=new r.Scenario([a.logo,n.title,s.scene0,o.scene1,u.scene2])},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(2);t.logo=new r.Scene({label:"logo",frames:[new r.Frame([{tag:r.Tag.layerConfig,data:{name:r.Layer.message,visible:!1}},{tag:r.Tag.layerConfig,data:{name:r.Layer.system,visible:!1}},{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.image,data:{assetId:"cowlick",layer:{name:"logo",opacity:0,x:256,y:176}}},{tag:"logo",data:{layer:"logo",duration:1e3,wait:3e3}},{tag:r.Tag.click,data:{}}]),new r.Frame([{tag:"jump",data:{label:"title"}}])]})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(2);t.title=new r.Scene({label:"title",frames:[new r.Frame([{tag:r.Tag.layerConfig,data:{name:r.Layer.message,visible:!1}},{tag:r.Tag.layerConfig,data:{name:r.Layer.system,visible:!1}},{tag:r.Tag.choice,data:{layer:r.Layer.choice,values:[{tag:r.Tag.jump,data:{label:"0"},text:"はじめる"}],backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4}}}])]})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(2);t.scene0=new r.Scene({label:"0",frames:[new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:["Hello\nAkashic Novel!"]}}]),new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:[[{value:'{ "rb": "ル　　　　　", "rt": "テ　　" }'},{value:'{ "rb": "ルビ　　　　", "rt": "テ　　" }'},{value:'{ "rb": "ルビの　　　", "rt": "テス　" }'},{value:'{ "rb": "ルビのテ　　", "rt": "テス　" }'},{value:'{ "rb": "ルビのテス　", "rt": "テスト" }'},{value:'{ "rb": "ルビのテスト", "rt": "テスト" }'}]]}}]),new r.Frame([{tag:r.Tag.evaluate,data:{path:"eval"}},{tag:r.Tag.text,data:{clear:!0,values:["画像が指定なされていない場合は前フレームを引き継ぐ"]}}]),new r.Frame([{tag:r.Tag.text,data:{clear:!0,values:["変数表示のサンプル: ",{type:"current",name:"sample"}]}}]),new r.Frame([{tag:r.Tag.choice,data:{layer:{name:r.Layer.choice},values:[{tag:r.Tag.jump,data:{label:"1"},text:"シーン1へ"},{tag:r.Tag.jump,data:{label:"2"},text:"シーン2へ"}],backgroundImage:"pane",padding:4,backgroundEffector:{borderWidth:4}}},{tag:r.Tag.trigger,data:1}])]})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(2);t.scene1=new r.Scene({label:"1",frames:[new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:["シーン1です"]}}]),new r.Frame([{tag:r.Tag.text,data:{clear:!0,values:["タイトル画面に戻ります"]}}]),new r.Frame([{tag:r.Tag.jump,data:{label:"title"}}])]})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=i(2);t.scene2=new r.Scene({label:"2",frames:[new r.Frame([{tag:r.Tag.image,data:{assetId:"black",layer:{name:r.Layer.background}}},{tag:r.Tag.text,data:{clear:!0,values:["シーン2です"]}}]),new r.Frame([{tag:r.Tag.text,data:{clear:!0,values:["タイトル画面に戻ります"]}}]),new r.Frame([{tag:r.Tag.jump,data:{label:"title"}}])]})}]);