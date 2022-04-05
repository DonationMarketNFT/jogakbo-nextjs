import styled from "styled-components";

const Container = styled.div`
  margin-top: 138px;
  padding: 30px;
  height: 100vh;
  background: lightgray;
`;

const MobileHome = () => {
  return (
    <>
      <Container>
        <div>서비스소개</div>
        <div>이용방법</div>
      </Container>
    </>
  );
};

export default MobileHome;
