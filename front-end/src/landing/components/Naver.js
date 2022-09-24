import styles from "../css/Modal.module.css";


const Naver = () => {
  const CLIENT_ID = "PVGrBZM8vqHq_92Vh6Wx";
  // const MAIN_URI = "https://j7d109.p.ssafy.io";
  const MAIN_URI = "http://localhost:3000";
  const REDIRECT_URI = MAIN_URI + "/naverLogin";
  const STATE_STRING = '';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${REDIRECT_URI}`;


  return (
    <>
      <a href={NAVER_AUTH_URL}>
        <div className={styles.naverBtn}></div>
      </a>
    </>
  );
};

export default Naver;