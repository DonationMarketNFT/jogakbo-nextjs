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

/***/ "1UBF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rs */
/* unused harmony export JogakboContract */
/* unused harmony export getRefundState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCampaignNumber; });
/* unused harmony export campaignList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromKlaytoPeb; });
/* harmony import */ var caver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Uqmb");
/* harmony import */ var caver_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(caver_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("I5Yw");
/* harmony import */ var _abi_JogakboABI_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mKgc");
var _abi_JogakboABI_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("mKgc", 1);
/* harmony import */ var _abi_NftABI_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UeP9");
var _abi_NftABI_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("UeP9", 1);




const option = {
  headers: [{
    name: "Authorization",
    value: "Basic " + Buffer.from(_constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* ACCESS_KEY_ID */ "a"] + ":" + _constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* SECRET_ACCRESS_KEY */ "d"]).toString("base64")
  }, {
    name: "x-chain-id",
    value: _constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* CHAIN_ID */ "b"]
  }]
};
const caver = new caver_js__WEBPACK_IMPORTED_MODULE_0___default.a(new caver_js__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", // "https://api.baobab.klaytn.net:8651/",
option));
const rs = async () => {
  await caver.klay.sendTransaction({
    type: "VALUE_TRANSFER",
    from: "0xc72af0d3c40d5E95e3424b251ceA0cD81e230Dc1",
    to: "0xA52c3f53F087B3445190ADc0B038Bd78D8110eDa",
    gas: "300000",
    value: caver.utils.toPeb("1", "KLAY")
  });
};
const JogakboContract = new caver.contract(_abi_JogakboABI_json__WEBPACK_IMPORTED_MODULE_2__, _constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* JOGAKBO_CONTRACT_ADDRESS */ "c"]);
const getRefundState = async () => {
  const state = await JogakboContract.methods.refundState().call();
  console.log(state);
  return state;
}; // 테스트 완료

const getCampaignNumber = async () => {
  const number = await JogakboContract.methods.CampaignNumber().call();
  console.log(number);
  return number;
};
const campaignList = async () => {
  const number = await JogakboContract.methods.campaignNumber().call();
  const lists = [];

  for (let i = 0; i < number; i++) {
    const list = await JogakboContract.methods.campaignList([i]).call();
    lists.push(list);
  }

  return lists;
}; // export const testOwnTokenId = async address => {
//   const ids = await JogakboContract.methods.tokenIds(address).call();
//   return ids;
// };
// export const testTokenId2Description = async id => {
//   const des = await JogakboContract.methods.tokenDescription(id).call();
//   return des;
// };
// export const testTokenId2Name = async id => {
//   const des = await JogakboContract.methods.tokenName(id).call();
//   return des;
// };
// export const testCampaignList = async () => {
//   const Number = await JogakboContract.methods.CampaignNumber().call();
//   const lists = [];
//   for (let i = 0; i < Number; i++) {
//     const list = await JogakboContract.methods.campaignList([i]).call();
//     lists.push(list);
//   }
//   return lists;
// };
// export const testCampaignNumber = async () => {
//   const Number = await JogakboContract.methods.CampaignNumber().call();
//   console.log(`number:${Number}`);
//   return Number;
// };
// klip 잔고 조회시 메인넷 chain_id 필요

const getBalance = address => {
  return caver.rpc.klay.getBalance(address).then(response => {
    const balance = caver.utils.convertFromPeb(caver.utils.hexToNumberString(response), "KLAY");
    return balance;
  });
};
const fromKlaytoPeb = n => {
  return caver.utils.convertToPeb(n);
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jIpg");


/***/ }),

/***/ "BVPD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return kaikas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return testKaikas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return confirmKaikas; });
/* harmony import */ var caver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Uqmb");
/* harmony import */ var caver_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(caver_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_constants_baobab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HXs4");
/* harmony import */ var _accountWc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xRy9");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DcK4");
/* harmony import */ var _abi_JogakboABI_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mKgc");
var _abi_JogakboABI_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("mKgc", 1);





