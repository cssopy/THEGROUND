import styles from "../css/Modal.module.css";
import naverBtn from "../../assets/etc/naver_login.png";

const Naver = () => {
  const CLIENT_ID = "PVGrBZM8vqHq_92Vh6Wx";
  const REDIRECT_URI = "https://j7d109.p.ssafy.io";
  // const REDIRECT_URI = "http://localhost:3000";
  const STATE_STRING = Math.floor(
    Math.random() * (20000000 - 10000000) + 10000000
  );
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${REDIRECT_URI}`;

  // 버튼 클릭 시, 로그인 타입을 로컬 스토리지에 저장하고 동의 페이지로 이동
  const naverLogin = () => {
    localStorage.setItem("loginType", "N");
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <div onClick={naverLogin}>
        <img className={styles.loginBtn} src={naverBtn} alt="naverButton" />
      </div>
    </>
  );
};

export default Naver;
