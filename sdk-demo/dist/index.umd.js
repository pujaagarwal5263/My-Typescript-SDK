!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["isomorphic-unfetch"],e):(t||self).mySdk=e(t.isomorphicUnfetch)}(this,function(t){function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/e(t);function n(){return n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},n.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var c,p=/*#__PURE__*/function(){function t(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return t.prototype.invoke=function(t,e){var r=""+this.baseUrl+t,i=n({},e,{headers:{"Content-Type":"application/json","api-key":this.apikey}});return o.default(r,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)}).catch(function(t){console.log(t)})},t}(),s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.getPostById=function(t){return this.invoke("/posts/"+t)},o.getPosts=function(){return this.invoke("/posts")},o.createPost=function(t){return this.invoke("posts",{method:"POST",body:JSON.stringify(t)})},e}(p),u=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(p);return c=u,[s].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(c.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})}),u});
