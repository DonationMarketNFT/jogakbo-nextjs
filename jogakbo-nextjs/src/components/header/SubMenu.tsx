import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { subMenuState } from "../../../atom";
import { useIsBrowser } from "../../hook/isBrowser";

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 30px 100px 30px;
  width: 100%;
  height: 100%;
  @keyframes fadeIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  animation: fadeIn 0.7s;
  background: white;
  z-index: 99999;
`;

const Head = styled.div`
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
  }
  svg {
    width: 36px;
    font-size: 36px;
  }
`;

const MenuUl = styled.ul`
  margin-bottom: 100px;
  li {
    margin: 10px 0;
    padding: 15px 0;
    font-size: 30px;
    font-weight: 500;
  }
`;
const IntroUl = styled.ul`
  text-align: center;
  li {
    margin: 5px;
    padding: 8px;
    color: gray;
  }
`;

const SubMenu = () => {
  const [subMenu, setSubMenu] = useRecoilState(subMenuState);
  const isBrowser = useIsBrowser();

  return (
    <Container>
      <Head>
        <div>
          <FontAwesomeIcon onClick={() => setSubMenu(false)} icon={faTimes} />
        </div>
      </Head>
      <MenuUl>
        <Link href="/">
          <a onClick={() => setSubMenu(false)}>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/campaigns">
          <a onClick={() => setSubMenu(false)}>
            <li>Campaigns</li>
          </a>
        </Link>
        <Link href="/campaign">
          <a onClick={() => setSubMenu(false)}>
            <li>Create Campaign</li>
          </a>
        </Link>
        <Link href="/mypage">
          <a onClick={() => setSubMenu(false)}>
            <li>My page</li>
          </a>
        </Link>
      </MenuUl>
      {!isBrowser && (
        <IntroUl>
          <Link href="/mobile/developer">
            <a onClick={() => setSubMenu(false)}>
              <li>개발자들</li>
            </a>
          </Link>
          <Link href="/mobile/roadmap">
            <a onClick={() => setSubMenu(false)}>
              <li>로드맵</li>
            </a>
          </Link>
          <Link href="/mobile/qna">
            <a onClick={() => setSubMenu(false)}>
              <li>Q & A</li>
            </a>
          </Link>
        </IntroUl>
      )}
    </Container>
  );
};

export default SubMenu;
