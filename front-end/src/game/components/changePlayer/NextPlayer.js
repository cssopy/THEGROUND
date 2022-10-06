import styles from "../../css/changePlayer/NextPlayer.module.css";

const NextPlayer = (props) => {
  const { player, now, hand } = props;
  console.log(player);
  const type = now ? "hitter" : "pitcher";
  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.title}`}>{now ? "다음 타자" : "현재 투수"}</div>
      <div className={styles.content}>
        <div
          className={
            now
              ? hand === "좌타"
                ? styles.leftHitter
                : styles.rightHitter
              : hand === "우타"
              ? styles.leftPitcher
              : styles.rightPitcher
          }
        >
          {hand}
        </div>
        {player.name}
      </div>
    </div>
  );
};

export default NextPlayer;
