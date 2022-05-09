import {motion} from "framer-motion";
import type {NextPage} from "next";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {color, flexColumnSet, media} from "../../../styles/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeBanner from "./HomeBanner";
import {getAccount, getUserAddress} from "../../api/accountWc";
import {getAddress} from "../../api/UseKlip";
import Link from "next/link";
import link from "next/link";

const Container = styled.div`
  background: ${props => props.theme.bgColor};
`;

const BrowserContainer = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 80px 0;
  ${media.tablet} {
    width: 100%;
    padding: 80px 30px;
  }
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

const Title = styled.h3`
  margin-bottom: 70px;
  padding: 10px 0;
  /* border-bottom: ${props => props.theme.borderColor}; */
  color: ${props => props.theme.textColor};
  font-size: 24px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.tablet} {
    padding: 0;
  }
  &.devContent {
    ${media.tablet} {
      flex-direction: column;
      & > div {
        margin-bottom: 30px;
      }
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 280px;
  height: 280px;
  padding: 10px;
  background: ${props => props.theme.gray.gray7};
  border-radius: 15px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 18%);
  img {
    width: 130px;
    ${media.tablet} {
      width: 100px;
    }
  }
  p {
    text-align: center;
    padding: 20px 0;
    color: ${props => props.theme.textColor};
    ${media.tablet} {
      font-size: 14px;
    }
  }
  ${media.tablet} {
    width: 200px;
    margin: 10px;
  }
`;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div<{tab: boolean}>`
  width: 150px;
  padding: 15px 0;
  background: ${props =>
    props.tab ? props.theme.gray.gray7 : props.theme.gray.gray6};
  text-align: center;
  color: ${props => props.theme.textColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:last-child {
    margin-left: 3px;
  }
`;

const Dev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${props => props.theme.textColor};
  }
  p.nickname {
    font-weight: 600;
    font-size: 20px;
  }
`;

const DevProfile = styled.div`
  margin-bottom: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background: ${props => props.theme.gray.gray7}; */
  background: ${color.mainColor};
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

const RoadMap = styled.p`
  ${flexColumnSet("space-evenly", "flex-start")};
  padding: 30px;
  background: ${props => props.theme.gray.gray7};
  height: 300px;
  border-radius: 15px;
  color: ${props => props.theme.textColor};
`;

const Question = styled(motion.li)`
  margin-bottom: 10px;
  padding: 20px 30px;
  background: ${color.mainColor};
  border-radius: 10px;
  color: ${color.white};
  font-size: 18px;
  cursor: pointer;
`;

const Answer = styled(motion.div)`
  margin-bottom: 10px;
  display: none;
  padding: 20px 30px;
  font-size: 18px;
  color: ${props => props.theme.textColor};
`;

class 개발자 {
  nickName: string;
  role: string;
  intro: string;
  constructor(nickName: string, role: string, intro: string) {
    this.nickName = nickName;
    this.role = role;
    this.intro = intro;
  }
}

