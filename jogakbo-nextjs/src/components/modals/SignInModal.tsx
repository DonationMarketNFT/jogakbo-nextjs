import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { media } from "../../../styles/theme";
import { isLoginedState, showSignInModalState } from "../../../atom";
import Link from "next/link";
import { useIsBrowser } from "../../hook/isBrowser";
import Google from "../OAuth/Google";
import Kakao from "../OAuth/Kakao";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

interface IModal {
  isBrowser: boolean;
}

const Modal = styled.div<IModal>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 360px;
  height: 432px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  backdrop-filter: blur(7.5px);
  border: ${(props) => props.theme.glass.border};
  color: ${(props) => props.theme.glass.color};
  box-shadow: ${(props) => props.theme.glass.boxShadow};
  ${media.tablet} {
    width: 50%;
  }
  ${media.mobile} {
    width: ${(props) => (props.isBrowser ? "360px" : "100%")};
    height: ${(props) => (props.isBrowser ? "432px" : "100%")};
    border-radius: ${(props) => (props.isBrowser ? "10px" : "0")};
    justify-content: center;
    padding-bottom: 100px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 5%;
  div {
    cursor: pointer;
  }
  ${media.mobile} {
    display: none;
  }
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0 24px;
  font-size: 24px;
  ${media.mobile} {
    margin-bottom: 100px;
    font-size: 32px;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 12px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => props.theme.gray};
  padding: 13px 12px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  margin: 12px 0;
  border-radius: 5px;
  padding: 13px 0;
  text-align: center;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.gradient};
  }
`;

const MoreAction = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 13px;
  div {
    padding: 0 5px;
    cursor: pointer;
  }
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
  bgcolor: string;
}

const SocialSignUpButton = styled.div<ISocial>`
  width: 44px;
  height: 44px;
  background: ${(props) => props.bgcolor};
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  &:last-child {
    padding: 12px;
  }
`;

const SignInModal = () => {
  const [signIn, setSignIn] = useRecoilState(showSignInModalState);
  const [login, setLogin] = useRecoilState(isLoginedState);
  const isBrowser = useIsBrowser();

  return (
    <Container onClick={() => setSignIn(false)}>
      <Modal
        isBrowser={isBrowser}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header>
          <div
            onClick={() => {
              setSignIn(false);
            }}
          >
            {isBrowser && <FontAwesomeIcon icon={faTimes} />}
          </div>
        </Header>
        <Logo>JOGAKBO</Logo>
        <Form>
          <Input type="email" required placeholder="이메일" />
          <Input type="password" required placeholder="비밀번호" />
        </Form>
        <Button onClick={() => setLogin(true)}>로그인</Button>
        <MoreAction>
          <div>비밀번호 찾기</div>
          <div> | </div>
          <Link href="/signup">
            <a
              onClick={() => {
                setSignIn(false);
              }}
            >
              <div>회원가입</div>
            </a>
          </Link>
        </MoreAction>
        <SocialSignUp>
          <hr />
          <span>간편 로그인</span>
        </SocialSignUp>
        <SocialSignUpButtons>
          <SocialSignUpButton bgcolor="#f8f8f8">
            <Google />
          </SocialSignUpButton>
          <SocialSignUpButton bgcolor="#fee500">
            <Kakao />
          </SocialSignUpButton>
          <SocialSignUpButton bgcolor="#1ec800">
            <img src="/naver.svg" />
          </SocialSignUpButton>
          <SocialSignUpButton bgcolor="#ffffff">
            <img src="/apple.svg" />
          </SocialSignUpButton>
        </SocialSignUpButtons>
      </Modal>
    </Container>
  );
};

export default SignInModal;
