import styles from "../css/ScoreBoard.module.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const ScoreBoard = (props) => {
  // 전광판
  const { scores, R, H, B } = props;
  const logos = useSelector((state) => state.logo.logos);

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
              <img src={logos && logos[4].logoUrl} className={styles.logo} />
            </th>
            <th>{scores[0]}</th>
            <th>{scores[2]}</th>
            <th>{scores[4]}</th>
            <th>{scores[6]}</th>
            <th>{scores[8]}</th>
            <th>{scores[10]}</th>
            <th>{scores[12]}</th>
            <th>{scores[14]}</th>
            <th>{scores[16]}</th>
            <th>{R[0]}</th>
            <th>{H[0]}</th>
            <th className={styles.right}>{B[0]}</th>
          </tr>
          <tr className={styles.bottom}>
            <th className={styles.left}>
              <img src={logos && logos[3].logoUrl} className={styles.logo} />
            </th>
            <th>{scores[1]}</th>
            <th>{scores[3]}</th>
            <th>{scores[5]}</th>
            <th>{scores[7]}</th>
            <th>{scores[9]}</th>
            <th>{scores[11]}</th>
            <th>{scores[13]}</th>
            <th>{scores[15]}</th>
            <th>{scores[17]}</th>
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
