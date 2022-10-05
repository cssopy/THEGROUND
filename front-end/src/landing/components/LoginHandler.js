import { useEffect } from "react";
import axios from "axios";
import { userActions } from "../../redux/slice/userSlice";
import usersActions from "../../redux/thunkActions/userActions";
import { useDispatch } from "react-redux";
import logosActions from "../../redux/thunkActions/logoActions";
import playersActions from "../../redux/thunkActions/playerActions";
import BackApi from "../../api/BackApi";
import SocialApi from "../../api/SocialApi";
import { configActions } from "../../redux/slice/configSlice";

const LoginHandler = (props) => {
  const { loginType } = props;
  const dispatch = useDispatch();

  let loginUrl;
  const CODE = new URL(window.location.href).searchParams.get("code");
  const STATE = new URL(window.location.href).searchParams.get("state");

  if (loginType === "N") {
    loginUrl = SocialApi.naver.login(CODE, STATE);
  } else if (loginType === "K") {
    loginUrl = SocialApi.kakao.login(CODE);
  } else if (loginType === "G") {
    loginUrl = SocialApi.google.login(CODE);
  }

  // 네이버로 토큰 발급 요청
  const getToken = () => {
    axios
      .post(
        loginUrl,
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
        dispatch(configActions.setIsLoading(true));
        // 액세스 토큰으로 로그인 요청
        if (data.access_token) {
          axios
            .post(
              BackApi.users.login,
              {
                accessToken: data.access_token,
                loginType,
              },
              {
                headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
                },
              }
            )
            .then((res) => {
              dispatch(configActions.setPersentage(50));
              dispatch(logosActions.getLogoAPI());
              if (res.data.message === "회원가입을 먼저 해주세요.") {
                dispatch(configActions.setPersentage(50));
                // 회원가입을 위해 uid를 저장 후 이동
                // loginType은 로컬 스토리지에 있음
                dispatch(userActions.setUid(res.data.uid));
                dispatch(configActions.setUrl(""));
              } else {
                // jwt 토큰과 유저 이름을 저장 후 메인 페이지로 이동
                // 메인 페이지 이동 시 선수 전체 데이터와 유저 데이터를 요청 및 저장
                dispatch(playersActions.getPlayerAPI(res.data.jwt));
                dispatch(userActions.setJwt(res.data.jwt));
                dispatch(userActions.setLoginType(""));
                dispatch(usersActions.getUserAPI(res.data.jwt));
                dispatch(configActions.setUrl("main"));
              }
            });
        } else {
          dispatch(configActions.setPersentage(100));
          dispatch(configActions.setUrl(""));
        }
      })
      .catch((err) => console.log(err));
  };

  // 취소시 로직
  let error = new URL(window.location.href).searchParams.get(
    "error_description"
  );

  window.history.replaceState({}, null, window.location.pathname);

  useEffect(() => {
    if (loginType) {
      getToken();
    }
    if (error === "Canceled By User") {
      dispatch(configActions.setUrl(""));
    }
  });

  return <></>;
};

export default LoginHandler;
