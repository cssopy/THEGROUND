import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { userActions } from "../../slice/UserSlice";
import { useDispatch } from "react-redux/es/exports";

const NaverLoginHandler = (props) => {
  const { loginType } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CLIENT_ID = "PVGrBZM8vqHq_92Vh6Wx";
  const CLIENT_SECRET = "tSbysXbRL1";

  // 인가코드
  const location = useLocation();
  const CODE = location.search.split("=")[1];
  const STATE = location.search.split("=")[2];

  // 네이버로 토큰 발급 요청
  const getNaverToken = () => {
    axios
      .post(
        `/token/?grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${CODE}&state=${STATE}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        },
        {
          responseType: "json",
        }
      )
      .then((res) => res.data)
      .then((data) => {
        // 액세스 토큰으로 로그인 요청
        if (data.access_token) {
          axios
            .post(
              "https://j7d109.p.ssafy.io/back/users/login",
              {
                accessToken: data.access_token,
                loginType: "N",
              },
              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                },
              }
            )
            .then((res) => {
              if (res.data.message === "회원가입을 먼저 해주세요.") {
                // 회원가입을 위해 uid를 저장 후 이동
                // loginType은 로컬 스토리지에 있음
                dispatch(userActions.setUid(res.data.uid));
                navigate("/");
              } else {
                // jwt 토큰과 유저 이름을 저장 후 메인 페이지로 이동
                dispatch(userActions.setJwtToken(res.data.jwt));
                dispatch(userActions.setUserTeamname(res.data.userTeamname));
                localStorage.removeItem("loginType");
                localStorage.setItem("jwt", res.data.jwt);
                navigate("/main");
              }
            });
        } else {
          navigate("/");
        }
      });
  };

  // 취소시 로직
  let error = new URL(window.location.href).searchParams.get(
    "error_description"
  );

  useEffect(() => {
    if (!CODE) return;
    if (loginType === "N") {
      getNaverToken();
    }
    if (error === "Canceled By User") {
      navigate("/");
    }
  }, []);

  return <></>;
};

export default NaverLoginHandler;
