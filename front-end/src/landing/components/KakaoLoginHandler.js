// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { userActions } from "../../slice/UserSlice";
// import { useDispatch } from "react-redux/es/exports";

// const KakaoLoginHandler = (props) => {
//   const { loginType } = props;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
//   const REDIRECT_URI = "https://j7d109.p.ssafy.io";
//   // const REDIRECT_URI = "http://localhost:3000";

//   // 인가코드
//   let CODE = new URL(window.location.href).searchParams.get("code");

//   // 카카오로 액세스 토큰 발급 요청
//   const getKakaoToken = () => {
//     axios
//       .post(
//         `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE}`,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//           },
//         },
//         {
//           responseType: "json",
//         }
//       )
//       .then((res) => res.data)
//       .then((data) => {
//         // 액세스 토큰으로 로그인 요청
//         if (data.access_token) {
//           axios
//             .post(
//               "https://j7d109.p.ssafy.io/back/users/login",
//               {
//                 accessToken: data.access_token,
//                 loginType: "K",
//               },
//               {
//                 headers: {
//                   "Content-type": "application/json",
//                   Accept: "application/json",
//                 },
//               }
//             )
//             .then((res) => {
//               if (res.data.message === "회원가입을 먼저 해주세요.") {
//                 // 회원가입을 위해 uid를 저장 후 이동
//                 // loginType은 로컬 스토리지에 있음
//                 dispatch(userActions.setUid(res.data.uid));
//                 navigate("/");
//               } else {
//                 // jwt 토큰과 유저 이름을 저장 후 메인 페이지로 이동
//                 dispatch(userActions.setJwt(res.data.jwt));
//                 dispatch(userActions.setUserTeamname(res.data.userTeamname));
//                 localStorage.removeItem("loginType");
//                 localStorage.setItem("jwt", res.data.jwt);
//                 navigate("/main");
//               }
//             });
//         } else {
//           navigate("/");
//         }
//       });
//   };

//   useEffect(() => {
//     if (!CODE) return;
//     if (loginType === "K") {
//       getKakaoToken();
//     }
//   }, []);

//   return <></>;
// };

// export default KakaoLoginHandler;
