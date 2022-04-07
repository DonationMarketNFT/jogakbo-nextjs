import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 70px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Roadmap = () => {
  return (
    <Container>
      <Title>✔️ 로드맵</Title>
    </Container>
  );
};

export default Roadmap;
