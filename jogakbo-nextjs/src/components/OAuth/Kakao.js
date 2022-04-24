import {useRouter} from "next/dist/client/router";
import {useRecoilState, useRecoilValue} from "recoil";
import styled from "styled-components";
import {isLoginedState, loginPlatformState} from "../../../atom";
import React, {useState, useEffect} from "react";
import KakaoLogin from "react-kakao-login";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 15px;
  width: 300px;
  height: 45px;
  background: #fee500;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`;

const Logo = styled.img`
  width: 36px;
`;

const Text = styled.h5`
  width: 100%;
  text-align: center;
  opacity: 85%;
`;

const Kakao = () => {
  const JAVASCRIPT_API_KEY = "000d0aaca2d1ced4767b50abca25af3c";
  const REST_API_KEY = "87ec2852b1a816aba24acbd1e66aa2fe";
  //TODO: this api key should be encrypted.
  const REDIRECT_URI = "http://localhost:3003/mypage";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const router = useRouter();
  const [login, setLogin] = useRecoilState(isLoginedState);
  const [loginPlatform, setLoginPlatform] = useRecoilState(loginPlatformState);
  const platform_name = "KAKAO";
  setLoginPlatform(platform_name);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Kakao.init(JAVASCRIPT_API_KEY);
    }
  }, []);

  return (
    <KakaoLogin
      token={JAVASCRIPT_API_KEY}
      onSuccess={err => {
        console.log("로그인성공", err);
        window.Kakao.Auth.setAccessToken(err.response.access_token);
        console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
        console.log("닉네임");
        console.log(err.profile.kakao_account.profile.nickname);
        console.log("email");
        console.log(err.profile.kakao_account.email);
      }} // 성공 시 실행할 함수
      onFail={err => {
        console.log("로그인실패", err);
      }}
      onLogout={() => {
        console.log("로그아웃");
      }}
      render={({onClick}) => (
        <Container
          onClick={e => {
            setLogin(true);
            e.preventDefault();
            onClick();
          }}
        >
          <Logo src="oauth/kakao.svg" />
          <Text>카카오 로그인</Text>
        </Container>
      )}
    ></KakaoLogin>
  );
};

export default Kakao;