const BrowserHome: NextPage = () => {
  const [tab, setTab] = useState(true);
  const [question, setQuestion] = useState(true);
  const 다운 = new 개발자(
    "DownyK",
    "BackEnd, DB",
    "블록체인, Dapp, NFT에 관심많은 임베디드 개발자",
  );
  const 시아 = new 개발자("Sia", "FrontEnd", "");
  const 지선 = new 개발자("Jiseon", "Smart Contract", "");

  const onClickQuestion = (a: number) => {
    const answer = document.getElementById(`${a}`);
    setQuestion(prev => !prev);
    question
      ? (answer!.style.display = "block")
      : (answer!.style.display = "none");
  };

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const QuestionData = [
    {
      question: "캠페인 기부 조건을 달성하지 못할 시 환불절차는 어떻게 되나요?",
      answer:
        "기부조건(금액, 시간)에 도달하지 못할 시, 캠페인은 관리자에 의해 환불 상태로 변경되며 사용자 별로 기간 내 환불 요청이 가능하게 됩니다.",
    },
    {
      question: "캠페인은 아무나 생성할 수 있나요?",
      answer:
        "캠페인은 create campaign 페이지를 통하여 정해진 양식을 제출해주시면 심사 후 등록되게 됩니다. (단, 심사 시 목적이 불분명하거나 불건전한 경우 거부될 수 있습니다.)",
    },
    {
      question: "연말정산 시 기부금 항목으로 증빙할 수 있나요?",
      answer:
        "현재는 불가합니다. 다만, 가능한 여러가지 방법으로 확인 후 정부 정책 상 가능 시, 최대한 빨리 지원하도록 하겠습니다.",
    },
    {
      question: "Klip, Kaikas 외에 지갑으로도 연결이 가능한가요?",
      answer: "현재는 두 가지 지갑만 지원이 가능합니다. ",
    },
    {
      question: "klaytn network 외에 다른 network로 확장할 계획이 있으신가요?",
      answer: "로드맵 참고 부탁드립니다. ",
    },
    {
      question:
        "캠페인에서 모금된 금액이 목적대로 사용되는지 확인이 가능한가요?",
      answer:
        "캠페인 달성 후, 비용 처리 증빙 자료를 통하여 게시토록 하겠습니다.",
    },
  ];

  // const listItems = QuestionData.map((o, i) => (
  //   <Question
  //     key={o.question}
  //     value={`❔${o.question}`}
  //     onClick={() => onClickQuestion(i)}
  //   />
  // ));

  return (
    <>
      <Container>
        <HomeBanner />
        {/* <BrowserHome /> */}
        <BrowserContainer>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>✔️ 서비스 소개</Title>
            <RoadMap>
              <p>
                조각보는 쓰다 남은 색색의 천 조각을 이어서 만든 것을 의미합니다.
              </p>
              <p>
                일상생활에서 쓰다 남은 천을 활용한다는 생활의 지혜의 소산이며,
                천 조각을 나름대로 머릿속으로 그려서 마르고 꿰매어 잇는 작업은
                상당히 공들여야 하는 일입니다.
              </p>
              <p>
                저희 팀은 블록체인과 기부를 접목하면서 그 속에서 조각보의 속성을
                발견하였습니다.
              </p>
              <p>
                개인과 개인의 조그마한 천 조각과 같은 정성이 모여 다채롭고
                아름다운 일들을 해낼 수 있다고 믿습니다.
              </p>
            </RoadMap>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>✔️ 서비스 특징</Title>
            <Content>
              <Item>
                <img src="/blockchain4.png" />
                <p>
                  블록체인을 이용한 <br />
                  투명한 기부가 가능합니다
                </p>
              </Item>
              <Item>
                <img src="/nft4.png" />
                <p>기부증서로 NFT를 발행합니다</p>
              </Item>
              <Item>
                <img src="/wallet4.png" />
                <p>다양한 지갑 서비스를 제공합니다</p>
              </Item>
            </Content>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>✔️ 서비스 이용방법</Title>
            <TabContainer>
              <Tab tab={tab} onClick={() => setTab(true)}>
                기부 참여
              </Tab>
              <Tab tab={!tab} onClick={() => setTab(false)}>
                캠페인 생성
              </Tab>
            </TabContainer>
            {tab ? <Tab1 /> : <Tab2 />}
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>✔️ 개발자 소개</Title>
            <Content className="devContent">
              <Dev>
                <DevProfile data-aos="flip-left"></DevProfile>
                <p className="nickname">{다운.nickName}</p>
                <p className="role">[{다운.role}]</p>
                <p className="intro">{다운.intro}</p>
              </Dev>
              <Dev>
                <DevProfile data-aos="flip-left"></DevProfile>
                <p className="nickname">{시아.nickName}</p>
                <p className="role">[{시아.role}]</p>
                <p className="intro">{시아.intro}</p>
              </Dev>
              <Dev>
                <DevProfile data-aos="flip-left"></DevProfile>
                <p className="nickname">{지선.nickName}</p>
                <p className="role">[{지선.role}]</p>
                <p className="intro">{지선.intro}</p>
              </Dev>
            </Content>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>✔️ 로드맵</Title>
            <RoadMap>
              <p>
                1. 조각보 v1.0 앱스토어, 플레이스토어, 웹앱 런칭 (날짜 미정)
              </p>
              <p>2. 커뮤니티 기능 및 랭킹, 프로필 조회 기능</p>
              <p>3. 인앱 조각보 NFT 마켓 런칭</p>
              <p>4. 추후 공개</p>
              <p>5. 추후 공개</p>
            </RoadMap>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>✔️ Q&A</Title>
            <ul>
              {QuestionData.map((a, i) => (
                <>
                  <Question key={i} onClick={() => onClickQuestion(i)}>
                    ❔ {a.question}
                  </Question>
                  <Answer id={`${i}`}>❗️ {a.answer}</Answer>
                </>
              ))}
            </ul>
          </Section>
        </BrowserContainer>
      </Container>
    </>
  );
};

export default BrowserHome;

const TabBackground1 = styled.div`
  padding: 60px 30px;
  background: ${props => props.theme.gray.gray7};
  box-shadow: ${props => props.theme.boxShadow1};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const StepContainer = styled.div`
  margin-bottom: 60px;
  p {
    padding: 0 20px;
    color: ${props => props.theme.textColor};
  }
  &:last-child {
    margin: 0;
  }
`;

const Step = styled.div`
  margin-bottom: 40px;
  padding: 10px 15px;
  width: 100px;
  background: ${color.mainColor};
  color: ${color.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.boxShadow1};
  text-align: center;
`;

function Tab1() {
  return (
    <TabBackground1>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <StepContainer>
          <Step>Step1</Step>
          <p>
            <Link href="/campaigns">
              <a style={{color: `${color.mainColor}`}}>캠페인 둘러보기 </a>
            </Link>
            페이지로 이동하세요
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step2</Step>
          <p>
            기부하고 싶은 캠페인을 발견했다면 donate 버튼으로 기부할 수 있습니다
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step3</Step>
          <p>my page에서 발급된 NFT를 확인해보세요</p>
        </StepContainer>
      </div>
    </TabBackground1>
  );
}

const TabBackground2 = styled.div`
  padding: 60px 30px;
  background: ${props => props.theme.gray.gray7};
  box-shadow: ${props => props.theme.boxShadow1};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

function Tab2() {
  return (
    <TabBackground2>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <StepContainer>
          <Step>Step1</Step>
          <p>
            <Link href="/campaign">
              <a style={{color: `${color.mainColor}`}}>캠페인 생성하기 </a>
            </Link>
            페이지로 이동하세요
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step2</Step>
          <p>유의사항을 읽어보시고 양식에 맞게 작성하여 제출해주세요</p>
        </StepContainer>
        <StepContainer>
          <Step>Step3</Step>
          <p>심사결과는 평균 5일 이후 제출한 이메일로 보내드립니다</p>
        </StepContainer>
      </div>
    </TabBackground2>
  );
}
