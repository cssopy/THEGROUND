import styles from "./css/Landing.module.css";
import landingVideo from "../assets/landing-dark.mp4";
import title from "../assets/title.png";
import subtitle from "../assets/subtitle.png";

const Landing = () => {
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
        <button className={styles.button}>Sign Up</button>
      </div>
      <div className={styles.buttonLoc}>
        <button className={styles.button}>Login</button>
      </div>
    </>
  );
};

export default Landing;
