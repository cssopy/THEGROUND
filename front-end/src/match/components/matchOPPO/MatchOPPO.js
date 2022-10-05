import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import style from "../../css/matchOPPO/MatchOPPO.module.css";

const MatchOPPO = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setPageActive([false, true, false]);
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
                  src={props.brief.home.teamLogoUrl}
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
                  src={props.brief.away.teamLogoUrl}
                  style={{ WebkitUserDrag: "none" }}
                  alt="awaylogo"
                ></img>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["homeName"]}>
                <div>{props.brief.home.teamName}</div>
              </Row>
            </Col>
            <Col>
              <Row className={style["awayName"]}>
                <div>{props.brief.away.teamName}</div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["record"]}>
                <div>
                  <span className={style["record-item1"]}>
                    W{props.brief.home.teamWin}
                  </span>
                  <span className={style["record-item2"]}>
                    L{props.brief.home.teamLose}
                  </span>
                  <span className={style["record-item3"]}>
                    D{props.brief.home.teamDraw}
                  </span>
                </div>
              </Row>
            </Col>
            <Col>
              <Row className={style["record"]}>
                <div>
                  <span className={style["record-item1"]}>
                    W{props.brief.away.teamWin}
                  </span>
                  <span className={style["record-item2"]}>
                    L{props.brief.away.teamLose}
                  </span>
                  <span className={style["record-item3"]}>
                    D{props.brief.away.teamDraw}
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
                    {props.brief.home.startingPitcher}
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
                    {props.brief.away.startingPitcher}
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
