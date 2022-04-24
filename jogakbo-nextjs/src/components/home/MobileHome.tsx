import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import styled, {useTheme} from "styled-components";
import {isLoginedState} from "../../../atom";
import {media} from "../../../styles/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeBanner from "./HomeBanner";
import MobileSlider from "./MobileSlider";
import {faGratipay} from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  padding: 30px;
  padding-top: 80px;
  background: ${props => props.theme.bgColor};
`;

const Section = styled.section`
  width: 100%;
  margin-bottom: 100px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 70px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.textColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 10px;
  background: ${props => props.theme.contentBgColor};
  border-radius: 15px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 18%);
  img {
    width: 130px;
  }
  p {
    text-align: center;
    padding: 20px 0;
    color: ${props => props.theme.textColor};
  }
`;

const TabContainer = styled.div`
  display: flex;
  padding: 0 30px;
  ${media.mobile} {
    padding: 0;
  }
`;

const Tab = styled.div<{tab: boolean}>`
  width: 150px;
  padding: 15px 20px;
  background: ${props =>
    props.tab ? props.theme.gray.gray7 : useTheme().gray};
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:last-child {
    margin-left: 3px;
  }
  ${media.mobile} {
    width: 50%;
  }
`;

const MobileHome = () => {
  const [splash, setSplash] = useState(true);
  const [tab, setTab] = useState(true);
  const [login, setLogin] = useRecoilState(isLoginedState);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      {/* {!login && <SignInModal />} */}
      <HomeBanner />
      <Container>
        <Section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <Title>✔️ 서비스 특징</Title>
          <MobileSlider />
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
      </Container>
    </>
  );
};

export default MobileHome;

const TabBackground1 = styled.div`
  margin: 0 30px;
  padding: 60px 30px;
  background-color: ${props => props.theme.gray.gray7};
  box-shadow: ${props => props.theme.boxShadow1};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  ${media.mobile} {
    margin: 0;
    padding: 50px 10px;
  }
`;

const StepContainer = styled.div`
  margin-bottom: 60px;
  p {
    padding: 0 20px;
    ${media.mobile} {
      text-align: center;
    }
  }
  &:last-child {
    margin: 0;
  }
`;

const Step = styled.div`
  margin-bottom: 40px;
  padding: 10px 15px;
  width: 100px;
  background: ${props => props.theme.contentBgColor};
  border-radius: 20px;
  box-shadow: ${props => props.theme.boxShadow1};
  text-align: center;
  ${media.mobile} {
    margin: 0 auto 40px auto;
  }
`;

function Tab1() {
  return (
    <TabBackground1>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <StepContainer>
          <Step>Step1</Step>
          <p>Campaigns 메뉴를 통해 둘러보세요</p>
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
  margin: 0 30px;
  padding: 60px 30px;
  background-color: ${props => props.theme.gray.gray7};
  box-shadow: ${props => props.theme.boxShadow1};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  ${media.mobile} {
    margin: 0;
    padding: 50px 10px;
  }
`;

function Tab2() {
  return (
    <TabBackground2>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <StepContainer>
          <Step>Step1</Step>
          <p>메뉴의 create campaign 페이지로 이동하세요</p>
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
