import axios from "axios";

const BASE_PATH = "http://localhost:3000/account-wc";

interface IAccountWc {
  walletAddress: string;
  walletKind: string;
  nickName: string;
}

// 모든 데이터 조회
export const getAccount = async () => {
  const results = await axios.get(`${BASE_PATH}/user_all`);
  return results.data;
};

// 첫 지갑연결 시 DB에 유저정보 추가
export const postAccount = (_walletAddress: string, _walletKind: string) => {
  const data: IAccountWc = {
    walletAddress: _walletAddress,
    walletKind: _walletKind,
    nickName: `user${_walletAddress}`,
  };
  axios
    .post(`${BASE_PATH}/create_user`, data)
    .then(res => alert("정상적으로 제출되었습니다 :)"))
    .catch(e => console.log(e));
};
