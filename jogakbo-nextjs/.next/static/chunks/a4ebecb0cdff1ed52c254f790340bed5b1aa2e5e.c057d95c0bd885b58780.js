(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{BVPD:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u}));var a=n("vJKn"),o=n.n(a),r=n("rg98"),i=(n("CROl"),n("HXs4"),n("xRy9")),s=n("DcK4"),c=(n("mKgc"),function(){var t=Object(r.a)(o.a.mark((function t(e,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"undefined"!==typeof window.klaytn&&window.klaytn,t.prev=1,t.next=4,window.klaytn.enable();case 4:return a=t.sent,Object(i.d)(a[0],"kaikas",n),t.abrupt("return",a[0]);case 9:t.prev=9,t.t0=t.catch(1),Object(i.d)(accounts[0],"kaikas",n);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=function(){var t=Object(r.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.klaytn.on("accountsChanged",(function(t){console.log("\uacc4\uc815\ubc14\ub01c",t[0]),Object(s.b)(t[0],e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(r.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.klaytn._kaikas.isUnlocked();case 2:(e=t.sent)||Object(s.c)(),console.log(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},HXs4:function(t,e,n){"use strict"},PVQ3:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return b}));var a=n("vJKn"),o=n.n(a),r=n("rg98"),i=n("vDqi"),s=n.n(i),c=n("I5Yw"),l=n("1UBF"),u="https://a2a-api.klipwallet.com/v2/a2a/prepare",d="JOGAKBO",h=function(t,e){return"QR"===t?"https://klipwallet.com/?target=/a2a?request_key=".concat(e):"kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=".concat(e)},f=function(){var t=Object(r.a)(o.a.mark((function t(e,n,a,r,i){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:'{"constant":false,"inputs":[{"name":"_campaign_address","type":"address"},{"name":"_target_amount","type":"uint256"},{"name":"_campaign_ID","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}',g(c.c,'{"constant":false,"inputs":[{"name":"_campaign_address","type":"address"},{"name":"_target_amount","type":"uint256"},{"name":"_campaign_ID","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}',"0",'["'.concat(e,'","').concat(n,'","').concat(a,'"]'),r,i);case 2:case"end":return t.stop()}}),t)})));return function(e,n,a,o,r){return t.apply(this,arguments)}}(),p=function(){var t=Object(r.a)(o.a.mark((function t(e,n,a,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:'{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"},{"name":"_userAddr","type":"address"}],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}',g(c.c,'{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"},{"name":"_userAddr","type":"address"}],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}',"0",'["'.concat(e,'","').concat(n,'"]'),a,r);case 2:case"end":return t.stop()}}),t)})));return function(e,n,a,o){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(o.a.mark((function t(e,n,a,r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:'{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"donateTocampaign","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}',g(c.c,'{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"donateTocampaign","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}',Object(l.a)(n).toString(),'["'.concat(e,'","').concat(n,'"]'),a,r);case 2:case"end":return t.stop()}}),t)})));return function(e,n,a,o){return t.apply(this,arguments)}}(),g=function(t,e,n,a,o,r){s.a.post(u,{bapp:{name:d},type:"execute_contract",transaction:{to:t,value:n,abi:e,params:a}}).then((function(t){var e=t.data.request_key;o(h("QR",e));var n=setInterval((function(){s.a.get("https://a2a-api.klipwallet.com/v2/a2a/result?request_key=".concat(e)).then((function(t){t.data.result&&(console.log("[result] ".concat(JSON.stringify(t.data.result))),r(t.data.result),clearInterval(n),o("DEFAULT"))}))}),1e3)}))},b=function(t,e){s.a.post(u,{bapp:{name:d},type:"auth"}).then((function(n){var a=n.data.request_key;t(h("QR",a)),console.log("response:".concat(n));var o=setInterval((function(){s.a.get("https://a2a-api.klipwallet.com/v2/a2a/result?request_key=".concat(a)).then((function(n){n.data.result&&(console.log("[Result] ".concat(JSON.stringify(n.data.result))),e(n.data.result.klaytn_address),clearInterval(o),t("DEFAULT"))}))}),1e3)}))}},t8rn:function(t,e,n){"use strict";var a,o=n("nKUr"),r=n("vJKn"),i=n.n(r),s=n("rg98"),c=n("xvhg"),l=n("wHSu"),u=n("IP2g"),d=n("T1Xd"),h=n("vOnD"),f=n("q1tI"),p=n.n(f),m=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,y=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,C=(t,e)=>{for(var n in e||(e={}))b.call(e,n)&&y(t,n,e[n]);if(g)for(var n of g(e))w.call(e,n)&&y(t,n,e[n]);return t},v=(t,e)=>{var n={};for(var a in t)b.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&g)for(var a of g(t))e.indexOf(a)<0&&w.call(t,a)&&(n[a]=t[a]);return n};(t=>{const e=class{constructor(t,n,a,o){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version value out of range";if(o<-1||o>7)throw"Mask value out of range";this.size=4*t+17;let i=[];for(let e=0;e<this.size;e++)i.push(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.isFunction.push(i.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(a);if(this.drawCodewords(s),-1==o){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const n=this.getPenaltyScore();n<t&&(o=e,t=n),this.applyMask(e)}}r(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(n,a){const o=t.QrSegment.makeSegments(n);return e.encodeSegments(o,a)}static encodeBinary(n,a){const o=t.QrSegment.makeBytes(n);return e.encodeSegments([o],a)}static encodeSegments(t,n,o=1,i=40,c=-1,l=!0){if(!(e.MIN_VERSION<=o&&o<=i&&i<=e.MAX_VERSION)||c<-1||c>7)throw"Invalid value";let u,d;for(u=o;;u++){const a=8*e.getNumDataCodewords(u,n),o=s.getTotalBits(t,u);if(o<=a){d=o;break}if(u>=i)throw"Data too long"}for(const a of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])l&&d<=8*e.getNumDataCodewords(u,a)&&(n=a);let h=[];for(const e of t){a(e.mode.modeBits,4,h),a(e.numChars,e.mode.numCharCountBits(u),h);for(const t of e.getData())h.push(t)}r(h.length==d);const f=8*e.getNumDataCodewords(u,n);r(h.length<=f),a(0,Math.min(4,f-h.length),h),a(0,(8-h.length%8)%8,h),r(h.length%8==0);for(let e=236;h.length<f;e^=253)a(e,8,h);let p=[];for(;8*p.length<h.length;)p.push(0);return h.forEach(((t,e)=>p[e>>>3]|=t<<7-(7&e))),new e(u,n,p,c)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let a=0;a<e;a++)0==n&&0==a||0==n&&a==e-1||n==e-1&&0==a||this.drawAlignmentPattern(t[n],t[a]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let o=0;o<10;o++)n=n<<1^1335*(n>>>9);const a=21522^(e<<10|n);r(a>>>15==0);for(let r=0;r<=5;r++)this.setFunctionModule(8,r,o(a,r));this.setFunctionModule(8,7,o(a,6)),this.setFunctionModule(8,8,o(a,7)),this.setFunctionModule(7,8,o(a,8));for(let r=9;r<15;r++)this.setFunctionModule(14-r,8,o(a,r));for(let r=0;r<8;r++)this.setFunctionModule(this.size-1-r,8,o(a,r));for(let r=8;r<15;r++)this.setFunctionModule(8,this.size-15+r,o(a,r));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let n=0;n<12;n++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;r(e>>>18==0);for(let n=0;n<18;n++){const t=o(e,n),a=this.size-11+n%3,r=Math.floor(n/3);this.setFunctionModule(a,r,t),this.setFunctionModule(r,a,t)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let a=-4;a<=4;a++){const o=Math.max(Math.abs(a),Math.abs(n)),r=t+a,i=e+n;0<=r&&r<this.size&&0<=i&&i<this.size&&this.setFunctionModule(r,i,2!=o&&4!=o)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let a=-2;a<=2;a++)this.setFunctionModule(t+a,e+n,1!=Math.max(Math.abs(a),Math.abs(n)))}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const n=this.version,a=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,a))throw"Invalid argument";const o=e.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][n],i=e.ECC_CODEWORDS_PER_BLOCK[a.ordinal][n],s=Math.floor(e.getNumRawDataModules(n)/8),c=o-s%o,l=Math.floor(s/o);let u=[];const d=e.reedSolomonComputeDivisor(i);for(let r=0,f=0;r<o;r++){let n=t.slice(f,f+l-i+(r<c?0:1));f+=n.length;const a=e.reedSolomonComputeRemainder(n,d);r<c&&n.push(0),u.push(n.concat(a))}let h=[];for(let e=0;e<u[0].length;e++)u.forEach(((t,n)=>{(e!=l-i||n>=c)&&h.push(t[e])}));return r(h.length==s),h}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw"Invalid argument";let n=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let a=0;a<this.size;a++)for(let r=0;r<2;r++){const i=e-r,s=0==(e+1&2)?this.size-1-a:a;!this.isFunction[s][i]&&n<8*t.length&&(this.modules[s][i]=o(t[n>>>3],7-(7&n)),n++)}}r(n==8*t.length)}applyMask(t){if(t<0||t>7)throw"Mask value out of range";for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let a;switch(t){case 0:a=(n+e)%2==0;break;case 1:a=e%2==0;break;case 2:a=n%3==0;break;case 3:a=(n+e)%3==0;break;case 4:a=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:a=n*e%2+n*e%3==0;break;case 6:a=(n*e%2+n*e%3)%2==0;break;case 7:a=((n+e)%2+n*e%3)%2==0;break;default:throw"Unreachable"}!this.isFunction[e][n]&&a&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let r=0;r<this.size;r++){let n=!1,a=0,o=[0,0,0,0,0,0,0];for(let i=0;i<this.size;i++)this.modules[r][i]==n?(a++,5==a?t+=e.PENALTY_N1:a>5&&t++):(this.finderPenaltyAddHistory(a,o),n||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),n=this.modules[r][i],a=1);t+=this.finderPenaltyTerminateAndCount(n,a,o)*e.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,a=0,o=[0,0,0,0,0,0,0];for(let i=0;i<this.size;i++)this.modules[i][r]==n?(a++,5==a?t+=e.PENALTY_N1:a>5&&t++):(this.finderPenaltyAddHistory(a,o),n||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),n=this.modules[i][r],a=1);t+=this.finderPenaltyTerminateAndCount(n,a,o)*e.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){const a=this.modules[r][n];a==this.modules[r][n+1]&&a==this.modules[r+1][n]&&a==this.modules[r+1][n+1]&&(t+=e.PENALTY_N2)}let n=0;for(const e of this.modules)n=e.reduce(((t,e)=>t+(e?1:0)),n);const a=this.size*this.size,o=Math.ceil(Math.abs(20*n-10*a)/a)-1;return r(0<=o&&o<=9),t+=o*e.PENALTY_N4,r(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{const t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2));let n=[6];for(let a=this.size-7;n.length<t;a-=e)n.splice(1,0,a);return n}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version number out of range";let n=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;n-=(25*e-10)*e-55,t>=7&&(n-=36)}return r(208<=n&&n<=29648),n}static getNumDataCodewords(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw"Degree out of range";let n=[];for(let e=0;e<t-1;e++)n.push(0);n.push(1);let a=1;for(let o=0;o<t;o++){for(let t=0;t<n.length;t++)n[t]=e.reedSolomonMultiply(n[t],a),t+1<n.length&&(n[t]^=n[t+1]);a=e.reedSolomonMultiply(a,2)}return n}static reedSolomonComputeRemainder(t,n){let a=n.map((t=>0));for(const o of t){const t=o^a.shift();a.push(0),n.forEach(((n,o)=>a[o]^=e.reedSolomonMultiply(n,t)))}return a}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw"Byte out of range";let n=0;for(let a=7;a>=0;a--)n=n<<1^285*(n>>>7),n^=(e>>>a&1)*t;return r(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];r(e<=3*this.size);const n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}};let n=e;function a(t,e,n){if(e<0||e>31||t>>>e!=0)throw"Value out of range";for(let a=e-1;a>=0;a--)n.push(t>>>a&1)}function o(t,e){return 0!=(t>>>e&1)}function r(t){if(!t)throw"Assertion error"}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;const i=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw"Invalid argument";this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)a(n,8,e);return new i(i.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!i.isNumeric(t))throw"String contains non-numeric characters";let e=[];for(let n=0;n<t.length;){const o=Math.min(t.length-n,3);a(parseInt(t.substr(n,o),10),3*o+1,e),n+=o}return new i(i.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!i.isAlphanumeric(t))throw"String contains unencodable characters in alphanumeric mode";let e,n=[];for(e=0;e+2<=t.length;e+=2){let o=45*i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));o+=i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),a(o,11,n)}return e<t.length&&a(i.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new i(i.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:i.isNumeric(t)?[i.makeNumeric(t)]:i.isAlphanumeric(t)?[i.makeAlphanumeric(t)]:[i.makeBytes(i.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw"ECI assignment value out of range";if(t<128)a(t,8,e);else if(t<16384)a(2,2,e),a(t,14,e);else{if(!(t<1e6))throw"ECI assignment value out of range";a(6,3,e),a(t,21,e)}return new i(i.Mode.ECI,0,e)}static isNumeric(t){return i.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return i.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const a of t){const t=a.mode.numCharCountBits(e);if(a.numChars>=1<<t)return 1/0;n+=4+t+a.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)"%"!=t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let s=i;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=s})(a||(a={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}};let n=e;n.LOW=new e(0,1),n.MEDIUM=new e(1,0),n.QUARTILE=new e(2,3),n.HIGH=new e(3,2),t.Ecc=n})(e=t.QrCode||(t.QrCode={}))})(a||(a={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}};let n=e;n.NUMERIC=new e(1,[10,12,14]),n.ALPHANUMERIC=new e(2,[9,11,13]),n.BYTE=new e(4,[8,16,16]),n.KANJI=new e(8,[8,10,12]),n.ECI=new e(7,[0,0,0]),t.Mode=n})(e=t.QrSegment||(t.QrSegment={}))})(a||(a={}));var M=a,x={L:M.QrCode.Ecc.LOW,M:M.QrCode.Ecc.MEDIUM,Q:M.QrCode.Ecc.QUARTILE,H:M.QrCode.Ecc.HIGH},E={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function O(t,e=0){const n=[];return t.forEach((function(t,a){let o=null;t.forEach((function(r,i){if(!r&&null!==o)return n.push(`M${o+e} ${a+e}h${i-o}v1H${o+e}z`),void(o=null);if(i!==t.length-1)r&&null===o&&(o=i);else{if(!r)return;null===o?n.push(`M${i+e},${a+e} h1v1H${i+e}z`):n.push(`M${o+e},${a+e} h${i+1-o}v1H${o+e}z`)}}))})),n.join("")}function _(t,e){return t.slice().map(((t,n)=>n<e.y||n>=e.y+e.h?t:t.map(((t,n)=>(n<e.x||n>=e.x+e.w)&&t))))}function k(t,e){const{imageSettings:n,size:a,includeMargin:o}=t;if(null==n)return null;const r=o?4:0,i=e.length+2*r,s=Math.floor(.1*a),c=i/a,l=(n.width||s)*c,u=(n.height||s)*c,d=null==n.x?e.length/2-l/2:n.x*c,h=null==n.y?e.length/2-u/2:n.y*c;let f=null;if(n.excavate){let t=Math.floor(d),e=Math.floor(h);f={x:t,y:e,w:Math.ceil(l+d-t),h:Math.ceil(u+h-e)}}return{x:d,y:h,h:u,w:l,excavation:f}}var N=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function j(t){const e=Object(f.useRef)(null),n=Object(f.useRef)(null);function a(){const{value:a,size:o,level:r,bgColor:i,fgColor:s,includeMargin:c}=t;if(null!=e.current){const l=e.current,u=l.getContext("2d");if(!u)return;let d=M.QrCode.encodeText(a,x[r]).getModules();const h=c?4:0,f=d.length+2*h,p=k(t,d),m=n.current,g=null!=p&&null!==m&&m.complete&&0!==m.naturalHeight&&0!==m.naturalWidth;g&&null!=p.excavation&&(d=_(d,p.excavation));const b=window.devicePixelRatio||1;l.height=l.width=o*b;const w=o/f*b;u.scale(w,w),u.fillStyle=i,u.fillRect(0,0,f,f),u.fillStyle=s,N?u.fill(new Path2D(O(d,h))):d.forEach((function(t,e){t.forEach((function(t,n){t&&u.fillRect(n+h,e+h,1,1)}))})),g&&u.drawImage(m,p.x+h,p.y+h,p.w,p.h)}}Object(f.useEffect)((()=>{a()}));const o=t,{value:r,size:i,level:s,bgColor:c,fgColor:l,style:u,includeMargin:d,imageSettings:h}=o,m=v(o,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),g=C({height:i,width:i},u);let b=null,w=null==h?void 0:h.src;return null!=w&&(b=p.a.createElement("img",{src:w,key:w,style:{display:"none"},onLoad:()=>{a()},ref:n})),p.a.createElement(p.a.Fragment,null,p.a.createElement("canvas",C({style:g,height:i,width:i,ref:e},m)),b)}function A(t){const e=t,{value:n,size:a,level:o,bgColor:r,fgColor:i,includeMargin:s,imageSettings:c}=e,l=v(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let u=M.QrCode.encodeText(n,x[o]).getModules();const d=s?4:0,h=u.length+2*d,f=k(t,u);let m=null;null!=c&&null!=f&&(null!=f.excavation&&(u=_(u,f.excavation)),m=p.a.createElement("image",{xlinkHref:c.src,height:f.h,width:f.w,x:f.x+d,y:f.y+d,preserveAspectRatio:"none"}));const g=O(u,d);return p.a.createElement("svg",C({shapeRendering:"crispEdges",height:a,width:a,viewBox:`0 0 ${h} ${h}`},l),p.a.createElement("path",{fill:r,d:`M0,0 h${h}v${h}H0z`}),p.a.createElement("path",{fill:i,d:g}),m)}j.defaultProps=E,A.defaultProps=E;var R=t=>{const e=t,{renderAs:n}=e,a=v(e,["renderAs"]),o="svg"===n?A:j;return p.a.createElement(o,C({},a))};R.defaultProps=C({renderAs:"canvas"},E);var I=n("iaY6"),P=n("v1QY"),S=n("BVPD"),z=h.b.div.withConfig({displayName:"ConnectWalletModal__ModalWrapper",componentId:"sc-fxkdhf-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.7);z-index:99999;transition:all 0.2s ease-in-out;"]),F=h.b.div.withConfig({displayName:"ConnectWalletModal__ModalContent",componentId:"sc-fxkdhf-1"})(["background:gray;border-radius:10px;transition:all 0.2 ease-in-out;width:500px;padding:44px 51px;","{width:520px;padding:28px 33px;}","{width:300px;padding:20px 22px;}"],I.f.tablet,I.f[768]),D=h.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletContainer",componentId:"sc-fxkdhf-2"})(["display:flex;flex-direction:column;justify-content:center;transition:all 0.2s ease-in-out;"]),L=h.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletModalHeader",componentId:"sc-fxkdhf-3"})(["display:flex;justify-content:space-between;align-items:center;width:100%;transition:all 0.2s ease-in-out;color:white;button{all:unset;cursor:pointer;}margin-bottom:28px;","{margin-bottom:24px;}h5{font-size:20px;","{font-size:18px;}}"],I.f[768],I.f.tablet),T=h.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletModalContent",componentId:"sc-fxkdhf-4"})(["display:flex;justify-content:space-between;width:100%;","{flex-direction:column;align-items:center;}"],I.f[768]),B=h.b.div.withConfig({displayName:"ConnectWalletModal__ConnectWalletCard",componentId:"sc-fxkdhf-5"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;width:180px;height:160px;padding:0 20px;box-sizing:border-box;background:",";border-radius:10px;h5{margin-top:15px;color:white;font-size:14px;}",";transition:all 0.2s ease-in-out;&:hover{",";transform:translateY(-5px);}","{width:260px;margin-bottom:20px;}","{width:230px;}"],(function(t){return t.theme.gradient}),(function(t){return t.theme.boxShadow1}),(function(t){return t.theme.boxShadow2}),I.f[768],I.f.mobile),H=h.b.div.withConfig({displayName:"ConnectWalletModal__QRContainer",componentId:"sc-fxkdhf-6"})(["display:flex;justify-content:center;align-items:center;width:100%;padding:20px;"]);e.a=function(){var t=Object(d.c)(P.h),e=Object(c.a)(t,2),n=e[0],a=e[1],r=Object(d.c)(P.c),h=Object(c.a)(r,2),p=h[0],m=(h[1],Object(d.c)(P.f)),g=Object(c.a)(m,2),b=g[0],w=g[1],y=Object(d.c)(P.d),C=Object(c.a)(y,2),v=C[0],M=C[1],x=Object(d.c)(P.e),E=Object(c.a)(x,2),O=(E[0],E[1],Object(d.c)(P.b)),_=Object(c.a)(O,2),k=_[0],N=_[1],j=Object(f.useState)(!1),A=j[0],I=j[1],U=function(){var t=Object(s.a)(i.a.mark((function t(e,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.b)(v,M);case 2:t.sent,a(!1);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:n&&Object(o.jsx)(z,{onClick:function(){return a(!1)},children:Object(o.jsx)(F,{onClick:function(t){t.stopPropagation()},children:Object(o.jsxs)(D,{children:[Object(o.jsxs)(L,{children:[Object(o.jsx)("h5",{children:p.title}),Object(o.jsx)("button",{children:Object(o.jsx)(u.a,{onClick:function(){a(!1),w("DEFAULT")},icon:l.d})})]}),Object(o.jsx)(T,{children:"0x00"!=v||A?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(H,{children:Object(o.jsx)(R,{value:b,size:256,includeMargin:!0})})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(B,{onClick:function(){return U(k,N)},children:[Object(o.jsx)("img",{src:"/kaikas-logo.svg"}),Object(o.jsx)("h5",{children:"Connect To Kaikas "})]}),Object(o.jsxs)(B,{onClick:function(){p.onConfirm(),I(!0)},children:[Object(o.jsx)("img",{src:"/klip-logo.svg"}),Object(o.jsx)("h5",{children:"Connect To Klip "})]})]})})]})})})})}},xRy9:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return f}));var a=n("vJKn"),o=n.n(a),r=n("rg98"),i=n("vDqi"),s=n.n(i),c=n("DcK4"),l="http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account-wc",u=function(){var t=Object(r.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(l,"/user_all"));case 2:n=t.sent,e(n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("".concat(l,"/user/addr/").concat(e)).then((function(t){t.data&&(console.log("[Result] ".concat(JSON.stringify(t.data.result))),n(t.data.id))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(t,e,n){var a={walletAddress:t,walletKind:e,nickName:"user".concat(t)};s.a.post("".concat(l,"/create_user"),a).then((function(e){console.log("\uc720\uc800\ub4f1\ub85d"),Object(c.b)(t,n)})).catch((function(e){console.log(e),console.log("\ub85c\uadf8\uc778\uc131\uacf5"),Object(c.b)(t,n)}))},f=function(t){s.a.delete("".concat(l,"/user/delete/").concat(t)).then((function(e){console.log("".concat(t,"\ubc88\uc9f8 \uc720\uc800\uc0ad\uc81c \uc131\uacf5"))})).catch((function(t){return console.log(t)}))}}}]);