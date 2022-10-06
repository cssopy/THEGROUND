import styles from "../../css/changePlayer/NextPlayer.module.css";

const NextPlayer = (props) => {
  const { player } = props;

  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.title}`}></div>
      <div className={styles.content}>좌타 김투수</div>
    </div>
  );
};

export default NextPlayer;
