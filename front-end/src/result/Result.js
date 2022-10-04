import styles from "./css/Result.module.css";
import { Row } from "react-bootstrap";
import ScoreBoard from "./components/ScoreBoard";
import { useSelector } from "react-redux";
import ResultChart from "./components/ResultChart";
import Scores from "./components/Scores";
import PitcherResult from "./components/PitcherResult";
import ResultLogs from "./components/ResultLogs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Result = () => {
  const navigator = useNavigate();
  const logos = useSelector((state) => state.logo.logos);
  const [gameLog, setGameLog] = useState([false, false]);

  const isWin = false;
  const home = { userTeamname: "삼성 라이온즈", logo: logos[0] };
  const away = { userTeamname: "기아 타이거즈", logo: logos[1] };
  const scores = [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1];
  const R = [3, 0];
  const H = [0, 1];
  const B = [2, 1];
  const homePitcher = { pitcherName: "김투수", pitArm: "R" };
  const awayPitcher = { pitcherName: "김투수", pitArm: "L" };
  const logs = [
    111, 222, 333, 444, 555, 666, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15,
  ];

  const restartGame = () => {
    navigator("/game");
  };
  const quitGame = () => {
    navigator("/");
  };
  const openLogs = () => {
    setGameLog((prev) => [true, true]);
  };
  const closeLogs = () => {
    setGameLog((prev) => [false, prev[1]]);
    setTimeout(() => setGameLog((prev) => [false, false]), 200);
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
            <ScoreBoard scores={scores} R={R} H={H} B={B} gameLog={gameLog} />
            <ResultLogs logs={logs} gameLog={gameLog} />
            <div className={`${styles.toggle} ${styles.zero}`}>
              <div
                className={`${styles.logs} ${
                  gameLog[0] ? styles.isOpened : styles.notOpened
                }`}
                onClick={openLogs}
              >
                중계 기록
              </div>
              <div
                className={`${styles.logs} ${
                  !gameLog[0] ? styles.isOpened : styles.notOpened
                }`}
                onClick={closeLogs}
              >
                경기 결과
              </div>
            </div>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <div className="d-flex justify-content-center">
              <PitcherResult res={R[0] > R[1]} pitcher={homePitcher} />
              <div style={{ width: "300px" }} />
              <PitcherResult res={R[0] < R[1]} pitcher={awayPitcher} />
            </div>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart>안타</ResultChart>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart>홈런</ResultChart>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart>삼진</ResultChart>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart>볼넷</ResultChart>
          </Row>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={restartGame}>
              다음 경기
            </button>
            <button className={styles.button} onClick={quitGame}>
              종료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
