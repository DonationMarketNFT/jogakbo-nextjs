import styled from "styled-components";
import AdminHeader from "../../components/header/AdminHeader";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  padding-left: 300px;
`;

const AdminHome = () => {
  return (
    <>
      <AdminHeader />

      <Container>hi</Container>
    </>
  );
};

export default AdminHome;
