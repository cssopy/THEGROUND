import styles from "./css/Result.module.css";
import { Row } from "react-bootstrap";
import ScoreBoard from "./components/ScoreBoard";
import { useSelector } from "react-redux";
import ResultChart from "./components/ResultChart";
import Scores from "./components/Scores";
import PitcherResult from "./components/PitcherResult";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigator = useNavigate();

  const isWin = false;
  const home = { userTeamname: "삼성 라이온즈" };
  const away = { userTeamname: "기아 타이거즈" };
  const scores = [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1];
  const R = [3, 0];
  const H = [0, 1];
  const B = [2, 1];
  const homePitcher = { pitcherName: "김투수", pitArm: "R" };
  const awayPitcher = { pitcherName: "김투수", pitArm: "L" };

  const restartGame = () => {
    navigator("/game");
  };
  const quitGame = () => {
    navigator("/");
  };

  return (
    <>
      <div
        className={`${styles.bg} d-flex justify-content-center align-items-center`}
      >
        <div className={styles.box}>
          <Row
            className={`${styles.zero} justify-content-center ${
              isWin ? styles.win : styles.lose
            }`}
          >
            {isWin ? "WIN" : "LOSE"}
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <Scores home={home} away={away} R={R} />
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <ScoreBoard scores={scores} R={R} H={H} B={B} />
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <div className="d-flex justify-content-center">
              <PitcherResult res={R[0] > R[1]} pitcher={homePitcher} />
              <div style={{ width: "300px" }} />
              <PitcherResult res={R[0] < R[1]} pitcher={awayPitcher} />
            </div>
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <ResultChart>안타</ResultChart>
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <ResultChart>홈런</ResultChart>
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <ResultChart>삼진</ResultChart>
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <ResultChart>볼넷</ResultChart>
          </Row>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={restartGame}>
              RESTART
            </button>
            <button className={styles.button} onClick={quitGame}>
              QUIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
