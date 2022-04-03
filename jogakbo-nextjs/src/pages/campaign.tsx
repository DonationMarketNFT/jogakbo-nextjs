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
import { createRef, useEffect, useState } from "react";
import { media } from "../../styles/theme";
import ConnectWalletModal from "../components/modals/ConnectWalletModal";
import axios from "axios";

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
  const [get, setGet] = useState([]);

  const testGet = () => {
    axios("http://localhost:3000/account/user_all").then((res) => {
      setGet(res.data);
    });
  };

  useEffect(() => {
    console.log(get);
  }, [get]);

  const testPost = (
    _email: string,
    _thirdParty: string,
    _walletAddress?: string,
    _walletKind?: string
  ) => {
    let data = {
      email: _email,
      thirdParty: _thirdParty,
      walletAddress: "",
      walletKind: "",
    };
    axios
      .post("http://localhost:3000/account/create_user", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  const testPost2 = (
    _name: string,
    _description: string,
    _campaignId: number,
    _targetAmount: number,
    _fundingStatus?: boolean,
    _refundStatus?: boolean
  ) => {
    let data = {
      name: _name,
      description: _description,
      campaignId: _campaignId,
      targetAmount: _targetAmount,
      fundingStatus: true,
      refundStatus: false,
    };
    axios
      .post("http://localhost:3000/campaigns/create_campaign", data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container>
        <FormTitle>CREATE CAMPAIGN</FormTitle>
        <Button onClick={() => testGet()}>test GET</Button>
        {get && (
          <div>
            {get?.map((o: any, i: number) => (
              <h3 key={o.id}>{o.email}</h3>
            ))}
          </div>
        )}
        <Button onClick={() => testPost("abc@abc.com", "google")}>
          test POST
        </Button>
        <button onClick={() => testPost2("sia", "post test", 1, 100)}>
          test POST2
        </button>
      </Container>
    </>
  );
}

export default CreateCampaign;
