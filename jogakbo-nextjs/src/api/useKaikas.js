import Caver from "caver-js";

export const kaikas = async () => {
  if (typeof window.klaytn !== "undefined") {
    const provider = window["klaytn"];
  }
  try {
    // kaikas와 상호작용해서 모든 공개키 획득
    // accounts[0] 같이 배열로 접근하여 사용가능
    const accounts = await window.klaytn.enable();
    // 현재 kaikas에 선택된 공개키
    const account = accounts[0];

    // caver-js 연결
    const caver = new Caver(window.klaytn);

    // caver 함수 중 현재 공개키의 klay양을 리턴하는 함수
    const balance = await caver.klay.getBalance(account);
    return {account: account, balance: (balance / 10 ** 18).toString()};
  } catch (error) {
    console.error(error);
  }

  useEffect(() => {
    console.log(1);
    window.klaytn.on("accountsChanged", function (accounts) {
      // kaikas에서 계정을 변경할 때 마다 내부의 함수가 실행됩니다.

      console.log(accounts[0]);
    });
  }, [accounts]);

  const CheckUnlocked = async () => {
    // 지갑이 연결되어있다면 true, 아니라면 false를 리턴합니다.
    console.log(await window.klaytn._kaikas.isUnlocked());
  };
};
