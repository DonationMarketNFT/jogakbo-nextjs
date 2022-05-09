import Caver from "caver-js";
import {getAccount, getUserAddress, postAccount} from "./accountWc";

export const kaikas = async setMyAddress => {
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];
    // Kaikas user detected. You can now use the provider.
  }
  try {
    const accounts = await window.klaytn.enable();
    await postAccount(accounts[0], "kaikas", setMyAddress);
    return accounts[0];
  } catch (error) {
    console.error(error);
    await postAccount(accounts[0], "kaikas", setMyAddress);
  }
};

export const testKaikas = async () => {};

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
