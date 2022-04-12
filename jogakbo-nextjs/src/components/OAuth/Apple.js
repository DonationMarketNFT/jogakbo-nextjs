import { useState, useEffect } from "react";
import axios from "axios";
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
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
`;

const Logo = styled.img`
  padding: 8px;
  width: 36px;
`;

const Text = styled.h5`
  width: 100%;
  text-align: center;
`;

function Apple() {
  const [login, setLogin] = useRecoilState(isLoginedState);

  return (
    <Container onClick={() => setLogin(true)}>
      <Logo src="oauth/apple.svg" />
      <Text>애플 로그인</Text>
    </Container>
  );
}

export default Apple;
