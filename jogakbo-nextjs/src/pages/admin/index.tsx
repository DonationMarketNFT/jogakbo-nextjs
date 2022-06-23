import {getCampaignNumber} from "api/UseCaver";
import axios from "axios";
import Seo from "components/Seo";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {myAddressState} from "../../../atom";
import AdminHeader from "../../components/header/AdminHeader";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  padding-left: 300px;
`;

const AdminHome = () => {
  const [data, setData] = useState([]);
  const [myAddress, setMyAddress] = useRecoilState(myAddressState);
  useEffect(() => {
    getCampaignNumber();
  }, []);

  useEffect(() => {
    axios(`http://localhost:3000/nfts/nft_all`)
      .then(res => setData(res.data))
      .catch(e => console.log(e));
  }, []);
  console.log(data);
  console.log(myAddress);

  return (
    <>
      <Seo title="admin" />
      <AdminHeader />
      <Container>
        {data.map((o: any, i: number) => (
          <div>
            <span>{o.id} / </span>
            <span>{o.campaignId} </span>
            <span>{o.campaignName} </span>
            <span>{o.nftUri} </span>
          </div>
        ))}
      </Container>
    </>
  );
};

export default AdminHome;
