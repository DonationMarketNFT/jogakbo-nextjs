import styled from "styled-components";

const SplashScreen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 99999;
  img {
    width: 120px;
  }
`;
const Splash = () => {
  return (
    <SplashScreen>
      <img src="/splash.png" />
    </SplashScreen>
  );
};

export default Splash;
