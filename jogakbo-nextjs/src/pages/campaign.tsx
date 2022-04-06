import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  modalPropsState,
  qrValueState,
  showConnectWalletModalState,
} from "../../atom";
import React, { createRef, useEffect, useState } from "react";
import { media } from "../../styles/theme";
import axios from "axios";
import Seo from "../components/Seo";

const Container = styled.div`
  width: 1050px;
  margin: 150px auto;
  padding: 30px;
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
  cursor: pointer;
`;

function CreateCampaign() {
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [showModal, setShowModal] = useRecoilState(showConnectWalletModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const inputRef = createRef();
  const [get, setGet] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState<number>(0);

  const testPost2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _name: string,
    _description: string,
    _campaignId: number,
    _targetAmount: number,
    _fundingStatus?: boolean,
    _refundStatus?: boolean
  ) => {
    e.preventDefault();
    let data = {
      name: _name,
      description: _description,
      campaignId: _campaignId,
      targetAmount: Number(_targetAmount),
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
      <Seo title="캠페인 생성하기" />
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
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            id="name"
            type="text"
            placeholder="캠페인 이름을 입력해주세요"
            required
            autoComplete="off"
          />
          <label htmlFor="desc">캠페인 설명</label>
          <Input
            value={desc}
            onChange={(e: any) => {
              setDesc(e.target.value);
            }}
            id="desc"
            as="textarea"
            rows={5}
            placeholder="캠페인에 대해 설명해주세요"
            required
            autoComplete="off"
          />
          <label htmlFor="amount">목표 모금 금액</label>
          <Input
            value={amount}
            onChange={(e: any) => {
              setAmount(e.target.value);
            }}
            id="amount"
            type="number"
            placeholder="목표 모금 금액을 입력해주세요"
            required
          />
          <Button onClick={(e) => testPost2(e, name, desc, 1, amount)}>
            제출하기
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CreateCampaign;
