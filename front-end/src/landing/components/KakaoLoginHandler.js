import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

const KakaoLoginHandler = () => {
  const navigate = useNavigate();

  const REST_API_KEY = "df92f033940b721122d9a6a84759896b";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  //토큰 저장
  const getKakaoToken = () => {
    //카카오로 토큰 발급 요청
    fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${
        REST_API_KEY
      }&redirect_uri=${REDIRECT_URI}&code=${code}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          console.log(data);
          navigate('/main');
        } else {
          navigate('/');
        }
      });
  };

  useEffect(() => {
    if(!code) return;
    getKakaoToken();
  }, []);

  return <p>카카오 로그인 중</p>;
};

export default KakaoLoginHandler;
