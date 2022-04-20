import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../../../styles/theme";

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  ${media.tablet} {
    &:first-child {
      margin-bottom: 100px;
    }
  }
  ${media.mobile} {
    padding: 0 20px;
  }
`;
const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

interface IGridBox {
  type: string;
}

const GridBox = styled.div<IGridBox>`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(
    ${(props) => (props.type === "All" ? 5 : 3)},
    1fr
  );
  ${media.mobile} {
    grid-template-columns: repeat(
      ${(props) => (props.type === "All" ? 3 : 1)},
      1fr
    );
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: lightgray;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.gradient};
  }
`;

const Slider = (props: any) => {
  const type = props.type;
  const [data, setData] = useState<any>([]);

  function matchData() {
    if (type === "New") {
      const newData = [...props.data];
      const results = newData.reverse().slice(0, 3);
      setData(results);
    } else if (type === "Popular") {
      const popularData = [...props.data];
      const results = popularData.sort(
        (b: any, a: any) => b["targetAmount"] - a["targetAmount"]
      );
      results.reverse();
      setData(results.slice(0, 3));
    } else if (type === "All") {
      setData(props.data);
    }
  }

  useEffect(() => {
    matchData();
  }, []);

  return (
    <Container>
      <Title>{type} Campaigns</Title>
      <GridBox type={type}>
        {data.map((data: any, i: number) => (
          <Link href={`campaigns/${data.name}/${data.id}`} key={data.id}>
            <a>
              <Box>
                <span>{data.id}</span>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
              </Box>
            </a>
          </Link>
        ))}
      </GridBox>
    </Container>
  );
};

export default Slider;
