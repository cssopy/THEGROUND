import styles from "./css/Landing.module.css";
import landingVideo from "../assets/landing-dark.mp4";
import title from "../assets/title.png";
import subtitle from "../assets/subtitle.png";
import Modal from "./components/Modal.js";
import { useState } from "react";

const Landing = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <video autoPlay muted loop className={styles.bg}>
        <source src={landingVideo} type="video/mp4" />
      </video>
      <div>
        <div className={styles.title}>
          <img src={title} alt="" />
        </div>
        <div className={styles.subtitle}>
          <img src={subtitle} alt="" />
        </div>
      </div>
      <div className={styles.buttonLoc}>
        <button className={styles.button} onClick={() => setLogin(!login)}>
          Login
        </button>
      </div>
      {login && <Modal closeModal={() => setLogin(!login)}></Modal>}
    </>
  );
};

export default Landing;
