_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"8oxB":function(n,t){var e,o,r=n.exports={};function c(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(n){if(e===setTimeout)return setTimeout(n,0);if((e===c||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:c}catch(n){e=c}try{o="function"===typeof clearTimeout?clearTimeout:i}catch(n){o=i}}();var s,a=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?a=s.concat(a):f=-1,a.length&&h())}function h(){if(!l){var n=u(p);l=!0;for(var t=a.length;t;){for(s=a,a=[];++f<t;)s&&s[f].run();f=-1,t=a.length}s=null,l=!1,function(n){if(o===clearTimeout)return clearTimeout(n);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(n);try{o(n)}catch(t){try{return o.call(null,n)}catch(t){return o.call(this,n)}}}(n)}}function d(n,t){this.fun=n,this.array=t}function m(){}r.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];a.push(new d(n,t)),1!==a.length||l||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},Qetd:function(n,t,e){"use strict";var o=Object.assign.bind(Object);n.exports=o,n.exports.default=n.exports},TrXH:function(n,t,e){"use strict";e.r(t);var o=e("nKUr"),r=e("vJKn"),c=e.n(r),i=e("rg98"),u=(e("q1tI"),e("vDqi")),s=e.n(u),a="https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/nid/me",l=function(){function n(){return(n=Object(i.a)(c.a.mark((function n(t){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),n.prev=1,n.next=4,s.a.get("http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account/user/".concat(t));case 4:e=n.sent,console.log(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}window.location.href.includes("access_token")&&function(){var t=window.location.href.split("=")[1].split("&")[0],e=window.location.href.split("=")[2].split("&")[0];console.log("token: ",t),console.log("state: ",e),fetch("".concat(a),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return n.json()})).then((function(t){console.log("\ub85c\uadf8\uc778\uc131\uacf5",t),console.log("\ub2c9\ub124\uc784"),console.log(t.response.nickname),console.log("email"),console.log(t.response.email),function(t){n.apply(this,arguments)}(t.response.email)})).catch((function(n){return console.log("err : ",n)}))}()};t.default=function(){return l(),Object(o.jsx)("div",{})}},mF9o:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/naverPopUp",function(){return e("TrXH")}])},rg98:function(n,t,e){"use strict";function o(n,t,e,o,r,c,i){try{var u=n[c](i),s=u.value}catch(a){return void e(a)}u.done?t(s):Promise.resolve(s).then(o,r)}function r(n){return function(){var t=this,e=arguments;return new Promise((function(r,c){var i=n.apply(t,e);function u(n){o(i,r,c,u,s,"next",n)}function s(n){o(i,r,c,u,s,"throw",n)}u(void 0)}))}}e.d(t,"a",(function(){return r}))}},[["mF9o",0,1,3,4]]]);