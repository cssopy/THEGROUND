import styles from "./css/Landing.module.css";
import landingVideo from "../assets/landing-light.mp4";

const Landing = () => {
  return (
    <video autoPlay muted loop className={styles.video}>
      <source src={landingVideo} type="video/mp4" />
    </video>
  );
};

export default Landing;
