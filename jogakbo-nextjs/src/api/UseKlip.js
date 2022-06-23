import axios from "axios";
import {JOGAKBO_CONTRACT_ADDRESS} from "../constants/constants.cypress";

const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "JOGAKBO";
// const isMobile = window.screen.width >= 1280 ? false : true;
const isMobile = false;

const getKlipAccessUrl = (method, request_key) => {
  if (method === "QR") {
    return `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  }
  return `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
};

// 캠페인 등록
export const createCampaign = async (
  _campaign_address, // 캠페인 제출자 주소
  _target_amount,
  _campaign_ID,
  setQrvalue,
  callback,
) => {
  const functionJson =
    '{"constant":false,"inputs":[{"name":"_campaign_address","type":"address"},{"name":"_target_amount","type":"uint256"},{"name":"_campaign_ID","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}';
  executeContract(
    JOGAKBO_CONTRACT_ADDRESS,
    functionJson,
    "0",
    `[\"${_campaign_address}\",\"${_target_amount}\",\"${_campaign_ID}\"]`,
    setQrvalue,
    callback,
  );
};

// export const refund = async (
//   _campaignId,
//   _userAddrm
//   setQrvalue: Function,
//   callback: Function,
// ) => {
//   const functionJson =
//     '{ "constant": false, "inputs": [ { "name": "_campaignId", "type": "uint256" }, { "name": "_userAddr", "type": "address" } ], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }';
//   executeContract(
//     JOGAKBO_CONTRACT_ADDRESS,
//     functionJson,
//     "0",
//     `[\"${_campaignId}\",\"${_userAddr}\"]`,
//     setQrvalue,
//     callback,
//   );
// };

// export const donateTocampaign = async (
//   _campaignId: number,
//   _amount: number,
//   setQrvalue: Function,
//   callback: Function,
// ) => {
//   const functionJson =
//     '{ "constant": false, "inputs": [ { "name": "_campaignId", "type": "uint256" }, { "name": "_amount", "type": "uint256" } ], "name": "donateTocampaign", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }';
//   executeContract(
//     JOGAKBO_CONTRACT_ADDRESS,
//     functionJson,
//     (_amount * 10 ** 18).toString(),
//     `[\"${_campaignId}\",\"${_amount}\"]`,
//     setQrvalue,
//     callback,
//   );
// };

// export const setStateToRefund = async (
//   _campaignId: number,
//   setQrvalue: Function,
//   callback: Function,
// ) => {
//   const functionJson =
//     ' { "constant": false, "inputs": [ { "name": "_campaignId", "type": "uint256" } ], "name": "setStateToRefund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }';
//   executeContract(
//     JOGAKBO_CONTRACT_ADDRESS,
//     functionJson,
//     "0",
//     `[\"${_campaignId}\"]`,
//     setQrvalue,
//     callback,
//   );
// };

export const executeContract = (
  txTo,
  functionJSON,
  value,
  params,
  setQrvalue,
  callback,
) => {
  axios
    .post(A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: "execute_contract",
      transaction: {
        to: txTo, // string
        value: value, // string
        abi: functionJSON, // string
        params: params, // string
      },
    })
    .then(response => {
      const {request_key} = response.data;
      if (isMobile) {
        window.location.href = getKlipAccessUrl("android", request_key);
      } else {
        setQrvalue(getKlipAccessUrl("QR", request_key));
      }
      let timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`,
          )
          .then(res => {
            if (res.data.result) {
              console.log(`[result] ${JSON.stringify(res.data.result)}`);
              callback(res.data.result);
              clearInterval(timerId);
              setQrvalue("DEFAULT");
            }
          });
      }, 1000);
    });
};

export const getAddress = (setQrvalue, callback) => {
  axios
    .post(A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: "auth",
    })
    .then(response => {
      const {request_key} = response.data;
      if (isMobile) {
        window.location.href = getKlipAccessUrl("android", request_key);
      } else {
        setQrvalue(getKlipAccessUrl("QR", request_key));
      }
      console.log(`response:${response}`);
      let timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`,
          )
          .then(res => {
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
