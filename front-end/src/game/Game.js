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
  // 1. Field => runners(현재 출루 상황)

  // 2. Hitter => hitter(name, position, log)
  // 3. BallCount => BallCounts(세 자리의 배열)

  // 4. StrikeZone => balls(공 배열 정보)

  // 5. BallVelocity => velocity (투구 속도)
  // 6. Pitchers => 양 투수의 name, balls, threes 및 현재 이닝 정보 now

  // 7. 지금까지의 중계 기록 및 점수, 홈런, 볼 정보 등
  // 8. ScoreBoard => 현재까지의 기록, 로고

  return (
    <>
      <img src={bgimg} alt="bg" className={styles.bg} />
      <div
        className={`${styles.box} mx-auto justify-content-center align-items-center`}
      >
        <Row>
          <Col>
            <Row>
              <Field runners={undefined} />
            </Row>
            <Row>
              <Col>
                <StrikeZone balls={[{type: 'strike', x:10, y:10}, {type: 'ball', x:100, y:100}]}/>
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
            <Row className="mb-2">
              <ScoreBoard scores={[0,0,1,2,1,0,0,4,0,0]} R={[1, 3]} H={[0, 1]} B={[2, 1]} />
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
