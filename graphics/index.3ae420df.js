function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},l=e.parcelRequire5971;null==l&&((l=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var l={id:t,exports:{}};return n[t]=l,e.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequire5971=l),l("11gu9").register(JSON.parse('{"g7o3i":"index.3ae420df.js","jUUB5":"default_album_cover.924bd082.jpg"}'));var a=l("3QCHS"),s=l("90hPx");l("eJydH");var r;r=new URL(l("11gu9").resolve("jUUB5"),import.meta.url).toString(),function(){const e=nodecg.Replicant("nowPlaying"),n=nodecg.Replicant("nowPlayingShowing");class i extends a.PolymerElement{static get is(){return"element-nowplaying"}static get properties(){return{defaultArtUrl:{type:String,value:t(r)},artUrl:{type:String},title:{type:String,value:"",observer:"titleChanged"},artist:{type:String,value:"",observer:"artistChanged"},album:{type:String,value:"",observer:"albumChanged"},duration:{type:Number,value:15},showing:{type:Boolean,value:!1,readOnly:!0},tl:{type:Object,value:s.default.timeline()}}}ready(){super.ready(),e.on("change",(t=>{"object"==typeof t&&(this.artUrl=t.artUrl,this.title=t.title,this.artist=t.artist,this.album=t.album)})),n.on("change",(t=>{t?this.show():this.hide()}))}titleChanged(t){this.$.title.innerHTML=`&#9834; ${t}`;const e=this.$.title,n=e.scrollWidth,i=this._getElementContentWidth(this.$.details);n>i?s.default.set(e,{scaleX:i/n}):s.default.set(e,{scaleX:1})}artistChanged(){const t=this.$.artist,e=t.scrollWidth,n=this._getElementContentWidth(this.$.details);e>n?s.default.set(t,{scaleX:n/e}):s.default.set(t,{scaleX:1})}albumChanged(){const t=this.$.album,e=t.scrollWidth,n=this._getElementContentWidth(this.$.details);e>n?s.default.set(t,{scaleX:n/e}):s.default.set(t,{scaleX:1})}show(){if(this.showing)return;this._setShowing(!0);this.tl.to({},.01,{}),this.tl.to(this.$.line,{duration:.5,height:"100%",ease:"Power1.easeInOut"}),this.tl.add("stuffIn"),this.tl.to(this.$.art,{duration:.4,x:"0%",ease:"Power1.easeOut"},"stuffIn"),this.tl.to(this.$.details,{duration:.7,x:"0%",ease:"Power1.easeOut"},"stuffIn")}hide(){this.showing&&(this._setShowing(!1),this.tl.add("stuffOut"),this.tl.to(this.$.art,{duration:.4,x:"100%",ease:"Power1.easeIn"},"stuffOut+=0.3"),this.tl.to(this.$.details,{duration:.7,x:"-100%",ease:"Power1.easeIn"},"stuffOut"),this.tl.to(this.$.line,{duration:.5,height:"0%",ease:"Power1.easeInOut"}))}_getElementContentWidth(t){const e=window.getComputedStyle(t),n=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return t.clientWidth-n}static get template(){return a.html`\n				<style>\n					:host {\n						display: flex;\n						position: absolute;\n						bottom: 88px;\n						left: 88px;\n					}\n\n					.fullHeight {\n						height: 120px;\n					}\n\n					.cull {\n						overflow: hidden;\n					}\n\n					.centerFlex {\n						display: flex;\n						align-items: center;\n					}\n\n					.background {\n						background-color: rgba(0, 0, 0, 0.75);\n					}\n\n					#art {\n						width: 120px;\n						background-position: center;\n						background-size: contain;\n						background-color: #D3C9C9;\n						transform: translateX(100%);\n					}\n\n					#line {\n						width: 3px;\n						height: 0;\n						background-color: #ac09ff;\n					}\n\n					#details {\n						display: flex;\n						flex-direction: column;\n						padding: 1.2em 2em 1em 1em;\n						color: #E4E4E4;\n						white-space: nowrap;\n						max-width: 400px;\n						box-sizing: border-box;\n						transform: translateX(-100%);\n					}\n\n					#title {\n						font-size: 30px;\n						line-height: 34px;\n						transform-origin: left;\n						font-weight: 600;\n						margin: 0 0 0.25em 0;\n					}\n\n					#artist {\n						font-size: 20px;\n						line-height: 22px;\n						transform-origin: left;\n						margin: 0 0 0.5em 0;\n					}\n\n					#artist {\n						font-size: 18px;\n						line-height: 22px;\n						transform-origin: left;\n						margin: 0;\n					}\n				</style>\n\n        <div class="cull fullHeight">\n					<iron-image\n						id="art"\n						class="fullHeight"\n						sizing="contain"\n						src="[[artUrl]]"\n            placeholder="[[defaultArtUrl]]"\n						preload\n						fade\n					>\n					</iron-image>\n        </div>\n        <div class="cull fullHeight centerFlex">\n					<div id="line"></div>\n        </div>\n        <div class="cull">\n					<div id="details" class="background fullHeight">\n						<div>\n							<p id="title">[[title]]</p>\n							<p id="artist">[[artist]]</p>\n							<p id="album">[[album]]</p>\n						</div>\n					</div>\n        </div>\n			`}}customElements.define(i.is,i)}();
//# sourceMappingURL=index.3ae420df.js.map