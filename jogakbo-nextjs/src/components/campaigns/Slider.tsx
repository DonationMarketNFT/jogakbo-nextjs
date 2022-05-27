import Link from "next/link";
import {useEffect, useState} from "react";
import {Carousel} from "react-bootstrap";
import styled from "styled-components";
import {media} from "../../../styles/theme";
import {카테고리} from "../../../styles/theme";
import Category from "../Category";

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${media.tablet} {
    &:first-child {
      margin-bottom: 100px;
    }
  }
  ${media.mobile} {
    padding: 0;
  }
`;
const Title = styled.h3`
  padding: 0 70px;
  font-size: 22px;
  margin-bottom: 10px;
  color: ${props => props.theme.textColor};
  ${media.mobile} {
    padding: 0 30px;
    text-align: center;
  }
`;

const 캐러셀 = styled(Carousel)`
  a.carousel-control-prev,
  a.carousel-control-next {
    width: 70px;
    height: 170px;
    ${media.tablet} {
      height: 300px;
    }
    ${media.mobile} {
      width: 40px;
      height: 200px;
    }
  }
  a.carousel-control-prev span {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
  }
  a.carousel-control-next span {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
`;

const 이미지 = styled.div`
  margin: 0 auto;
  width: 385px;
  height: 170px;
  background: url(/멸종위기.jpg) center center;
  background-size: cover;
  ${media.tablet} {
    margin: 0 70px;
    width: auto;
    height: 300px;
  }
  ${media.mobile} {
    margin: 0 40px;
    height: 200px;
  }
`;

const Item = styled(Carousel.Item)`
  height: 250px;
  ${media.tablet} {
    height: 380px;
  }
  ${media.mobile} {
    height: 280px;
  }
`;

const Caption = styled(Carousel.Caption)`
  position: absolute;
  left: 70px;
  display: flex;
  align-items: center;
  span {
    color: ${props => props.theme.textColor};
    margin-left: 10px;
  }
  ${media.mobile} {
    left: 40px;
  }
`;

const Slider = (props: any) => {
  const type = props.type;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null,
  ) => {
    setIndex(selectedIndex);
  };

  function matchData() {
    if (type === "New") {
      const newData = [...props.data];
      const results = newData.reverse().slice(0, 3);
      setData(results);
    } else if (type === "Popular") {
      const popularData = [...props.data];
      const results = popularData.sort(
        (b: any, a: any) => b["targetAmount"] - a["targetAmount"],
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
      <캐러셀
        activeIndex={index}
        onSelect={handleSelect}
        // prevIcon={false}
        // nextIcon={false}
      >
        {data.map((data: any, i: number) => (
          <Item>
            <Link href={`campaigns/${data.name}${data.id}`} key={data.id}>
              <a>
                <이미지 />
                <Caption>
                  <Category type={data.category ? data.category : "일반"} />
                  <span>{data.name}</span>
                </Caption>
              </a>
            </Link>
          </Item>
        ))}
      </캐러셀>
      {/* <GridBox type={type}>
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
      </GridBox> */}
    </Container>
  );
};

export default Slider;
