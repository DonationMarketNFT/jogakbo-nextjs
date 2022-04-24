import { useRouter } from "next/dist/client/router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isLoginedState, loginPlatformState } from "../../../atom";

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
  const REST_API_KEY = "87ec2852b1a816aba24acbd1e66aa2fe";
  //TODO: this api key should be encrypted.
  const REDIRECT_URI = "http://localhost:3003/mypage";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const router = useRouter();
  const [login, setLogin] = useRecoilState(isLoginedState);
  const [loginPlatform, setLoginPlatform] = useRecoilState(loginPlatformState);
  return (
    <Container
      onClick={() => {
        setLoginPlatform("KAKAO");
        setLogin(true);
        router.push(KAKAO_AUTH_URL);
      }}
    >
      <Logo src="oauth/kakao.svg" />
      <Text>카카오 로그인</Text>
    </Container>
  );
};

export default Kakao;
