import {motion, useAnimation, useViewportScroll} from "framer-motion";
import {useEffect} from "react";
import styled from "styled-components";
import {color, flexSet, media} from "../../../styles/theme";
import Link from "next/link";
import {useRecoilState, useResetRecoilState} from "recoil";
import {
  modalPropsState,
  myAddressState,
  myBalanceState,
  qrValueState,
  showConnectWalletModalState,
  subMenuState,
} from "../../../atom";
import SubMenu from "./SubMenu";
import {useRouter} from "next/dist/client/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb as regular} from "@fortawesome/free-regular-svg-icons";
import useDarkMode from "use-dark-mode";
import ConnectWalletModal from "../modals/ConnectWalletModal";
import * as KlipAPI from "../../api/UseKlip";
import {getBalance} from "../../api/UseCaver";
import {postAccount} from "../../api/accountWc";
import axios from "axios";
import {confirmKaikas, testKaikas} from "../../api/useKaikas";
import {getDataFromCookie, isValidToken} from "../../api/Login";
import {request} from "http";

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
    boxShadow: "none",
  },
  scroll: {
    backgroundColor: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(7.5px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 2px 30px 0 rgba(0, 0, 0, 0.27)",
  },
};

const HeaderFlexBox = styled.div`
  ${flexSet("space-between")};
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
  font-family: "Gugi", cursive;
  font-size: 28px;
  transition: all 0.2s ease-in-out;
  color: #f49a4a;
`;

const Menu = styled.ul`
  ${flexSet()};
  li {
    position: relative;
    padding: 15px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme.textColor};
    &:hover {
      color: ${props => props.theme.gray.gray2};
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
  background: #f49a4a;
`;

const UserBtn = styled.div`
  margin-left: 15px;
  padding: 10px 20px;
  background: #f49a4a;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const ModeToggle = styled.div`
  ${flexSet()};
  margin-left: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  svg {
    width: 12px;
    color: ${color.mainColor};
  }
  &:hover {
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
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
  const {scrollY} = useViewportScroll();
  const [showConnectWallet, setShowConnectWallet] = useRecoilState(
    showConnectWalletModalState,
  );
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [subMenu, setSubMenu] = useRecoilState(subMenuState);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const [myBalance, setMyBalance] = useRecoilState(myBalanceState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const resetAddressState = useResetRecoilState(myAddressState);
  const mode = useDarkMode();

  const toggleMode = () => {
    mode.toggle();
  };

  const getUserData = async () => {
    setModalProps({
      title: "Connect Wallet",
      onConfirm: () => {
        KlipAPI.getAddress(setQrvalue, async (address: string) => {
          setMyAddress(address);
          const _balance = await getBalance(address);
          setMyBalance(_balance);
          postAccount(address, "klip", setMyAddress);
        });
      },
    });
    setShowConnectWallet(true);
  };

  const handleGetUser = async () => {
    await getDataFromCookie(setMyAddress).then(() => {
      console.log("address", myAddress);
    });
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");
    console.log(user);

    resetAddressState();
  };

  const testK = () => {
    testKaikas(setMyAddress);
  };

  const confirm = () => {
    confirmKaikas();
  };

  useEffect(() => {
    handleGetUser();
    testK();
    confirm();
  }, []);

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
                <Logo>조각보</Logo>
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
            {myAddress !== "0x00" ? (
              // {token ? (
              <>
                <UserBtn onClick={handleLogOut}>로그아웃</UserBtn>
                <Link href="/mypage">
                  <a>
                    <UserBtn>My Page</UserBtn>
                  </a>
                </Link>
              </>
            ) : (
              <UserBtn onClick={getUserData}>connect wallet</UserBtn>
            )}
            {mode.value ? (
              <ModeToggle onClick={toggleMode}>
                <FontAwesomeIcon icon={faLightbulb} />
              </ModeToggle>
            ) : (
              <ModeToggle onClick={toggleMode}>
                <FontAwesomeIcon icon={regular} />
              </ModeToggle>
            )}
            <Triger onClick={() => setSubMenu(true)}>
              <div></div>
              <div></div>
              <div></div>
            </Triger>
          </Col>
          {/* <Col>
            <button onClick={handleGetUser}>get user from cookie</button>
            <button onClick={testK}>test K</button>
            <button onClick={confirm}>test confirm</button>
          </Col> */}
        </HeaderFlexBox>
      </Head>
      {showConnectWallet && <ConnectWalletModal />}
      {subMenu && <SubMenu />}
    </>
  );
};

export default BrowserHeader;
