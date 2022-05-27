import React from "react";
import styled from "styled-components";

interface ICategory {
  bgcolor: string;
}

const Wrapper = styled.div<ICategory>`
  margin-right: 5px;
  padding: 5px 10px;
  background: ${props =>
    props.bgcolor === "new"
      ? "#3558e6"
      : props.bgcolor === "popular"
      ? "#f2114d"
      : props.bgcolor === "환경"
      ? "#abc949"
      : props.bgcolor === "환경보호"
      ? "#abc949"
      : props.bgcolor === "공익"
      ? "#a665eb"
      : props.bgcolor === "사회"
      ? "#e8e854"
      : props.bgcolor === "지구평화"
      ? "#64e8c7"
      : "#e0e0e0"};
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const Category = ({
  type,
  onClick,
}: {
  type: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <Wrapper bgcolor={type} onClick={onClick}>
      {type}
    </Wrapper>
  );
};

export default Category;
