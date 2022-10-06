import styles from "./css/Result.module.css";
import { Row } from "react-bootstrap";
import ScoreBoard from "./components/ScoreBoard";
import { useSelector, useDispatch } from "react-redux";
import ResultChart from "./components/ResultChart";
import Scores from "./components/Scores";
import ResultLogs from "./components/ResultLogs";
import { useEffect, useState } from "react";
import { configActions } from "../redux/slice/configSlice";
import axios from "axios";
import BackApi from "../api/BackApi";
import { userActions } from "../redux/slice/userSlice";
import { testActions } from "../redux/slice/testSlice";

const Result = () => {
  const dispatch = useDispatch();
  const logos = useSelector((state) => state.logo.logos);
  const user = useSelector((state) => state.user.user);
  const [gameLog, setGameLog] = useState([false, false]);
  const matchIdx = useSelector((state) => state.test.nextMatchIndex);
  const match = useSelector((state) => state.test.matches)[
    matchIdx ? matchIdx : 0
  ];
  const scores = [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 0, 4, 0, 0, 1];
  const R = [7, 3];
  const H = [0, 1];
  const B = [2, 1];
  const isWin = R[1] > R[0] ? 2 : R[1] === R[0] ? 1 : 0; // 무승부까지 로직 넣기
  const logs = [
    111, 222, 333, 444, 555, 666, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15,
  ];

  const saveGame = () => {
    dispatch(userActions.updateLogs([1, 0, 0]));
    dispatch(testActions.setNextMatchIndex(1));
  };
  const restartGame = () => {
    saveGame();
    dispatch(configActions.setIsLoading(true));
    dispatch(configActions.setUrl("match"));
  };
  const quitGame = () => {
    saveGame();
    dispatch(configActions.setIsLoading(true));
    dispatch(configActions.setPersentage(50));
    dispatch(configActions.setUrl("main"));
  };
  const openLogs = () => {
    setGameLog([true, true]);
  };
  const closeLogs = () => {
    setGameLog((prev) => [false, prev[1]]);
    setTimeout(() => setGameLog([false, false]), 200);
  };

  useEffect(() => {
    // axios.get(
    //   BackApi.game.skip,
    //   {
    //     accessToken: data.access_token,
    //     loginType,
    //   },
    //   {
    //     headers: {
    //       headers: { "X-ACCESS-TOKEN": user.jwt },
    //     },
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    dispatch(configActions.setPersentage(100));
  }, []);

  return (
    <>
      <div
        className={`${styles.bg} d-flex justify-content-center align-items-center`}
      >
        <div className={styles.box}>
          {isWin === 0 && (
            <Row
              className={`${styles.zero} justify-content-center ${styles.win}`}
            >
              WIN
            </Row>
          )}
          {isWin === 1 && (
            <Row
              className={`${styles.zero} justify-content-center ${styles.draw}`}
            >
              DRAW
            </Row>
          )}
          {isWin === 2 && (
            <Row
              className={`${styles.zero} justify-content-center ${styles.lose}`}
            >
              LOSE
            </Row>
          )}
          <Row className={`${styles.zero} justify-content-center`}>
            <Scores home={match.home} away={match.away} R={R} />
          </Row>
          <Row className={`${styles.zero} justify-content-center`}>
            <ScoreBoard
              scores={scores}
              R={R}
              H={H}
              B={B}
              gameLog={gameLog}
              homeLogo={match.home.teamLogoUrl}
              awayLogo={match.away.teamLogoUrl}
            />
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
          ></Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart val={[1, 5]}>안타</ResultChart>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart val={[4, 2]}>홈런</ResultChart>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart val={[10, 7]}>삼진</ResultChart>
          </Row>
          <Row
            className={`${styles.zero} ${
              gameLog[1] ? styles.hide : ""
            } justify-content-center`}
          >
            <ResultChart val={[5, 8]}>볼넷</ResultChart>
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
