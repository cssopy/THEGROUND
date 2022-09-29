import styles from "../../css/matchLineup/MatchLineup.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const MatchLineup = () => {
  const logos = useSelector((state) => state.logo.logos);
  const homeHitters = [
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
  ];
  const homePitcher = { pitcherName: "김투수", pitArm: "R" };
  const awayHitters = [
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
    {
      hitterName: "우타",
      batArm: "R",
      opb: 0.123,
    },
    {
      hitterName: "좌타",
      batArm: "L",
      opb: 0.123,
    },
  ];
  const awayPitcher = { pitcherName: "김투수", pitArm: "L" };
  const homeName = "기아 타이거스";
  const awayName = "삼성 라이온즈";

  const startGame = () => {
    alert("게임 시작하는 버튼");
  };

  return (
    <>
      <div
        className={`${styles.bg} d-flex justify-content-center align-items-center`}
      >
        <div className={styles.box}>
          <Row className={`${styles.zero}`}>
            <Col className={`${styles.zero}`} style={{ height: "100%" }}>
              <Row className={`${styles.zero} ${styles.where}`}>HOME</Row>
              <Row className={`${styles.zero}`}>
                <div className="d-flex justify-content-center mt-4">
                  <img
                    className={styles.logo}
                    src={logos[2] && logos[2].logoUrl}
                    alt="homeLogo"
                  />
                  <div className={styles.name}>{homeName}</div>
                </div>
              </Row>
              <Row className={`${styles.zero} ${styles.lineup}`}>
                <div className={styles.title}>라인업</div>
                {homeHitters &&
                  homeHitters.map((hit, idx) => {
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
                          {hit.opb}
                        </div>
                      </div>
                    );
                  })}
                {homePitcher && (
                  <div className={styles.row}>
                    <div style={{ width: "40px", marginRight: "5px" }}>SP</div>
                    <div style={{ width: "200px", textAlign: "start" }}>
                      <div className={styles[`${homePitcher.pitArm}-pitcher`]}>
                        {homePitcher.pitArm === "L" ? "좌완" : "우완"}
                      </div>
                      <span>{homePitcher.pitcherName}</span>
                    </div>
                    <div style={{ width: "20px", marginLeft: "5px" }}></div>
                  </div>
                )}
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
                    src={logos[0] && logos[0].logoUrl}
                    alt="awayLogo"
                  />
                  <span className={styles.name}>{awayName}</span>
                </div>
              </Row>
              <Row className={`${styles.zero} ${styles.lineup}`}>
                <div className={styles.title}>라인업</div>
                {awayHitters &&
                  awayHitters.map((hit, idx) => {
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
                          {hit.opb}
                        </div>
                      </div>
                    );
                  })}
                {awayPitcher && (
                  <div className={styles.row}>
                    <div style={{ width: "40px", marginRight: "5px" }}>SP</div>
                    <div style={{ width: "200px", textAlign: "start" }}>
                      <div className={styles[`${awayPitcher.pitArm}-pitcher`]}>
                        {awayPitcher.pitArm === "L" ? "좌완" : "우완"}
                      </div>
                      <span>{awayPitcher.pitcherName}</span>
                    </div>
                    <div style={{ width: "20px", marginLeft: "5px" }}></div>
                  </div>
                )}
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
        </div>
      </div>
    </>
  );
};

export default MatchLineup;
