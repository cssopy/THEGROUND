import styles from "./css/Landing.module.css";
import landingVideo from "../assets/landing-dark.mp4";
import title from "../assets/title.png";
import subtitle from "../assets/subtitle.png";
import Modal from "./components/Modal.js";
import NaverLoginHandler from "./components/NaverLoginHandler";
import KakaoLoginHandler from "./components/KakaoLoginHandler";
import GoogleLoginHandler from './components/GoogleLoginHandler';
import SignupModal from "./components/SignupModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";

const Landing = () => {
  const [login, setLogin] = useState(false);
  const loginType = localStorage.getItem('loginType');
  const uid = useSelector(state => state.user.uid);

  return (
    <>
      <video autoPlay muted loop className={styles.bg}>
        <source src={landingVideo} type="video/mp4" />
      </video>
      <div className={styles.landing}>
        <div>
          <div className={styles.title}>
            <img src={title} alt="" />
          </div>
          <div className={styles.subtitle}>
            <img src={subtitle} alt="" />
          </div>
          <div className={styles.buttonLoc}>
            <button className={styles.button} onClick={() => setLogin(!login)}>
              시작하기
            </button>
          </div>
        </div>
      </div>
      <NaverLoginHandler loginType={loginType} />
      <KakaoLoginHandler loginType={loginType} />
      <GoogleLoginHandler loginType={loginType} />
      <Modal closeModal={() => setLogin(!login)} login={login} />
      {loginType && uid ? <SignupModal loginType={loginType} /> : <></>}
    </>
  );
};

export default Landing;
