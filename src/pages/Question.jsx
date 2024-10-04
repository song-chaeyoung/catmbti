import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 10px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 8px 16px;
  background: rgba(205, 92, 92, 0.9);
  color: #fff;
  border-radius: 8px;
  @media screen and (max-width: 780px) {
    width: 300px;
    font-size: 24px;
    padding: 6px 12px;
  }
  @media screen and (max-width: 360px) {
    width: 200px;
    font-size: 18px;
    padding: 6px 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > button {
    width: 400px;
    height: 150px;
    background: dodgerblue;
    border: none;
    transition: all 0.3s;
    font-size: 18px;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    & > button {
      width: 300px;
      height: 150px;
      background: dodgerblue;
      border: none;
      transition: all 0.3s;
      padding: 10px;
    }
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    & > button {
      width: 200px;
      height: 150px;
      background: dodgerblue;
      border: none;
      transition: all 0.3s;
    }
  }
`;

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const nevigate = useNavigate();

  // const goResult = () => {
  //   nevigate("/result");
  // };

  // const handleClickBtnA = (no, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + no;
  //     const newObj = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObj);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + no;
  //     const newObj = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObj);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + no;
  //     const newObj = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObj);
  //   } else if (type === "JP") {
  //     const addScore = totalScore[3].score + no;
  //     const newObj = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObj);
  //   }

  //   setQuestionNum(questionNum + 1);
  // };
  // const handleClickBtnB = (no) => {
  //   setQuestionNum(questionNum + 1);
  // };

  const handleClickBtn = (num, type) => {
    const newScroe = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + num } : item
    );
    setTotalScore(newScroe);
    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      const mbti = totalScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );

      nevigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <>
      <ProgressBar
        striped
        variant="info"
        now={(questionNum / QuestionData.length) * 100}
        animated
      />
      <Wrapper>
        <Title>{QuestionData[questionNum]?.title}</Title>
        <ButtonGroup>
          <Button
            onClick={() => handleClickBtn(1, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            onClick={() => handleClickBtn(0, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;
