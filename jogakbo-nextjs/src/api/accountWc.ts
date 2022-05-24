import axios from "axios";
import {login} from "./Login";

const BASE_PATH = "http://localhost:3000/account-wc";

interface IAccountWc {
  walletAddress: string;
  walletKind: string;
  nickName: string;
}

// 모든 데이터 조회
export const getAccounts = async () => {
  const results = await axios.get(`${BASE_PATH}/user_all`);
  return results.data;
};

// 특정 데이터 조회
export const getAccount = async (id: number) => {
  const results = await axios.get(`${BASE_PATH}/user/${id}`);
  return results.data;
};

// DB에 있는 주소라면 true, 없다면 false를 login에 저장
export const getUserAddress = async (addr: string, callback: Function) => {
  // const results =
  await axios.get(`${BASE_PATH}/user/addr/${addr}`).then(res => {
    if (res.data) {
      console.log(`[Result] ${JSON.stringify(res.data.result)}`);
      callback(res.data.id);
    }
  });
  // return results;
};

// 첫 지갑연결 시 DB에 유저정보 추가
export const postAccount = (
  _walletAddress: string,
  _walletKind: string,
  setMyAddress: Function,
) => {
  const data: IAccountWc = {
    walletAddress: _walletAddress,
    walletKind: _walletKind,
    nickName: `user${_walletAddress}`,
  };
  axios
    .post(`${BASE_PATH}/create_user`, data)
    .then(res => {
      // setMyAddress(_walletAddress);
      console.log("유저등록");
      login(_walletAddress, setMyAddress);
    })
    .catch(e => {
      console.log(e);
      // setMyAddress(_walletAddress);
      console.log("로그인성공");
      login(_walletAddress, setMyAddress);
    });
};

// 닉네임을 nickname로 수정
export const patchNickname = (id: number, nickname: string) => {
  axios
    .patch(`${BASE_PATH}/user/updatenickname/${id}`, {
      nickName: nickname,
    })
    .then(res => {
      alert("정상적으로 변경되었습니다 :)");
      location.reload();
    })
    .catch(e => console.log(e));
};

export const deleteAccount = (id: number) => {
  axios
    .delete(`${BASE_PATH}/user/delete/${id}`)
    .then(res => {
      console.log(`${id}번째 유저삭제 성공`);
    })
    .catch(e => console.log(e));
};
