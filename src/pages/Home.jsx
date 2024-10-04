import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Header = styled.div`
  font-size: 40px;
`;

const Contents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  margin: 10px 0;
`;

const Home = () => {
  const nevigate = useNavigate();

  const startTest = () => {
    nevigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg>
          <img className="rounded-circle" src="/cat/ggompang.jpeg" />
        </LogoImg>
        <Desc>🐱 MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기! 🐱</Desc>
        <Button onClick={startTest}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
