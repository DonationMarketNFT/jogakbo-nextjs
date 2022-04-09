import Link from "next/link";
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
            <Link href="">
              <a>
                <li>{post.name}</li>
              </a>
            </Link>
          </MenuUl>
        ))}
      </Container>
    </>
  );
};
export default Posts;
