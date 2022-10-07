import styles from "./css/Landing.module.css";
import landingVideo from "../assets/video/landing-dark.mp4";
import title from "../assets/etc/title.png";
import subtitle from "../assets/etc/subtitle.png";
import Modal from "./components/Modal.js";
import LoginHandler from "./components/LoginHandler";
import SignupModal from "./components/SignupModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StartGame from "./components/StartGame";
import { configActions } from "../redux/slice/configSlice";

const Landing = () => {
  const dispatch = useDispatch();
  const loginType = useSelector((state) => state.user.user.loginType);
  const uid = useSelector((state) => state.user.user.uid);
  const music = useSelector((state) => state.config.music);
  // const [visited, setVisited] = useState(localStorage.getItem("visited"));
  const visited = useSelector((state) => state.config.visited);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    dispatch(configActions.setMusic(visited ? true : false));
  });

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
      {!visited && <StartGame />}
    </>
  );
};

export default Landing;
