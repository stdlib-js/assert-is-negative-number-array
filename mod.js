// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||a.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),p="get"in l,y="set"in l,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),y&&i&&i.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var _=y()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[s],i=s,e=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[s]=r:delete t[s],n}:function(t){return b.call(t)},m=Number,g=m.prototype.toString;var j=y();function d(t){return"object"==typeof t&&(t instanceof m||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function h(t){return f(t)||d(t)}function S(t){return f(t)&&t<0}function w(t){return d(t)&&t.valueOf()<0}function O(t){return S(t)||w(t)}c(h,"isPrimitive",f),c(h,"isObject",d),c(O,"isPrimitive",S),c(O,"isObject",w);var P=Math.floor;function T(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,P(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function E(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!T(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}var V=E(O.isPrimitive),k=E(O.isObject),x=E(O);c(x,"primitives",V),c(x,"objects",k);export{x as default,k as objects,V as primitives};
//# sourceMappingURL=mod.js.map