const kaikas = async (myAddress, setMyAddress) => {
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];
  }

  try {
    const accounts = await window.klaytn.enable();
    Object(_accountWc__WEBPACK_IMPORTED_MODULE_2__[/* postAccount */ "d"])(accounts[0], "kaikas", setMyAddress);
    return accounts[0];
  } catch (error) {
    Object(_accountWc__WEBPACK_IMPORTED_MODULE_2__[/* postAccount */ "d"])(accounts[0], "kaikas", setMyAddress);
  }
};
const testKaikas = async callback => {
  await window.klaytn.on("accountsChanged", function (accounts) {
    console.log("계정바뀜", accounts[0]);
    Object(_Login__WEBPACK_IMPORTED_MODULE_3__[/* login */ "b"])(accounts[0], callback);
  });
};
const confirmKaikas = async () => {
  const inUnlocked = await window.klaytn._kaikas.isUnlocked();

  if (!inUnlocked) {
    Object(_Login__WEBPACK_IMPORTED_MODULE_3__[/* logout */ "c"])();
  }

  console.log(inUnlocked);
}; // export const test1 = async () => {
//   const results = await test.methods.createCampaign();
// };
// const caver = new Caver(JOGAKBOABI, JOGAKBO_CONTRACT_ADDRESS);
// const caver = new Caver(window.klaytn);
// const tx = {
//   type: "SMART_CONTRACT_EXECUTION",
//   from: sender.address,
//   to: contractAddress,
//   data: nftContract.methods
//     .transferFrom(sender.address, receiver, tokenId)
//     .encodeABI(),
//   gas: "300000",
//   value: 0,
// };
// caver.klay
//   .sendTransaction({
//     from: klaytn.selectedAddress,
//     to: JOGAKBO_CONTRACT_ADDRESS,
//     value: "1000000000",
//   })
//   .then(receipt => {});
// export const sendTransaction = () => {
//   caver.klay
//     .sendTransaction({
//       type: "VALUE_TRANSFER",
//       from: klaytn.selectedAddress,
//       to: "0xa52c3f53f087b3445190adc0b038bd78d8110eda",
//       value: caver.utils.toPeb("1", "KLAY"),
//       gas: 80000000,
//     })
//     .once("transactionHash", transactionHash => {
//       console.log("txHash", transactionHash);
//     })
//     .once("receipt", receipt => {
//       console.log("receipt", receipt);
//     })
//     .once("error", error => {
//       console.log("error", error);
//     });
// };

/***/ }),

/***/ "DcK4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDataFromCookie; });
/* unused harmony export isValidToken */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // 쿠키가 있다면 삭제하고 쿠키를 만들어주는 함수 + recoil에 주소 저장

const login = async (myAddress, callback) => {
  const user = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user"); // 쿠키 존재한다면 쿠키 삭제

  if (user.data.address) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/auth/logout");
  } // 쿠키 생성


  const credentials = {
    myAddress
  };
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/auth/login", credentials);
  callback(myAddress);
}; // 쿠키 삭제 (로그아웃)

const logout = async () => {
  const user = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/auth/logout");
  console.log(user);
}; // 유저 정보 조회 + 주소 recoil 설정

const getDataFromCookie = async callback => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(user => {
    const user_key = user;

    if (user.data.address) {
      console.log(user_key);
      callback(user.data.address);
    } else {
      console.log(user_key);
    }
  });
};
const isValidToken = async callback => {
  const user = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user");

  if (user.data.address) {
    callback(true);
  }
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HXs4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export JOGAKBO_CONTRACT_ADDRESS */
/* unused harmony export NFT_CONTRACT_ADDRESS */
/* unused harmony export ACCESS_KEY_ID */
/* unused harmony export SECRET_ACCRESS_KEY */
/* unused harmony export CHAIN_ID */
const JOGAKBO_CONTRACT_ADDRESS = "0xEFde18b341D06A6eb1D1aED331e69C0ba3f52561";
const NFT_CONTRACT_ADDRESS = "0xC4771924F1f88D4908f0676aeB771A532275798e";
const ACCESS_KEY_ID = "KASKAWX9OCIAR71UM6Q3VF6T";
const SECRET_ACCRESS_KEY = "Jm7DGEKbCVl3yWtK-iHJwKWfcFBTfDHn5a1bFkO6";
const CHAIN_ID = "1001"; // Mainnet 8217, Testnet 1001

/***/ }),

