// 소개 배너 컴포넌트 Intro
import styled from "styled-components";
import {media} from "../../../styles/theme";

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
  padding: 300px 0 50px;
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

const Title = styled.h5`
  margin-bottom: 15px;
  color: ${props => props.theme.bgColor};
  font-family: "Gugi", cursive;
  font-size: 52px;
  ${media.mobile} {
    font-size: 28px;
  }
`;

const SubTitle = styled.div`
  height: 100%;
  line-height: 20px;
  color: ${props => props.theme.bgColor};
`;

export default function HomeBanner() {
  return (
    <Banner>
      <Contents>
        <Title>조각보</Title>
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
