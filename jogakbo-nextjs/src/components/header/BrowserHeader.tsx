import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../../../styles/theme";
import Link from "next/link";
import { useRecoilState } from "recoil";
import SignInModal from "../modals/SignInModal";
import {
  isLoginedState,
  showSignInModalState,
  subMenuState,
} from "../../../atom";
import SubMenu from "./SubMenu";
import { useRouter } from "next/dist/client/router";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
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
    border: "1px solid rgba(225, 225, 225, 0.2)",
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
const Logo = styled(motion.h1)`
  font-family: "Gugi", cursive;
  font-size: 28px;
  color: white;
  transition: all 0.2s ease-in-out;
`;

const logoVariants = {
  top: {
    color: "white",
    textShadow: "none",
  },
  scroll: {
    color: "black",
    textShadow: "#c1c1c1 0.3px 0.3px",
  },
};

const Menu = styled.ul`
  display: flex;
  align-items: center;
  li {
    position: relative;
    padding: 15px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #111;
    }
  }
  ${media[768]} {
    display: none;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  bottom: 5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  /* border-radius: 5px; */
  /* bottom: -5px; */
  /* left: 0;
  right: 0; */
  /* margin: 0 auto; */
  background: #d14d4d;
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
    /* background: ${(props) => props.theme.gradient}; */
    /* color: ${(props) => props.theme.bgColor}; */
  }
`;
const Triger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  width: 36px;
  height: 26px;
  cursor: pointer;
  div {
    display: block;
    width: 100%;
    height: 4px;
    background: black;
  }
  div:nth-child(2) {
    width: 80%;
  }
  ${media[768]} {
    display: flex;
  }
`;

const BrowserHeader = () => {
  const router = useRouter();
  const headerAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const [signIn, setSignIn] = useRecoilState(showSignInModalState);
  const [login, setLogin] = useRecoilState(isLoginedState);
  const [subMenu, setSubMenu] = useRecoilState(subMenuState);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 20) {
        headerAnimation.start("scroll");
        logoAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
        logoAnimation.start("top");
      }
    });
  }, [scrollY, headerAnimation, logoAnimation]);

  return (
    <>
      <Head variants={headerVariants} animate={headerAnimation} initial={"top"}>
        <HeaderFlexBox>
          <Col>
            <Link href="/">
              <a>
                <Logo
                  variants={logoVariants}
                  animate={logoAnimation}
                  initial={"top"}
                  whileHover={"hover"}
                >
                  조각보
                </Logo>
              </a>
            </Link>
          </Col>
          <Col>
            <Menu>
              <Link href="/campaigns">
                <a>
                  <li>
                    캠페인 둘러보기
                    {router.pathname === "/campaigns" && (
                      <Circle layoutId="circle" />
                    )}
                  </li>
                </a>
              </Link>
              <Link href="/campaign">
                <a>
                  <li>
                    캠페인 생성하기
                    {router.pathname === "/campaign" && (
                      <Circle layoutId="circle" />
                    )}
                  </li>
                </a>
              </Link>
            </Menu>
          </Col>
          <Col>
            {login ? (
              <Link href="/mypage">
                <a>
                  <SignInBtn>My Page</SignInBtn>
                </a>
              </Link>
            ) : (
              <SignInBtn onClick={() => setSignIn(true)}>로그인</SignInBtn>
            )}
            <Triger onClick={() => setSubMenu(true)}>
              <div></div>
              <div></div>
              <div></div>
            </Triger>
          </Col>
        </HeaderFlexBox>
      </Head>
      {signIn && <SignInModal />}
      {subMenu && <SubMenu />}
    </>
  );
};

export default BrowserHeader;
