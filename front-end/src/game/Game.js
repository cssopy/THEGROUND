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
import Hit from "../assets/sounds/hit.mp3";
import Swing from "../assets/sounds/swing.mp3";
import Throw from "../assets/sounds/throw.mp3";
import ReactHowler from "react-howler";

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
  // 11. 선수 교체 api

  // 구현 미완료
  // 7. 지금까지의 중계 기록 및 점수, 홈런, 볼 정보 등
  // 9. setInterval로 게임 진행

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const matchIdx = useSelector((state) => state.test.nextMatchIndex);
  const match = useSelector((state) => state.test.matches)[
    matchIdx ? matchIdx : 0
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [skipOpen, setSkipOpen] = useState(false);
  const [tutorial, setTutorial] = useState(
    !(user.userWin + user.userLose + user.userDraw)
  );

  const [logs, setLogs] = useState([
    "게임 시작!",
    "김타자 아웃",
    "스트라이크",
    "투수 교체: 원태인",
  ]);
  const [scores, setScores] = useState([0, 0, 1, 2, 1, 0, 0, 4, 0, 0, 1]);
  const [RHB, setRHB] = useState([
    [1, 3],
    [0, 1],
    [2, 1],
  ]);
  const [runners, setRunners] = useState(["o", "o", "x"]);
  const [balls, setBalls] = useState([
    { type: "strike", x: 10, y: 10 },
    { type: "ball", x: 120, y: 50 },
  ]);
  const [ballCounts, setBallCounts] = useState([1, 1, 2]);
  const [velocity, setVelocity] = useState(["포크", 130]);
  const [isPlaying, setIsPlaying] = useState(0);
  const [play, setPlay] = useState([false, false, false]);
  const [check, setCheck] = useState(false);

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

  const game = [
    ["투구", "N"],
    ["구속", ["직구", 140]],
    ["로그", "볼"],
    ["BSO", 0],
    ["구종", { type: "ball", x: -10, y: 0 }],
    ["투구", "S"],
    ["구속", ["포크", 120]],
    ["로그", "스트라이크 헛스윙!"],
    ["BSO", 1],
    ["구종", { type: "strike", x: 30, y: 30 }],
    ["투구", "H"],
    ["구속", ["포크", 130]],
    ["로그", "강시몬 2루타!"],
    ["주자", ["o", "x", "o"]],
    ["H", 0],
    ["점수", 1],
    ["BSO", "R"],
  ];

  const gameLogic = () => {
    console.log(isPlaying);
    if (tutorial || check) {
      return;
    } else {
      if (isPlaying >= game.length) return;
      let toDo = game[isPlaying][0];
      setCheck(true);
      setTimeout(() => {
        setCheck(false);
      }, 4000);
      setIsPlaying((prev) => prev + 1);
      if (toDo === "투구") {
        setTimeout(() => {
          setPlay([true, false, false]);
        }, 1000);
        if (game[isPlaying][1] === "S") {
          setTimeout(() => {
            setPlay([false, false, true]);
          }, 3000);
        } else if (game[isPlaying][1] === "H") {
          setTimeout(() => {
            setPlay([false, true, false]);
          }, 3000);
        }
        setTimeout(() => {
          setPlay([false, false, false]);
        }, 4000);
      } else if (toDo === "구속") {
        setVelocity(game[isPlaying][1]);
      } else if (toDo === "BSO") {
        setBallCounts((prev) => {
          if (game[isPlaying][1] === "R") {
            return [];
          }
          const counts = prev;
          counts[game[isPlaying][1]] += 1;
          return counts;
        });
      } else if (toDo === "주자") {
        setRunners(game[isPlaying][1]);
      } else if (toDo === "H") {
        setRHB((prev) => {
          const temp = prev;
          if (game[isPlaying][1] === 0) {
            temp[1][0] = temp[1][0] + 1;
          } else if (game[isPlaying][1] === 1) {
            temp[1][1] = temp[1][1] + 1;
          }
          return temp;
        });
      } else if (toDo === "점수") {
        setScores((prev) => {
          const score = prev;
          score[scores.length - 1] += game[isPlaying][1];
          return score;
        });
      } else if (toDo === "구종") {
        setBalls((prev) => [...prev, game[isPlaying][1]]);
      } else if (toDo === "로그") {
        setLogs((prev) => [...prev, game[isPlaying][1]]);
      }
    }
  };

  useEffect(() => {
    gameLogic();
  });

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
                <Field runners={runners} />
              </Row>
              <Row className={styles.zero}>
                <Col className={styles.zero}>
                  <StrikeZone balls={balls} />
                </Col>
                <Col className={styles.zero}>
                  <Row className={styles.zero}>
                    <BallVelocity velocity={velocity[1]} type={velocity[0]} />
                  </Row>
                  <Row className={styles.zero}>
                    <BallCount ballCounts={ballCounts} />
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className={styles.zero}>
              <Row className={`${styles.zero} mb-2`}>
                <ScoreBoard
                  scores={scores}
                  R={RHB[0]}
                  H={RHB[1]}
                  B={RHB[2]}
                  homeLogo={match.home.teamLogoUrl}
                  awayLogo={match.away.teamLogoUrl}
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
                        name: "강시몬",
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
                  <GameLogs logs={logs} />
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
      <ReactHowler src={Throw} playing={play[0]} loop={false} volume={0.5} />
      <ReactHowler src={Hit} playing={play[1]} loop={false} volume={0.5} />
      <ReactHowler src={Swing} playing={play[2]} loop={false} volume={0.5} />
    </>
  );
};

export default Game;
