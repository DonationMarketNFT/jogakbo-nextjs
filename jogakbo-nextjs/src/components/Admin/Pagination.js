import styled from "styled-components";

const PageUl = styled.ul`
  display: flex;
  padding: 1px;
  width: 150px;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  padding: 5px;
  border-radius: 5px;
  width: 25px;
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
