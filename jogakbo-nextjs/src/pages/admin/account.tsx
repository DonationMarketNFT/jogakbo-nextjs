import {getAccounts} from "api/accountWc";
import {useEffect, useState} from "react";
import styled from "styled-components";
import AdminHeader from "../../components/header/AdminHeader";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  padding-left: 300px;
`;

const 페이지타이틀 = styled.h3`
  margin-bottom: 30px;
`;

const 컨텐츠 = styled.div``;
const 타이틀 = styled.h4`
  margin-bottom: 20px;
`;

const AccountPage = () => {
  const [accounts, setAccounts] = useState();
  useEffect(() => {
    getAccounts(setAccounts);
    console.log(accounts);
  }, []);
  return (
    <>
      <AdminHeader />
      <Container>
        <페이지타이틀>account</페이지타이틀>
        <컨텐츠>
          <타이틀>최신가입 유저</타이틀>
        </컨텐츠>
        <컨텐츠>
          <타이틀>모든 유저</타이틀>
        </컨텐츠>
      </Container>
    </>
  );
};

export default AccountPage;
