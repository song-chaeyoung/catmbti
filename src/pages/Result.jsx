import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/questiondata";
import KaKaoShareBtn from "../components/KaKaoShareBtn";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 110px);
  color: #fff;
  @media screen and (max-width: 780px) {
    gap: 0;
  }
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
  gap: 10px;
  @media screen and (max-width: 780px) {
    gap: 4px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 10px 0;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px solid #fff;
  }
`;

const Desc = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 150%;
  width: 340px;
  @media screen and (max-width: 780px) {
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
        <ButtonGroup>
          <Button onClick={handleClickButton}>테스트 다시 시작하기</Button>
          <KaKaoShareBtn data={data} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;
