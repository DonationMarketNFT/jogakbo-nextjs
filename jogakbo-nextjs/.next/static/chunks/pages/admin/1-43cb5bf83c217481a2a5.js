_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(o=n("Xuae"))&&o.__esModule?o:{default:o},s=n("lwAK"),u=n("FYa8"),d=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var d=h[s];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],f=r[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:o})}))}function g(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)}g.rewind=function(){};var b=g;t.default=b},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},HLzA:function(e,t,n){"use strict";var r=n("nKUr"),a=n("xvhg"),o=n("DcK4"),i=n("YFqc"),c=n.n(i),s=n("q1tI"),u=n("T1Xd"),d=n("vOnD"),l=n("v1QY"),f=n("iaY6"),p=d.b.header.withConfig({displayName:"AdminHeader__Menu",componentId:"sc-16vfwmu-0"})([""," position:fixed;left:0;padding:50px 0;width:250px;height:100%;background:lightgray;li{padding:12px;}"],Object(f.c)("space-between")),h=d.b.div.withConfig({displayName:"AdminHeader__Col",componentId:"sc-16vfwmu-1"})(["display:flex;flex-direction:column;align-items:center;&:nth-child(2){height:100%;}&:last-child{a{padding:10px 15px;background:#f49a4a;border-radius:5px;color:white;}}"]),m=d.b.h1.withConfig({displayName:"AdminHeader__Logo",componentId:"sc-16vfwmu-2"})(["font-size:30px;"]),g=d.b.p.withConfig({displayName:"AdminHeader__Title",componentId:"sc-16vfwmu-3"})(["margin-bottom:30px;"]);t.a=function(){var e=Object(u.c)(l.d),t=Object(a.a)(e,2),n=(t[0],t[1]);return Object(s.useEffect)((function(){Object(o.a)(n)}),[]),Object(r.jsxs)(p,{children:[Object(r.jsxs)(h,{children:[Object(r.jsx)(m,{children:"JOGAKBO"}),Object(r.jsx)(g,{children:"\uad00\ub9ac\uc790 \ud398\uc774\uc9c0"})]}),Object(r.jsx)(h,{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)(c.a,{href:"/admin",children:Object(r.jsx)("a",{children:Object(r.jsx)("li",{children:"nft"})})}),Object(r.jsx)(c.a,{href:"/admin/1",children:Object(r.jsx)("a",{children:Object(r.jsx)("li",{children:"\uac80\ud1a0 \ucea0\ud398\uc778 \ub9ac\uc2a4\ud2b8"})})}),Object(r.jsx)(c.a,{href:"/admin/account",children:Object(r.jsx)("a",{children:Object(r.jsx)("li",{style:{cursor:"url(/construct.png), auto"},children:"\uc720\uc800 \uad00\ub9ac (\uac1c\ubc1c\uc911)"})})})]})}),Object(r.jsx)(h,{children:Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("div",{children:"\uc870\uac01\ubcf4 \ud648\uc73c\ub85c"})})})})]})}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},VEhC:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n("vJKn"),a=n.n(r),o=n("rg98"),i=n("vDqi"),c=n.n(i),s="http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/pre-campaigns",u=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(s,"/campaign_all"));case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t,n,r,a,o){var i={name:e,description:t,targetAmount:Number(n),currentAmount:0,fundingStatus:!0,refundStatus:!1,category:r,creatorAddress:a,minFundingAmount:Number(o)};c.a.post("".concat(s,"/create_campaign"),i).then((function(e){return alert("\uc815\uc0c1\uc801\uc73c\ub85c \uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4 :)")})).catch((function(e){return console.log(e)}))}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),s=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},aNcL:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("hizP"),o=n("q1tI"),i=n("vOnD"),c=n("VEhC"),s=i.b.ul.withConfig({displayName:"Pagination__PageUl",componentId:"sc-1qhqp3c-0"})(["position:fixed;bottom:30px;left:300px;right:30px;display:flex;justify-content:center;padding:3px;text-align:center;color:white;background-color:rgba(0,0,0,0.4);"]),u=i.b.li.withConfig({displayName:"Pagination__PageLi",componentId:"sc-1qhqp3c-1"})(["padding:10px;border-radius:5px;width:50px;cursor:pointer;&:hover{background-color:rgba(0,0,0,0.6);}"]),d=function(e){for(var t=e.postsPerPage,n=e.totalPosts,a=e.paginate,o=[],i=1;i<=Math.ceil(n/t);i++)o.push(i);return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{children:Object(r.jsx)(s,{children:o.map((function(e){return Object(r.jsx)(u,{onClick:function(){return a(e)},children:e},e)}))})})})},l=n("xvhg"),f=n("T1Xd"),p=n("v1QY"),h=n("vJKn"),m=n.n(h),g=n("rg98"),b=n("wHSu"),v=n("IP2g"),j=(n("1UBF"),n("PVQ3")),x=n("vDqi"),y=n.n(x),O=(n("CROl"),n("HXs4"),n("mKgc"),n("t8rn")),w=n("xXFf"),_=i.b.div.withConfig({displayName:"VerifyCampaignModal__Container",componentId:"sc-gbyuch-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.5);z-index:9999;"]),C=i.b.div.withConfig({displayName:"VerifyCampaignModal__Modal",componentId:"sc-gbyuch-1"})(["display:flex;flex-direction:column;justify-content:space-between;padding:30px;width:80%;height:75%;background:#fff;div{font-size:24px;margin-bottom:15px;}"]),M=i.b.div.withConfig({displayName:"VerifyCampaignModal__ModalHeader",componentId:"sc-gbyuch-2"})(["display:flex;align-items:center;svg{font-size:36px;}"]),I=i.b.h5.withConfig({displayName:"VerifyCampaignModal__Name",componentId:"sc-gbyuch-3"})(["width:100%;font-size:34px;text-align:center;"]),k=i.b.div.withConfig({displayName:"VerifyCampaignModal__Contents",componentId:"sc-gbyuch-4"})(["display:flex;flex-direction:column;height:100%;"]),P=i.b.div.withConfig({displayName:"VerifyCampaignModal__Buttons",componentId:"sc-gbyuch-5"})(["display:flex;justify-content:center;div{margin:0 10px;}"]),A=i.b.div.withConfig({displayName:"VerifyCampaignModal__DeleteButton",componentId:"sc-gbyuch-6"})(["padding:10px 15px;background:red;border-radius:5px;color:white;cursor:pointer;"]),N=i.b.div.withConfig({displayName:"VerifyCampaignModal__OnChainButton",componentId:"sc-gbyuch-7"})(["padding:10px 15px;background:blue;border-radius:5px;color:white;cursor:pointer;"]),S=function(e){var t=Object(f.c)(p.a),n=Object(l.a)(t,2),a=(n[0],n[1]),i=Object(f.c)(p.h),c=Object(l.a)(i,2),s=c[0],u=c[1],d=Object(o.useState)(),h=d[0],x=d[1],S=Object(f.c)(p.d),E=Object(l.a)(S,2),H=E[0],q=(E[1],Object(f.c)(p.f)),z=Object(l.a)(q,2),D=(z[0],z[1]);Object(o.useEffect)((function(){y()("http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/pre-campaigns/campaign/".concat(e.id)).then((function(e){return x(e.data)})).catch((function(e){return console.log(e)})),console.log(H)}),[]);var K=function(){var t=Object(g.a)(m.a.mark((function t(n){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!n.target.files){t.next=9;break}for(r=new FormData,a=0;a<n.target.files.length;a++)r.append("images",n.target.files[a]);return r.append("CampaignId",e.id),r.append("CampaignDescription",null===h||void 0===h?void 0:h.description),r.append("CampaignName",null===h||void 0===h?void 0:h.name),t.next=9,y()({method:"post",url:"http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/image",data:r,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log("\uc131\uacf5")})).catch((function(e){return console.error(e)}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(_,{onClick:function(){return a(!1)},children:[Object(r.jsxs)(C,{onClick:function(e){e.stopPropagation()},children:[Object(r.jsxs)(M,{children:[Object(r.jsx)(I,{children:e.name}),Object(r.jsx)(v.a,{onClick:function(){return a(!1)},icon:b.d})]}),Object(r.jsxs)(k,{children:[Object(r.jsxs)("div",{children:["id: ",e.id]}),Object(r.jsxs)("div",{children:["\uc81c\ucd9c\uc790 \uc8fc\uc18c: ",null===h||void 0===h?void 0:h.creatorAddress]}),Object(r.jsxs)("div",{children:["\uce74\ud14c\uace0\ub9ac: ",null===h||void 0===h?void 0:h.category]}),Object(r.jsxs)("div",{children:["target amount: ",null===h||void 0===h?void 0:h.targetAmount," Klay"]}),Object(r.jsxs)("div",{children:["target amount: ",null===h||void 0===h?void 0:h.minFundingAmount," Klay"]}),Object(r.jsx)("div",{children:"description"}),Object(r.jsx)("div",{children:null===h||void 0===h?void 0:h.description})]}),Object(r.jsxs)(P,{children:[Object(r.jsx)(A,{onClick:function(){y.a.delete("http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/pre-campaigns/campaign/delete/".concat(e.id)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),a(!1),location.reload()},children:"\uc0ad\uc81c\ud558\uae30"}),Object(r.jsx)(N,{onClick:function(){j.a(h.creatorAddress,h.targetAmount,e.id,D,(function(e){alert(JSON.stringify(e)),u(!1)})),u(!0),Object(w.d)(e.name,h.description,h.targetAmount,h.category,h.minFundingAmount,h.creatorAddress)},children:"\uc628\uccb4\uc778 \uc62c\ub9ac\uae30"})]}),Object(r.jsx)("h3",{children:"\u2b07\ufe0f NFT \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\ud558\uae30"}),Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"file",multiple:!0,onChange:function(e){return K(e)}})})]}),s&&Object(r.jsx)(O.a,{})]})})},E=i.b.div.withConfig({displayName:"Posts__PostContainer",componentId:"sc-1su63ui-0"})(["margin-bottom:15px;"]),H=i.b.ul.withConfig({displayName:"Posts__MenuUl",componentId:"sc-1su63ui-1"})(["display:flex;align-items:center;&:first-child{margin-bottom:10px;border-bottom:1px solid lightgray;}li{margin:3px 0;font-size:22px;}"]),q=i.b.li.withConfig({displayName:"Posts__IdLabel",componentId:"sc-1su63ui-2"})(["width:100px;padding:5px;background:none;text-align:center;"]),z=i.b.li.withConfig({displayName:"Posts__NameLabel",componentId:"sc-1su63ui-3"})(["padding:5px;"]),D=i.b.li.withConfig({displayName:"Posts__Id",componentId:"sc-1su63ui-4"})(["width:100px;padding:8px;background:lightgray;text-align:center;"]),K=i.b.li.withConfig({displayName:"Posts__Name",componentId:"sc-1su63ui-5"})(["margin-left:10px;padding:8px;"]),L=function(e){var t=e.posts,n=e.loading,a=Object(f.c)(p.a),i=Object(l.a)(a,2),c=i[0],s=i[1],u=Object(o.useState)(0),d=u[0],h=u[1],m=Object(o.useState)(""),g=m[0],b=m[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(E,{children:[Object(r.jsxs)(H,{children:[Object(r.jsx)(q,{children:"id"}),Object(r.jsx)(z,{children:"name"})]}),n&&Object(r.jsx)("div",{children:" loading... "}),t.map((function(e){return Object(r.jsxs)(H,{children:[Object(r.jsx)(D,{children:e.id},e.id),Object(r.jsx)(K,{onClick:function(){h(e.id),b(e.name),s(!0)},children:e.name})]})}))]}),c&&Object(r.jsx)(S,{id:d,name:g})]})},T=n("HLzA"),F=i.b.div.withConfig({displayName:"sc-1__Container",componentId:"sc-mtfocx-0"})(["width:100%;height:100vh;padding:50px;padding-left:300px;"]),R=i.b.h4.withConfig({displayName:"sc-1__PageTitle",componentId:"sc-mtfocx-1"})(["font-size:32px;margin-bottom:15px;"]),U=i.b.div.withConfig({displayName:"sc-1__PageSubTitle",componentId:"sc-mtfocx-2"})(["margin-bottom:15px;"]),V=i.b.div.withConfig({displayName:"sc-1__Board",componentId:"sc-mtfocx-3"})(["display:flex;flex-direction:column;width:100%;"]);t.default=function(){var e=Object(o.useState)([]),t=e[0],n=e[1],i=Object(o.useState)(!1),s=i[0],u=(i[1],Object(o.useState)(1)),l=u[0],f=u[1],p=Object(o.useState)(10),h=p[0];p[1];Object(o.useEffect)((function(){Object(c.a)(n)}),[]);var m,g=l*h,b=g-h;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{title:"\ucea0\ud398\uc778 \uc2e0\uccad \ub9ac\uc2a4\ud2b8"}),Object(r.jsx)(T.a,{}),Object(r.jsxs)(F,{children:[Object(r.jsx)(R,{children:"\ucea0\ud398\uc778 \uc2e0\uccad \ub9ac\uc2a4\ud2b8"}),Object(r.jsx)(U,{children:"\ud648\ud398\uc774\uc9c0\ub97c \ud1b5\ud574 \uc2e0\uccad\ub41c \ucea0\ud398\uc778\uc744 \uc624\ub798\ub41c \uc21c\uc73c\ub85c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4"}),Object(r.jsxs)(V,{children:[Object(r.jsx)(L,{posts:(m=t,m.slice(b,g)),loading:s}),Object(r.jsx)(d,{postsPerPage:h,totalPosts:t.length,paginate:f})]})]})]})}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function d(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.asPath||"/",l=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),f=l.href,p=l.as,h=e.children,m=e.replace,g=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var j=o.Children.only(h),x=j&&"object"===typeof j&&j.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),O=r(y,2),w=O[0],_=O[1],C=o.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,o.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(f),r="undefined"!==typeof v?v:n&&n.locale,a=u[f+"%"+p+(r?"%"+r:"")];e&&!a&&d(n,f,p,{locale:r})}),[p,f,_,v,t,n]);var M={ref:C,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}))}(e,n,f,p,m,g,b,v)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(n,f,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var I="undefined"!==typeof v?v:n&&n.locale,k=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);M.href=k||(0,i.addBasePath)((0,i.addLocale)(p,I,n&&n.defaultLocale))}return o.default.cloneElement(j,M)};t.default=l},g4pe:function(e,t,n){e.exports=n("8Kt/")},hizP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),a=n("g4pe"),o=n.n(a);function i(e){var t=e.title,n=void 0===t?"\ud074\ub808\uc774\ud2bc \uae30\ubc18 \uae30\ubd80 \ud50c\ub7ab\ud3fc":t;return Object(r.jsxs)(o.a,{children:[Object(r.jsxs)("title",{children:["\uc870\uac01\ubcf4 | ",n]}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossOrigin:"anonymous"})]})}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,a.useRef)(),u=(0,a.useState)(!1),d=r(u,2),l=d[0],f=d[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return(0,a.useEffect)((function(){if(!i&&!l){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[l]),[p,l]};var a=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},xXFf:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n("vJKn"),a=n.n(r),o=n("rg98"),i=n("vDqi"),c=n.n(i),s="http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns",u=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(s,"/campaign_all"));case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t,n,r,a,o){var i={name:e,description:t,targetAmount:Number(n),currentAmount:0,fundingStatus:!0,refundStatus:!1,category:r,minFundingAmount:a,creatorAddress:o};c.a.post("".concat(s,"/create_campaign"),i).then((function(e){return alert("\uc815\uc0c1\uc801\uc73c\ub85c \uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4 :)")})).catch((function(e){return console.log(e)}))},l=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(s,"/campaign/Onfunding"));case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(s,"/campaign/OnRefund"));case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},zzCV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/1",function(){return n("aNcL")}])}},[["zzCV",0,1,5,9,7,2,3,4,6,8,10,12]]]);