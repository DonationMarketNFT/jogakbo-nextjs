import {useState} from "react";
import {useRecoilState} from "recoil";
import styled from "styled-components";
import {VerifyModalState} from "../../../atom";
import VerifyCampaignModal from "./VerifyCampaignModal";

const PostContainer = styled.div`
  margin-bottom: 15px;
`;

const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
  }
  li {
    margin: 3px 0;
    font-size: 22px;
  }
`;

const IdLabel = styled.li`
  width: 100px;
  padding: 5px;
  background: none;
  text-align: center;
`;
const NameLabel = styled.li`
  padding: 5px;
`;
const Id = styled.li`
  width: 100px;
  padding: 8px;
  background: lightgray;
  text-align: center;
`;
const Name = styled.li`
  margin-left: 10px;
  padding: 8px;
`;

const Posts = ({posts, loading}) => {
  const [showModal, setShowModal] = useRecoilState(VerifyModalState);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      <PostContainer>
        <MenuUl>
          <IdLabel>id</IdLabel>
          <NameLabel>name</NameLabel>
        </MenuUl>
        {loading && <div> loading... </div>}
        {posts.map(post => (
          <MenuUl>
            <Id key={post.id}>{post.id}</Id>
            <Name
              onClick={() => {
                setId(post.id);
                setName(post.name);
                setShowModal(true);
              }}
            >
              {post.name}
            </Name>
          </MenuUl>
        ))}
      </PostContainer>
      {showModal && <VerifyCampaignModal id={id} name={name} />}
    </>
  );
};
export default Posts;
