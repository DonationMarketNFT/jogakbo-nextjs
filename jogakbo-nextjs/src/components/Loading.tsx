import styled from "styled-components";
import { media } from "../../styles/theme";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  img {
    width: 80px;
    ${media.mobile} {
      width: 50px;
    }
  }
`;

const Loading = () => {
  return (
    <Container>
      <img src="/스피너배경제거.gif" />
    </Container>
  );
};

export default Loading;
