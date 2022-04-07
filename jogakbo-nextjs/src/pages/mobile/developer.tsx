import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 70px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  margin: 10px 0;
  width: 130px;
  height: 130px;
  background: gray;
  border-radius: 50%;
`;

const Name = styled.h5`
  font-size: 18px;
  font-weight: 500;
`;

const Intro = styled.p`
  margin: 10px 0;
`;

class 개발자 {
  name: string;
  desc: string;
  constructor(name: string, desc: string) {
    this.name = name;
    this.desc = desc;
  }
}

const Developer = () => {
  const 다운 = new 개발자("다운", "개발자입니다");
  const 지선 = new 개발자("지선", "개발자입니다");
  const 시아 = new 개발자("시아", "개발자입니다");
  return (
    <Container>
      <Title>✔️ 개발자들</Title>
      <Profile>
        <Image></Image>
        <Name>{다운.name}</Name>
        <Intro>{다운.desc}</Intro>
      </Profile>
      <Profile>
        <Image></Image>
        <Name>{지선.name}</Name>
        <Intro>{지선.desc}</Intro>
      </Profile>
      <Profile>
        <Image></Image>
        <Name>{시아.name}</Name>
        <Intro>{시아.desc}</Intro>
      </Profile>
    </Container>
  );
};

export default Developer;
