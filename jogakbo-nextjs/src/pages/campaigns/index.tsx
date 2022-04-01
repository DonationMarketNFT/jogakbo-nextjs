import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 935px;
  margin: 100px auto;
  padding: 30px;
`;

const CampaignsTitle = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 15px 0px;
  border-radius: 10px;
  color: yellow;
  a {
    display: block;
  }
`;

export default function Campaigns({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container>
      {data?.map((data: any, i: number) => (
        <div key={i}>{data?.name}</div>
      ))}
      <CampaignsTitle>All Campaigns</CampaignsTitle>
      <Tabs>
        <Tab>
          <Link href="campaigns/present">
            <a>진행 중 캠페인</a>
          </Link>
        </Tab>
        <Tab>
          <Link href="campaigns/past">
            <a>완료된 캠페인</a>
          </Link>
        </Tab>
      </Tabs>
    </Container>
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
