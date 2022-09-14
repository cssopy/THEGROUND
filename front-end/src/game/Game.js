import styles from "./css/Game.module.css";
import bgimg from "../assets/background1.jpg";
import fieldimg from "../assets/ground2.png";
import Image from "react-bootstrap/Image";

const Game = () => {
  return (
    <>
      <img src={bgimg} alt="bg" className={styles.bg} />
      <div className={`${styles["box"]} justify-self-center mx-auto`}>
        <div className={`${styles["innerbox"]}`}>
          <Image src={fieldimg} alt="baseball field" id={styles.field}></Image>
        </div>
        <div id={styles.ballcount}></div>
      </div>
    </>
  );
};

export default Game;
