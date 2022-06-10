import {useRecoilState} from "recoil";
import styled from "styled-components";
import {
  myAddressState,
  showCategoryModalState,
  showConnectWalletModalState,
} from "../../atom";
import React, {useState} from "react";
import {flexColumnSet, media} from "../../styles/theme";
import Seo from "../components/Seo";
import {postPreCampaign} from "../api/preCampaigns";
import 카테고리설명모달 from "../components/modals/CategoryModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const 배경용박스 = styled.div`
  background: ${props => props.theme.bgColor};
`;

const 컨테이너 = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 30px;
  padding-top: 150px;
  ${media.tablet} {
    width: auto;
  }
`;

const 타이틀 = styled.h3`
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
  background: ${props => props.theme.gray.gray4};
  border-radius: 10px;
  div > h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
    font-size: 24px;
    text-align: center;
  }
  div > p {
    margin-bottom: 50px;
    color: ${props => props.theme.gray.gray7};
  }
  ul {
    ${flexColumnSet()};
  }
  ul li {
    margin: 10px 0;
    font-size: 20px;
  }
  ul li span {
    margin-right: 10px;
    color: ${props => props.theme.textColor};
    font-weight: 600;
  }
  & > p {
    margin-top: 50px;
    color: ${props => props.theme.gray.gray7};
  }
  &:nth-of-type(2) {
    background: ${props => props.theme.gray.gray5};
    ul {
      align-items: flex-start;
    }
  }
`;

const 폼 = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  label {
    color: ${props => props.theme.textColor};
    font-size: 20px;
    margin: 15px 0;
  }
`;

const 셀렉트 = styled.select`
  padding: 10px 20px;
  width: 100%;
`;

const Option = styled.option``;

const 인풋 = styled.input`
  padding: 10px 20px;
  font-size: 20px;
  &#name {
    height: 50px;
  }
`;

const 버튼 = styled.button`
  margin: 30px 0;
  padding: 30px;
  background: #f49a4a;
  border-radius: 10px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const 카테고리안내 = styled.div`
  position: absolute;
  top: 9px;
  right: 0;
  padding: 7px 10px;
  background: ${props => props.theme.gray.gray4};
  color: ${props => props.theme.bgColor};
  cursor: pointer;
  svg {
    margin-right: 5px;
    width: 16px;
  }
`;

function CreateCampaign() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [minAmount, setMinAmount] = useState<number>(0);
  const [myAddress] = useRecoilState(myAddressState);
  const [modal, setModal] = useRecoilState(showConnectWalletModalState);
  const [showCategoryModal, setShowCategoryModal] = useRecoilState(
    showCategoryModalState,
  );

  const testPost2 = (
    // const testPost2 = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    _name: string,
    _description: string,
    _targetAmount: number,
    _category: string,
    _minFundingAmount: number,
  ) => {
    e.preventDefault();
    if (myAddress !== "0x00") {
      // await postPreCampaign({
      //   name: _name as string,
      //   description: _description as string,
      //   targetAmount: _targetAmount as number,
      //   category: _category as "공익" | "사회" | "환경",
      //   creatorAddress: myAddress as string,
      // }).then(res => {
      //   alert("성공");
      // });
      postPreCampaign(
        _name,
        _description,
        _targetAmount,
        _category,
        myAddress,
        _minFundingAmount,
      );
    } else {
      setModal(true);
    }
  };

  return (
    <>
      <Seo title="캠페인 생성하기" />
      <배경용박스>
        <컨테이너>
          <타이틀>CREATE CAMPAIGN</타이틀>
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
            <p> 기타 문의사항은 이메일로 문의해주세요!</p>
          </공지사항>
          <폼>
            <label htmlFor="category">카테고리</label>
            <셀렉트
              value={category}
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
              id="category"
              required
            >
              <Option value="공익">공익</Option>
              <Option value="사회">사회</Option>
              <Option value="환경">환경</Option>
              <option></option>
            </셀렉트>
            <카테고리안내 onClick={() => setShowCategoryModal(true)}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              카테고리 안내
            </카테고리안내>
            <label htmlFor="name">캠페인 이름</label>
            <인풋
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
            <인풋
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
            <인풋
              value={amount}
              onChange={(e: any) => {
                setAmount(e.target.value);
              }}
              id="amount"
              type="number"
              placeholder="목표 모금 금액을 입력해주세요"
              required
            />
            <label htmlFor="min">최소 모금 단위</label>
            <인풋
              value={minAmount}
              onChange={(e: any) => {
                setMinAmount(e.target.value);
              }}
              id="min"
              type="number"
              placeholder="최소 모금 단위를 입력해주세요"
              required
            />
            <버튼
              onClick={e =>
                testPost2(e, name, desc, amount, category, minAmount)
              }
            >
              {myAddress !== "0x00" ? "제출하기" : "지갑 연동이 필요합니다"}
            </버튼>
          </폼>
        </컨테이너>
      </배경용박스>
      {showCategoryModal && <카테고리설명모달 />}
    </>
  );
}

export default CreateCampaign;
