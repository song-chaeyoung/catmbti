import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/questiondata";

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
  line-height: 150%;
  width: 340px;
`;

const Result = () => {
  const [data, setData] = useState({});
  const [searchParms] = useSearchParams();
  const mbti = searchParms.get("mbti");

  const nevigate = useNavigate();
  const handleClickButton = () => {
    nevigate("/");
  };

  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setData(result);
  }, [mbti]);

  console.log(data);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>결과보기</Title>
        <Title></Title>
        <LogoImg>
          <img className="rounded-circle" src={data.img} />
        </LogoImg>
        <Desc>
          예비집사님과 찰떡궁합인 고양이는 <br /> 🐱 {data.best}형 {data.name}{" "}
          🐱
        </Desc>
        <Desc>{data.desc}</Desc>
        <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
