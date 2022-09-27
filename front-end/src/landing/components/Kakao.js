import styles from "../css/Modal.module.css";

const Kakao = () => {
  const REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
  // const REDIRECT_URI = "https://j7d109.p.ssafy.io";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLogin = () => {
    localStorage.setItem('loginType', 'K')
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <>
      <div className={styles.kakaoBtn} onClick={kakaoLogin}/>
    </>
  );
};

export default Kakao;
