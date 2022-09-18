import styles from "./css/Game.module.css";
import "./css/Game.css";
import bgimg from "../assets/background1.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Field from "./components/Field";
import StrikeZone from "./components/StrikeZone";
import BallVelocity from "./components/BallVelocity";
import BallCount from "./components/BallCount";
import ScoreBoard from "./components/ScoreBoard";
import Pitchers from "./components/Pitchers";
import Hitter from "./components/Hitters";
import GameLogs from "./components/GameLogs";

const Game = () => {
  // 필요한것
  // 1. 현재 출루 상황
  // 2. 현재 타자 이름 및 오늘 기록
  // 3. 현재 타자의 BSO 상황
  // 4. 현재 타자의
  // 5. 이번 투구의 구속
  // 6. 양 투수의 정보
  // 7. 지금까지의 중계 기록 및 점수, 홈런, 볼 정보 등

  return (
    <>
<<<<<<< HEAD
      <img src={bgimg} alt='bg' className={styles.bg}/>
      <div className={`${styles.box} mx-auto justify-content-center align-items-center`}>
=======
      <img src={bgimg} alt="bg" className={styles.bg} />
      <div className={`${styles.box} mx-auto`}>
>>>>>>> d2420cf524dcded3080016821029c1c390249d42
        <Row>
          <Col>
            <Row>
              <Field runners={undefined} />
            </Row>
            <Row>
              <Col>
                <StrikeZone />
              </Col>
              <Col>
                <Row>
                  <BallVelocity velocity={130} />
                </Row>
                <Row>
                  <BallCount ballCounts={[3, 1, 2]} />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="mb-4">
              <ScoreBoard scores={[1, 2, 3]} />
            </Row>
            <Row>
              <Col>
                <Row>
                  <Pitchers
                    pitchers={[
                      { name: "류현진", balls: 25, threes: 3 },
                      { name: "원태인", balls: 14, threes: 0 },
                    ]}
                    now={1}
                  />
                </Row>
                <Row>
                  <Hitter
                    hitter={{
                      name: "류현진",
                      position: ["좌타", "외야수"],
                      log: ["삼진", "땅볼"],
                    }}
                  />
                </Row>
                <Row>
                  <Col>
                    <Button
                      className={`${styles.btn} ${styles.change}`}
                      variant="success"
                    >
                      선수 교체
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className={`${styles.btn} ${styles.skip}`}
                      variant="danger"
                    >
                      SKIP
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <GameLogs logs={[]} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Game;
