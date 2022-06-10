import {fetchWrap} from "../components/utils/axios";
import axios from "axios";

const BASE_PATH = "http://localhost:3000/pre-campaigns";

interface IPreCampaigns {
  name: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  fundingStatus: boolean;
  refundStatus: boolean;
  category: string;
  creatorAddress: string;
  minFundingAmount: number;
}

// 모든 데이터 조회
export const getPreCampaigns = async (setPosts: Function) => {
  const results = await axios.get(`${BASE_PATH}/campaign_all`);
  setPosts(results.data);
};

// export const getPreCampaigns = () => {
//   fetchWrap({method: "get", url: `pre-campaigns/campaign_all`});
// };

// 캠페인 생성하기를 통한 데이터 추가
export const postPreCampaign = (
  _name: string,
  _description: string,
  _targetAmount: number,
  _category: string,
  _creatorAddress: string,
  _minFundingAmount: number,
) => {
  const data: IPreCampaigns = {
    name: _name,
    description: _description,
    targetAmount: Number(_targetAmount),
    currentAmount: 0,
    fundingStatus: true,
    refundStatus: false,
    category: _category,
    creatorAddress: _creatorAddress,
    minFundingAmount: Number(_minFundingAmount),
  };
  axios
    .post(`${BASE_PATH}/create_campaign`, data)
    .then(res => alert("정상적으로 제출되었습니다 :)"))
    .catch(e => console.log(e));
};

// export const postPreCampaign = ({
//   name,
//   description,
//   targetAmount,
//   category,
//   creatorAddress,
// }: {
//   name: string;
//   description: string;
//   targetAmount: number;
//   category: "공익" | "사회" | "환경";
//   creatorAddress: string;
// }) =>
//   fetchWrap({
//     method: "post",
//     url: "/pre-campaigns/create_campaign",
//     body: {name, description, targetAmount, category, creatorAddress},
//   });
