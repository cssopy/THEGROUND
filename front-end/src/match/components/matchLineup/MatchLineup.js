import styles from "../../css/matchLineup/MatchLineup.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { configActions } from "../../../redux/slice/configSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import BackApi from "../../../api/BackApi";
import { testActions } from "../../../redux/slice/testSlice";

const MatchLineup = () => {
  const logos = useSelector((state) => state.logo.logos);
  const jwt = useSelector((state) => state.user.user.jwt);
  const players = useSelector((state) => state.player.players);
  const lineUp = useSelector((state) => state.test.lineUp);
  // const [lineUp, setLineUp] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get(BackApi.game.lineUp, {
    //     headers: {
    //       "X-ACCESS-TOKEN": jwt,
    //     },
    //   })
    //   .then((res) => setLineUp(res.data))
    //   .catch((err) => console.error(err));
    const testLineUp = {
      home: {
        teamName: "",
        teamLogoUrl: "",
        lineup: [
          {
            order: 1,
            playerSeq: 1,
          },
          {
            order: 2,
            playerSeq: 2,
          },
          {
            order: 3,
            playerSeq: 3,
          },
          {
            order: 4,
            playerSeq: 4,
          },
          {
            order: 5,
            playerSeq: 5,
          },
          {
            order: 6,
            playerSeq: 6,
          },
          {
            order: 7,
            playerSeq: 7,
          },
          {
            order: 8,
            playerSeq: 8,
          },
          {
            order: 9,
            playerSeq: 9,
          },
          {
            order: 10,
            playerSeq: 2,
          },
        ],
      },
      away: {
        teamName: "",
        teamLogoUrl: "",
        lineup: [
          {
            order: 1,
            playerSeq: 9,
          },
          {
            order: 2,
            playerSeq: 8,
          },
          {
            order: 3,
            playerSeq: 7,
          },
          {
            order: 4,
            playerSeq: 6,
          },
          {
            order: 5,
            playerSeq: 5,
          },
          {
            order: 6,
            playerSeq: 4,
          },
          {
            order: 7,
            playerSeq: 3,
          },
          {
            order: 8,
            playerSeq: 2,
          },
          {
            order: 9,
            playerSeq: 1,
          },
          {
            order: 10,
            playerSeq: 1,
          },
        ],
      },
    };
    dispatch(testActions.setLineUp(testLineUp));
  }, []);

  const startGame = () => {
    dispatch(configActions.setIsLoading(true));
    dispatch(configActions.setUrl("game"));
  };

  return (
    <>
      <div
        className={`${styles.bg} d-flex justify-content-center align-items-center`}
      >
        <div className={styles.box}>
          {!!lineUp.home && !!players ? (
            <>
              <Row className={`${styles.zero}`}>
                <Col className={`${styles.zero}`} style={{ height: "100%" }}>
                  <Row className={`${styles.zero} ${styles.where}`}>HOME</Row>
                  <Row className={`${styles.zero}`}>
                    <div className="d-flex justify-content-center mt-4">
                      <img
                        className={styles.logo}
                        src={lineUp.home.teamLogoUrl}
                        alt="homeLogo"
                      />
                      <span className={styles.name}>
                        {lineUp.home.teamName}
                      </span>
                    </div>
                  </Row>
                  <Row className={`${styles.zero} ${styles.lineup}`}>
                    <div className={styles.title}>라인업</div>
                    {lineUp.home.lineup.map((line, idx) => {
                      if (idx === 9) return;
                      let hit = players.hitter.filter(
                        (hitter) => hitter.hitterSeq === line.playerSeq
                      )[0];
                      return (
                        <div key={idx} className={styles.row}>
                          <div style={{ width: "40px", marginRight: "5px" }}>
                            {idx + 1}
                          </div>
                          <div style={{ width: "200px", textAlign: "start" }}>
                            <div className={styles[`${hit.batArm}-hitter`]}>
                              {hit.batArm === "L" ? "좌타" : "우타"}
                            </div>
                            <span>{hit.hitterName}</span>
                          </div>
                          <div style={{ width: "20px", marginLeft: "5px" }}>
                            {hit.avg}
                          </div>
                        </div>
                      );
                    })}
                    {players.pitcher
                      .filter(
                        (pitcher) =>
                          pitcher.pitcherSeq === lineUp.home.lineup[9].playerSeq
                      )
                      .map((homePitcher) => {
                        return (
                          <div className={styles.row}>
                            <div style={{ width: "40px", marginRight: "5px" }}>
                              SP
                            </div>
                            <div style={{ width: "200px", textAlign: "start" }}>
                              <div
                                className={
                                  styles[`${homePitcher.pitArm}-pitcher`]
                                }
                              >
                                {homePitcher.pitArm === "L" ? "좌완" : "우완"}
                              </div>
                              <span>{homePitcher.pitcherName}</span>
                            </div>
                            <div
                              style={{ width: "20px", marginLeft: "5px" }}
                            ></div>
                          </div>
                        );
                      })}
                  </Row>
                </Col>
                <Col
                  lg={1}
                  md={1}
                  sm={1}
                  xl={1}
                  xs={1}
                  xxl={1}
                  className={styles.vs}
                >
                  VS
                </Col>
                <Col className={`${styles.zero}`} style={{ height: "100%" }}>
                  <Row className={`${styles.zero} ${styles.where}`}>AWAY</Row>
                  <Row className={`${styles.zero}`}>
                    <div className="d-flex justify-content-center mt-4">
                      <img
                        className={styles.logo}
                        src={lineUp.away.teamLogoUrl}
                        alt="awayLogo"
                      />
                      <span className={styles.name}>
                        {lineUp.away.teamName}
                      </span>
                    </div>
                  </Row>
                  <Row className={`${styles.zero} ${styles.lineup}`}>
                    <div className={styles.title}>라인업</div>
                    {lineUp.away.lineup.map((line, idx) => {
                      if (idx === 9) return;
                      let hit = players.hitter.filter(
                        (hitter) => hitter.hitterSeq === line.playerSeq
                      )[0];
                      return (
                        <div key={idx} className={styles.row}>
                          <div style={{ width: "40px", marginRight: "5px" }}>
                            {idx + 1}
                          </div>
                          <div style={{ width: "200px", textAlign: "start" }}>
                            <div className={styles[`${hit.batArm}-hitter`]}>
                              {hit.batArm === "L" ? "좌타" : "우타"}
                            </div>
                            <span>{hit.hitterName}</span>
                          </div>
                          <div style={{ width: "20px", marginLeft: "5px" }}>
                            {hit.avg}
                          </div>
                        </div>
                      );
                    })}
                    {players.pitcher
                      .filter(
                        (pitcher) =>
                          pitcher.pitcherSeq === lineUp.away.lineup[9].playerSeq
                      )
                      .map((homePitcher) => {
                        return (
                          <div className={styles.row}>
                            <div style={{ width: "40px", marginRight: "5px" }}>
                              SP
                            </div>
                            <div style={{ width: "200px", textAlign: "start" }}>
                              <div
                                className={
                                  styles[`${homePitcher.pitArm}-pitcher`]
                                }
                              >
                                {homePitcher.pitArm === "L" ? "좌완" : "우완"}
                              </div>
                              <span>{homePitcher.pitcherName}</span>
                            </div>
                            <div
                              style={{ width: "20px", marginLeft: "5px" }}
                            ></div>
                          </div>
                        );
                      })}
                  </Row>
                </Col>
              </Row>
              <div className="d-flex justify-content-center mt-4">
                <Button
                  variant="success"
                  className={styles.Button}
                  onClick={startGame}
                >
                  START
                </Button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default MatchLineup;
