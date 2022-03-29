import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import QRCode from "qrcode.react";
import { isMobile } from "react-device-detect";
import { media } from "../../../styles/theme";
import {
  modalPropsState,
  qrValueState,
  showConnectWalletModalState,
} from "../../../atom";

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
  width: 600px;
  padding: 44px 51px;
  ${media.tablet} {
    width: 520px;
    padding: 28px 33px;
  }
  ${media[768]} {
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
  button {
    all: unset;
    cursor: pointer;
  }
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
`;

const ConnectWalletModalContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  ${media[768]} {
    flex-direction: column;
    align-items: center;
  }
`;
const ConnectWalletCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 160px;
  padding: 0 20px;
  box-sizing: border-box;
  background: ${(props) => props.theme.gradient};
  border-radius: 10px;
  h5 {
    margin-top: 15px;
    color: white;
  }
  ${(props) => props.theme.boxShadow1};
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) => props.theme.boxShadow2};
    transform: translateY(-5px);
  }
  ${media[768]} {
    margin-bottom: 20px;
  }
`;

const QRContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

function ConnectWalletModal() {
  const [showModal, setShowModal] = useRecoilState(showConnectWalletModalState);
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);

  return (
    <ModalWrapper onClick={() => setShowModal(false)}>
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ConnectWalletContainer>
          <ConnectWalletModalHeader>
            <h5>title</h5>
            <button>
              <FontAwesomeIcon
                onClick={() => {
                  setShowModal(false);
                  setQrvalue("DEFAULT");
                }}
                icon={faTimes}
              />
            </button>
          </ConnectWalletModalHeader>
          <ConnectWalletModalContent>
            {qrvalue == "DEFAULT" ? (
              <>
                <ConnectWalletCard>
                  <img src="/metamask-logo.svg" />
                  <h5>Metamask </h5>
                </ConnectWalletCard>
                <ConnectWalletCard>
                  <img src="/kaikas-logo.svg" />
                  <h5>Kaikas </h5>
                </ConnectWalletCard>
                <ConnectWalletCard
                  onClick={() => {
                    modalProps.onConfirm();
                  }}
                >
                  <img src="/klip-logo.svg" />
                  <h5>Klip </h5>
                </ConnectWalletCard>
              </>
            ) : (
              <>
                <QRContainer>
                  <QRCode
                    value={qrvalue}
                    // bgColor fgColor
                    size={256}
                    includeMargin
                  />
                </QRContainer>
              </>
            )}
          </ConnectWalletModalContent>
        </ConnectWalletContainer>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ConnectWalletModal;
