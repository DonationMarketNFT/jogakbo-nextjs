// 소개 배너 컴포넌트 Intro
import styled from "styled-components";
import { media } from "../../../styles/theme";

// 배경이미지 삽입용
const Banner = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url("/banner.jpg") center center;
  background-size: cover;
  ${media.mobile} {
    height: 100vh;
  }
`;

// 컨텐츠 너비조절용
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 250px 0 50px;
  width: 1050px;
  height: 100%;
  ${media.tablet} {
    width: 100%;
    padding: 280px 30px 50px;
  }
  ${media.mobile} {
    align-items: center;
    padding: 300px 30px 50px;
  }
`;

const Logo = styled.img`
  margin-bottom: 10px;
  width: 50px;
  ${media.mobile} {
    width: 100px;
  }
`;

const Title = styled.h5`
  margin-bottom: 15px;
  color: white;
  font-size: 42px;
  /* text-shadow: rgba(0, 0, 0, 0.3) 3px 3px; */
  span {
    font-family: "Gugi", cursive;
  }
  ${media.mobile} {
    font-size: 28px;
  }
`;

const SubTitle = styled.div`
  height: 100%;
  color: white;
`;

export default function HomeBanner() {
  return (
    <Banner>
      <Contents>
        <Logo src="/jogakbo2.png" />
        <Title>
          <span>조각보</span>
        </Title>
        <SubTitle>
          <p>조각보를 설명할 좋은 문구를 고민중입니다...🤔</p>
          <p>조각보를 설명할 좋은 문구를 고민중입니다...🤔</p>
          <p>조각보를 설명할 좋은 문구를 고민중입니다...🤔</p>
          {/* <p>조각보는 블록체인 기반 기부 플랫폼입니다.</p>
          <p>
            캠페인에 기부하여 NFT를 수집할 수 있고, 직접 캠페인을 만들 수도
            있습니다.
          </p> */}
        </SubTitle>
      </Contents>
    </Banner>
  );
}
