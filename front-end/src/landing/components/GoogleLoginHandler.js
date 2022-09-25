import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const GoogleLoginHandler = () => {

  const navigate = useNavigate();
  const CLIENT_ID = "824400159984-9lg3ubjictcle5lbsbj39s076lko1fhh.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const MAIN_URI = "https://j7d109.p.ssafy.io";
  // const MAIN_URI = "http://localhost:3000";
  const REDIRECT_URI = MAIN_URI + "/googleLogin";

  // 인가코드
  const location = useLocation();
  const CODE = location.search.split('=')[1];
  

  // 네이버로 토큰 발급 요청
  const getGoogleToken = () => {
    axios
      .post(
        `https://www.googleapis.com/oauth2/v4/token?code=${CODE}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}`,
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
                loginType: "G",
              },
              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                },
              },
            )
            .then((res) => {
              console.log(res)
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



  // 취소시 로직
  let error = new URL(window.location.href).searchParams.get("error_description");

  useEffect(() => {
    if (!CODE) return;
    getGoogleToken();
    if (error === 'Canceled By User') {
      navigate("/");
    };  
  }, []);

  return <p style={{color:'black'}}>구글 로그인 중</p>;
};


export default GoogleLoginHandler;