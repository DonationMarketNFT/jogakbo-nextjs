import axios from "axios";

// 쿠키가 있다면 삭제하고 쿠키를 만들어주는 함수 + recoil에 주소 저장
export const login = async (myAddress: string, callback: Function) => {
  const user = await axios.get("/api/user");
  // 쿠키 존재한다면 쿠키 삭제
  if (user.data.address) {
    const logoutData = axios.get("/api/auth/logout");
    console.log(logoutData);
  }
  // 쿠키 생성
  const credentials = {myAddress};
  const loginData = axios.post("/api/auth/login", credentials);
  callback(myAddress);
  //   console.log(user.data.address);
};

// 쿠키 삭제 (로그아웃)
export const logout = async () => {
  const user = await axios.get("/api/auth/logout");
  console.log(user);
};

// 유저 정보 조회 + 주소 recoil 설정
export const getDataFromCookie = async (callback: Function) => {
  await axios.get("/api/user").then(user => {
    const user_key = user;
    if (user.data.address) {
      console.log(user_key);
      callback(user.data.address);
    } else {
      console.log(user_key);
    }
  });
};

export const isValidToken = async (callback: Function) => {
  const user = await axios.get("/api/user");
  if (user.data.address) {
    callback(true);
  }
};
