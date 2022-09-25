import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoLoginHandler = () => {

  const navigate = useNavigate();
  const REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
  const MAIN_URI = "https://j7d109.p.ssafy.io";
  // const MAIN_URI = "http://localhost:3000";
  const REDIRECT_URI = MAIN_URI + "/kakaoLogin";

  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  //카카오로 토큰 발급 요청
  const getKakaoToken = () => {
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          }
        },
        {
          responseType: "json"
        },
      )
      .then((res) => res.data)
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
              localStorage.setItem("uid", res.data.uid)
              if (res.data.message === "회원가입을 먼저 해주세요.") {
                // 전역 스테이트로 메인에서 화면이 모달이 뜨게 하기
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

  return <p style={{color:'yellow'}}>카카오 로그인 중</p>;
};

export default KakaoLoginHandler;
