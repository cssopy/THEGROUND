import styles from "../css/Modal.module.css";

const Kakao = () => {
  const REST_API_KEY = "1ae04a78365d2a5f1e2e1d4ee529fe84";
  const MAIN_URI = "https://j7d109.p.ssafy.io";
  // const MAIN_URI = "http://localhost:3000";
  const REDIRECT_URI = MAIN_URI + "/kakaoLogin";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <div className={styles.kakaoBtn}></div>
      </a>
    </>
  );
};

export default Kakao;
