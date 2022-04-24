import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Wrapper = styled.div`
  margin: 50px 0;
`;

const FlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  background-color: yellowgreen;
  height: 150px;
  background-size: cover;
  background-position: center center;
`;

function Present() {
  return (
    <Layout>
      <Wrapper>
        <FlexBox>
          <BoxContainer>
            <Link href={`/campaign/1`}>
              <a>
                <Box />
              </a>
            </Link>
          </BoxContainer>
          <BoxContainer>
            <Link href={`/campaign/2`}>
              <a>
                <Box />
              </a>
            </Link>
          </BoxContainer>
        </FlexBox>
      </Wrapper>
    </Layout>
  );
}

export default Present;
