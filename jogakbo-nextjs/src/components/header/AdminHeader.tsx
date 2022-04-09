import Link from "next/link";
import styled from "styled-components";

const Menu = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  padding: 50px 0;
  width: 250px;
  height: 100%;
  border: 1px solid blue;
  li {
    padding: 12px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.h1`
  font-size: 30px;
`;

const Title = styled.p``;

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
          <Link href="/admin/account">
            <a>
              <li>Account</li>
            </a>
          </Link>
          <Link href="/admin/campaign">
            <a>
              <li>Campaign</li>
            </a>
          </Link>
        </ul>
      </Col>
    </Menu>
  );
};

export default AdminHeader;
