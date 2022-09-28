import styles from "../css/Modal.module.css";
import kakaoBtn from "../../assets/etc/kakao_login.png";

const Kakao = () => {
  const REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
  // const REDIRECT_URI = "https://j7d109.p.ssafy.io";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 버튼 클릭 시, 로그인 타입을 로컬 스토리지에 저장하고 동의 페이지로 이동
  const kakaoLogin = () => {
    localStorage.setItem("loginType", "K");
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <div onClick={kakaoLogin}>
        <img className={styles.loginBtn} src={kakaoBtn} alt="kakaoButton" />
      </div>
    </>
  );
};

export default Kakao;
