function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=/*#__PURE__*/t(require("isomorphic-unfetch"));function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}var i,c=/*#__PURE__*/function(){function t(t){this.apikey=void 0,this.baseUrl=void 0,this.apikey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return t.prototype.invoke=function(t,n){var r=""+this.baseUrl+t,i=o({},n,{headers:{"Content-Type":"application/json","api-key":this.apikey}});return e.default(r,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)}).catch(function(t){console.log(t)})},t}(),p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.getPostById=function(t){return this.invoke("/posts/"+t)},o.getPosts=function(){return this.invoke("/posts")},o.createPost=function(t){return this.invoke("posts",{method:"POST",body:JSON.stringify(t)})},e}(c),s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return n(e,t),e}(c);i=s,[p].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(i.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e)||Object.create(null))})}),module.exports=s;