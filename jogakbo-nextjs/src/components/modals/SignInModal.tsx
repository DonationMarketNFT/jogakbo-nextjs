import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {color, flexColumnSet, media} from "../../../styles/theme";
import {isLoginedState, showSignInModalState} from "../../../atom";
import {useIsBrowser} from "../../hooks/isBrowser";
import Google from "../OAuth/Google";
import Kakao from "../OAuth/Kakao";
import Naver from "../OAuth/Naver";
import Apple from "../OAuth/Apple";

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
  background-color: ${props => props.theme.bgColor};
  backdrop-filter: blur(7.5px);
  border: ${props => props.theme.glass.border};
  color: ${props => props.theme.glass.color};
  box-shadow: ${props => props.theme.glass.boxShadow};
  ${media.tablet} {
    width: 50%;
  }
  ${media.mobile} {
    width: ${props => (props.isBrowser ? "360px" : "100%")};
    height: ${props => (props.isBrowser ? "432px" : "100%")};
    border-radius: ${props => (props.isBrowser ? "10px" : "0")};
    justify-content: space-between;
    padding-bottom: 300px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 5%;
  svg {
    cursor: pointer;
    ${media.mobile} {
      font-size: 28px;
    }
  }
  ${media.mobile} {
    margin-bottom: 100px;
  }
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 24px;
  ${media.mobile} {
    font-size: 32px;
  }
`;

const SocialSignUp = styled.div`
  ${flexColumnSet()};
  margin-bottom: 24px;
  padding: 0 8px;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.gray};
  font-size: 12px;
`;

const SocialSignUpButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${color.black};
`;

const SignInModal = () => {
  const [signIn, setSignIn] = useRecoilState(showSignInModalState);
  const [login, setLogin] = useRecoilState(isLoginedState);
  const isBrowser = useIsBrowser();

  return (
    <>
      {!login && (
        <Container onClick={() => setSignIn(false)}>
          <Modal
            isBrowser={isBrowser}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <Header>
              <FontAwesomeIcon
                onClick={() => {
                  setSignIn(false);
                }}
                icon={faTimes}
              />
            </Header>
            <Logo>JOGAKBO</Logo>
            <SocialSignUp>간편 로그인</SocialSignUp>
            <SocialSignUpButtons>
              <Google />
              <Kakao />
              <Naver />
              <Apple />
            </SocialSignUpButtons>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default SignInModal;
