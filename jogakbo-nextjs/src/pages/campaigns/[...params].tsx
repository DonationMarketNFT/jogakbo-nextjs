import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { media } from "../../../styles/theme";
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

const CampaignBox = styled.div`
  display: flex;
  width: 935px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 10px;
  ${media.tablet} {
    width: auto;
    margin: 0 30px;
    padding: 0 30px;
    margin-bottom: 30px;
  }
  ${media.mobile} {
    padding: 0 10px;
  }
`;

const CampaignRow = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    width: 70%;
  }
  &:last-child {
    width: 30%;
  }
  ${media.mobile} {
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
`;

const ParticipantBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  ${media.mobile} {
    padding: 20px 10px;
  }
`;

const ParticipantRow = styled.div`
  display: flex;
`;

const ParticipantTitle = styled.h3`
  margin: 10px 0;
`;

const Participant = styled.div`
  margin-right: 10px;
  width: 70px;
  height: 70px;
  background: black;
  border-radius: 50%;
  ${media.tablet} {
    width: 50px;
    height: 50px;
  }
`;

const DescriptionBox = styled.div`
  padding: 50px 30px;
  height: 90vh;
  ${media.mobile} {
    padding: 20px 10px;
  }
`;
const DescriptionTitle = styled.h3`
  margin: 10px 0;
`;

const DonationBox = styled.div`
  position: sticky;
  top: 70px;
  padding: 50px 20px 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
  ${media.tablet} {
    all: unset;
    background: white;
    width: 70%;
    padding: 30px 15px 30px 15px;
    border-radius: 15px;
    border: 1px solid lightgray;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const CampaignName = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  ${media.tablet} {
    display: none;
  }
`;

const CampaignDesc = styled.p`
  margin-bottom: 30px;
  height: 150px;
  ${media.tablet} {
    display: none;
    height: 70px;
  }
`;

const DonationForm = styled.form`
  position: relative;
  label {
    position: absolute;
    top: 2px;
    right: 5px;
  }
  ${media.tablet} {
    label {
      top: 6px;
      font-size: 24px;
    }
  }
  ${media.mobile} {
    label {
      top: 4px;
      font-size: 30px;
    }
  }
`;

const DonationInput = styled.input.attrs({ required: true })`
  all: unset;
  border-bottom: 1px solid lightgray;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0 40px 5px 0;
  text-align: right;
  ${media.tablet} {
    font-size: 30px;
    padding: 0 70px 5px 0;
  }
`;

const DonationButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: 0;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: gray;
  }
  ${media.tablet} {
    padding: 25px 0;
    font-size: 30px;
  }
`;

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const [title, id] = params || [];

  useEffect(() => {
    axios(`http://localhost:3000/campaigns/campaign_all`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].id === Number(id)) {
            setData(res.data[i]);
          }
        }
      })
      .catch((e) => console.log(e));
  }, []);

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
        <CampaignBox>
          <CampaignRow>
            <ParticipantBox>
              <ParticipantRow>
                <ParticipantTitle>participant</ParticipantTitle>
              </ParticipantRow>
              <ParticipantRow>
                <Participant />
                <Participant />
                <Participant />
                <Participant />
              </ParticipantRow>
            </ParticipantBox>
            <DescriptionBox>
              <DescriptionTitle>Description</DescriptionTitle>
            </DescriptionBox>
          </CampaignRow>
          <CampaignRow style={{ padding: "50px 0" }}>
            <DonationBox>
              <CampaignName>{title}</CampaignName>
              <CampaignDesc>{data.description}</CampaignDesc>
              {/* {campaignInfo[5] ? (
                <>
                  <DonationForm
                    onSubmit={(e) => {
                      onSubmit(e);
                    }}
                  >
                    <DonationInput
                      type="number"
                      name="klay"
                      id="klay"
                      autoComplete="off"
                      required
                      step={0.0000001}
                    />
                    <label id="klay_label" htmlFor="klay">
                      Klay
                    </label>
                    <DonationButton id="donate_btn">Donate</DonationButton>
                  </DonationForm>
                </>
              ) : (
                <DonationForm>
                  <DonationButton disabled id="donate_btn">
                    Refunding...
                  </DonationButton>
                </DonationForm>
              )} */}
            </DonationBox>
          </CampaignRow>
        </CampaignBox>
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
