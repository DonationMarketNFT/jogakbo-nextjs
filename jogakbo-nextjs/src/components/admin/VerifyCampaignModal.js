import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {JogakboContract} from "api/UseCaver";
// import {JogakboContract, rs} from "api/UseCaver";
import * as KlipAPI from "../../api/UseKlip";
import axios from "axios";
import Caver, {ABI} from "caver-js";
import {JOGAKBO_CONTRACT_ADDRESS} from "constants/constants.baobab";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {
  myAddressState,
  qrValueState,
  showConnectWalletModalState,
  VerifyModalState,
} from "../../../atom";
import JOGAKBOABI from "../../abi/JogakboABI.json";
import ConnectWalletModal from "components/modals/ConnectWalletModal";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  width: 80%;
  height: 75%;
  background: #fff;
  div {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 36px;
  }
`;

const Name = styled.h5`
  width: 100%;
  font-size: 34px;
  text-align: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 0 10px;
  }
`;

const DeleteButton = styled.div`
  padding: 10px 15px;
  background: red;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const OnChainButton = styled.div`
  padding: 10px 15px;
  background: blue;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

// interface IDate {
//   id: number;
//   name: string;
//   description: string;
//   campaignId: number;
//   currentAmount?: number;
//   targetAmount: number;
//   fundingState: boolean;
//   refundState: boolean;
//   category: string;
//   creatorAddress: string;
//   minFundingAmount: string;
// }

// interface Klaytn {
//   on: (eventName: string, callback: () => void) => void;
//   enable: () => Promise<Array<string>>;
//   selectedAddress: string;
//   networkVersion: number;
//   publicConfigStore: Store;
// }

// interface State {
//   isEnabled: boolean;
//   isUnlocked: boolean;
//   networkVersion: number;
//   onboardingcomplete: boolean;
// }

// interface Store {
//   subscribe: (callback: () => void) => void;
//   getState: () => State;
// }

// declare global {
//   interface Window {
//     klaytn: any;
//   }
// }

// const VerifyCampaignModal = (props: {id: number; name: string}) => {
const VerifyCampaignModal = props => {
  const [showModal, setShowModal] = useRecoilState(VerifyModalState);
  const [showConnectWalletModal, setShowConnectWalletModal] = useRecoilState(
    showConnectWalletModalState,
  );
  // const [data, setData] = useState<IDate>();
  const [data, setData] = useState();
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  const [qrValue, setQrValue] = useRecoilState(qrValueState);

  useEffect(() => {
    axios(`http://localhost:3000/pre-campaigns/campaign/${props.id}`)
      .then(res => setData(res.data))
      .catch(e => console.log(e));
    console.log(myAddress);
  }, []);

  const deleteData = () => {
    axios
      .delete(`http://localhost:3000/pre-campaigns/campaign/delete/${props.id}`)
      .then(res => console.log(res))
      .catch(e => console.log(e));
    setShowModal(false);
    location.reload();
  };

  const create = () => {
    KlipAPI.createCampaign(
      data.creatorAddress,
      data.targetAmount,
      props.id,
      setQrValue,
      result => {
        alert(JSON.stringify(result));
        setShowConnectWalletModal(false);
      },
    );
    setShowConnectWalletModal(true);
  };

  // const create = async () => {
  //   console.log(window.klaytn);
  //   let kly;
  //   if (typeof window !== "undefined") {
  //     kly = window.klaytn;
  //   }
  //   const caver = new Caver(kly);
  //   console.log(caver);

  //   const JogakboContract = new caver.klay.Contract(
  //     JOGAKBOABI,
  //     JOGAKBO_CONTRACT_ADDRESS,
  //   );
  //   console.log(JogakboContract);

  //   const tx = {
  //     type: "SMART_CONTRACT_EXECUTION",
  //     from: kly.selectedAddress,
  //     to: JOGAKBO_CONTRACT_ADDRESS,
  //     data: JogakboContract.methods.createCampaign(
  //       data?.creatorAddress,
  //       data?.targetAmount,
  //       data?.campaignId,
  //     ),
  //     // .encodeABI(),
  //     gas: "8000000",
  //     value: "0",
  //   };

  //   await caver.klay.sendTransaction(tx).then(res => console.log(res));

  //   // await caver.klay
  //   //   .sendTransaction({
  //   //     type: "VALUE_TRANSFER",
  //   //     from: "0xA52c3f53F087B3445190ADc0B038Bd78D8110eDa",
  //   //     to: "0xc72af0d3c40d5E95e3424b251ceA0cD81e230Dc1",
  //   //     gas: "300000",
  //   //     value: caver.utils.toPeb("1", "KLAY"),
  //   //   })
  //   //   .then(res => console.log(res));
  // };

  const onChangeImage = async e => {
    e.preventDefault();
    if (e.target.files) {
      const formData = new FormData();
      for (var i = 0; i < e.target.files.length; i++) {
        formData.append("images", e.target.files[i]);
      }
      formData.append("CampaignId", props.id);
      formData.append("CampaignDescription", data?.description);
      formData.append("CampaignName", data?.name);
      await axios({
        method: "post",
        url: "http://localhost:3000/image",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(res => console.log("성공"))
        .catch(e => console.error(e));
    }
  };

  return (
    <>
      <Container onClick={() => setShowModal(false)}>
        <Modal
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <ModalHeader>
            <Name>{props.name}</Name>
            <FontAwesomeIcon
              onClick={() => setShowModal(false)}
              icon={faTimes}
            />
          </ModalHeader>
          <Contents>
            <div>id: {props.id}</div>
            <div>제출자 주소: {data?.creatorAddress}</div>
            <div>카테고리: {data?.category}</div>
            <div>target amount: {data?.targetAmount} Klay</div>
            <div>target amount: {data?.minFundingAmount} Klay</div>
            <div>description</div>
            <div>{data?.description}</div>
          </Contents>
          <Buttons>
            <DeleteButton onClick={deleteData}>삭제하기</DeleteButton>
            <OnChainButton onClick={create}>온체인 올리기</OnChainButton>
          </Buttons>
          <h3>⬇️ NFT 이미지 업로드하기</h3>
          <form>
            <input type="file" multiple onChange={e => onChangeImage(e)} />
          </form>
        </Modal>
        {/* {id.id} */}
        {showConnectWalletModal && <ConnectWalletModal />}
      </Container>
    </>
  );
};

export default VerifyCampaignModal;
