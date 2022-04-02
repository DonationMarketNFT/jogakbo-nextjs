import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styled from "styled-components";
import { media } from "../../../styles/theme";
import SlideBanner from "../../components/campaigns/SlideBanner";
import Slider from "../../components/campaigns/Slider";

const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 50px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1050px;
  ${media.tablet} {
    width: auto;
    flex-direction: column;
  }
`;

export default function Campaigns({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <SlideBanner />
      <Wrapper>
        <Container>
          <Slider type="New" data={data} />
          <Slider type="Popular" data={data} />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Slider type="All" data={data} />
        </Container>
      </Wrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await (
    await fetch(`http://localhost:3000/campaigns/campaign_all`)
  ).json();

  return {
    props: {
      data,
    },
  };
};
