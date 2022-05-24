import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {showCategoryModalState} from "../../../atom";
import {flexColumnSet, media} from "../../../styles/theme";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  transition: all 0.2s ease-in-out;
`;
const ModalContent = styled.div`
  background: gray;
  border-radius: 10px;
  transition: all 0.2 ease-in-out;
  width: 700px;
  padding: 44px 50px;
  ${media.tablet} {
    width: 600px;
    padding: 28px 33px;
  }
  ${media[768]} {
    width: 500px;
    padding: 20px 22px;
  }
  ${media.mobile} {
    width: 300px;
    padding: 20px 22px;
  }
`;

const ConnectWalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;

const ConnectWalletModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.2s ease-in-out;
  color: white;
  margin-bottom: 28px;
  ${media[768]} {
    margin-bottom: 24px;
  }
  h5 {
    font-size: 20px;
    ${media.tablet} {
      font-size: 18px;
    }
  }
  svg {
    width: 16px;
    cursor: pointer;
  }
`;

const ConnectWalletModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media[768]} {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  ${flexColumnSet("flex-start")};
  padding: 0 15px;
  width: 33%;
  color: ${props => props.theme.textColor};
  img {
    height: 100px;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  p {
    line-height: 20px;
    text-align: center;
  }
`;

const CategoryModal = () => {
  const [showCategoryModal, setShowCategoryModal] = useRecoilState(
    showCategoryModalState,
  );

  return (
    <ModalWrapper onClick={() => setShowCategoryModal(false)}>
      <ModalContent
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ConnectWalletContainer>
          <ConnectWalletModalHeader>
            <h5>카테고리 안내</h5>
            <FontAwesomeIcon
              onClick={() => {
                setShowCategoryModal(false);
              }}
              icon={faTimes}
            />
          </ConnectWalletModalHeader>
          <ConnectWalletModalContent>
            <Card>
              <img src="/public.png" />
              <h4>공익</h4>
              <p>
                타인에게 금전, 물품 또는 금전적 가치가 있는 것을 제공하는
                자발적인 행위를 포함하는 캠페인입니다.
              </p>
            </Card>
            <Card>
              <img src="/society.png" />
              <h4>사회</h4>
              <p>
                사회단체 또는 공공기관 등에 기부하여 사회에 공헌할 수 있는
                캠페인입니다.
              </p>
            </Card>
            <Card>
              <img src="/environment.png" />
              <h4>환경</h4>
              <p>
                지구를 살리는 일에 기여하고 환경 오염으로 발생하는 사회적 비용을
                절감할 수 있는 캠페인입니다.
              </p>
            </Card>
          </ConnectWalletModalContent>
        </ConnectWalletContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

export default CategoryModal;
