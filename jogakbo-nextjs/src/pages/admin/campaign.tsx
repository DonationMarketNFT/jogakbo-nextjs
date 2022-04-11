import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Posts from "../../components/admin/Posts";
import Pagination from "../../components/admin/Pagination";
import List from "../../components/admin/Posts";
import AdminHeader from "../../components/header/AdminHeader";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  padding-left: 300px;
`;

const 페이지타이틀 = styled.h3`
  margin-bottom: 30px;
`;

const 컨텐츠 = styled.div``;
const 타이틀 = styled.h4`
  margin-bottom: 20px;
`;

const Flex = styled.div`
  display: flex;
`;

const CampaignPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/campaigns/campaign_all"
      );
      setPosts(response.data);
      //   setPosts(posts.reverse());
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp: any) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <>
      <AdminHeader />
      <Container>
        <페이지타이틀>Campaign</페이지타이틀>
        <컨텐츠>
          <타이틀>캠페인 요청 리스트</타이틀>
          <Posts posts={currentPosts(posts)} loading={loading}></Posts>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          ></Pagination>
        </컨텐츠>
      </Container>
    </>
  );
};

export default CampaignPage;
