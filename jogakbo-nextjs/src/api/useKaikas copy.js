import Caver from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  JOGAKBO_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "constants/constants.baobab";
import {postAccount} from "./accountWc";
import {login, logout} from "./Login";
import JOGAKBOABI from "../abi/JogakboABI.json";

let kly;
if (typeof window !== "undefined") {
  kly = window.klaytn;
}
const caver = new Caver(kly);

export const rs = () => {
  caver.klay
    .sendTransaction({
      type: "VALUE_TRANSFER",
      from: "0xA52c3f53F087B3445190ADc0B038Bd78D8110eDa",
      to: "0xc72af0d3c40d5E95e3424b251ceA0cD81e230Dc1",
      gas: "300000",
      value: caver.utils.toPeb("1", "KLAY"),
    })
    .then(res => console.log(res));
};

const jogakbo = new caver.klay.Contract(JOGAKBOABI, JOGAKBO_CONTRACT_ADDRESS);
console.log(jogakbo);

export const kaikas = async (myAddress, setMyAddress) => {
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];
  }
  try {
    const accounts = await window.klaytn.enable();
    postAccount(accounts[0], "kaikas", setMyAddress);
    return accounts[0];
  } catch (error) {
    postAccount(accounts[0], "kaikas", setMyAddress);
  }
};

export const testKaikas = async callback => {
  await klaytn.on("accountsChanged", function (accounts) {
    console.log("계정바뀜", accounts[0]);
    login(accounts[0], callback);
  });
};

export const confirmKaikas = async () => {
  const inUnlocked = await window.klaytn._kaikas.isUnlocked();
  if (!inUnlocked) {
    logout();
  }
  console.log(inUnlocked);
};

// export const test1 = async () => {
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
