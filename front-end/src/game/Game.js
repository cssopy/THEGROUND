import { useEffect, useState } from "react";
import styles from "./css/Game.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Field from "./components/main/Field";
import StrikeZone from "./components/main/StrikeZone";
import BallVelocity from "./components/main/BallVelocity";
import BallCount from "./components/main/BallCount";
import ScoreBoard from "./components/main/ScoreBoard";
import Pitchers from "./components/main/CurrentPitchers";
import Hitter from "./components/main/CurrentHitter";
import GameLogs from "./components/main/GameLogs";
import ChangePlayer from "./components/changePlayer/ChangePlayer";
import Tutorial from "./components/tutorial/Tutorial";
import { useSelector, useDispatch } from "react-redux";
import { configActions } from "../redux/slice/configSlice";
import axios from "axios";
import BackApi from "../api/BackApi";

const Game = () => {
  // 구현 완료
  // 1. Field => runners(현재 출루 상황)
  // 2. Hitter => hitter(name, position, log)
  // 3. BallCount => BallCounts(세 자리의 배열)
  // 4. StrikeZone => balls(공 배열 정보)
  // 5. BallVelocity => velocity (투구 속도)
  // 6. Pitchers => 양 투수의 name, balls, threes 및 현재 이닝 정보 now
  // 8. ScoreBoard => 현재까지의 기록, 로고
  // 10. Skip 구현

  // 구현 미완료
  // 7. 지금까지의 중계 기록 및 점수, 홈런, 볼 정보 등
  // 9. setInterval로 게임 진행
  // 11. 선수 교체 api

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [modalOpen, setModalOpen] = useState(false);
  const [skipOpen, setSkipOpen] = useState(false);
  const [tutorial, setTutorial] = useState(
    !(user.userWin + user.userLose + user.userDraw)
  );

  const closeTutorial = () => {
    setTutorial(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const skipModal = () => {
    setSkipOpen((prev) => !prev);
  };
  const skipGame = () => {
    dispatch(configActions.setIsLoading(true));
    dispatch(configActions.setUrl("result"));
  };

  useEffect(() => {
    dispatch(configActions.setPersentage(100));
    // axios
    //   .get(BackApi.game.play, {
    //     headers: {
    //       "X-ACCESS-TOKEN": user.jwt,
    //     },
    //   })
    //   .then((res) => console.log());
  }, []);

  return (
    <>
      <div
        className={`${styles.bg} d-flex justify-content-center align-items-center`}
      >
        <div className={`${styles.box}`}>
          <Row className={styles.zero}>
            <Col className={styles.zero}>
              <Row className={styles.zero}>
                <Field runners={["o", "o", "x"]} />
              </Row>
              <Row className={styles.zero}>
                <Col className={styles.zero}>
                  <StrikeZone
                    balls={[
                      { type: "strike", x: 10, y: 10 },
                      { type: "ball", x: 50, y: 50 },
                    ]}
                  />
                </Col>
                <Col className={styles.zero}>
                  <Row className={styles.zero}>
                    <BallVelocity velocity={130} type={"포크"} />
                  </Row>
                  <Row className={styles.zero}>
                    <BallCount ballCounts={[3, 1, 2]} />
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className={styles.zero}>
              <Row className={`${styles.zero} mb-2`}>
                <ScoreBoard
                  scores={[0, 0, 1, 2, 1, 0, 0, 4, 0, 0, 1]}
                  R={[1, 3]}
                  H={[0, 1]}
                  B={[2, 1]}
                />
              </Row>
              <Row className={styles.zero}>
                <Col className={styles.zero}>
                  <Row className={styles.zero}>
                    <Pitchers
                      pitchers={[
                        { name: "류현진", balls: 25, threes: 3 },
                        { name: "원태인", balls: 14, threes: 0 },
                      ]}
                      now={1}
                    />
                  </Row>
                  <Row className={styles.zero}>
                    <Hitter
                      hitter={{
                        name: "류현진",
                        position: ["좌타", "외야수"],
                        log: ["삼진", "땅볼"],
                      }}
                    />
                  </Row>
                  <Row className={styles.zero}>
                    <Col className={styles.zero}>
                      <Button
                        className={`${styles.btn} ${styles.change}`}
                        variant="success"
                        onClick={openModal}
                      >
                        선수 교체
                      </Button>
                    </Col>
                    <Col className={styles.zero}>
                      <Button
                        className={`${styles.btn} ${styles.skip}`}
                        variant="danger"
                        onClick={skipModal}
                      >
                        SKIP
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className={styles.zero}>
                  <GameLogs
                    logs={[
                      111, 222, 333, 444, 555, 666, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                      10, 11, 12, 13, 14, 15,
                    ]}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <ChangePlayer
            open={modalOpen}
            close={closeModal}
            header="Modal heading"
          />
        </div>
        {tutorial && <Tutorial closeTutorial={closeTutorial} />}
      </div>
      <div
        className={`${styles.modalBg} ${skipOpen ? styles.openBg : ""}`}
        onClick={skipModal}
      >
        <div
          className={`${styles.modal} ${skipOpen ? styles.openModal : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <p className={`${styles.title}`}>게임을 스킵하시겠습니까?</p>
          <div className={`${styles.button} `}>
            <div className={styles.continueGame} onClick={skipModal}>
              CANCLE
            </div>
            <div className={styles.skipGame} onClick={skipGame}>
              SKIP
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
