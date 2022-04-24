import {useState} from "react";
import {Carousel} from "react-bootstrap";
import styled from "styled-components";
import {media} from "../../../styles/theme";

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 500px;
  height: 400px;
  background-color: ${props => props.theme.gray.gray7};
  border-radius: 20px;
  .carousel-caption {
    padding-left: 20px;
    padding-right: 20px;
    color: ${props => props.theme.textColor};
  }
  ${media.mobile} {
    width: 100%;
  }
`;

const Img = styled.img`
  display: block;
  width: 50%;
  margin: 20px auto;
  ${media.mobile} {
    width: 70%;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

function MobileSlider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null,
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      prevIcon={false}
      nextIcon={false}
    >
      <Carousel.Item>
        <Container>
          <Img src="/blockchain4.png" alt="First slide" />
          <Carousel.Caption>
            <Title>블록체인 기술</Title>
            <p>
              캠페인과 기부내역이 블록체인에 등록되어, 거래 내역 위변조가
              불가능해져 투명한 기부가 가능합니다
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Img src="/nft4.png" alt="Second slide" />
          <Carousel.Caption>
            <Title>NFT 발행</Title>
            <p>
              마음에 드는 캠페인에 Klay를 기부해보세요! 캠페인 NFT가 기부 증서로
              발행됩니다
            </p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Img src="/wallet4.png" alt="Third slide" />
          <Carousel.Caption>
            <Title>다양한 지갑 서비스</Title>
            <p>원하는 지갑으로 편리하게 기부할 수 있습니다</p>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default MobileSlider;
