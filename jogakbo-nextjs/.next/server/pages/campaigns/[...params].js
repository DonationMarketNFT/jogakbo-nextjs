module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jIpg");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hizP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Seo; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



function Seo({
  title = "클레이튼 기반 기부 플랫폼"
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("title", {
      children: ["\uC870\uAC01\uBCF4 | ", title]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"]("link", {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
      crossOrigin: "anonymous"
    })]
  });
}

/***/ }),

/***/ "iaY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export 카테고리 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return flexSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return flexColumnSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return darkTheme; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const 카테고리 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "theme__",
  componentId: "sc-7lh0ks-0"
})(["margin-right:5px;padding:5px 10px;background:", ";border-radius:5px;color:white;cursor:pointer;"], props => props.bgcolor === "new" ? "#3558e6" : props.bgcolor === "popular" ? "#f2114d" : props.bgcolor === "환경" ? "#abc949" : props.bgcolor === "환경보호" ? "#abc949" : props.bgcolor === "공익" ? "#a665eb" : props.bgcolor === "사회" ? "#e8e854" : props.bgcolor === "지구평화" ? "#64e8c7" : props.bgcolor ? props.bgcolor : "#e0e0e0");
const flexSet = (just = "center", align = "center") => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};
const flexColumnSet = (just = "center", align = "center") => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(1100),
  768: customMediaQuery(768),
  mobile: customMediaQuery(500)
};
const color = {
  mainColor: "#f49a4a",
  white: "#fff",
  gray1: "#f8f9fa",
  gray2: "#e5e5e5",
  gray3: "#cecece",
  gray4: "#b4b4b4",
  gray5: "#9c9c9c",
  gray6: "#767676",
  gray7: "#585858",
  black: "#333"
};
const lightTheme = {
  textColor: "#333",
  bgColor: "#fff",
  contentBgColor: "#fff",
  borderColor: "1px solid rgba(0, 0, 0, 0.1)",
  gradient: "linear-gradient(45deg, #ffe259 0%,#f49a4a 100%)",
  boxShadow1: "4px 12px 30px 6px rgb(0 0 0 / 9%)",
  boxShadow2: "4px 12px 30px 6px rgb(0 0 0 / 18%)",
  gray: {
    gray1: "#585858",
    gray2: "#737373",
    gray3: "#8d8e8e",
    gray4: "#a8a9a9",
    gray5: "#c3c3c4",
    gray6: "#dddedf",
    gray7: "#f8f9fa"
  },
  glass: {
    bgColor: "rgba(255, 255, 255, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(142, 142, 142, 0.19) 0px 6px 15px 0px",
    color: "rgb(28,28,28)"
  }
};
const darkTheme = {
  textColor: "rgba(255,255,255,0.8)",
  bgColor: "#000",
  contentBgColor: "gray",
  borderColor: "1px solid rgba(255, 255, 255, 0.3)",
  gradient: "linear-gradient(45deg, #ffe259 0%,#f49a4a 100%)",
  boxShadow1: "4px 12px 30px 6px rgb(255 255 255 / 9%)",
  boxShadow2: "4px 12px 30px 6px rgb(255 255 255 / 18%)",
  gray: {
    gray1: "#f8f9fa",
    gray2: "#e5e5e5",
    gray3: "#cecece",
    gray4: "#b4b4b4",
    gray5: "#9c9c9c",
    gray6: "#767676",
    gray7: "#585858"
  },
  glass: {
    bgColor: "rgba(89, 89, 89, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "rgba(14, 14, 14, 0.19) 0px 6px 15px 0px",
    color: "rgb(255, 255, 255, 0.75)"
  }
};

/***/ }),

/***/ "jIpg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iaY6");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hizP");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vZBi");










