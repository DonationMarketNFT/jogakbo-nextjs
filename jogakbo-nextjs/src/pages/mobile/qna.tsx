import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Question = styled(motion.li)`
  margin-bottom: 10px;
  padding: 20px 30px;
  background: ${(props) => props.theme.gray};
  border-radius: 10px;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const Answer = styled(motion.div)`
  margin-bottom: 10px;
  display: none;
  padding: 20px 30px;
  font-size: 18px;
`;

const QandA = () => {
  const [question, setQuestion] = useState(true);

  const onClickQuestion = (a: number) => {
    const answer = document.getElementById(`${a}`);
    setQuestion((prev) => !prev);
    question
      ? (answer!.style.display = "block")
      : (answer!.style.display = "none");
  };
  const QuestionData = [
    {
      question: "캠페인 기부 조건을 달성하지 못할 시 환불절차는 어떻게 되나요?",
      answer:
        "조건 금액을 달성하지 못한 캠페인은 환불 상태로 변경되며 기간 내 환불 요청이 가능해지게 됩니다",
    },
    {
      question: "캠페인은 아무나 생성할 수 있나요?",
      answer:
        "create campaign을 통해 양식을 제출하게 되면 심사 후 캠페인으로 등록됩니다.",
    },
    { question: "질문3", answer: "답변3" },
    { question: "질문4", answer: "답변4" },
    { question: "질문5", answer: "답변5" },
    { question: "질문6", answer: "답변6" },
  ];
  return (
    <Container>
      <Title>✔️ Q&A</Title>
      <ul>
        {QuestionData.map((a, i) => (
          <>
            <Question key={i} onClick={() => onClickQuestion(i)}>
              ❔ {a.question}
            </Question>
            <Answer id={`${i}`}>❗️ {a.answer}</Answer>
          </>
        ))}
      </ul>
    </Container>
  );
};

export default QandA;
