import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 150px;
`;

const MenuUl = styled.ul`
  display: flex;
  li {
    margin: 3px 0;
  }
  &:first-child {
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;

    li:first-child {
      background: none;
    }
  }
  li#id {
    width: 30px;
    background: lightgray;
    text-align: center;
  }
  li:last-child {
    margin-left: 10px;
  }
`;

const Posts = ({ posts, loading }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Container>
        <MenuUl>
          <li>id</li>
          <li>name</li>
        </MenuUl>
        {loading && <div> loading... </div>}
        {posts.map((post) => (
          <MenuUl>
            <li key={post.id} id="id">
              {post.id}
            </li>
            <li>{post.name}</li>
          </MenuUl>
        ))}
      </Container>
    </>
  );
};
export default Posts;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  background: pink;
  button {
    padding: 5px 10px;
    background: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Modal = () => {
  return (
    <ModalContainer
      onClick={() => {
        setModal(false);
      }}
    >
      <ModalContents>
        modal {id}
        <button>스마트 컨트랙트에 올리기</button>
        <button>DB에 올리기</button>
        <button>삭제하기</button>
      </ModalContents>
    </ModalContainer>
  );
};
