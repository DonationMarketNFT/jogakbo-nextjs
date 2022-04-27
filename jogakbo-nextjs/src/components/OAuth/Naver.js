import styled from "styled-components";
import {useRecoilState} from "recoil";
import {isLoginedState, loginPlatformState} from "../../../atom";
import {useRouter} from "next/dist/client/router";
import React, {useState, useEffect} from "react";
import NaverLogin from "react-naver-login";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 15px;
  width: 300px;
  height: 45px;
  background: #03c75a;
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
  color: #fff;
`;

const CLIENT_ID = "pwHyAdW1aYVUv1EVlAHI";

function Naver() {
  const REDIRECT_URI = "http://localhost:3003//naverPopUp";
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI,
  )}`;
  const router = useRouter();
  const platform_name = "NAVER";

  const [login, setLogin] = useRecoilState(isLoginedState);
  const [loginPlatform, setLoginPlatform] = useRecoilState(loginPlatformState);

  return (
    <NaverLogin
      clientId={CLIENT_ID}
      callbackUrl={REDIRECT_URI}
      onSuccess={naverUser => console.log(naverUser)}
      onFailure={result => console.error(result)}
      render={({onClick}) => (
        <Container
          onClick={e => {
            setLogin(true);
            setLoginPlatform(platform_name);
            e.preventDefault();
            onClick();
          }}
        >
          <Logo src="oauth/naver.svg" />
          <Text>네이버 로그인</Text>
        </Container>
      )}
    ></NaverLogin>
  );
}

export default Naver;
