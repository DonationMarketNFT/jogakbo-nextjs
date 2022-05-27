import Caver, {AbiItem} from "caver-js";
import {
  ACCESS_KEY_ID,
  CHAIN_ID,
  JOGAKBO_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  SECRET_ACCRESS_KEY,
} from "../constants/constants.baobab";
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
    // "https://node-api.klaytnapi.com/v1/klaytn",
    "https://api.baobab.klaytn.net:8651/",
    option,
  ),
);

const JogakboContract = new caver.contract(
  JOGAKBOABI as AbiItem[],
  JOGAKBO_CONTRACT_ADDRESS,
);

const NFTContract = new caver.contract(
  NFTABI as AbiItem[],
  NFT_CONTRACT_ADDRESS,
);

export const testOwnTokenId = async (address: string) => {
  const ids = await JogakboContract.methods.tokenIds(address).call();
  return ids;
};

export const testTokenId2Description = async (id: number) => {
  const des = await JogakboContract.methods.tokenDescription(id).call();
  return des;
};

export const testTokenId2Name = async (id: number) => {
  const des = await JogakboContract.methods.tokenName(id).call();
  return des;
};

export const testCampaignList = async () => {
  const Number = await JogakboContract.methods.CampaignNumber().call();

  const lists = [];
  for (let i = 0; i < Number; i++) {
    const list = await JogakboContract.methods.campaignList([i]).call();
    lists.push(list);
  }
  return lists;
};

export const testCampaignNumber = async () => {
  const Number = await JogakboContract.methods.CampaignNumber().call();
  console.log(`number:${Number}`);
  return Number;
};

// klip 잔고 조회시 메인넷 chain_id 필요
export const getBalance = (address: string) => {
  return caver.rpc.klay.getBalance(address).then(response => {
    const balance = caver.utils.convertFromPeb(
      caver.utils.hexToNumberString(response),
      "KLAY",
    );
    return balance;
  });
};
