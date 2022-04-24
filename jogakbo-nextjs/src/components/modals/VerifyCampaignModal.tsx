import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {VerifyModalState} from "../../../atom";

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

interface IDate {
  id: number;
  name: string;
  description: string;
  campaignId: number;
  currentAmount?: number;
  targetAmount: number;
  fundingState: boolean;
  refundState: boolean;
}

const VerifyCampaignModal = (props: {id: number; name: string}) => {
  const [showModal, setShowModal] = useRecoilState(VerifyModalState);
  const [data, setData] = useState<IDate>();

  useEffect(() => {
    axios(`http://localhost:3000/pre-campaigns/campaign/${props.id}`)
      .then(res => setData(res.data))
      .catch(e => console.log(e));
  }, []);

  const deleteData = () => {
    axios
      .delete(`http://localhost:3000/pre-campaigns/campaign/delete/${props.id}`)
      .then(res => console.log(res))
      .catch(e => console.log(e));
    setShowModal(false);
    location.reload();
  };

  return (
    <Container onClick={() => setShowModal(false)}>
      <Modal
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <ModalHeader>
          <Name>{props.name}</Name>
          <FontAwesomeIcon onClick={() => setShowModal(false)} icon={faTimes} />
        </ModalHeader>
        <Contents>
          <div>id: {props.id}</div>
          <div>카테고리: 구현중</div>
          <div>target amount: {data?.targetAmount} Klay</div>
          <div>description</div>
          <div>{data?.description}</div>
        </Contents>
        <Buttons>
          <DeleteButton onClick={deleteData}>삭제하기</DeleteButton>
          <OnChainButton>온체인 올리기</OnChainButton>
        </Buttons>
      </Modal>
      {/* {id.id} */}
    </Container>
  );
};

export default VerifyCampaignModal;
