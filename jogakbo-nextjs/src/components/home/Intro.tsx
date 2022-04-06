// 소개 배너 컴포넌트 Intro
import styled from "styled-components";
import { showSignInModalState } from "../../../atom";
import { media } from "../../../styles/theme";
import SignInModal from "../modals/SignInModal";
import { useRecoilState } from "recoil";
import { useIsBrowser } from "../../hook/isBrowser";

const Banner = styled.div`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url("/banner.jpg");
  background-position: center center;
  background-size: cover;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 200px 0 50px;
  width: 1100px;
  height: 100%;

  img {
    width: 50px;
    ${media.mobile} {
      margin: 0 auto;
    }
  }
  h2,
  p {
    color: ${(props) => props.theme.bgColor};
    ${media.mobile} {
      text-align: center;
      margin: 4px;
    }
  }
  h2 {
    font-size: 42px;
    text-shadow: ${(props) => props.theme.textColor} 3px 3px;
    ${media.mobile} {
      font-size: 28px;
    }
  }
  a {
    /* display: block; */
    width: 150px;
  }
  button {
    width: 150px;
    padding: 8px 10px;
    background: ${(props) => props.theme.bgColor};
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.bgColor};
      background: ${(props) => props.theme.textColor};
    }
  }
  ${media.tablet} {
    width: auto;
    padding: 200px 30px 50px;
  }
  ${media.mobile} {
    padding: 250px 30px 50px;
  }
`;

export default function Intro() {
  const [signIn, setSignIn] = useRecoilState(showSignInModalState);
  const isBrowser = useIsBrowser();

  return (
    <>
      <Banner>
        <BannerContainer>
          <img src="/logo.png" />
          <h2>Welcome to Jogakbo</h2>
          <div>
            <p>조각보는 블록체인 기반 기부 플랫폼입니다.</p>
            {isBrowser ? (
              <p>
                캠페인에 기부하여 NFT를 수집할 수 있고, 직접 캠페인을 만들 수도
                있습니다.
              </p>
            ) : (
              <>
                <p>캠페인에 기부하여 NFT를 수집할 수 있고,</p>
                <p>직접 캠페인을 만들 수도 있습니다.</p>
              </>
            )}
          </div>
          {isBrowser && (
            <button onClick={() => setSignIn(true)}>회원가입하기</button>
          )}
        </BannerContainer>
      </Banner>
      {signIn && <SignInModal />}
    </>
  );
}
