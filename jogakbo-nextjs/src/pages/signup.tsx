import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  margin: 150px auto;
  /* background: lightgray; */
`;
const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 8px;
    color: gray;
  }
  input {
    padding: 10px;
    margin-bottom: 24px;
  }
  button {
    margin-bottom: 40px;
    padding: 15px;
    background: lightgray;
    border-radius: 5px;
    color: white;
    text-align: center;
    cursor: pointer;
  }
`;
const PasswordBox = styled.div`
  position: relative;
  input {
    width: 100%;
  }
`;

const 패스워드보기 = styled.span`
  position: absolute;
  top: 11px;
  right: 10px;
  cursor: pointer;
`;

const SocialSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    position: relative;
    bottom: -8px;
    display: block;
    margin: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.gray};
    border: none;
  }
  span {
    padding: 0 8px;
    margin-bottom: 16px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.3px;
    z-index: 9;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.gray};
  }
`;

const SocialSignUpButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

interface ISocial {
  bgColor: string;
}

const SocialSignUpButton = styled.img<ISocial>`
  width: 44px;
  height: 44px;
  background: ${(props) => props.bgColor};
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  &:last-child {
    padding: 12px;
  }
`;

const signup = () => {
  const [passwordType1, setPasswordType1] = useState({
    type: "password",
    visible: false,
  });
  const [passwordType2, setPasswordType2] = useState({
    type: "password",
    visible: false,
  });
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handlePasswordType1 = (e: any) => {
    setPasswordType1(() => {
      if (!passwordType1.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const handlePasswordType2 = (e: any) => {
    setPasswordType2(() => {
      if (!passwordType2.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const onClickButton = (e: any) => {
    if (password1 !== password2) {
      e.preventDefault();
      alert("비밀번호가 일치하지 않습니다");
    } else {
      e.preventDefault();
      alert("이메일 인증 구현이 필요합니다");
    }
  };

  return (
    <>
      <Container>
        <Title>회원가입</Title>
        <Form>
          <label htmlFor="email">이메일</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            type="email"
            placeholder="example@jogakbo.com"
          />
          <label htmlFor="password1">비밀번호</label>
          <PasswordBox>
            <input
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
              id="password1"
              type={passwordType1.type}
              placeholder="******"
            />
            <패스워드보기 onClick={handlePasswordType1}>
              {passwordType1.visible ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </패스워드보기>
          </PasswordBox>

          <label htmlFor="password2">비밀번호 확인</label>
          <PasswordBox>
            <input
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              id="password2"
              type={passwordType2.type}
              placeholder="******"
            />
            <패스워드보기 onClick={handlePasswordType2}>
              {passwordType2.visible ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </패스워드보기>
          </PasswordBox>
          <button onClick={(e) => onClickButton(e)}>가입하기</button>
        </Form>
        <SocialSignUp>
          <hr />
          <span>간편 로그인</span>
        </SocialSignUp>
        <SocialSignUpButtons>
          <SocialSignUpButton bgColor="#f8f8f8" src="/google.svg" />
          <SocialSignUpButton bgColor="#fee500" src="/kakao.svg" />
          <SocialSignUpButton bgColor="#1ec800" src="/naver.svg" />
          <SocialSignUpButton bgColor="#ffffff" src="/apple.svg" />
        </SocialSignUpButtons>
      </Container>
    </>
  );
};

export default signup;
