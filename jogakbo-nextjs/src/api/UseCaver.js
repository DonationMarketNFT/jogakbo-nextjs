import Caver, {AbiItem} from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  JOGAKBO_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "../constants/constants.cypress";
import JOGAKBOABI from "../abi/JogakboABI.json";
import NFTABI from "../abi/NftABI.json";

const option = {
  headers: [
    {
      name: "Authorization",
      value:
        "Basic " +
        Buffer.from(ACCESS_KEY_ID + ":" + SECRET_ACCRESS_KEY).toString(
          "base64",
        ),
    },
    {
      name: "x-chain-id",
      value: CHAIN_ID,
    },
  ],
};

const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.klaytnapi.com/v1/klaytn",
    // "https://api.baobab.klaytn.net:8651/",
    option,
  ),
);

export const rs = async () => {
  await caver.klay.sendTransaction({
    type: "VALUE_TRANSFER",
    from: "0xc72af0d3c40d5E95e3424b251ceA0cD81e230Dc1",
    to: "0xA52c3f53F087B3445190ADc0B038Bd78D8110eDa",
    gas: "300000",
    value: caver.utils.toPeb("1", "KLAY"),
  });
};

export const JogakboContract = new caver.contract(
  JOGAKBOABI,
  JOGAKBO_CONTRACT_ADDRESS,
);

export const getRefundState = async () => {
  const state = await JogakboContract.methods.refundState().call();
  console.log(state);
  return state;
};

// 테스트 완료
export const getCampaignNumber = async () => {
  const number = await JogakboContract.methods.CampaignNumber().call();
  console.log(number);
  return number;
};

export const campaignList = async () => {
  const number = await JogakboContract.methods.campaignNumber().call();
  const lists = [];
  for (let i = 0; i < number; i++) {
    const list = await JogakboContract.methods.campaignList([i]).call();
    lists.push(list);
  }
  return lists;
};

// export const testOwnTokenId = async address => {
//   const ids = await JogakboContract.methods.tokenIds(address).call();
//   return ids;
// };

// export const testTokenId2Description = async id => {
//   const des = await JogakboContract.methods.tokenDescription(id).call();
//   return des;
// };

// export const testTokenId2Name = async id => {
//   const des = await JogakboContract.methods.tokenName(id).call();
//   return des;
// };

// export const testCampaignList = async () => {
//   const Number = await JogakboContract.methods.CampaignNumber().call();

//   const lists = [];
//   for (let i = 0; i < Number; i++) {
//     const list = await JogakboContract.methods.campaignList([i]).call();
//     lists.push(list);
//   }
//   return lists;
// };

// export const testCampaignNumber = async () => {
//   const Number = await JogakboContract.methods.CampaignNumber().call();
//   console.log(`number:${Number}`);
//   return Number;
// };

// klip 잔고 조회시 메인넷 chain_id 필요
export const getBalance = address => {
  return caver.rpc.klay.getBalance(address).then(response => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(response),
      "KLAY",
    );
    return balance;
  });
};

export const fromKlaytoPeb = n => {
  return caver.utils.convertToPeb(n);
};
