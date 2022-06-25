import axios from "axios";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {useEffect} from "react";
import {useState} from "react";
import styled from "styled-components";
import {media} from "../../../styles/theme";
import Seo from "../../components/Seo";
import Category from "../../components/Category";
import {donateTocampaign, refund} from "api/UseKlip";
import {useRecoilState} from "recoil";
import {
  myAddressState,
  qrValueState,
  showConnectWalletModalState,
} from "../../../atom";
import ConnectWalletModal from "components/modals/ConnectWalletModal";
import {fromKlaytoPeb} from "api/UseCaver";

const 이미지 = styled.div`
  background-image: url(/멸종위기.jpg);
  width: 100%;
  height: 500px;
`;

const Wrapper = styled.div`
  background: ${props => props.theme.bgColor};
  box-sizing: border-box;
  padding-bottom: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  margin: 50px auto;
  ${media.tablet} {
    margin-right: 40px;
    margin-left: 40px;
    width: auto;
  }
  ${media.mobile} {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const 타이틀 = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
`;

const 캠페인이름 = styled.div`
  margin: 20px 0;
  font-size: 38px;
`;

const Bars = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  margin-bottom: 100px;
  color: ${props => props.theme.textColor};
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
  width: ${props => props.width};
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

const Min = styled.div`
  margin-top: 10px;
  text-align: right;
  color: ${props => props.theme.gray.gray6};
`;

const RefundState = styled.div`
  color: ${props => props.theme.textColor};
`;

const RefundButton = styled.div`
  background: red;
  color: white;
  margin-bottom: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const CampaignBox = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: ${props => props.theme.textColor};

  ${media.tablet} {
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
  background: ${props => props.theme.textColor};
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
  border-radius: 15px;
  /* box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%); */
  box-shadow: ${props => props.theme.boxShadow2};
  background: ${props => props.theme.bgColor};
  ${media.tablet} {
    all: unset;
    background: white;
    width: 85%;
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
      font-size: 24px;
    }
  }
`;

const DonationInput = styled.input.attrs({required: true})`
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
  ${media.mobile} {
    font-size: 21px;
  }
`;

const DonationButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: 0;
  border-radius: 15px;
  text-align: center;
  background: ${props => props.theme.gray.gray5};
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${props => props.theme.gray.gray3};
  }
  ${media.tablet} {
    padding: 25px 0;
    font-size: 30px;
  }
  ${media.mobile} {
    padding: 18px 0;
    font-size: 24px;
  }
`;

const DEFAULT_DATA = new Array();

export default function Detail({
  params,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = useState<any>(DEFAULT_DATA);
  const [title, id] = params || [];
  const [donateAmount, setDonateAmount] = useState<string>();
  const [qrValue, setQrValue] = useRecoilState(qrValueState);
  const [showModal, setShowModal] = useRecoilState(showConnectWalletModalState);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);

  const changeState = () => {
    axios
      .patch(
        `http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/fundingstatus/${id}`,
        {
          fundingStatus: !data.fundingSatus,
        },
      )
      .then(() =>
        axios
          .patch(
            `http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/refundstatus/${id}`,
            {
              refundStatus: !data.refundStatus,
            },
          )
          .then(res => {
            alert(`상태가 변경되었습니다`);
            location.reload();
          })
          .catch(e => console.log(e)),
      );
  };

  const donate = (e: any) => {
    e.preventDefault();
    donateTocampaign(id, Number(donateAmount), setQrValue, (result: any) => {
      alert(result);
      setShowModal(false);
    });
    setShowModal(true);
  };

  const onClickRefund = () => {
    refund(id, myAddress, setQrValue, () => {
      alert("success");
      setShowModal(false);
    });
    setShowModal(true);
  };

  useEffect(() => {
    axios(
      `http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns/campaign/${id}`,
    )
      .then(res => setData(res.data))
      .catch(e => console.log(e));
  }, []);

  console.log(data);

  return (
    <Wrapper>
      <이미지>hello</이미지>
      <Container>
        <Seo title={title} />
        <타이틀>
          <Category type={data.category ? data.category : "일반"} />

          <캠페인이름>{title}</캠페인이름>
        </타이틀>
        <Bars>
          <PercentBar />
          {/* <CurrentBar width={`${(data[4] / 10 ** 18 / data[3]) * 100}%`} /> */}
          <CurrentBar
            width={`${(data.currentAmount / data.targetAmount) * 100}%`}
          />
          <Percent>{(data.currentAmount / data.targetAmount) * 100}%</Percent>
          <Klay>
            (<span>{data.currentAmount}</span>Klay /{" "}
            <span>{data.targetAmount}</span>
            Klay)
          </Klay>
          <Min>기부 단위 클레이 : {data.minFundingAmount} Klay</Min>
        </Bars>
        <RefundState>
          현재상태:{data.refundStatus ? "refund" : "funding"}
        </RefundState>
        <RefundButton onClick={changeState}>change status</RefundButton>
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
              <p>{data.description}</p>
            </DescriptionBox>
          </CampaignRow>
          <CampaignRow style={{padding: "50px 0"}}>
            <DonationBox>
              <CampaignName>{title}</CampaignName>
              <CampaignDesc>{data.description}</CampaignDesc>
              <DonationForm onSubmit={e => donate(e)}>
                <DonationInput
                  type="number"
                  name="klay"
                  id="klay"
                  autoComplete="off"
                  required
                  min="0"
                  step={data.minFundingAmount}
                  value={donateAmount}
                  onChange={e => setDonateAmount(e.target.value)}
                />
                <label id="klay_label" htmlFor="klay">
                  Klay
                </label>
                {data.fundingStatus ? (
                  <DonationButton type="submit" id="donate_btn">
                    Donate
                  </DonationButton>
                ) : (
                  <RefundButton onClick={onClickRefund}>Refund</RefundButton>
                )}
              </DonationForm>
            </DonationBox>
          </CampaignRow>
        </CampaignBox>
      </Container>
      {qrValue !== "DEFAULT" && <ConnectWalletModal />}
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: {params},
}: any) => {
  return {
    props: {
      params,
    },
  };
};
