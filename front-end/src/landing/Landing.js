import styles from "./css/Landing.module.css";
import landingVideo from "../assets/video/landing-dark.mp4";
import title from "../assets/etc/title.png";
import subtitle from "../assets/etc/subtitle.png";
import landingMusic from "../assets/bgm/INDIE_ROCK_SPORT.mp3";
import Modal from "./components/Modal.js";
import LoginHandler from "./components/LoginHandler";
import SignupModal from "./components/SignupModal";
import ReactHowler from "react-howler";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import StartGame from "./components/StartGame";

const Landing = () => {
  const loginType = useSelector((state) => state.user.user.loginType);
  const visited = useSelector((state) => state.user.visited);
  const uid = useSelector((state) => state.user.user.uid);
  const [login, setLogin] = useState(false);
  const [music, setMusic] = useState(visited);
  const startMusic = () => {
    setMusic(true);
  };

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
      {music && (
        <ReactHowler
          src={landingMusic}
          playing={true}
          loop={true}
          volume={0.1}
        />
      )}
      {!visited && <StartGame startMusic={startMusic} />}
    </>
  );
};

export default Landing;
