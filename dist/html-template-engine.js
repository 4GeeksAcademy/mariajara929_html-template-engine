!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=0)}([function(e,t){const o=function(){var e={};let t={basePath:"",logRequests:!1,loadProperty:function(e,t){let o=null;void 0!==typeof(o=void 0!==t?t[e]:e)&&o&&(this[e]=o)}};return e.loadPieces=function(e,o){!function(e){t.loadProperty("basePath",e),t.loadProperty("logRequests",e)}(o),e.forEach(e=>{!function(e,o){e=t.basePath+e;var n=new XMLHttpRequest;n.open("GET",e,!0),n.addEventListener("load",r=>{4==n.readyState&&200==n.status?(t.logRequests&&console.log("The following path was successfully loaded: "+e),o(n.responseText)):404==n.status?console.error("The following template path was not found: "+e):200!=n.status&&console.warn("There was an issue loading the following template path: "+e)}),n.addEventListener("error",()=>{console.error("The following template path was imposible to load: "+e)}),n.send()}(e.filePath,function(t){void 0!==e.elementId?document.querySelector(e.elementId).innerHTML=t:void 0!==e.element?e.element.innerHTML=t:console.error("Error loading the template part: ",e)})})},e}();window.onload=function(){let e=[];document.querySelectorAll("span[require-file]").forEach(function(t){e.push({element:t,filePath:t.getAttribute("require-file")})});const t=document.querySelector("body"),n={basePath:t.getAttribute("base-template-path"),logRequests:t.getAttribute("log-template-requests")};o.loadPieces(e,n)}}]);
//# sourceMappingURL=html-template-engine.js.map