import styles from "../css/Modal.module.css";
import googleBtn from "../../assets/google_login.png";

const Google = () => {
  const CLIENT_ID =
    "824400159984-9lg3ubjictcle5lbsbj39s076lko1fhh.apps.googleusercontent.com";
  const REDIRECT_URI = "https://j7d109.p.ssafy.io";
  // const REDIRECT_URI = "http://localhost:3000";
  const SCOPE = "https://www.googleapis.com/auth/userinfo.email";
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseacount?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;

  // 버튼 클릭 시, 로그인 타입을 로컬 스토리지에 저장하고 동의 페이지로 이동
  const googleLogin = () => {
    localStorage.setItem("loginType", "G");
    window.location.href = GOOGLE_AUTH_URL;
  };
  return (
    <>
      <div onClick={googleLogin}>
        <img className={styles.loginBtn} src={googleBtn} alt="googleButton" />
      </div>
    </>
  );
};

export default Google;
