(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{BVPD:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u}));var r=n("vJKn"),o=n.n(r),a=n("rg98"),i=(n("CROl"),n("HXs4"),n("xRy9")),s=n("DcK4"),c=(n("mKgc"),function(){var t=Object(a.a)(o.a.mark((function t(e,n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"undefined"!==typeof window.klaytn&&window.klaytn,t.prev=1,t.next=4,window.klaytn.enable();case 4:return r=t.sent,Object(i.d)(r[0],"kaikas",n),t.abrupt("return",r[0]);case 9:t.prev=9,t.t0=t.catch(1),Object(i.d)(accounts[0],"kaikas",n);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=function(){var t=Object(a.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.klaytn.on("accountsChanged",(function(t){console.log("\uacc4\uc815\ubc14\ub01c",t[0]),Object(s.b)(t[0],e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.klaytn._kaikas.isUnlocked();case 2:(e=t.sent)||Object(s.c)(),console.log(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},PVQ3:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));var r=n("vJKn"),o=n.n(r),a=n("rg98"),i=n("vDqi"),s=n.n(i),c="0xe7bbC0ec719f1836AA89724bF0010A6268D11B92",l="https://a2a-api.klipwallet.com/v2/a2a/prepare",u="JOGAKBO",f=function(t,e){return"QR"===t?"https://klipwallet.com/?target=/a2a?request_key=".concat(e):"kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=".concat(e)},d=function(){var t=Object(a.a)(o.a.mark((function t(e,n,r,a,i){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:'{"constant":false,"inputs":[{"name":"_campaign_address","type":"address"},{"name":"_target_amount","type":"uint256"},{"name":"_campaign_ID","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}',h(c,'{"constant":false,"inputs":[{"name":"_campaign_address","type":"address"},{"name":"_target_amount","type":"uint256"},{"name":"_campaign_ID","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}',"0",'["'.concat(e,'","').concat(n,'","').concat(r,'"]'),a,i);case 2:case"end":return t.stop()}}),t)})));return function(e,n,r,o,a){return t.apply(this,arguments)}}(),h=function(t,e,n,r,o,a){s.a.post(l,{bapp:{name:u},type:"execute_contract",transaction:{to:t,value:n,abi:e,params:r}}).then((function(t){var e=t.data.request_key;o(f("QR",e));var n=setInterval((function(){s.a.get("https://a2a-api.klipwallet.com/v2/a2a/result?request_key=".concat(e)).then((function(t){t.data.result&&(console.log("[result] ".concat(JSON.stringify(t.data.result))),a(t.data.result),clearInterval(n),o("DEFAULT"))}))}),1e3)}))},p=function(t,e){s.a.post(l,{bapp:{name:u},type:"auth"}).then((function(n){var r=n.data.request_key;t(f("QR",r)),console.log("response:".concat(n));var o=setInterval((function(){s.a.get("https://a2a-api.klipwallet.com/v2/a2a/result?request_key=".concat(r)).then((function(n){n.data.result&&(console.log("[Result] ".concat(JSON.stringify(n.data.result))),e(n.data.result.klaytn_address),clearInterval(o),t("DEFAULT"))}))}),1e3)}))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("zoAU"),o=n("7KCV");e.__esModule=!0,e.default=void 0;var a=o(n("q1tI")),i=n("elyg"),s=n("nOHt"),c=n("vNVm"),l={};function u(t,e,n,r){if(t&&(0,i.isLocalURL)(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;l[e+"%"+n+(o?"%"+o:"")]=!0}}var f=function(t){var e=!1!==t.prefetch,n=(0,s.useRouter)(),o=n&&n.asPath||"/",f=a.default.useMemo((function(){var e=(0,i.resolveHref)(o,t.href,!0),n=r(e,2),a=n[0],s=n[1];return{href:a,as:t.as?(0,i.resolveHref)(o,t.as):s||a}}),[o,t.href,t.as]),d=f.href,h=f.as,p=t.children,g=t.replace,m=t.shallow,v=t.scroll,b=t.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var w=a.Children.only(p),C=w&&"object"===typeof w&&w.ref,y=(0,c.useIntersection)({rootMargin:"200px"}),M=r(y,2),x=M[0],E=M[1],O=a.default.useCallback((function(t){x(t),C&&("function"===typeof C?C(t):"object"===typeof C&&(C.current=t))}),[C,x]);(0,a.useEffect)((function(){var t=E&&e&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=l[d+"%"+h+(r?"%"+r:"")];t&&!o&&u(n,d,h,{locale:r})}),[h,d,E,b,e,n]);var k={ref:O,onClick:function(t){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,a,s,c){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,i.isLocalURL)(n))&&(t.preventDefault(),null==s&&(s=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:s}))}(t,n,d,h,g,m,v,b)},onMouseEnter:function(t){(0,i.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(t),u(n,d,h,{priority:!0}))}};if(t.passHref||"a"===w.type&&!("href"in w.props)){var _="undefined"!==typeof b?b:n&&n.locale,N=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(h,_,n&&n.locales,n&&n.domainLocales);k.href=N||(0,i.addBasePath)((0,i.addLocale)(h,_,n&&n.defaultLocale))}return a.default.cloneElement(w,k)};e.default=f},t8rn:function(t,e,n){"use strict";var r,o=n("nKUr"),a=n("vJKn"),i=n.n(a),s=n("rg98"),c=n("xvhg"),l=n("wHSu"),u=n("IP2g"),f=n("T1Xd"),d=n("vOnD"),h=n("q1tI"),p=n.n(h),g=Object.defineProperty,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,w=(t,e,n)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,C=(t,e)=>{for(var n in e||(e={}))v.call(e,n)&&w(t,n,e[n]);if(m)for(var n of m(e))b.call(e,n)&&w(t,n,e[n]);return t},y=(t,e)=>{var n={};for(var r in t)v.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&m)for(var r of m(t))e.indexOf(r)<0&&b.call(t,r)&&(n[r]=t[r]);return n};(t=>{const e=class{constructor(t,n,r,o){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version value out of range";if(o<-1||o>7)throw"Mask value out of range";this.size=4*t+17;let i=[];for(let e=0;e<this.size;e++)i.push(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(r);if(this.drawCodewords(s),-1==o){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const n=this.getPenaltyScore();n<t&&(o=e,t=n),this.applyMask(e)}}a(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(n,r){const o=t.QrSegment.makeSegments(n);return e.encodeSegments(o,r)}static encodeBinary(n,r){const o=t.QrSegment.makeBytes(n);return e.encodeSegments([o],r)}static encodeSegments(t,n,o=1,i=40,c=-1,l=!0){if(!(e.MIN_VERSION<=o&&o<=i&&i<=e.MAX_VERSION)||c<-1||c>7)throw"Invalid value";let u,f;for(u=o;;u++){const r=8*e.getNumDataCodewords(u,n),o=s.getTotalBits(t,u);if(o<=r){f=o;break}if(u>=i)throw"Data too long"}for(const r of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])l&&f<=8*e.getNumDataCodewords(u,r)&&(n=r);let d=[];for(const e of t){r(e.mode.modeBits,4,d),r(e.numChars,e.mode.numCharCountBits(u),d);for(const t of e.getData())d.push(t)}a(d.length==f);const h=8*e.getNumDataCodewords(u,n);a(d.length<=h),r(0,Math.min(4,h-d.length),d),r(0,(8-d.length%8)%8,d),a(d.length%8==0);for(let e=236;d.length<h;e^=253)r(e,8,d);let p=[];for(;8*p.length<d.length;)p.push(0);return d.forEach(((t,e)=>p[e>>>3]|=t<<7-(7&e))),new e(u,n,p,c)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let r=0;r<e;r++)0==n&&0==r||0==n&&r==e-1||n==e-1&&0==r||this.drawAlignmentPattern(t[n],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let o=0;o<10;o++)n=n<<1^1335*(n>>>9);const r=21522^(e<<10|n);a(r>>>15==0);for(let a=0;a<=5;a++)this.setFunctionModule(8,a,o(r,a));this.setFunctionModule(8,7,o(r,6)),this.setFunctionModule(8,8,o(r,7)),this.setFunctionModule(7,8,o(r,8));for(let a=9;a<15;a++)this.setFunctionModule(14-a,8,o(r,a));for(let a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,o(r,a));for(let a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,o(r,a));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;a(e>>>18==0);for(let n=0;n<18;n++){const t=o(e,n),r=this.size-11+n%3,a=Math.floor(n/3);this.setFunctionModule(r,a,t),this.setFunctionModule(a,r,t)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),a=t+r,i=e+n;0<=a&&a<this.size&&0<=i&&i<this.size&&this.setFunctionModule(a,i,2!=o&&4!=o)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(t+r,e+n,1!=Math.max(Math.abs(r),Math.abs(n)))}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const n=this.version,r=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,r))throw"Invalid argument";const o=e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],i=e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(e.getNumRawDataModules(n)/8),c=o-s%o,l=Math.floor(s/o);let u=[];const f=e.reedSolomonComputeDivisor(i);for(let a=0,h=0;a<o;a++){let n=t.slice(h,h+l-i+(a<c?0:1));h+=n.length;const r=e.reedSolomonComputeRemainder(n,f);a<c&&n.push(0),u.push(n.concat(r))}let d=[];for(let e=0;e<u[0].length;e++)u.forEach(((t,n)=>{(e!=l-i||n>=c)&&d.push(t[e])}));return a(d.length==s),d}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw"Invalid argument";let n=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let r=0;r<this.size;r++)for(let a=0;a<2;a++){const i=e-a,s=0==(e+1&2)?this.size-1-r:r;!this.isFunction[s][i]&&n<8*t.length&&(this.modules[s][i]=o(t[n>>>3],7-(7&n)),n++)}}a(n==8*t.length)}applyMask(t){if(t<0||t>7)throw"Mask value out of range";for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let r;switch(t){case 0:r=(n+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+e)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:r=n*e%2+n*e%3==0;break;case 6:r=(n*e%2+n*e%3)%2==0;break;case 7:r=((n+e)%2+n*e%3)%2==0;break;default:throw"Unreachable"}!this.isFunction[e][n]&&r&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let a=0;a<this.size;a++){let n=!1,r=0,o=[0,0,0,0,0,0,0];for(let i=0;i<this.size;i++)this.modules[a][i]==n?(r++,5==r?t+=e.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,o),n||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),n=this.modules[a][i],r=1);t+=this.finderPenaltyTerminateAndCount(n,r,o)*e.PENALTY_N3}for(let a=0;a<this.size;a++){let n=!1,r=0,o=[0,0,0,0,0,0,0];for(let i=0;i<this.size;i++)this.modules[i][a]==n?(r++,5==r?t+=e.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,o),n||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),n=this.modules[i][a],r=1);t+=this.finderPenaltyTerminateAndCount(n,r,o)*e.PENALTY_N3}for(let a=0;a<this.size-1;a++)for(let n=0;n<this.size-1;n++){const r=this.modules[a][n];r==this.modules[a][n+1]&&r==this.modules[a+1][n]&&r==this.modules[a+1][n+1]&&(t+=e.PENALTY_N2)}let n=0;for(const e of this.modules)n=e.reduce(((t,e)=>t+(e?1:0)),n);const r=this.size*this.size,o=Math.ceil(Math.abs(20*n-10*r)/r)-1;return a(0<=o&&o<=9),t+=o*e.PENALTY_N4,a(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{const t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2));let n=[6];for(let r=this.size-7;n.length<t;r-=e)n.splice(1,0,r);return n}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version number out of range";let n=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;n-=(25*e-10)*e-55,t>=7&&(n-=36)}return a(208<=n&&n<=29648),n}static getNumDataCodewords(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw"Degree out of range";let n=[];for(let e=0;e<t-1;e++)n.push(0);n.push(1);let r=1;for(let o=0;o<t;o++){for(let t=0;t<n.length;t++)n[t]=e.reedSolomonMultiply(n[t],r),t+1<n.length&&(n[t]^=n[t+1]);r=e.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(t,n){let r=n.map((t=>0));for(const o of t){const t=o^r.shift();r.push(0),n.forEach(((n,o)=>r[o]^=e.reedSolomonMultiply(n,t)))}return r}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw"Byte out of range";let n=0;for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(e>>>r&1)*t;return a(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];a(e<=3*this.size);const n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}};let n=e;function r(t,e,n){if(e<0||e>31||t>>>e!=0)throw"Value out of range";for(let r=e-1;r>=0;r--)n.push(t>>>r&1)}function o(t,e){return 0!=(t>>>e&1)}function a(t){if(!t)throw"Assertion error"}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;const i=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw"Invalid argument";this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)r(n,8,e);return new i(i.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!i.isNumeric(t))throw"String contains non-numeric characters";let e=[];for(let n=0;n<t.length;){const o=Math.min(t.length-n,3);r(parseInt(t.substr(n,o),10),3*o+1,e),n+=o}return new i(i.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!i.isAlphanumeric(t))throw"String contains unencodable characters in alphanumeric mode";let e,n=[];for(e=0;e+2<=t.length;e+=2){let o=45*i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));o+=i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),r(o,11,n)}return e<t.length&&r(i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new i(i.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:i.isNumeric(t)?[i.makeNumeric(t)]:i.isAlphanumeric(t)?[i.makeAlphanumeric(t)]:[i.makeBytes(i.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw"ECI assignment value out of range";if(t<128)r(t,8,e);else if(t<16384)r(2,2,e),r(t,14,e);else{if(!(t<1e6))throw"ECI assignment value out of range";r(6,3,e),r(t,21,e)}return new i(i.Mode.ECI,0,e)}static isNumeric(t){return i.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return i.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const r of t){const t=r.mode.numCharCountBits(e);if(r.numChars>=1<<t)return 1/0;n+=4+t+r.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)"%"!=t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let s=i;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=s})(r||(r={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}};let n=e;n.LOW=new e(0,1),n.MEDIUM=new e(1,0),n.QUARTILE=new e(2,3),n.HIGH=new e(3,2),t.Ecc=n})(e=t.QrCode||(t.QrCode={}))})(r||(r={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}};let n=e;n.NUMERIC=new e(1,[10,12,14]),n.ALPHANUMERIC=new e(2,[9,11,13]),n.BYTE=new e(4,[8,16,16]),n.KANJI=new e(8,[8,10,12]),n.ECI=new e(7,[0,0,0]),t.Mode=n})(e=t.QrSegment||(t.QrSegment={}))})(r||(r={}));var M=r,x={L:M.QrCode.Ecc.LOW,M:M.QrCode.Ecc.MEDIUM,Q:M.QrCode.Ecc.QUARTILE,H:M.QrCode.Ecc.HIGH},E={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function O(t,e=0){const n=[];return t.forEach((function(t,r){let o=null;t.forEach((function(a,i){if(!a&&null!==o)return n.push(`M${o+e} ${r+e}h${i-o}v1H${o+e}z`),void(o=null);if(i!==t.length-1)a&&null===o&&(o=i);else{if(!a)return;null===o?n.push(`M${i+e},${r+e} h1v1H${i+e}z`):n.push(`M${o+e},${r+e} h${i+1-o}v1H${o+e}z`)}}))})),n.join("")}function k(t,e){return t.slice().map(((t,n)=>n<e.y||n>=e.y+e.h?t:t.map(((t,n)=>(n<e.x||n>=e.x+e.w)&&t))))}function _(t,e){const{imageSettings:n,size:r,includeMargin:o}=t;if(null==n)return null;const a=o?4:0,i=e.length+2*a,s=Math.floor(.1*r),c=i/r,l=(n.width||s)*c,u=(n.height||s)*c,f=null==n.x?e.length/2-l/2:n.x*c,d=null==n.y?e.length/2-u/2:n.y*c;let h=null;if(n.excavate){let t=Math.floor(f),e=Math.floor(d);h={x:t,y:e,w:Math.ceil(l+f-t),h:Math.ceil(u+d-e)}}return{x:f,y:d,h:u,w:l,excavation:h}}var N=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function A(t){const e=Object(h.useRef)(null),n=Object(h.useRef)(null);function r(){const{value:r,size:o,level:a,bgColor:i,fgColor:s,includeMargin:c}=t;if(null!=e.current){const l=e.current,u=l.getContext("2d");if(!u)return;let f=M.QrCode.encodeText(r,x[a]).getModules();const d=c?4:0,h=f.length+2*d,p=_(t,f),g=n.current,m=null!=p&&null!==g&&g.complete&&0!==g.naturalHeight&&0!==g.naturalWidth;m&&null!=p.excavation&&(f=k(f,p.excavation));const v=window.devicePixelRatio||1;l.height=l.width=o*v;const b=o/h*v;u.scale(b,b),u.fillStyle=i,u.fillRect(0,0,h,h),u.fillStyle=s,N?u.fill(new Path2D(O(f,d))):f.forEach((function(t,e){t.forEach((function(t,n){t&&u.fillRect(n+d,e+d,1,1)}))})),m&&u.drawImage(g,p.x+d,p.y+d,p.w,p.h)}}Object(h.useEffect)((()=>{r()}));const o=t,{value:a,size:i,level:s,bgColor:c,fgColor:l,style:u,includeMargin:f,imageSettings:d}=o,g=y(o,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),m=C({height:i,width:i},u);let v=null,b=null==d?void 0:d.src;return null!=b&&(v=p.a.createElement("img",{src:b,key:b,style:{display:"none"},onLoad:()=>{r()},ref:n})),p.a.createElement(p.a.Fragment,null,p.a.createElement("canvas",C({style:m,height:i,width:i,ref:e},g)),v)}function R(t){const e=t,{value:n,size:r,level:o,bgColor:a,fgColor:i,includeMargin:s,imageSettings:c}=e,l=y(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let u=M.QrCode.encodeText(n,x[o]).getModules();const f=s?4:0,d=u.length+2*f,h=_(t,u);let g=null;null!=c&&null!=h&&(null!=h.excavation&&(u=k(u,h.excavation)),g=p.a.createElement("image",{xlinkHref:c.src,height:h.h,width:h.w,x:h.x+f,y:h.y+f,preserveAspectRatio:"none"}));const m=O(u,f);return p.a.createElement("svg",C({shapeRendering:"crispEdges",height:r,width:r,viewBox:`0 0 ${d} ${d}`},l),p.a.createElement("path",{fill:a,d:`M0,0 h${d}v${d}H0z`}),p.a.createElement("path",{fill:i,d:m}),g)}A.defaultProps=E,R.defaultProps=E;var j=t=>{const e=t,{renderAs:n}=e,r=y(e,["renderAs"]),o="svg"===n?R:A;return p.a.createElement(o,C({},r))};j.defaultProps=C({renderAs:"canvas"},E);var I=n("iaY6"),P=n("v1QY"),S=n("BVPD"),L=d.b.div.withConfig({displayName:"ConnectWalletModal__ModalWrapper",componentId:"sc-fxkdhf-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.7);z-index:99999;transition:all 0.2s ease-in-out;"]),z=d.b.div.withConfig({displayName:"ConnectWalletModal__ModalContent",componentId:"sc-fxkdhf-1"})(["background:gray;border-radius:10px;transition:all 0.2 ease-in-out;width:500px;padding:44px 51px;","{width:520px;padding:28px 33px;}","{width:300px;padding:20px 22px;}"],I.f.tablet,I.f[768]),D=d.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletContainer",componentId:"sc-fxkdhf-2"})(["display:flex;flex-direction:column;justify-content:center;transition:all 0.2s ease-in-out;"]),F=d.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletModalHeader",componentId:"sc-fxkdhf-3"})(["display:flex;justify-content:space-between;align-items:center;width:100%;transition:all 0.2s ease-in-out;color:white;button{all:unset;cursor:pointer;}margin-bottom:28px;","{margin-bottom:24px;}h5{font-size:20px;","{font-size:18px;}}"],I.f[768],I.f.tablet),T=d.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletModalContent",componentId:"sc-fxkdhf-4"})(["display:flex;justify-content:space-between;width:100%;","{flex-direction:column;align-items:center;}"],I.f[768]),H=d.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletCard",componentId:"sc-fxkdhf-5"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;width:180px;height:160px;padding:0 20px;box-sizing:border-box;background:",";border-radius:10px;h5{margin-top:15px;color:white;font-size:14px;}",";transition:all 0.2s ease-in-out;&:hover{",";transform:translateY(-5px);}","{width:260px;margin-bottom:20px;}","{width:230px;}"],(function(t){return t.theme.gradient}),(function(t){return t.theme.boxShadow1}),(function(t){return t.theme.boxShadow2}),I.f[768],I.f.mobile),B=d.b.div.withConfig({displayName:"ConnectWalletModal__QRContainer",componentId:"sc-fxkdhf-6"})(["display:flex;justify-content:center;align-items:center;width:100%;padding:20px;"]);e.a=function(){var t=Object(f.c)(P.h),e=Object(c.a)(t,2),n=e[0],r=e[1],a=Object(f.c)(P.c),d=Object(c.a)(a,2),p=d[0],g=(d[1],Object(f.c)(P.f)),m=Object(c.a)(g,2),v=m[0],b=m[1],w=Object(f.c)(P.d),C=Object(c.a)(w,2),y=C[0],M=C[1],x=Object(f.c)(P.e),E=Object(c.a)(x,2),O=(E[0],E[1],Object(f.c)(P.b)),k=Object(c.a)(O,2),_=k[0],N=k[1],A=Object(h.useState)(!1),R=A[0],I=A[1],U=function(){var t=Object(s.a)(i.a.mark((function t(e,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.b)(y,M);case 2:t.sent,r(!1);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:n&&Object(o.jsx)(L,{onClick:function(){return r(!1)},children:Object(o.jsx)(z,{onClick:function(t){t.stopPropagation()},children:Object(o.jsxs)(D,{children:[Object(o.jsxs)(F,{children:[Object(o.jsx)("h5",{children:p.title}),Object(o.jsx)("button",{children:Object(o.jsx)(u.a,{onClick:function(){r(!1),b("DEFAULT")},icon:l.d})})]}),Object(o.jsx)(T,{children:"0x00"!=y||R?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(B,{children:Object(o.jsx)(j,{value:v,size:256,includeMargin:!0})})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(H,{onClick:function(){return U(_,N)},children:[Object(o.jsx)("img",{src:"/kaikas-logo.svg"}),Object(o.jsx)("h5",{children:"Connect To Kaikas "})]}),Object(o.jsxs)(H,{onClick:function(){p.onConfirm(),I(!0)},children:[Object(o.jsx)("img",{src:"/klip-logo.svg"}),Object(o.jsx)("h5",{children:"Connect To Klip "})]})]})})]})})})})}},vNVm:function(t,e,n){"use strict";var r=n("zoAU");e.__esModule=!0,e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!i,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,o.useCallback)((function(t){c.current&&(c.current(),c.current=void 0),n||f||t&&t.tagName&&(c.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=s.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return s.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(t,e),a.observe(t),function(){i.delete(t),a.unobserve(t),0===i.size&&(a.disconnect(),s.delete(o))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,f]);return(0,o.useEffect)((function(){if(!i&&!f){var t=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(t)}}}),[f]),[h,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var s=new Map},xRy9:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return h}));var r=n("vJKn"),o=n.n(r),a=n("rg98"),i=n("vDqi"),s=n.n(i),c=n("DcK4"),l="http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account-wc",u=function(){var t=Object(a.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(l,"/user_all"));case 2:n=t.sent,e(n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(l,"/user/addr/").concat(e)).then((function(t){t.data&&(console.log("[Result] ".concat(JSON.stringify(t.data.result))),n(t.data.id))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(t,e,n){var r={walletAddress:t,walletKind:e,nickName:"user".concat(t)};s.a.post("".concat(l,"/create_user"),r).then((function(e){console.log("\uc720\uc800\ub4f1\ub85d"),Object(c.b)(t,n)})).catch((function(e){console.log(e),console.log("\ub85c\uadf8\uc778\uc131\uacf5"),Object(c.b)(t,n)}))},h=function(t){s.a.delete("".concat(l,"/user/delete/").concat(t)).then((function(e){console.log("".concat(t,"\ubc88\uc9f8 \uc720\uc800\uc0ad\uc81c \uc131\uacf5"))})).catch((function(t){return console.log(t)}))}}}]);