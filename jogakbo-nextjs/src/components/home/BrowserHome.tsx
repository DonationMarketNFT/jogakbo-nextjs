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
  width: 33%;
  p {
    color: ${props => props.theme.textColor};
  }
  p.nickname {
    font-weight: 600;
    font-size: 20px;
  }
  ${media.tablet} {
    width: 100%;
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

class ????????? {
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
  const ?????? = new ?????????(
    "DownyK",
    "BackEnd, DB",
    // "????????????, Dapp, NFT??? ???????????? ???????????? ?????????",
    "",
  );
  const ?????? = new ?????????("Sia", "FrontEnd", "");
  const ?????? = new ?????????("Jiseon", "Smart Contract", "");

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
      question: "????????? ?????? ????????? ???????????? ?????? ??? ??????????????? ????????? ??????????",
      answer:
        "????????????(??????, ??????)??? ???????????? ?????? ???, ???????????? ???????????? ?????? ?????? ????????? ???????????? ????????? ?????? ?????? ??? ?????? ????????? ???????????? ?????????.",
    },
    {
      question: "???????????? ????????? ????????? ??? ??????????",
      answer:
        "???????????? create campaign ???????????? ????????? ????????? ????????? ?????????????????? ?????? ??? ???????????? ?????????. (???, ?????? ??? ????????? ?????????????????? ???????????? ?????? ????????? ??? ????????????.)",
    },
    {
      question: "???????????? ??? ????????? ???????????? ????????? ??? ??????????",
      answer:
        "????????? ???????????????. ??????, ????????? ???????????? ???????????? ?????? ??? ?????? ?????? ??? ?????? ???, ????????? ?????? ??????????????? ???????????????.",
    },
    {
      question: "Klip, Kaikas ?????? ??????????????? ????????? ????????????????",
      answer: "????????? ??? ?????? ????????? ????????? ???????????????. ",
    },
    {
      question: "klaytn network ?????? ?????? network??? ????????? ????????? ????????????????",
      answer: "????????? ?????? ??????????????????. ",
    },
    {
      question:
        "??????????????? ????????? ????????? ???????????? ??????????????? ????????? ????????????????",
      answer:
        "????????? ?????? ???, ?????? ?????? ?????? ????????? ????????? ???????????? ???????????????.",
    },
  ];

  // const listItems = QuestionData.map((o, i) => (
  //   <Question
  //     key={o.question}
  //     value={`???${o.question}`}
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
            <Title>?????? ????????? ??????</Title>
            <RoadMap>
              <p>
                ???????????? ?????? ?????? ????????? ??? ????????? ????????? ?????? ?????? ???????????????.
              </p>
              <p>
                ?????????????????? ?????? ?????? ?????? ??????????????? ????????? ????????? ????????????,
                ??? ????????? ???????????? ??????????????? ????????? ????????? ????????? ?????? ?????????
                ????????? ???????????? ?????? ????????????.
              </p>
              <p>
                ?????? ?????? ??????????????? ????????? ??????????????? ??? ????????? ???????????? ?????????
                ?????????????????????.
              </p>
              <p>
                ????????? ????????? ???????????? ??? ????????? ?????? ????????? ?????? ????????????
                ???????????? ????????? ?????? ??? ????????? ????????????.
              </p>
            </RoadMap>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>?????? ????????? ??????</Title>
            <Content>
              <Item>
                <img src="/blockchain4.png" />
                <p>
                  ??????????????? ????????? <br />
                  ????????? ????????? ???????????????
                </p>
              </Item>
              <Item>
                <img src="/nft4.png" />
                <p>??????????????? NFT??? ???????????????</p>
              </Item>
              <Item>
                <img src="/wallet4.png" />
                <p>????????? ?????? ???????????? ???????????????</p>
              </Item>
            </Content>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>?????? ????????? ????????????</Title>
            <TabContainer>
              <Tab tab={tab} onClick={() => setTab(true)}>
                ?????? ??????
              </Tab>
              <Tab tab={!tab} onClick={() => setTab(false)}>
                ????????? ??????
              </Tab>
            </TabContainer>
            {tab ? <Tab1 /> : <Tab2 />}
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>?????? ????????? ??????</Title>
            <Content className="devContent">
              <Dev>
                <DevProfile data-aos="flip-left"></DevProfile>
                <p className="nickname">{??????.nickName}</p>
                <p className="role">[{??????.role}]</p>
                <p className="intro">{??????.intro}</p>
              </Dev>
              <Dev>
                <DevProfile data-aos="flip-left"></DevProfile>
                <p className="nickname">{??????.nickName}</p>
                <p className="role">[{??????.role}]</p>
                <p className="intro">{??????.intro}</p>
              </Dev>
              <Dev>
                <DevProfile data-aos="flip-left"></DevProfile>
                <p className="nickname">{??????.nickName}</p>
                <p className="role">[{??????.role}]</p>
                <p className="intro">{??????.intro}</p>
              </Dev>
            </Content>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>?????? ?????????</Title>
            <RoadMap>
              <p>
                1. ????????? v1.0 ????????????, ??????????????????, ?????? ?????? (?????? ??????)
              </p>
              <p>2. ???????????? ?????? ??? ??????, ????????? ?????? ??????</p>
              <p>3. ?????? ????????? NFT ?????? ??????</p>
              <p>4. ?????? ??????</p>
              <p>5. ?????? ??????</p>
            </RoadMap>
          </Section>
          <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Title>?????? Q&A</Title>
            <ul>
              {QuestionData.map((a, i) => (
                <>
                  <Question key={i} onClick={() => onClickQuestion(i)}>
                    ??? {a.question}
                  </Question>
                  <Answer id={`${i}`}>?????? {a.answer}</Answer>
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
              <a style={{color: `${color.mainColor}`}}>????????? ???????????? </a>
            </Link>
            ???????????? ???????????????
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step2</Step>
          <p>
            ???????????? ?????? ???????????? ??????????????? donate ???????????? ????????? ??? ????????????
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step3</Step>
          <p>my page?????? ????????? NFT??? ??????????????????</p>
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
              <a style={{color: `${color.mainColor}`}}>????????? ???????????? </a>
            </Link>
            ???????????? ???????????????
          </p>
        </StepContainer>
        <StepContainer>
          <Step>Step2</Step>
          <p>??????????????? ??????????????? ????????? ?????? ???????????? ??????????????????</p>
        </StepContainer>
        <StepContainer>
          <Step>Step3</Step>
          <p>??????????????? ?????? 5??? ?????? ????????? ???????????? ??????????????????</p>
        </StepContainer>
      </div>
    </TabBackground2>
  );
}
