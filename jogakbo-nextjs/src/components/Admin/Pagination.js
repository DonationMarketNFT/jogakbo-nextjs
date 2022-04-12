import styled from "styled-components";

const PageUl = styled.ul`
  position: fixed;
  bottom: 30px;
  left: 300px;
  right: 30px;
  display: flex;
  justify-content: center;
  padding: 3px;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  padding: 10px;
  border-radius: 5px;
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl>
          {pageNumbers.map((number) => (
            <PageLi key={number} onClick={() => paginate(number)}>
              {number}
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;