const 이미지 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__",
  componentId: "sc-1omqhb4-0"
})(["background-image:url(/\uBA78\uC885\uC704\uAE30.jpg);width:100%;height:500px;"]);
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Container",
  componentId: "sc-1omqhb4-1"
})(["display:flex;flex-direction:column;align-items:center;width:1100px;margin:50px auto;", "{margin-right:40px;margin-left:40px;width:auto;}", "{margin-right:20px;margin-left:20px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const 타이틀 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__",
  componentId: "sc-1omqhb4-2"
})(["display:flex;align-items:center;"]);
const 캠페인이름 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__",
  componentId: "sc-1omqhb4-3"
})(["margin:20px 0;font-size:38px;"]);
const Bars = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Bars",
  componentId: "sc-1omqhb4-4"
})(["position:relative;width:100%;height:30px;box-sizing:border-box;margin-bottom:100px;"]);
const PercentBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__PercentBar",
  componentId: "sc-1omqhb4-5"
})(["width:100%;height:10px;background:lightgray;border-radius:5px;"]);
const CurrentBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__CurrentBar",
  componentId: "sc-1omqhb4-6"
})(["position:absolute;top:0;width:", ";height:10px;background:gray;border-radius:5px;"], props => props.width);
const Percent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Percent",
  componentId: "sc-1omqhb4-7"
})(["margin-top:20px;text-align:right;"]);
const Klay = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Klay",
  componentId: "sc-1omqhb4-8"
})(["margin-top:10px;text-align:right;"]);
const RefundButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__RefundButton",
  componentId: "sc-1omqhb4-9"
})(["background:red;color:white;margin-bottom:10px;padding:5px 10px;cursor:pointer;"]);
const CampaignBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__CampaignBox",
  componentId: "sc-1omqhb4-10"
})(["display:flex;width:100%;margin:0 auto;padding:0 30px;border:1px solid lightgray;border-radius:10px;", "{margin:0 30px;padding:0 30px;margin-bottom:30px;}", "{padding:0 10px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const CampaignRow = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__CampaignRow",
  componentId: "sc-1omqhb4-11"
})(["display:flex;flex-direction:column;&:first-child{width:70%;}&:last-child{width:30%;}", "{&:first-child{width:100%;}&:last-child{width:100%;position:fixed;bottom:0;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const ParticipantBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__ParticipantBox",
  componentId: "sc-1omqhb4-12"
})(["display:flex;flex-direction:column;padding:50px 30px;", "{padding:20px 10px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const ParticipantRow = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__ParticipantRow",
  componentId: "sc-1omqhb4-13"
})(["display:flex;"]);
const ParticipantTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3.withConfig({
  displayName: "params__ParticipantTitle",
  componentId: "sc-1omqhb4-14"
})(["margin:10px 0;"]);
const Participant = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Participant",
  componentId: "sc-1omqhb4-15"
})(["margin-right:10px;width:70px;height:70px;background:black;border-radius:50%;", "{width:50px;height:50px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const DescriptionBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__DescriptionBox",
  componentId: "sc-1omqhb4-16"
})(["padding:50px 30px;height:90vh;", "{padding:20px 10px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DescriptionTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3.withConfig({
  displayName: "params__DescriptionTitle",
  componentId: "sc-1omqhb4-17"
})(["margin:10px 0;"]);
const DonationBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__DonationBox",
  componentId: "sc-1omqhb4-18"
})(["position:sticky;top:70px;padding:50px 20px 30px 20px;background:white;border-radius:15px;box-shadow:4px 12px 20px 6px rgb(0 0 0 / 18%);", "{all:unset;background:white;width:85%;padding:30px 15px 30px 15px;border-radius:15px;border:1px solid lightgray;position:fixed;bottom:30px;left:50%;transform:translate(-50%,0);}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const CampaignName = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "params__CampaignName",
  componentId: "sc-1omqhb4-19"
})(["text-align:center;margin-bottom:30px;", "{display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const CampaignDesc = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "params__CampaignDesc",
  componentId: "sc-1omqhb4-20"
})(["margin-bottom:30px;height:150px;", "{display:none;height:70px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const DonationForm = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.form.withConfig({
  displayName: "params__DonationForm",
  componentId: "sc-1omqhb4-21"
})(["position:relative;label{position:absolute;top:2px;right:5px;}", "{label{top:6px;font-size:24px;}}", "{label{top:4px;font-size:24px;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DonationInput = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.attrs({
  required: true
}).withConfig({
  displayName: "params__DonationInput",
  componentId: "sc-1omqhb4-22"
})(["all:unset;border-bottom:1px solid lightgray;width:100%;box-sizing:border-box;margin-bottom:10px;padding:0 40px 5px 0;text-align:right;", "{font-size:30px;padding:0 70px 5px 0;}", "{font-size:21px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DonationButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "params__DonationButton",
  componentId: "sc-1omqhb4-23"
})(["width:100%;padding:10px 0;border:0;border-radius:15px;text-align:center;background:lightgray;color:white;transition:all 0.3s ease-in-out;&:hover{background:gray;}", "{padding:25px 0;font-size:30px;}", "{padding:18px 0;font-size:24px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DEFAULT_DATA = new Array();
function Detail({
  params
}) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(DEFAULT_DATA);
  const [title, id] = params || [];

  const changeState = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/fundingstatus/${id}`, {
      fundingStatus: !data.fundingSatus
    }).then(() => axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/refundstatus/${id}`, {
      refundStatus: !data.refundStatus
    }).then(res => {
      alert(`상태가 변경되었습니다`);
      location.reload();
    }).catch(e => console.log(e)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default()(`http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/${id}`).then(res => setData(res.data)).catch(e => console.log(e));
  }, []);
  console.log(data);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(이미지, {
      children: "hello"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Seo__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        title: title
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(타이틀, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Category__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          type: data.category ? data.category : "일반"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(캠페인이름, {
          children: title
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Bars, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(PercentBar, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CurrentBar, {
          width: `${data.currentAmount / data.targetAmount * 100}%`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Percent, {
          children: [data.currentAmount / data.targetAmount * 100, "%"]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Klay, {
          children: ["(", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            children: data.currentAmount
          }), "Klay /", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            children: data.targetAmount
          }), "Klay)"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: ["\uD604\uC7AC\uC0C1\uD0DC:", data.refundStatus ? "refund" : "funding"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(RefundButton, {
        onClick: changeState,
        children: "change status"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(CampaignBox, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(CampaignRow, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ParticipantBox, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ParticipantRow, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ParticipantTitle, {
                children: "participant"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ParticipantRow, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Participant, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Participant, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Participant, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Participant, {})]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(DescriptionBox, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DescriptionTitle, {
              children: "Description"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
              children: data.description
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CampaignRow, {
          style: {
            padding: "50px 0"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(DonationBox, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CampaignName, {
              children: title
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CampaignDesc, {
              children: data.description
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(DonationForm, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DonationInput, {
                type: "number",
                name: "klay",
                id: "klay",
                autoComplete: "off",
                required: true,
                step: 0.0000001
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                id: "klay_label",
                htmlFor: "klay",
                children: "Klay"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DonationButton, {
                id: "donate_btn",
                children: "Donate"
              })]
            })]
          })
        })]
      })]
    })]
  });
}
const getServerSideProps = async ({
  params: {
    params
  }
}) => {
  return {
    props: {
      params
    }
  };
};

/***/ }),

/***/ "vZBi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Wrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Category__Wrapper",
  componentId: "sc-s2q1e-0"
})(["margin-right:5px;padding:5px 10px;background:", ";border-radius:5px;color:white;cursor:pointer;"], props => props.bgcolor === "new" ? "#3558e6" : props.bgcolor === "popular" ? "#f2114d" : props.bgcolor === "환경" ? "#abc949" : props.bgcolor === "환경보호" ? "#abc949" : props.bgcolor === "공익" ? "#a665eb" : props.bgcolor === "사회" ? "#e8e854" : props.bgcolor === "지구평화" ? "#64e8c7" : "#e0e0e0");

const Category = ({
  type,
  onClick
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Wrapper, {
    bgcolor: type,
    onClick: onClick,
    children: type
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Category);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });