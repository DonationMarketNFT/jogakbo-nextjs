import axios from "axios";
import Caver from "caver-js";
import {getAccount, getUserAddress, postAccount} from "./accountWc";
import {login} from "./Login";

// const loginPOST = async myAddress => {
//   const credentials = {myAddress};
//   const user = await axios.post("/api/auth/login", credentials);
//   console.log(user);
// };

export const kaikas = async (myAddress, setMyAddress) => {
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];
    // Kaikas user detected. You can now use the provider.
  }
  try {
    const accounts = await window.klaytn.enable();
    postAccount(accounts[0], "kaikas", setMyAddress);
    // loginPOST(accounts[0]);
    return accounts[0];
  } catch (error) {
    // console.error(error);
    postAccount(accounts[0], "kaikas", setMyAddress);
    // loginPOST(accounts[0]);
  }
};

export const testKaikas = async callback => {
  await klaytn.on("accountsChanged", function (accounts) {
    console.log("계정바뀜", accounts[0]);
    login(accounts[0], callback);
  });
};

// useEffect(() => {
//   console.log(1);
//   window.klaytn.on("accountsChanged", function (accounts) {
//     // kaikas에서 계정을 변경할 때 마다 내부의 함수가 실행됩니다.

//     console.log(accounts[0]);
//   });
// }, [accounts]);

// export const CheckUnlocked = async () => {
//   // 지갑이 연결되어있다면 true, 아니라면 false를 리턴합니다.
//   console.log(await window.klaytn._kaikas.isUnlocked());
// };
