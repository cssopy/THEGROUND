import styles from "./css/Result.module.css";
import { Row, Col } from "react-bootstrap";
import ScoreBoard from "./components/ScoreBoard";

const Result = () => {
  const isWin = true;

  return (
    <>
      <div
        className={`${styles.bg} d-flex justify-content-center align-items-center`}
      >
        <div className={styles.box}>
          <Row>Win</Row>
          <Row>Score</Row>
          <Row>
            <ScoreBoard
              scores={[0, 0, 1, 2, 1, 0, 0, 4, 0, 0, 1]}
              R={[1, 3]}
              H={[0, 1]}
              B={[2, 1]}
            />
          </Row>
          <Row>pitchers</Row>
          <Row>log</Row>
          <Row>buttons</Row>
        </div>
      </div>
    </>
  );
};

export default Result;
