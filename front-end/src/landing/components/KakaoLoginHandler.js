import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoLoginHandler = () => {

  const navigate = useNavigate();
  const REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
  // const MAIN_URI = "https://j7d109.p.ssafy.io";
  const MAIN_URI = "http://localhost:3000";
  const REDIRECT_URI = MAIN_URI + "/kakaoLogin";

  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  //카카오로 토큰 발급 요청
  const getKakaoToken = () => {
    fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          axios
            .post(
              "https://j7d109.p.ssafy.io/back/users/login",
              {
                accessToken: data.access_token,
                loginType: "K",
              },
              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                },
              },
            )
            .then((res) => {
              if (res.data.message === "회원가입을 먼저 해주세요.") {
                //main으로 보내고 거기서 모달 띄우는 방법??
                navigate("/signupModal");
              } else {
                navigate("/main");
              }
            });
        } else {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (!code) return;
    getKakaoToken();
  }, []);

  return <p style={{color:'red'}}>카카오 로그인 중</p>;
};

export default KakaoLoginHandler;
