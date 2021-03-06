import axios from "axios";

const BASE_PATH =
  "http://ec2-52-78-57-218.ap-northeast-2.compute.amazonaws.com:3000/campaigns";

interface ICampaigns {
  name: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  fundingStatus: boolean;
  refundStatus: boolean;
  category: string;
  creatorAddress: string;
  minFundingAmount: number;
}

// 모든 데이터 조회
export const getCampaigns = async (setPosts: Function) => {
  const results = await axios.get(`${BASE_PATH}/campaign_all`);
  setPosts(results.data);
};

// 캠페인 생성하기를 통한 데이터 추가
export const postCampaign = (
  _name: string,
  _description: string,
  _targetAmount: number,
  _category: string,
  _minFundingAmount: number,
  _creatorAddress: string,
) => {
  const data: ICampaigns = {
    name: _name,
    description: _description,
    targetAmount: Number(_targetAmount),
    currentAmount: 0,
    fundingStatus: true,
    refundStatus: false,
    category: _category,
    minFundingAmount: _minFundingAmount,
    creatorAddress: _creatorAddress,
  };
  axios
    .post(`${BASE_PATH}/create_campaign`, data)
    .then(res => alert("정상적으로 제출되었습니다 :)"))
    .catch(e => console.log(e));
};

// funding 중인 캠페인만 출력
export const getFunding = async (setAllData: Function) => {
  const results = await axios.get(`${BASE_PATH}/campaign/Onfunding`);
  setAllData(results.data);
};

// refunding 중인 캠페인만 출력
export const getRefunding = async (setAllData: Function) => {
  const results = await axios.get(`${BASE_PATH}/campaign/OnRefund`);
  setAllData(results.data);
};
