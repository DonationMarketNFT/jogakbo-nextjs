import { useState } from "react";
import styled from "styled-components";
import { media } from "../../../styles/theme";
import { testCampaignList } from "../../api/UseCaver";

const Container = styled.div`
  width: 100%;
  height: 500px;
  background: gray;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(0, 0, 0, 0)
    ),
    url("/멸종위기.jpg");
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 30px;
  width: 1060px;
  height: 100%;
  ${media.tablet} {
    width: auto;
  }
`;

const Banner_태그모음 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

interface ITag {
  bgColor?: string;
}
const Banner_태그 = styled.div<ITag>`
  margin-left: 10px;
  padding: 5px 10px;
  background: ${(props) =>
    props.bgColor === "new"
      ? "#3558e6"
      : props.bgColor === "popular"
      ? "#f2114d"
      : props.bgColor === "환경"
      ? "#abc949"
      : props.bgColor === "공익"
      ? "#a665eb"
      : "#e0e0e0"};
  border-radius: 5px;
  font-size: 14px;
  color: white;
  &:first-child {
    margin: 0;
  }
`;
const Banner_이름 = styled.h3`
  margin: 15px 0;
  font-size: 32px;
  font-weight: 600;
`;
const Banner_설명 = styled.p``;

const SlideBanner = () => {
  return (
    <Container>
      <Banner>
        <Banner_태그모음>
          {/* <Banner_태그 bgColor="new">new</Banner_태그> */}
          <Banner_태그 bgColor="환경">환경</Banner_태그>
          {/* <Banner_태그 bgColor="popular">popular</Banner_태그> */}
          {/* <Banner_태그 bgColor="공익">공익</Banner_태그> */}
        </Banner_태그모음>
        <Banner_이름>멸종위기 동물들의 이야기</Banner_이름>
        <Banner_설명>멸종위기 동물들의 이야기에 귀 기울여주세요.</Banner_설명>
      </Banner>
    </Container>
  );
};

export default SlideBanner;