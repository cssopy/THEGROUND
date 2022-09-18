import styles from "../css/Modal.module.css";

const Kakao = () => {
  const REST_API_KEY = "df92f033940b721122d9a6a84759896b";
  const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
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
