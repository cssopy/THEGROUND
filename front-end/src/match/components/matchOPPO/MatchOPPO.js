import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import style from "../../css/matchOPPO/MatchOPPO.module.css";

const MatchOPPO = (props) => {
  const { brief, players, setPageActive } = props;

  useEffect(() => {
    setTimeout(() => {
      setPageActive([false, true, false]);
    }, 7000);
  }, []);

  return (
    <>
      <Row className={style["background"]}>
        <Row className={style["contentBody"]}>
          <Row>
            <Col>
              <Row className={style["home"]}>
                <div>HOME</div>
              </Row>
            </Col>
            <Col>
              <Row className={style["away"]}>
                <div>AWAY</div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["homeLogo"]}>
                <img
                  src={brief.home.teamLogoUrl}
                  style={{ WebkitUserDrag: "none" }}
                  alt="homelogo"
                ></img>
              </Row>
            </Col>
            <Col>
              <Row className={style["vs"]}>
                <div>VS</div>
              </Row>
            </Col>
            <Col>
              <Row className={style["awayLogo"]}>
                <img
                  src={brief.away.teamLogoUrl}
                  style={{ WebkitUserDrag: "none" }}
                  alt="awaylogo"
                ></img>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["homeName"]}>
                <div>{brief.home.teamName}</div>
              </Row>
            </Col>
            <Col>
              <Row className={style["awayName"]}>
                <div>{brief.away.teamName}</div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["record"]}>
                <div>
                  <span className={style["record-item1"]}>
                    W{brief.home.teamWin}
                  </span>
                  <span className={style["record-item2"]}>
                    L{brief.home.teamLose}
                  </span>
                  <span className={style["record-item3"]}>
                    D{brief.home.teamDraw}
                  </span>
                </div>
              </Row>
            </Col>
            <Col>
              <Row className={style["record"]}>
                <div>
                  <span className={style["record-item1"]}>
                    W{brief.away.teamWin}
                  </span>
                  <span className={style["record-item2"]}>
                    L{brief.away.teamLose}
                  </span>
                  <span className={style["record-item3"]}>
                    D{brief.away.teamDraw}
                  </span>
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Row className={style["pitcherHead"]}>
                  <div>선발 투수</div>
                </Row>
                <Row className={style["pitcherBody"]}>
                  <div>
                    <div
                      className={style["stand"]}
                      style={{ backgroundColor: true ? "#bf0d3e" : "#0d5fbf" }}
                    >
                      좌완
                    </div>
                    {brief.home.startingPitcher}
                  </div>
                </Row>
              </Row>
            </Col>
            <Col>
              <Row>
                <Row className={style["pitcherHead"]}>
                  <div>선발 투수</div>
                </Row>
                <Row className={style["pitcherBody"]}>
                  <div>
                    <div
                      className={style["stand"]}
                      style={{ backgroundColor: false ? "#bf0d3e" : "#0d5fbf" }}
                    >
                      우완
                    </div>
                    {brief.away.startingPitcher}
                  </div>
                </Row>
              </Row>
            </Col>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default MatchOPPO;
