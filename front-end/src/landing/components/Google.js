import styles from "../css/Modal.module.css";


const Google = () => {
  const CLIENT_ID = "824400159984-9lg3ubjictcle5lbsbj39s076lko1fhh.apps.googleusercontent.com";
  const MAIN_URI = "https://j7d109.p.ssafy.io";
  // const MAIN_URI = "http://localhost:3000";
  const REDIRECT_URI = MAIN_URI + "/googleLogin";
  const SCOPE = 'https://www.googleapis.com/auth/userinfo.email'
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseacount?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;


  return (
    <>
      <a href={GOOGLE_AUTH_URL}>
        <div className={styles.googleBtn}></div>
      </a>
    </>
  );
};

export default Google;