import styles from "../../css/main/BallCount.module.css";
import { Row } from "react-bootstrap";

const BallCount = (props) => {
  // 전체 볼 카운트
  const { ballCounts } = props;

  // 볼 카운트 만큼 원을 추가
  const counting = (num, type) => {
    const result = [];
    for (let i = 0; i < num; i++) {
      result.push(
        <div className={`${styles[type]} ${styles.count}`} key={i}></div>
      );
    }
    return result;
  };

  return (
    <>
      <div className={styles.bso}>
        <Row className="align-items-end">
          <div className={`${styles.subtitle}`}>B</div>
          {counting(ballCounts[0], "ball")}
        </Row>
        <Row className="align-items-end">
          <div className={`${styles.subtitle}`}>S</div>
          {counting(ballCounts[1], "strike")}
        </Row>
        <Row className="align-items-end">
          <div className={`${styles.subtitle}`}>O</div>
          {counting(ballCounts[2], "out")}
        </Row>
      </div>
    </>
  );
};

export default BallCount;
