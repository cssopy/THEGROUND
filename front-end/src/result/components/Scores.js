import styles from "../css/Scores.module.css";

const Scores = (props) => {
  const { home, away, R } = props;

  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <div className={styles.homeName}>
        <img score />
        {home.userTeamname}
      </div>
      <div className={styles.score}>{R[0]}</div>
      <div className={styles.finish}>경기 종료</div>
      <div className={styles.score}>{R[1]}</div>
      <div className={styles.awayName}>{away.userTeamname}</div>
    </div>
  );
};

export default Scores;
