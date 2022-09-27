import styles from "../css/Modal.module.css";

const Naver = () => {

  const CLIENT_ID = "PVGrBZM8vqHq_92Vh6Wx";
  const REDIRECT_URI = "https://j7d109.p.ssafy.io";
  // const REDIRECT_URI = "http://localhost:3000";
  const STATE_STRING = Math.floor(Math.random() * (20000000 - 10000000) + 10000000);
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${REDIRECT_URI}`;


  const naverLogin = () => {
    localStorage.setItem('loginType', 'N')
    window.location.href = NAVER_AUTH_URL;
  }

  return (
    <>
      <div className={styles.naverBtn} onClick={naverLogin}/>
    </>
  );
};

export default Naver;