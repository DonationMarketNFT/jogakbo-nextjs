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
import { useIsBrowser } from "../../hook/isBrowser";
import { useRouter } from "next/dist/client/router";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 9999;
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

const Triger = styled.div`
  display: flex;
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
`;

const MobileHeader = () => {
  const headerAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  const [mode, setMode] = useState(false);
  const [signIn, setSignIn] = useRecoilState(showSignInModalState);
  const [login, setLogin] = useRecoilState(isLoginedState);
  const [subMenu, setSubMenu] = useRecoilState(subMenuState);
  const isBrowser = useIsBrowser();
  const router = useRouter();

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
      {(router.pathname !== "/signup" || isBrowser) && (
        <Head
          variants={headerVariants}
          animate={headerAnimation}
          initial={"top"}
        >
          <HeaderFlexBox>
            <Col>
              <Link href="/">
                <a>
                  <Logo>JOGAKBO</Logo>
                </a>
              </Link>
            </Col>
            <Col>
              {isBrowser && (
                <SignInBtn onClick={() => setSignIn(true)}>SIGN IN</SignInBtn>
              )}
              <Triger onClick={() => setSubMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
              </Triger>
            </Col>
          </HeaderFlexBox>
        </Head>
      )}
      {signIn && <SignInModal />}
      {subMenu && <SubMenu />}
    </>
  );
};

export default MobileHeader;
