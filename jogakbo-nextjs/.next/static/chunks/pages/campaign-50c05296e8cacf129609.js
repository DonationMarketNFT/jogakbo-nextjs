_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},u=n("lwAK"),l=n("FYa8"),s=n("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var b=["name","httpEquiv","charSet","itemProp"];function g(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=b.length;u<l;u++){var s=b[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=o.props[s],f=r[s]||new Set;"name"===s&&i||!f.has(d)?(f.add(d),r[s]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function h(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:g,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("6FTQ");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},SR0E:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("xvhg"),a=n("T1Xd"),i=n("vOnD"),c=n("v1QY"),u=n("q1tI"),l=n("iaY6"),s=n("hizP"),d=n("VEhC"),f=n("wHSu"),p=n("IP2g"),b=i.b.div.withConfig({displayName:"CategoryModal__ModalWrapper",componentId:"sc-1gr8zio-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.7);z-index:9999;transition:all 0.2s ease-in-out;"]),g=i.b.div.withConfig({displayName:"CategoryModal__ModalContent",componentId:"sc-1gr8zio-1"})(["background:gray;border-radius:10px;transition:all 0.2 ease-in-out;width:700px;padding:44px 50px;","{width:600px;padding:28px 33px;}","{width:500px;padding:20px 22px;}","{width:300px;padding:20px 22px;}"],l.f.tablet,l.f[768],l.f.mobile),h=i.b.div.withConfig({displayName:"CategoryModal__ConnectWalletContainer",componentId:"sc-1gr8zio-2"})(["display:flex;flex-direction:column;justify-content:center;transition:all 0.2s ease-in-out;"]),m=i.b.div.withConfig({displayName:"CategoryModal__ConnectWalletModalHeader",componentId:"sc-1gr8zio-3"})(["display:flex;justify-content:space-between;align-items:center;width:100%;transition:all 0.2s ease-in-out;color:white;margin-bottom:28px;","{margin-bottom:24px;}h5{font-size:20px;","{font-size:18px;}}svg{width:16px;cursor:pointer;}"],l.f[768],l.f.tablet),x=i.b.div.withConfig({displayName:"CategoryModal__ConnectWalletModalContent",componentId:"sc-1gr8zio-4"})(["display:flex;justify-content:space-between;width:100%;","{flex-direction:column;align-items:center;}"],l.f[768]),y=i.b.div.withConfig({displayName:"CategoryModal__Card",componentId:"sc-1gr8zio-5"})(["",";padding:0 15px;width:33%;color:",";img{height:100px;margin-bottom:10px;}h4{font-size:22px;margin-bottom:20px;}p{line-height:20px;text-align:center;}"],Object(l.c)("flex-start"),(function(e){return e.theme.textColor})),j=function(){var e=Object(a.c)(c.g),t=Object(o.a)(e,2)[1];return Object(r.jsx)(b,{onClick:function(){return t(!1)},children:Object(r.jsx)(g,{onClick:function(e){e.stopPropagation()},children:Object(r.jsxs)(h,{children:[Object(r.jsxs)(m,{children:[Object(r.jsx)("h5",{children:"\uce74\ud14c\uace0\ub9ac \uc548\ub0b4"}),Object(r.jsx)(p.a,{onClick:function(){t(!1)},icon:f.d})]}),Object(r.jsxs)(x,{children:[Object(r.jsxs)(y,{children:[Object(r.jsx)("img",{src:"/public.png"}),Object(r.jsx)("h4",{children:"\uacf5\uc775"}),Object(r.jsx)("p",{children:"\ud0c0\uc778\uc5d0\uac8c \uae08\uc804, \ubb3c\ud488 \ub610\ub294 \uae08\uc804\uc801 \uac00\uce58\uac00 \uc788\ub294 \uac83\uc744 \uc81c\uacf5\ud558\ub294 \uc790\ubc1c\uc801\uc778 \ud589\uc704\ub97c \ud3ec\ud568\ud558\ub294 \ucea0\ud398\uc778\uc785\ub2c8\ub2e4."})]}),Object(r.jsxs)(y,{children:[Object(r.jsx)("img",{src:"/society.png"}),Object(r.jsx)("h4",{children:"\uc0ac\ud68c"}),Object(r.jsx)("p",{children:"\uc0ac\ud68c\ub2e8\uccb4 \ub610\ub294 \uacf5\uacf5\uae30\uad00 \ub4f1\uc5d0 \uae30\ubd80\ud558\uc5ec \uc0ac\ud68c\uc5d0 \uacf5\ud5cc\ud560 \uc218 \uc788\ub294 \ucea0\ud398\uc778\uc785\ub2c8\ub2e4."})]}),Object(r.jsxs)(y,{children:[Object(r.jsx)("img",{src:"/environment.png"}),Object(r.jsx)("h4",{children:"\ud658\uacbd"}),Object(r.jsx)("p",{children:"\uc9c0\uad6c\ub97c \uc0b4\ub9ac\ub294 \uc77c\uc5d0 \uae30\uc5ec\ud558\uace0 \ud658\uacbd \uc624\uc5fc\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \uc0ac\ud68c\uc801 \ube44\uc6a9\uc744 \uc808\uac10\ud560 \uc218 \uc788\ub294 \ucea0\ud398\uc778\uc785\ub2c8\ub2e4."})]})]})]})})})},v=i.b.div.withConfig({displayName:"campaign__",componentId:"sc-4td175-0"})(["background:",";"],(function(e){return e.theme.bgColor})),O=i.b.div.withConfig({displayName:"campaign__",componentId:"sc-4td175-1"})(["width:1050px;margin:0 auto;padding:30px;padding-top:150px;","{width:auto;}"],l.f.tablet),w=i.b.h3.withConfig({displayName:"campaign__",componentId:"sc-4td175-2"})(["text-align:center;font-size:32px;color:",";"],(function(e){return e.theme.textColor})),C=i.b.div.withConfig({displayName:"campaign__",componentId:"sc-4td175-3"})(["display:flex;flex-direction:column;align-items:center;margin:50px 0;padding:50px;width:100%;background:",";border-radius:10px;div > h3{color:",";margin-bottom:10px;font-size:24px;text-align:center;}div > p{margin-bottom:50px;color:",";}ul{",";}ul li{margin:10px 0;font-size:20px;}ul li span{margin-right:10px;color:",";font-weight:600;}& > p{margin-top:50px;color:",";}&:nth-of-type(2){background:",";ul{align-items:flex-start;}}"],(function(e){return e.theme.gray.gray4}),(function(e){return e.theme.textColor}),(function(e){return e.theme.gray.gray7}),Object(l.c)(),(function(e){return e.theme.textColor}),(function(e){return e.theme.gray.gray7}),(function(e){return e.theme.gray.gray5})),_=i.b.form.withConfig({displayName:"campaign__",componentId:"sc-4td175-4"})(["position:relative;display:flex;flex-direction:column;label{color:",";font-size:20px;margin:15px 0;}"],(function(e){return e.theme.textColor})),S=i.b.select.withConfig({displayName:"campaign__",componentId:"sc-4td175-5"})(["padding:10px 20px;width:100%;"]),k=i.b.option.withConfig({displayName:"campaign__Option",componentId:"sc-4td175-6"})([""]),M=i.b.input.withConfig({displayName:"campaign__",componentId:"sc-4td175-7"})(["padding:10px 20px;font-size:20px;&#name{height:50px;}"]),I=i.b.button.withConfig({displayName:"campaign__",componentId:"sc-4td175-8"})(["margin:30px 0;padding:30px;background:#f49a4a;border-radius:10px;text-align:center;color:white;cursor:pointer;"]),A=i.b.div.withConfig({displayName:"campaign__",componentId:"sc-4td175-9"})(["position:absolute;top:9px;right:0;padding:7px 10px;background:",";color:",";cursor:pointer;svg{margin-right:5px;width:16px;}"],(function(e){return e.theme.gray.gray4}),(function(e){return e.theme.bgColor}));t.default=function(){var e=Object(u.useState)(""),t=e[0],n=e[1],i=Object(u.useState)(""),l=i[0],b=i[1],g=Object(u.useState)(""),h=g[0],m=g[1],x=Object(u.useState)(0),y=x[0],P=x[1],E=Object(u.useState)(0),N=E[0],q=E[1],z=Object(a.c)(c.d),H=Object(o.a)(z,1)[0],K=Object(a.c)(c.h),T=Object(o.a)(K,2),D=(T[0],T[1]),F=Object(a.c)(c.g),W=Object(o.a)(F,2),X=W[0],B=W[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{title:"\ucea0\ud398\uc778 \uc0dd\uc131\ud558\uae30"}),Object(r.jsx)(v,{children:Object(r.jsxs)(O,{children:[Object(r.jsx)(w,{children:"CREATE CAMPAIGN"}),Object(r.jsxs)(C,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"announcement"}),Object(r.jsx)("p",{children:"\uc81c\ucd9c\ud558\uc2dc\uae30 \uc804\uc5d0 \uaf2d \uc77d\uc5b4\uc8fc\uc138\uc694 !"})]}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"1. \uac80\ud1a0 \ud6c4 \uac00\uc785\ud558\uc2e0 \uc774\uba54\uc77c\ub85c \uacb0\uacfc\ub97c \uc54c\ub824\ub4dc\ub9bd\ub2c8\ub2e4."}),Object(r.jsx)("li",{children:"2. \ucc98\ub9ac \uae30\uac04\uc740 \uc2e0\uccad\uc77c\ub85c\ubd80\ud130 \ud3c9\uade0 10\uc77c\uc774 \uc18c\uc694\ub429\ub2c8\ub2e4."}),Object(r.jsx)("li",{children:"3. \ub4f1\ub85d \ud6c4 \uc218\uc815\uc774 \ubd88\uac00\ud558\ub2c8 \uc2e0\uc911\ud558\uac8c \uc791\uc131\ud558\uc5ec \uc81c\ucd9c\ud574\uc8fc\uc138\uc694."})]}),Object(r.jsx)("p",{children:" \uae30\ud0c0 \ubb38\uc758\uc0ac\ud56d\uc740 \uc774\uba54\uc77c\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694!"})]}),Object(r.jsxs)(_,{children:[Object(r.jsx)("label",{htmlFor:"category",children:"\uce74\ud14c\uace0\ub9ac"}),Object(r.jsxs)(S,{value:l,onChange:function(e){b(e.target.value)},id:"category",required:!0,children:[Object(r.jsx)(k,{value:"\uacf5\uc775",children:"\uacf5\uc775"}),Object(r.jsx)(k,{value:"\uc0ac\ud68c",children:"\uc0ac\ud68c"}),Object(r.jsx)(k,{value:"\ud658\uacbd",children:"\ud658\uacbd"}),Object(r.jsx)("option",{})]}),Object(r.jsxs)(A,{onClick:function(){return B(!0)},children:[Object(r.jsx)(p.a,{icon:f.c}),"\uce74\ud14c\uace0\ub9ac \uc548\ub0b4"]}),Object(r.jsx)("label",{htmlFor:"name",children:"\ucea0\ud398\uc778 \uc774\ub984"}),Object(r.jsx)(M,{value:t,onChange:function(e){n(e.target.value)},id:"name",type:"text",placeholder:"\ucea0\ud398\uc778 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0,autoComplete:"off"}),Object(r.jsx)("label",{htmlFor:"desc",children:"\ucea0\ud398\uc778 \uc124\uba85"}),Object(r.jsx)(M,{value:h,onChange:function(e){m(e.target.value)},id:"desc",as:"textarea",rows:5,placeholder:"\ucea0\ud398\uc778\uc5d0 \ub300\ud574 \uc124\uba85\ud574\uc8fc\uc138\uc694",required:!0,autoComplete:"off"}),Object(r.jsx)("label",{htmlFor:"amount",children:"\ubaa9\ud45c \ubaa8\uae08 \uae08\uc561"}),Object(r.jsx)(M,{value:y,onChange:function(e){P(e.target.value)},id:"amount",type:"number",placeholder:"\ubaa9\ud45c \ubaa8\uae08 \uae08\uc561\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0}),Object(r.jsx)("label",{htmlFor:"min",children:"\ucd5c\uc18c \ubaa8\uae08 \ub2e8\uc704"}),Object(r.jsx)(M,{value:N,onChange:function(e){q(e.target.value)},id:"min",type:"number",placeholder:"\ucd5c\uc18c \ubaa8\uae08 \ub2e8\uc704\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",required:!0}),Object(r.jsx)(I,{onClick:function(e){return function(e,t,n,r,o,a){e.preventDefault(),"0x00"!==H?Object(d.b)(t,n,r,o,H,a):D(!0)}(e,t,h,y,l,N)},children:"0x00"!==H?"\uc81c\ucd9c\ud558\uae30":"\uc9c0\uac11 \uc5f0\ub3d9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"})]})]})}),X&&Object(r.jsx)(j,{})]})}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},VEhC:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n("vJKn"),o=n.n(r),a=n("rg98"),i=n("vDqi"),c=n.n(i),u="http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/pre-campaigns",l=function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("".concat(u,"/campaign_all"));case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e,t,n,r,o,a){var i={name:e,description:t,targetAmount:Number(n),currentAmount:0,fundingStatus:!0,refundStatus:!1,category:r,creatorAddress:o,minFundingAmount:Number(a)};c.a.post("".concat(u,"/create_campaign"),i).then((function(e){return alert("\uc815\uc0c1\uc801\uc73c\ub85c \uc81c\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4 :)")})).catch((function(e){return console.log(e)}))}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},dwUX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaign",function(){return n("SR0E")}])},g4pe:function(e,t,n){e.exports=n("8Kt/")},hizP:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o);function i(e){var t=e.title,n=void 0===t?"\ud074\ub808\uc774\ud2bc \uae30\ubc18 \uae30\ubd80 \ud50c\ub7ab\ud3fc":t;return Object(r.jsxs)(a.a,{children:[Object(r.jsxs)("title",{children:["\uc870\uac01\ubcf4 | ",n]}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossOrigin:"anonymous"})]})}},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},iaY6:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l}));var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"center",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center";return"display: flex;\n  justify-content: ".concat(e,";\n  align-items: ").concat(t,";")},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"center",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center";return"display: flex;\n  flex-direction: column;\n  justify-content: ".concat(e,";\n  align-items: ").concat(t,";")},a=function(e){return"@media (max-width: ".concat(e,"px)")},i={custom:a,tablet:a(1100),768:a(768),mobile:a(500)},c={mainColor:"#f49a4a",white:"#fff",gray1:"#f8f9fa",gray2:"#e5e5e5",gray3:"#cecece",gray4:"#b4b4b4",gray5:"#9c9c9c",gray6:"#767676",gray7:"#585858",black:"#333"},u={textColor:"#333",bgColor:"#fff",contentBgColor:"#fff",borderColor:"1px solid rgba(0, 0, 0, 0.1)",gradient:"linear-gradient(45deg, #ffe259 0%,#f49a4a 100%)",boxShadow1:"4px 12px 30px 6px rgb(0 0 0 / 9%)",boxShadow2:"4px 12px 30px 6px rgb(0 0 0 / 18%)",gray:{gray1:"#585858",gray2:"#737373",gray3:"#8d8e8e",gray4:"#a8a9a9",gray5:"#c3c3c4",gray6:"#dddedf",gray7:"#f8f9fa"},glass:{bgColor:"rgba(255, 255, 255, 0.25)",border:"1px solid rgba(255, 255, 255, 0.18)",boxShadow:"rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",color:"rgb(28,28,28)"}},l={textColor:"rgba(255,255,255,0.8)",bgColor:"#000",contentBgColor:"gray",borderColor:"1px solid rgba(255, 255, 255, 0.3)",gradient:"linear-gradient(45deg, #ffe259 0%,#f49a4a 100%)",boxShadow1:"4px 12px 30px 6px rgb(255 255 255 / 9%)",boxShadow2:"4px 12px 30px 6px rgb(255 255 255 / 18%)",gray:{gray1:"#f8f9fa",gray2:"#e5e5e5",gray3:"#cecece",gray4:"#b4b4b4",gray5:"#9c9c9c",gray6:"#767676",gray7:"#585858"},glass:{bgColor:"rgba(89, 89, 89, 0.25)",border:"1px solid rgba(255, 255, 255, 0.18)",boxShadow:"rgba(14, 14, 14, 0.19) 0px 6px 15px 0px",color:"rgb(255, 255, 255, 0.75)"}}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},v1QY:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n("T1Xd"),o=(Object(r.b)({key:"signInKey",default:!1}),Object(r.b)({key:"connectWalletKey",default:!1})),a=Object(r.b)({key:"showCategoryModalState",default:!1}),i=Object(r.b)({key:"loginKey",default:!1}),c=Object(r.b)({key:"myAddressKey",default:"0x00"}),u=Object(r.b)({key:"myBalanceKey",default:"0"}),l=Object(r.b)({key:"qrcodeKey",default:"DEFAULT"}),s=Object(r.b)({key:"modalPropsKey",default:{title:"MODAL",onConfirm:function(){}}}),d=Object(r.b)({key:"subMenuState",default:!1}),f=Object(r.b)({key:"verifyModalState",default:!1});Object(r.b)({key:"loginPlatformState",default:"None"})},xvhg:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("8rE2");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["dwUX",0,1,5,9,2,3,4,10]]]);