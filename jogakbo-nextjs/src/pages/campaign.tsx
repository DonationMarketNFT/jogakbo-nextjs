import {useRecoilState} from "recoil";
import styled from "styled-components";
import {
  modalPropsState,
  qrValueState,
  showConnectWalletModalState,
} from "../../atom";
import React, {createRef, useState} from "react";
import {media} from "../../styles/theme";
import axios from "axios";
import Seo from "../components/Seo";
import {postPreCampaign} from "../api/preCampaigns";

const Wrapper = styled.div`
  background: ${props => props.theme.bgColor};
`;

const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 30px;
  padding-top: 150px;
  ${media.tablet} {
    width: auto;
  }
`;

const 페이지타이틀 = styled.h3`
  text-align: center;
  font-size: 32px;
  color: ${props => props.theme.textColor};
`;

const 공지사항 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  padding: 50px;
  width: 100%;
  background: ${props => props.theme.gray.gray5};
  border-radius: 10px;
  div > h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
    font-size: 24px;
  }
  div > p {
    margin-bottom: 50px;
    color: ${props => props.theme.gray.gray7};
  }
  ul {
    margin-bottom: 50px;
  }
  ul li {
    margin: 10px 0;
    font-size: 20px;
  }
  p {
    color: ${props => props.theme.gray.gray7};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    color: ${props => props.theme.textColor};
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 150px;
`;

const Option = styled.option``;

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
  background: #f49a4a;
  border-radius: 10px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

function CreateCampaign() {
  const [modalProps, setModalProps] = useRecoilState(modalPropsState);
  const [showModal, setShowModal] = useRecoilState(showConnectWalletModalState);
  const [qrvalue, setQrvalue] = useRecoilState(qrValueState);
  const inputRef = createRef();
  const [get, setGet] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState<number>(0);

  const testPost2 = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _name: string,
    _description: string,
    _targetAmount: number,
    _category: string,
  ) => {
    e.preventDefault();
    postPreCampaign(_name, _description, _targetAmount, _category);
  };

  return (
    <>
      <Seo title="캠페인 생성하기" />
      <Wrapper>
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
              <li>
                3. 등록 후 수정이 불가하니 신중하게 작성하여 제출해주세요.
              </li>
            </ul>
            <p> 기타 문의사항은 이메일로 문의해주세요</p>
          </공지사항>
          <Form>
            <label htmlFor="category">카테고리</label>
            <Select
              value={category}
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
              id="category"
              required
            >
              <Option value="환경">환경</Option>
              <Option value="공익">공익</Option>
              <Option value="사회">사회</Option>
              <option></option>
            </Select>
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
            <Button onClick={e => testPost2(e, name, desc, amount, category)}>
              제출하기
            </Button>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
}

export default CreateCampaign;
