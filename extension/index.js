!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,n,o,r){/* eslint-disable no-undef */var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u="function"==typeof l[o]&&l[o],i=u.cache||{},a="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,n){if(!i[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof l[o]&&l[o];if(!n&&r)return r(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(u)return u(t,!0);// Try the node require function if it exists.
if(a&&"string"==typeof t)return a(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}c.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},c.cache={};var d=i[t]=new f.Module(t);e[t][0].call(d.exports,c,d,d.exports,this)}return i[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=i,f.parent=u,f.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(f,"root",{get:function(){return l[o]}}),l[o]=f;for(var s=0;s<t.length;s++)f(t[s]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var d=f(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):r&&(this[r]=d)}}({"2yoZy":[function(e,t,n){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(n);var r=e("./util/nodecg-api-context"),l=o.interopDefault(r),u=e("./nowplaying"),i=o.interopDefault(u);n.default=e=>{// Store a reference to this nodecg API context in a place where other libs can easily access it.
// This must be done beforeu any other files are `require`d.
(0,l.default).set(e),(0,i.default)(e)}},{"./util/nodecg-api-context":"fBgQh","./nowplaying":"1VBCz","@parcel/transformer-js/src/esmodule-helpers.js":"di8yw"}],fBgQh:[function(e,t,n){let o;t.exports={get:()=>o,set(e){o=e}}},{}],"1VBCz":[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n),n.default=e=>{let t;let n=e.Replicant("nowPlayingPaused",{defaultValue:!1,persistent:!1}),o=e.Replicant("nowPlayingShowing",{defaultValue:!1,persistent:!1}),r=e.Replicant("nowPlaying",{defaultValue:{artUrl:"",title:"",artist:"",album:""},persistent:!1}),l=e.Replicant("assets:albumart",{defaultValue:[],persistent:!1}),u=()=>{// Don't stack pulses
o.value||n.value||(o.value=!0,// Hard-coded 12 second duration
t=setTimeout(()=>{o.value=!1},12e3))};e.listenFor("toggleNowPlaying",t=>{n.value!==t&&(t?e.log.info("NowPlaying is now paused."):e.log.info("NowPlaying has now resumed."),n.value=t)}),e.listenFor("nowPlaying",n=>{let i=l.value.filter(e=>e.name===n.album.toLowerCase().replaceAll(" ","_")),a="";i.length&&(e.log.debug(`Found image for ${n.album}.`),a=i[0].url),r.value={...n,artUrl:a},o.value&&(clearTimeout(t),o.value=!1),// Show the graphic
u()})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"di8yw"}],di8yw:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["2yoZy"],"2yoZy","parcelRequire5971")//# sourceMappingURL=index.js.map
;
//# sourceMappingURL=index.js.map