/***/ "I5Yw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JOGAKBO_CONTRACT_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCESS_KEY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SECRET_ACCRESS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHAIN_ID; });
const JOGAKBO_CONTRACT_ADDRESS = "0xe7bbC0ec719f1836AA89724bF0010A6268D11B92"; // export const NFT_CONTRACT_ADDRESS =
// "0xC4771924F1f88D4908f0676aeB771A532275798e";

const ACCESS_KEY_ID = "KASKAWX9OCIAR71UM6Q3VF6T";
const SECRET_ACCRESS_KEY = "Jm7DGEKbCVl3yWtK-iHJwKWfcFBTfDHn5a1bFkO6";
const CHAIN_ID = "8217"; // Mainnet 8217, Testnet 1001

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "P7wJ":
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "PVQ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCampaign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return refund; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return donateTocampaign; });
/* unused harmony export setStateToRefund */
/* unused harmony export executeContract */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAddress; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("I5Yw");
/* harmony import */ var _UseCaver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1UBF");



const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "JOGAKBO"; // const isMobile = window.screen.width >= 1280 ? false : true;

const isMobile = false;

const getKlipAccessUrl = (method, request_key) => {
  if (method === "QR") {
    return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  }

  return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
}; // 캠페인 등록


const createCampaign = async (_campaign_address, // 캠페인 제출자 주소
_target_amount, _campaign_ID, setQrvalue, callback) => {
  const functionJson = '{"constant":false,"inputs":[{"name":"_campaign_address","type":"address"},{"name":"_target_amount","type":"uint256"},{"name":"_campaign_ID","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}';
  executeContract(_constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* JOGAKBO_CONTRACT_ADDRESS */ "c"], functionJson, "0", `[\"${_campaign_address}\",\"${_target_amount}\",\"${_campaign_ID}\"]`, setQrvalue, callback);
}; // 환불

const refund = async (_campaignId, _userAddr, setQrvalue, callback) => {
  const functionJson = '{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"},{"name":"_userAddr","type":"address"}],"name":"refund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}';
  executeContract(_constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* JOGAKBO_CONTRACT_ADDRESS */ "c"], functionJson, "0", `[\"${_campaignId}\",\"${_userAddr}\"]`, setQrvalue, callback);
}; // 기부

const donateTocampaign = async (_campaignId, _amount, setQrvalue, callback) => {
  const functionJson = '{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"donateTocampaign","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}';
  executeContract(_constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* JOGAKBO_CONTRACT_ADDRESS */ "c"], functionJson, Object(_UseCaver__WEBPACK_IMPORTED_MODULE_2__[/* fromKlaytoPeb */ "a"])(_amount).toString(), `[\"${_campaignId}\",\"${_amount}\"]`, setQrvalue, callback);
}; // 환불 상태 변경

const setStateToRefund = async (_campaignId, setQrvalue, callback) => {
  const functionJson = '{"constant":false,"inputs":[{"name":"_campaignId","type":"uint256"}],"name":"setStateToRefund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}';
  executeContract(_constants_constants_cypress__WEBPACK_IMPORTED_MODULE_1__[/* JOGAKBO_CONTRACT_ADDRESS */ "c"], functionJson, "0", `[\"${_campaignId}\"]`, setQrvalue, callback);
};
const executeContract = (txTo, functionJSON, value, params, setQrvalue, callback) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(A2P_API_PREPARE_URL, {
    bapp: {
      name: APP_NAME
    },
    type: "execute_contract",
    transaction: {
      to: txTo,
      // string
      value: value,
      // string
      abi: functionJSON,
      // string
      params: params // string

    }
  }).then(response => {
    const {
      request_key
    } = response.data;

    if (isMobile) {
      window.location.href = getKlipAccessUrl("android", request_key);
    } else {
      setQrvalue(getKlipAccessUrl("QR", request_key));
    }

    let timerId = setInterval(() => {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then(res => {
        if (res.data.result) {
          console.log(`[result] ${JSON.stringify(res.data.result)}`);
          callback(res.data.result);
          clearInterval(timerId);
          setQrvalue("DEFAULT");
        }
      });
    }, 1000);
  });
}; // 클립 주소얻기

