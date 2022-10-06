import styles from "../../css/main/ScoreBoard.module.css";
import { Table } from "react-bootstrap";

const ScoreBoard = (props) => {
  // 전광판
  const { scores, R, H, B, awayLogo, homeLogo } = props;

  // 현재 이닝은 빨간색으로 표시
  const score = (num) => {
    if (num < scores.length) {
      if (num === scores.length - 1) {
        return <div style={{ color: "#BF0D3E" }}>{scores[num]}</div>;
      }
      return <div>{scores[num]}</div>;
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <Table bordered className={`${styles["score-board"]}`}>
        <thead className={styles.thead}>
          <tr className={styles.top}>
            <th className={styles.left}></th>
            <th className={styles.green}>1</th>
            <th className={styles.green}>2</th>
            <th className={styles.green}>3</th>
            <th className={styles.green}>4</th>
            <th className={styles.green}>5</th>
            <th className={styles.green}>6</th>
            <th className={styles.green}>7</th>
            <th className={styles.green}>8</th>
            <th className={styles.green}>9</th>
            <th>R</th>
            <th>H</th>
            <th className={styles.right}>B</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr>
            <th className={styles.left}>
              <img className={styles.logo} src={homeLogo} alt="homeLogo" />
            </th>
            <th>{score(0)}</th>
            <th>{score(2)}</th>
            <th>{score(4)}</th>
            <th>{score(6)}</th>
            <th>{score(8)}</th>
            <th>{score(10)}</th>
            <th>{score(12)}</th>
            <th>{score(14)}</th>
            <th>{score(16)}</th>
            <th>{R[0]}</th>
            <th>{H[0]}</th>
            <th className={styles.right}>{B[0]}</th>
          </tr>
          <tr className={styles.bottom}>
            <th className={styles.left}>
              <img className={styles.logo} src={awayLogo} alt="awayLogo" />
            </th>
            <th>{score(1)}</th>
            <th>{score(3)}</th>
            <th>{score(5)}</th>
            <th>{score(7)}</th>
            <th>{score(9)}</th>
            <th>{score(11)}</th>
            <th>{score(13)}</th>
            <th>{score(15)}</th>
            <th>{score(17)}</th>
            <th>{R[1]}</th>
            <th>{H[1]}</th>
            <th className={styles.right}>{B[1]}</th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ScoreBoard;
