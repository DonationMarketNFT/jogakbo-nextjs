import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";

const 이미지 = styled.div`
  background-image: url(/멸종위기.jpg);
  width: 100%;
  height: 500px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  margin: 50px auto;
`;

const 캠페인이름 = styled.h3`
  margin: 20px 0;
  font-size: 38px;
`;

const Bars = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 100px;
`;

const PercentBar = styled.div`
  width: 100%;
  height: 10px;
  background: lightgray;
  border-radius: 5px;
`;

interface ICurrentBar {
  width: string;
}

const CurrentBar = styled.div<ICurrentBar>`
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
  height: 10px;
  background: gray;
  border-radius: 5px;
`;

const Percent = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Klay = styled.div`
  margin-top: 10px;
  text-align: right;
`;

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const [title, id] = params || [];
  axios(`http://localhost:3000/campaigns/campaign_all`)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].id === Number(id)) {
          setData(res.data[i]);
        }
      }
    })
    .catch((e) => console.log(e));

  return (
    <>
      <이미지>hello</이미지>
      <Container>
        <Seo title={title} />
        <캠페인이름>{title}</캠페인이름>
        <Bars>
          <PercentBar />
          {/* <CurrentBar width={`${(data[4] / 10 ** 18 / data[3]) * 100}%`} /> */}
          <CurrentBar
            width={`${(data[4] / 10 ** 18 / data.targetAmount) * 100}%`}
          />
          <Percent>{(data[4] / 10 ** 18 / data.targetAmount) * 100}%</Percent>
          <Klay>
            (<span>현재 모금된 금액</span>Klay /{" "}
            <span>{data.targetAmount}</span>
            Klay)
          </Klay>
        </Bars>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { params },
}: any) => {
  return {
    props: {
      params,
    },
  };
};
