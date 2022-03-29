import { Button, Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  modalPropsState,
  myAddressState,
  qrValueState,
  showConnectWalletModalState,
} from "../../atom";
import * as KlipAPI from "../api/UseKlip";
import {
  getBalance,
  testCampaignList,
  testCampaignNumber,
} from "../api/UseCaver";
import { createRef, useEffect } from "react";
import { media } from "../../styles/theme";
import ConnectWalletModal from "../components/modals/ConnectWalletModal";

const Container = styled.div`
  width: 935px;
  margin: 100px auto;
  ${media.tablet} {
    width: auto;
    margin: 70px 30px;
  }
`;

const FormTitle = styled.h3`
  margin: 30px auto;
  padding: 30px;
  text-align: center;
`;

function CreateCampaign() {
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [showModal, setShowModal] = useRecoilState(showConnectWalletModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const inputRef = createRef();

  // const createCam = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const name = e.target.name.value;
  //   const desc = e.target.desc.value;
  //   const amount = e.target.amount.value;
  //   onClickTest(name, desc, amount);
  // };

  // const onClickTest = (_name: string, _desc: string, _amount: number) => {
  //   setModalProps({
  //     title: "캠페인 생성을 위한 Klip 지갑 요청",
  //     onConfirm: () => {
  //       KlipAPI.createCampaign(
  //         _name,
  //         _desc,
  //         _amount,
  //         setQrvalue,
  //         (result: any) => {
  //           alert(JSON.stringify(result));
  //         }
  //       );
  //     },
  //   });
  //   setShowModal(true);
  // };

  // // const testCreateCampaign = (name: string, desc: string, amount: number) => {
  // //   KlipAPI.createCampaign(name, desc, amount, setQrvalue, (result: any) => {
  // //     alert(JSON.stringify(result));
  // //   });
  // // };

  // useEffect(() => {
  //   setShowModal(false);
  // }, []);

  return (
    <>
      <Container>
        <FormTitle>CREATE CAMPAIGN</FormTitle>
      </Container>
    </>
  );
}

export default CreateCampaign;
