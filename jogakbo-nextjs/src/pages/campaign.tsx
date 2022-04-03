import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  modalPropsState,
  myAddressState,
  qrValueState,
  showConnectWalletModalState,
} from "../../atom";

import { createRef, useState } from "react";
import { media } from "../../styles/theme";
import ConnectWalletModal from "../components/modals/ConnectWalletModal";
import axios from "axios";

const Container = styled.div`
  width: 935px;
  margin: 150px auto;
  ${media.tablet} {
    width: auto;
  }
`;

const 페이지타이틀 = styled.h3`
  text-align: center;
  font-size: 32px;
`;

const 공지사항 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  padding: 50px;
  width: 100%;
  background: lightgray;
  border-radius: 10px;
  div > h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  div > p {
    margin-bottom: 50px;
    color: gray;
  }
  ul {
    margin-bottom: 50px;
  }
  ul li {
    margin: 10px 0;
    font-size: 20px;
  }
  p {
    color: gray;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px 20px;
  font-size: 20px;
  &#name {
    height: 50px;
  }
`;

const Button = styled.button`
  margin: 30px 0;
  padding: 30px;
  background: pink;
  border-radius: 10px;
  text-align: center;
`;

function CreateCampaign() {
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [showModal, setShowModal] = useRecoilState(showConnectWalletModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const inputRef = createRef();
  const [get, setGet] = useState([]);

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
        <페이지타이틀>CREATE CAMPAIGN</페이지타이틀>
        <공지사항>
          <div>
            <h3>announcement</h3>
            <p>제출하시기 전에 꼭 읽어주세요 !</p>
          </div>
          <ul>
            <li>1. 검토 후 가입하신 이메일로 결과를 알려드립니다.</li>
            <li>2. 처리 기간은 신청일로부터 평균 10일이 소요됩니다.</li>
            <li>3. 등록 후 수정이 불가하니 신중하게 작성하여 제출해주세요.</li>
          </ul>
          <p> 기타 문의사항은 이메일로 문의해주세요</p>
        </공지사항>
        <Form>
          <label htmlFor="name">캠페인 이름</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="캠페인 이름을 입력해주세요"
            required
            autoComplete="off"
          />
          <label htmlFor="desc">캠페인 설명</label>
          <Input
            id="desc"
            name="desc"
            as="textarea"
            rows={5}
            placeholder="캠페인에 대해 설명해주세요"
            required
            autoComplete="off"
          />
          <label htmlFor="amount">목표 모금 금액</label>
          <Input
            id="amount"
            name="amount"
            type="number"
            placeholder="목표 모금 금액을 입력해주세요"
            required
          />
          <Button
            type="submit"
            onClick={() => testPost2("sia", "post test", 1, 100)}
          >
            제출하기
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateCampaign;
