import axios from "axios";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Pagination from "../../components/admin/Pagination";
import Posts from "../../components/admin/Posts";
import AdminHeader from "../../components/header/AdminHeader";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  padding-left: 300px;
`;

const PageTitle = styled.h4`
  font-size: 32px;
  margin-bottom: 15px;
`;

const PageSubTitle = styled.div`
  margin-bottom: 15px;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Verifing = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/pre-campaigns/campaign_all",
      );
      setPosts(response.data);
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
        <PageTitle>캠페인 신청 리스트</PageTitle>
        <PageSubTitle>
          홈페이지를 통해 신청된 캠페인을 오래된 순으로 보여줍니다
        </PageSubTitle>
        <Board>
          <Posts posts={currentPosts(posts)} loading={loading}></Posts>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          ></Pagination>
        </Board>
      </Container>
    </>
  );
};

export default Verifing;
