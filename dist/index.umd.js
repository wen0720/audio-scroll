!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["audio-scroll"]=e():t["audio-scroll"]=e()}(self,(()=>(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function n(t,e,o){return(e=r(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,"string");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}t.r(e),t.d(e,{default:()=>u});var a=new WeakSet,u=function(){return t=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.add(t)}(this,a),n(this,"audioConfigs",{}),n(this,"isAllowAudioplay",!1),n(this,"aduioWrapper",void 0),n(this,"topEntryObserver",void 0),n(this,"bottomEntryObserver",void 0),function(t,e,o){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:o;throw new TypeError("Private element is not present on this object")}(a,this,d).call(this),this.topEntryObserver=new IntersectionObserver((function(t){t.forEach((function(t){var o,i=t.target.getAttribute("data-audio-id"),n=null===(o=e.audioConfigs)||void 0===o?void 0:o[i].audio;e.isAllowAudioplay&&(t.isIntersecting&&n&&!e.isAudioPlaying(n)?n.play().catch((function(t){console.log(t)})):!t.isIntersecting&&t.boundingClientRect.top>0&&e.isAudioPlaying(n)&&n.pause())}))}),{rootMargin:"0px 0px -50% 0px"}),this.bottomEntryObserver=new IntersectionObserver((function(t){t.forEach((function(t){var o,i=t.target.getAttribute("data-audio-id"),n=null===(o=e.audioConfigs)||void 0===o?void 0:o[i].audio;e.isAllowAudioplay&&(t.isIntersecting&&n&&!e.isAudioPlaying(n)?n.play().catch((function(t){console.log(t)})):!t.isIntersecting&&t.boundingClientRect.top<window.innerHeight/2&&e.isAudioPlaying(n)&&n.pause())}))}),{rootMargin:"-50% 0px 0px 0px"})},(e=[{key:"createAudioElement",value:function(t){var e=document.createElement("audio");return e.src=t,e.style.display="none",e.muted=!0,e.controls=!0,e.playsinline="true",e.addEventListener("ended",(function(){e.currentTime=0,e.play().catch((function(t){console.log(t)}))})),e}},{key:"isAudioPlaying",value:function(t){return t&&!t.paused&&!t.ended&&t.currentTime>0}},{key:"addAudio",value:function(t){var e=this,o=t.path,i=t.audioTopEntry,n=t.audioBottomEntry,r=t.allowAudioPlayElement,a=t.toggleAudioPlayElement,u=t.onChangeAllowAudioPlay,d=this.createAudioElement(o);this.aduioWrapper.appendChild(d);var l="".concat(Date.now().toString(36)+Math.random().toString(36).substring(2));this.audioConfigs[l]={path:o,isPlaying:!1,audioTopEntry:i,audioBottomEntry:n,audio:d,allowAudioPlayElement:r,onChangeAllowAudioPlay:u},i.setAttribute("data-audio-id",l),n.setAttribute("data-audio-id",l),this.topEntryObserver.observe(i),this.bottomEntryObserver.observe(n),r.addEventListener("click",(function(){e.isAllowAudioplay=!0,Object.values(e.audioConfigs).forEach((function(t){t.audio.muted=!t.audio.muted})),u(e.audioConfigs[l].audio.muted)})),a.addEventListener("click",(function(){e.isAllowAudioplay=!0,Object.values(e.audioConfigs).forEach((function(t){t.audio.muted=!t.audio.muted})),u(e.audioConfigs[l].audio.muted)}))}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function d(){this.aduioWrapper=document.createElement("div"),this.aduioWrapper.style.pointerEvents="none",this.aduioWrapper.style.opacity="0",this.aduioWrapper.style.display="none",document.body.appendChild(this.aduioWrapper)}return e})()));