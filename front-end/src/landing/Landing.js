import styles from "./css/Landing.module.css";
import landingVideo from "../assets/video/landing-dark.mp4";
import title from "../assets/etc/title.png";
import subtitle from "../assets/etc/subtitle.png";
import Modal from "./components/Modal.js";
import LoginHandler from "./components/LoginHandler";
import SignupModal from "./components/SignupModal";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import StartGame from "./components/StartGame";

const Landing = () => {
  const loginType = useSelector((state) => state.user.user.loginType);
  const uid = useSelector((state) => state.user.user.uid);
  const visited = localStorage.getItem("visited");
  const [login, setLogin] = useState(false);

  return (
    <>
      <video autoPlay muted loop className={styles.bg}>
        <source src={landingVideo} type="video/mp4" />
      </video>
      <div className={styles.landing}>
        <div>
          <div className={`${styles.title} ${styles.img}`}>
            <img src={title} alt="" />
          </div>
          <div className={`${styles.subtitle} ${styles.img}`}>
            <img src={subtitle} alt="" />
          </div>
          <div className={styles.buttonLoc}>
            <button className={styles.button} onClick={() => setLogin(!login)}>
              시작하기
            </button>
          </div>
        </div>
      </div>
      <LoginHandler loginType={loginType} />
      <Modal closeModal={() => setLogin(!login)} login={login} />
      {loginType && uid ? <SignupModal loginType={loginType} /> : <></>}
      {/* <SignupModal loginType={loginType} /> */}
      {!visited && <StartGame />}
    </>
  );
};

export default Landing;
