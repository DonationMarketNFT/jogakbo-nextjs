import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {useEffect, useState} from "react";
import Link from "next/link";
import styled from "styled-components";
import {flexSet, media} from "../../../styles/theme";
import {getCampaigns} from "../../api/campaigns";
import SlideBanner from "../../components/campaigns/SlideBanner";
import Slider from "../../components/campaigns/Slider";
import Seo from "../../components/Seo";
import {카테고리} from "../../pages/campaigns/[...params]";

const Wrapper = styled.section`
  background: ${props => props.theme.bgColor};
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 50px 0;
  width: 1050px;
  ${media.tablet} {
    width: auto;
    flex-direction: column;
  }
`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 30px;
  width: 1050px;
  height: 100vh;
`;

const Title = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
  color: ${props => props.theme.textColor};
`;

const CategoryOptions = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Category = styled.div`
  margin-right: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  color: ${props => props.theme.gray.gray3};

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.textColor};
  }
`;

const GridBox = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  ${media.mobile} {
    grid-template-columns: repeat(3, 1fr);
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
    background: ${props => props.theme.gradient};
  }
`;

const 검색결과없음 = styled.div`
  ${flexSet()};
  width: 100%;
  height: 300px;
`;

export default function Campaigns({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [category, setCategory] = useState("all");
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getCampaigns(setAllData);
  }, []);

  return (
    <>
      <Seo title="캠페인" />
      <SlideBanner />
      <Wrapper>
        <Container>
          <Slider type="New" data={data} />
          <Slider type="Popular" data={data} />
        </Container>
      </Wrapper>
      <Wrapper>
        <AllContainer>
          <Title>All Campaigns</Title>
          <CategoryOptions>
            <카테고리 onClick={() => setCategory("all")}>All</카테고리>
            <카테고리 bgcolor="사회" onClick={() => setCategory("사회")}>
              사회
            </카테고리>
            <카테고리
              bgcolor="지구평화"
              onClick={() => setCategory("지구평화")}
            >
              지구평화
            </카테고리>
            <카테고리 bgcolor="공익" onClick={() => setCategory("공익")}>
              공익
            </카테고리>
            <카테고리 onClick={() => setCategory("")}>일반</카테고리>
          </CategoryOptions>
          <GridBox>
            {category === "all" ? (
              <>
                {allData.map((data: any) => (
                  <Link
                    href={`campaigns/${data.name}/${data.id}`}
                    key={data.id}
                  >
                    <a>
                      <Box>{data.name}</Box>
                    </a>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {allData
                  .filter((o: any) => o.category === category)
                  .map((data: any) => (
                    <Link
                      href={`campaigns/${data.name}/${data.id}`}
                      key={data.id}
                    >
                      <a>
                        <Box>{data.name}</Box>
                        {console.log(data)}
                      </a>
                    </Link>
                  ))}
              </>
            )}
          </GridBox>
        </AllContainer>
      </Wrapper>
      {/* <Slider type="All" data={data} /> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await (
    await fetch(`http://localhost:3000/campaigns/campaign_all`)
  ).json();

  return {
    props: {
      data,
    },
  };
};