const getAddress = (setQrvalue, callback) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(A2P_API_PREPARE_URL, {
    bapp: {
      name: APP_NAME
    },
    type: "auth"
  }).then(response => {
    const {
      request_key
    } = response.data;

    if (isMobile) {
      window.location.href = getKlipAccessUrl("android", request_key);
    } else {
      setQrvalue(getKlipAccessUrl("QR", request_key));
    }

    console.log(`response:${response}`);
    let timerId = setInterval(() => {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`).then(res => {
        if (res.data.result) {
          console.log(`[Result] ${JSON.stringify(res.data.result)}`);
          callback(res.data.result.klaytn_address);
          clearInterval(timerId);
          setQrvalue("DEFAULT");
        }
      });
    }, 1000);
  });
};

/***/ }),

/***/ "UeP9":
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),

/***/ "Uqmb":
/***/ (function(module, exports) {

module.exports = require("caver-js");

/***/ }),

/***/ "XGOH":
/***/ (function(module, exports) {

module.exports = require("recoil");

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
/* harmony import */ var api_UseKlip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("PVQ3");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XGOH");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("v1QY");
/* harmony import */ var components_modals_ConnectWalletModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("t8rn");













const 이미지 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__",
  componentId: "sc-1omqhb4-0"
})(["background-image:url(/\uBA78\uC885\uC704\uAE30.jpg);width:100%;height:500px;"]);
const Wrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Wrapper",
  componentId: "sc-1omqhb4-1"
})(["background:", ";box-sizing:border-box;padding-bottom:50px;"], props => props.theme.bgColor);
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Container",
  componentId: "sc-1omqhb4-2"
})(["display:flex;flex-direction:column;align-items:center;width:1100px;margin:50px auto;", "{margin-right:40px;margin-left:40px;width:auto;}", "{margin-right:20px;margin-left:20px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const 타이틀 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__",
  componentId: "sc-1omqhb4-3"
})(["display:flex;align-items:center;color:", ";"], props => props.theme.textColor);
const 캠페인이름 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__",
  componentId: "sc-1omqhb4-4"
})(["margin:20px 0;font-size:38px;"]);
const Bars = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Bars",
  componentId: "sc-1omqhb4-5"
})(["position:relative;width:100%;height:30px;box-sizing:border-box;margin-bottom:100px;color:", ";"], props => props.theme.textColor);
const PercentBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__PercentBar",
  componentId: "sc-1omqhb4-6"
})(["width:100%;height:10px;background:lightgray;border-radius:5px;"]);
const CurrentBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__CurrentBar",
  componentId: "sc-1omqhb4-7"
})(["position:absolute;top:0;width:", ";height:10px;background:gray;border-radius:5px;"], props => props.width);
const Percent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Percent",
  componentId: "sc-1omqhb4-8"
})(["margin-top:20px;text-align:right;"]);
const Klay = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Klay",
  componentId: "sc-1omqhb4-9"
})(["margin-top:10px;text-align:right;"]);
const Min = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Min",
  componentId: "sc-1omqhb4-10"
})(["margin-top:10px;text-align:right;color:", ";"], props => props.theme.gray.gray6);
const RefundState = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__RefundState",
  componentId: "sc-1omqhb4-11"
})(["color:", ";"], props => props.theme.textColor);
const RefundButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__RefundButton",
  componentId: "sc-1omqhb4-12"
})(["background:red;color:white;margin-bottom:10px;padding:5px 10px;cursor:pointer;"]);
const CampaignBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__CampaignBox",
  componentId: "sc-1omqhb4-13"
})(["display:flex;width:100%;margin:0 auto;padding:0 30px;border:1px solid lightgray;border-radius:10px;color:", ";", "{margin:0 30px;padding:0 30px;margin-bottom:30px;}", "{padding:0 10px;}"], props => props.theme.textColor, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const CampaignRow = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__CampaignRow",
  componentId: "sc-1omqhb4-14"
})(["display:flex;flex-direction:column;&:first-child{width:70%;}&:last-child{width:30%;}", "{&:first-child{width:100%;}&:last-child{width:100%;position:fixed;bottom:0;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const ParticipantBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__ParticipantBox",
  componentId: "sc-1omqhb4-15"
})(["display:flex;flex-direction:column;padding:50px 30px;", "{padding:20px 10px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const ParticipantRow = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__ParticipantRow",
  componentId: "sc-1omqhb4-16"
})(["display:flex;"]);
const ParticipantTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3.withConfig({
  displayName: "params__ParticipantTitle",
  componentId: "sc-1omqhb4-17"
})(["margin:10px 0;"]);
const Participant = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__Participant",
  componentId: "sc-1omqhb4-18"
})(["margin-right:10px;width:70px;height:70px;background:", ";border-radius:50%;", "{width:50px;height:50px;}"], props => props.theme.textColor, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const DescriptionBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__DescriptionBox",
  componentId: "sc-1omqhb4-19"
})(["padding:50px 30px;height:90vh;", "{padding:20px 10px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DescriptionTitle = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3.withConfig({
  displayName: "params__DescriptionTitle",
  componentId: "sc-1omqhb4-20"
})(["margin:10px 0;"]);
const DonationBox = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "params__DonationBox",
  componentId: "sc-1omqhb4-21"
})(["position:sticky;top:70px;padding:50px 20px 30px 20px;border-radius:15px;box-shadow:", ";background:", ";", "{all:unset;background:white;width:85%;padding:30px 15px 30px 15px;border-radius:15px;border:1px solid lightgray;position:fixed;bottom:30px;left:50%;transform:translate(-50%,0);}"], props => props.theme.boxShadow2, props => props.theme.bgColor, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const CampaignName = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "params__CampaignName",
  componentId: "sc-1omqhb4-22"
})(["text-align:center;margin-bottom:30px;", "{display:none;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const CampaignDesc = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "params__CampaignDesc",
  componentId: "sc-1omqhb4-23"
})(["margin-bottom:30px;height:150px;", "{display:none;height:70px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet);
const DonationForm = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.form.withConfig({
  displayName: "params__DonationForm",
  componentId: "sc-1omqhb4-24"
})(["position:relative;label{position:absolute;top:2px;right:5px;}", "{label{top:6px;font-size:24px;}}", "{label{top:4px;font-size:24px;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DonationInput = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input.attrs({
  required: true
}).withConfig({
  displayName: "params__DonationInput",
  componentId: "sc-1omqhb4-25"
})(["all:unset;border-bottom:1px solid lightgray;width:100%;box-sizing:border-box;margin-bottom:10px;padding:0 40px 5px 0;text-align:right;", "{font-size:30px;padding:0 70px 5px 0;}", "{font-size:21px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DonationButton = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button.withConfig({
  displayName: "params__DonationButton",
  componentId: "sc-1omqhb4-26"
})(["width:100%;padding:10px 0;border:0;border-radius:15px;text-align:center;background:", ";color:white;transition:all 0.3s ease-in-out;&:hover{background:", ";}", "{padding:25px 0;font-size:30px;}", "{padding:18px 0;font-size:24px;}"], props => props.theme.gray.gray5, props => props.theme.gray.gray3, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_4__[/* media */ "f"].mobile);
const DEFAULT_DATA = new Array();
function Detail({
  params
}) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(DEFAULT_DATA);
  const [title, id] = params || [];
  const {
    0: donateAmount,
    1: setDonateAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const [qrValue, setQrValue] = Object(recoil__WEBPACK_IMPORTED_MODULE_8__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_9__[/* qrValueState */ "f"]);
  const [showModal, setShowModal] = Object(recoil__WEBPACK_IMPORTED_MODULE_8__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_9__[/* showConnectWalletModalState */ "h"]);
  const [myAddress, setMyAddress] = Object(recoil__WEBPACK_IMPORTED_MODULE_8__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_9__[/* myAddressState */ "d"]);

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

  const donate = e => {
    e.preventDefault();
    Object(api_UseKlip__WEBPACK_IMPORTED_MODULE_7__[/* donateTocampaign */ "b"])(id, Number(donateAmount), setQrValue, result => {
      alert(result);
      setShowModal(false);
    });
    setShowModal(true);
  };

  const onClickRefund = () => {
    Object(api_UseKlip__WEBPACK_IMPORTED_MODULE_7__[/* refund */ "d"])(id, myAddress, setQrValue, () => {
      alert("success");
      setShowModal(false);
    });
    setShowModal(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default()(`http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/${id}`).then(res => setData(res.data)).catch(e => console.log(e));
  }, []);
  console.log(data);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Wrapper, {
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
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(Min, {
          children: ["\uAE30\uBD80 \uB2E8\uC704 \uD074\uB808\uC774 : ", data.minFundingAmount, " Klay"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(RefundState, {
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
              onSubmit: e => donate(e),
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DonationInput, {
                type: "number",
                name: "klay",
                id: "klay",
                autoComplete: "off",
                required: true,
                min: "0",
                step: data.minFundingAmount,
                value: donateAmount,
                onChange: e => setDonateAmount(e.target.value)
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
                id: "klay_label",
                htmlFor: "klay",
                children: "Klay"
              }), data.fundingStatus ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(DonationButton, {
                type: "submit",
                id: "donate_btn",
                children: "Donate"
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(RefundButton, {
                onClick: onClickRefund,
                children: "Refund"
              })]
            })]
          })
        })]
      })]
    }), qrValue !== "DEFAULT" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_modals_ConnectWalletModal__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {})]
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

/***/ "mKgc":
/***/ (function(module) {

module.exports = JSON.parse("[{\"constant\":true,\"inputs\":[{\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"campaignId\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_campaignId\",\"type\":\"uint256\"}],\"name\":\"setStateToRefund\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"CampaignNumber\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_campaign_address\",\"type\":\"address\"},{\"name\":\"_target_amount\",\"type\":\"uint256\"},{\"name\":\"_campaign_ID\",\"type\":\"uint256\"}],\"name\":\"createCampaign\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"campaignList\",\"outputs\":[{\"name\":\"campaign_address\",\"type\":\"address\"},{\"name\":\"campaign_ID\",\"type\":\"uint256\"},{\"name\":\"target_amount\",\"type\":\"uint256\"},{\"name\":\"current_amount\",\"type\":\"uint256\"},{\"name\":\"campaign_state\",\"type\":\"bool\"},{\"name\":\"campaign_refund_state\",\"type\":\"bool\"},{\"name\":\"campaign_send_state\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_campaignId\",\"type\":\"uint256\"}],\"name\":\"refundState\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renouncePauser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_campaignId\",\"type\":\"uint256\"},{\"name\":\"_userAddr\",\"type\":\"address\"}],\"name\":\"refund\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addPauser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenIPFS\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"tokenURI\",\"type\":\"string\"},{\"name\":\"tokenIPFS\",\"type\":\"string\"},{\"name\":\"tokenOwnerName\",\"type\":\"string\"},{\"name\":\"tokenAgencyUrl\",\"type\":\"string\"},{\"name\":\"tokenDate\",\"type\":\"string\"},{\"name\":\"tokenNumber\",\"type\":\"string\"}],\"name\":\"mintWithTokenURI\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenDescription\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"userList\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokenId\",\"type\":\"uint256\"},{\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenName\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"},{\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_campaignId\",\"type\":\"uint256\"},{\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"donateTocampaign\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"}],\"name\":\"tokenIds\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"PauserAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"PauserRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"}]");

/***/ }),

/***/ "t8rn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XGOH");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("P7wJ");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("iaY6");
/* harmony import */ var _atom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("v1QY");
/* harmony import */ var _api_useKaikas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BVPD");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);












const ModalWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__ModalWrapper",
  componentId: "sc-fxkdhf-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.7);z-index:99999;transition:all 0.2s ease-in-out;"]);
const ModalContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__ModalContent",
  componentId: "sc-fxkdhf-1"
})(["background:gray;border-radius:10px;transition:all 0.2 ease-in-out;width:500px;padding:44px 51px;", "{width:520px;padding:28px 33px;}", "{width:300px;padding:20px 22px;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"].tablet, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"][768]);
const ConnectWalletContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__ConnectWalletContainer",
  componentId: "sc-fxkdhf-2"
})(["display:flex;flex-direction:column;justify-content:center;transition:all 0.2s ease-in-out;"]);
const ConnectWalletModalHeader = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__ConnectWalletModalHeader",
  componentId: "sc-fxkdhf-3"
})(["display:flex;justify-content:space-between;align-items:center;width:100%;transition:all 0.2s ease-in-out;color:white;button{all:unset;cursor:pointer;}margin-bottom:28px;", "{margin-bottom:24px;}h5{font-size:20px;", "{font-size:18px;}}"], _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"][768], _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"].tablet);
const ConnectWalletModalContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__ConnectWalletModalContent",
  componentId: "sc-fxkdhf-4"
})(["display:flex;justify-content:space-between;width:100%;", "{flex-direction:column;align-items:center;}"], _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"][768]);
const ConnectWalletCard = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__ConnectWalletCard",
  componentId: "sc-fxkdhf-5"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;width:180px;height:160px;padding:0 20px;box-sizing:border-box;background:", ";border-radius:10px;h5{margin-top:15px;color:white;font-size:14px;}", ";transition:all 0.2s ease-in-out;&:hover{", ";transform:translateY(-5px);}", "{width:260px;margin-bottom:20px;}", "{width:230px;}"], props => props.theme.gradient, props => props.theme.boxShadow1, props => props.theme.boxShadow2, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"][768], _styles_theme__WEBPACK_IMPORTED_MODULE_6__[/* media */ "f"].mobile);
const QRContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ConnectWalletModal__QRContainer",
  componentId: "sc-fxkdhf-6"
})(["display:flex;justify-content:center;align-items:center;width:100%;padding:20px;"]);

function ConnectWalletModal() {
  const [showModal, setShowModal] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_7__[/* showConnectWalletModalState */ "h"]);
  const [modalProps, setModalProps] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_7__[/* modalPropsState */ "c"]);
  const [qrvalue, setQrvalue] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_7__[/* qrValueState */ "f"]);
  const [myAddress, setMyAddress] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_7__[/* myAddressState */ "d"]);
  const [balance, setBalance] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_7__[/* myBalanceState */ "e"]);
  const [login, setLogin] = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_atom__WEBPACK_IMPORTED_MODULE_7__[/* isLoginedState */ "b"]);
  const {
    0: clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false);

  const getKaikasData = async (login, setLogin) => {
    const results = await Object(_api_useKaikas__WEBPACK_IMPORTED_MODULE_8__[/* kaikas */ "b"])(myAddress, setMyAddress);
    setShowModal(false);
  }; // function getUser() {
  //   const result = getAccounts();
  //   console.log(result);
  // }


  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: showModal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ModalWrapper, {
      onClick: () => setShowModal(false),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ModalContent, {
        onClick: e => {
          e.stopPropagation();
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ConnectWalletContainer, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ConnectWalletModalHeader, {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
              children: modalProps.title
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                onClick: () => {
                  setShowModal(false);
                  setQrvalue("DEFAULT");
                },
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"]
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ConnectWalletModalContent, {
            children: myAddress == "0x00" && !clicked ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ConnectWalletCard, {
                onClick: () => getKaikasData(login, setLogin),
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: "/kaikas-logo.svg"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                  children: "Connect To Kaikas "
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ConnectWalletCard, {
                onClick: () => {
                  modalProps.onConfirm();
                  setClicked(true);
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: "/klip-logo.svg"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
                  children: "Connect To Klip "
                })]
              })]
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(QRContainer, {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(qrcode_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  value: qrvalue,
                  size: 256,
                  includeMargin: true
                })
              })
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (ConnectWalletModal);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "v1QY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export showSignInModalState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return showConnectWalletModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return showCategoryModalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isLoginedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return myAddressState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return myBalanceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return qrValueState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return modalPropsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return subMenuState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyModalState; });
/* unused harmony export loginPlatformState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XGOH");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
 // interface Klaytn {
//   on: (eventName: string, callback: () => void) => void;
//   enable: () => Promise<Array<string>>;
//   selectedAddress: string;
//   networkVersion: number;
//   publicConfigStore: Store;
// }
// interface State {
//   isEnabled: boolean;
//   isUnlocked: boolean;
//   networkVersion: number;
//   onboardingcomplete: boolean;
// }
// interface Store {
//   subscribe: (callback: () => void) => void;
//   getState: () => State;
// }
// declare global {
//   interface Window {
//     klaytn: any;
//   }
// }
// let kly;
// if (typeof window !== "undefined") {
//   kly = window.klaytn;
// }
// const caverState = atom<any>({
//   key: "caver",
//   default: kly,
// });

const showSignInModalState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "signInKey",
  default: false
});
const showConnectWalletModalState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "connectWalletKey",
  default: false
});
const showCategoryModalState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "showCategoryModalState",
  default: false
});
const isLoginedState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "loginKey",
  default: false
});
const myAddressState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "myAddressKey",
  // default: "0xD216a6beBdDECa9b862c1423b31CFA5188E5cB3C",
  default: "0x00"
});
const myBalanceState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "myBalanceKey",
  default: "0"
});
const qrValueState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "qrcodeKey",
  default: "DEFAULT"
});
const modalPropsState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "modalPropsKey",
  default: {
    title: "MODAL",
    onConfirm: () => {}
  }
});
const subMenuState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "subMenuState",
  default: false
});
const VerifyModalState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "verifyModalState",
  default: false
});
const loginPlatformState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "loginPlatformState",
  default: "None"
});


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

/***/ "xRy9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAccounts; });
/* unused harmony export getAccount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return postAccount; });
/* unused harmony export patchNickname */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteAccount; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DcK4");


const BASE_PATH = "http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/account-wc";
// 모든 데이터 조회
const getAccounts = async cb => {
  const results = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${BASE_PATH}/user_all`);
  cb(results.data);
}; // 특정 데이터 조회

const getAccount = async id => {
  const results = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${BASE_PATH}/user/${id}`);
  return results.data;
}; // DB에 있는 주소라면 true, 없다면 false를 login에 저장

const getUserAddress = async (addr, callback) => {
  // const results =
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${BASE_PATH}/user/addr/${addr}`).then(res => {
    if (res.data) {
      console.log(`[Result] ${JSON.stringify(res.data.result)}`);
      callback(res.data.id);
    }
  }); // return results;
}; // 첫 지갑연결 시 DB에 유저정보 추가

const postAccount = (_walletAddress, _walletKind, setMyAddress) => {
  const data = {
    walletAddress: _walletAddress,
    walletKind: _walletKind,
    nickName: `user${_walletAddress}`
  };
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${BASE_PATH}/create_user`, data).then(res => {
    // setMyAddress(_walletAddress);
    console.log("유저등록");
    Object(_Login__WEBPACK_IMPORTED_MODULE_1__[/* login */ "b"])(_walletAddress, setMyAddress);
  }).catch(e => {
    console.log(e); // setMyAddress(_walletAddress);

    console.log("로그인성공");
    Object(_Login__WEBPACK_IMPORTED_MODULE_1__[/* login */ "b"])(_walletAddress, setMyAddress);
  });
}; // 닉네임을 nickname로 수정

const patchNickname = (id, nickname) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${BASE_PATH}/user/updatenickname/${id}`, {
    nickName: nickname
  }).then(res => {
    alert("정상적으로 변경되었습니다 :)");
    location.reload();
  }).catch(e => console.log(e));
};
const deleteAccount = id => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${BASE_PATH}/user/delete/${id}`).then(res => {
    console.log(`${id}번째 유저삭제 성공`);
  }).catch(e => console.log(e));
};

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