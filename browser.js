// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).doUntilEach=t()}(this,(function(){"use strict";var e=Math.floor;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,e(r)===r)&&t.length>=0&&t.length<=9007199254740991;var r}var r=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null;var o,i=Object.defineProperty,u=Object.prototype,f=u.toString,l=u.__defineGetter__,c=u.__defineSetter__,a=u.__lookupGetter__,p=u.__lookupSetter__;o=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,t,r){var n,o,i,y;if("object"!=typeof e||null===e||"[object Array]"===f.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(e,t)||p.call(e,t)?(n=e.__proto__,e.__proto__=u,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,y="set"in r,o&&(i||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&l&&l.call(e,t,r.get),y&&c&&c.call(e,t,r.set),e};var y=o;function s(e,t,r){y(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(e){return"boolean"==typeof e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=v()?function(e){var t,r,n,o,i;if(null==e)return g.call(e);r=e[w],i=w,t=null!=(o=e)&&h.call(o,i);try{e[w]=void 0}catch(t){return g.call(e)}return n=g.call(e),t?e[w]=r:delete e[w],n}:function(e){return g.call(e)},_=Boolean.prototype.toString;var m=v();function S(e){return"object"==typeof e&&(e instanceof Boolean||(m?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function E(e){return b(e)||S(e)}function O(){return new Function("return this;")()}s(E,"isPrimitive",b),s(E,"isObject",S);var T="object"==typeof self?self:null,A="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var x=function(e){if(arguments.length){if(!b(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return O()}if(T)return T;if(A)return A;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),R=x.document&&x.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;s(V,"REGEXP",k);var G=Array.isArray?Array.isArray:function(e){return"[object Array]"===j(e)};function L(e){return null!==e&&"object"==typeof e}function M(e){var t,r,n,o;if(("Object"===(r=j(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=k.exec(n.toString()))return t[1]}return L(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}s(L,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!G(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(L));var U="function"==typeof r||"object"==typeof C||"function"==typeof R?function(e){return M(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?M(e).toLowerCase():t};function F(e){return"function"===U(e)}function I(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,r,n,o){var i,u;if(!t(e))throw new TypeError(I("0jRBO",e));if(!F(r))throw new TypeError(I("0jR2S",r));if(!F(n))throw new TypeError(I("0jR3Z",n));if(0===(i=e.length)&&(r.call(o,void 0,void 0,e),0===(i=e.length)))return e;u=0;do{r.call(o,e[u],u,e),u+=1,i=e.length}while(u<i&&!n(e[u-1],u-1,e));return e}}));
//# sourceMappingURL=browser.js.map
