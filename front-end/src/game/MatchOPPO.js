import { Col, Row } from "react-bootstrap";

import style from "./css/matchOPPO/MatchOPPO.module.css";

import logo from "../assets/ground2.png";

const MatchOPPO = () => {
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
                <img src={logo} style={{ "-webkit-user-drag": "none" }}></img>
              </Row>
            </Col>
            <Col>
              <Row className={style["vs"]}>
                <div>VS</div>
              </Row>
            </Col>
            <Col>
              <Row className={style["awayLogo"]}>
                <img src={logo} style={{ "-webkit-user-drag": "none" }}></img>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["homeName"]}>
                <div>abcdeabcdeabcdeabcde</div>
              </Row>
            </Col>
            <Col>
              <Row className={style["awayName"]}>
                <div>어웨이팀이름입니다요</div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className={style["record"]}>
                <div>
                  <spna className={style["record-item1"]}>W12</spna>
                  <spna className={style["record-item2"]}>L2</spna>
                  <spna className={style["record-item3"]}>D4</spna>
                </div>
              </Row>
            </Col>
            <Col>
              <Row className={style["record"]}>
                <div>
                  <spna className={style["record-item1"]}>W12</spna>
                  <spna className={style["record-item2"]}>L2</spna>
                  <spna className={style["record-item3"]}>D4</spna>
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
                    류현진
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
                    아무고토 모르상
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
