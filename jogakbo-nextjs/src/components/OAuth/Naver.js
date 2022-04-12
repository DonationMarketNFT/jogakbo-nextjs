import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoginedState } from "../../../atom";

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

function Naver() {
  const [login, setLogin] = useRecoilState(isLoginedState);

  return (
    <Container onClick={() => setLogin(true)}>
      <Logo src="oauth/naver.svg" />
      <Text>네이버 로그인</Text>
    </Container>
  );
}

export default Naver;
