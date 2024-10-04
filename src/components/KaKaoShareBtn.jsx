import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const { Kakao } = window;

const KaKaoShareBtn = () => {
  const url = "https://catmbti0000.netlify.app";
  const resultURL = window.location.href;

  useEffect(() => {
    if (!window.Kakao.isInitialized())
      Kakao.init("f911a8fe9c3dd0b7299653bf1e529769");
    // console.log(Kakao.isInitialized());
    // Kakao.isInitialized();
  }, []);

  const shareKaKao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 입니다.`,
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return <Button onClick={shareKaKao}>카카오톡 공유하기</Button>;
};

export default KaKaoShareBtn;
