import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faToggleOn,
  faToggleOff,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../../../styles/theme";
import Link from "next/link";
import { useRecoilState } from "recoil";
import SignInModal from "../modals/SignInModal";
import { isLoginedState, showSignInModalState } from "../../../atom";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
`;

const headerVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "none",
    border: "none",
  },
  scroll: {
    backgroundColor: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(7.5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
};

const HeaderFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 1050px;
  height: 100%;
  ${media.tablet} {
    margin: 0;
    width: 100%;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const SubMenu = styled.ul`
  display: flex;
  align-items: center;
  li {
    padding: 15px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(prop) => prop.theme.gray};
    }
  }
`;

const SignInBtn = styled.div`
  padding: 10px 20px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.gradient};
    color: ${(props) => props.theme.bgColor};
  }
`;

const ModeBtn = styled.div`
  margin-left: 15px;
  font-size: 20px;
  cursor: pointer;
`;

const BrowserHeader = () => {
  const headerAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const [mode, setMode] = useState(false);
  const [signIn, setSignIn] = useRecoilState(showSignInModalState);
  const [login, setLogin] = useRecoilState(isLoginedState);

  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        headerAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
      }
    });
  }, [scrollY, headerAnimation]);

  return (
    <>
      <Head variants={headerVariants} animate={headerAnimation} initial={"top"}>
        <HeaderFlexBox>
          <Col>
            <Link href="/">
              <a>
                <Logo>JOGAKBO</Logo>
              </a>
            </Link>
          </Col>
          <Col>
            <SubMenu>
              <Link href="/campaigns">
                <a>
                  <li>Campaigns</li>
                </a>
              </Link>
              <Link href="/campaign">
                <a>
                  <li>Create Campaign</li>
                </a>
              </Link>
            </SubMenu>
          </Col>
          <Col>
            {login ? (
              <Link href="/mypage">
                <a>
                  <SignInBtn>My Page</SignInBtn>
                </a>
              </Link>
            ) : (
              <SignInBtn onClick={() => setSignIn(true)}>SIGN IN</SignInBtn>
            )}
            {/* <ModeBtn onClick={() => toggleMode()} className="mr-3">
              {mode ? (
                <FontAwesomeIcon icon={faToggleOff} />
              ) : (
                <FontAwesomeIcon icon={faToggleOn} />
              )}
            </ModeBtn> */}
          </Col>
        </HeaderFlexBox>
      </Head>
      {signIn ? <SignInModal /> : null}
    </>
  );
};

export default BrowserHeader;
