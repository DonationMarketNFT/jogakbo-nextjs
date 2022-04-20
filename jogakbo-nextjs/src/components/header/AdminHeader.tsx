import Link from "next/link";
import styled from "styled-components";
import { flexColumnSet } from "../../../styles/theme";

const Menu = styled.header`
  ${flexColumnSet("space-between")}
  position: fixed;
  left: 0;
  padding: 50px 0;
  width: 250px;
  height: 100%;
  background: lightgray;
  li {
    padding: 12px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-child(2) {
    height: 100%;
  }
  &:last-child {
    a {
      padding: 10px 15px;
      background: #f49a4a;
      border-radius: 5px;
      color: white;
    }
  }
`;

const Logo = styled.h1`
  font-size: 30px;
`;

const Title = styled.p`
  margin-bottom: 30px;
`;

const AdminHeader = () => {
  return (
    <Menu>
      <Col>
        <Logo>JOGAKBO</Logo>
        <Title>관리자 페이지</Title>
      </Col>
      <Col>
        <ul>
          <Link href="/admin">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/admin/1">
            <a>
              <li>검토 캠페인 리스트</li>
            </a>
          </Link>

          <li
            style={{
              cursor: "url(/construct.png), auto",
            }}
          >
            유저 관리 (개발중)
          </li>
        </ul>
      </Col>
      <Col>
        <Link href="/">
          <a>
            <div>조각보 홈으로</div>
          </a>
        </Link>
      </Col>
    </Menu>
  );
};

export default AdminHeader;
