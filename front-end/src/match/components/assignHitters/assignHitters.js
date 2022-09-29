import { Col, Row } from "react-bootstrap";
import Hitter from "./Hitter";

import { AiFillPlayCircle } from "react-icons/ai";

import style from "../../css/assignHitters/AssignHitters.module.css";

const AssignHitters = () => {
  const hitters = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { hitterSeq: 1, hitterName: "박찬호", hitArm: "L" },
  ];

  return (
    <>
      <Row className={style["background"]}>
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <Row className={style["mainHead"]}>
            <div>타선 지정</div>
          </Row>
          <Row className={style["mainBody"]}>
            <Col>
              <Row className={style["playerHead"]}>
                <div>보유 선수</div>
              </Row>
              <Row className={style["playerBody"]}>보유 선수 바디</Row>
            </Col>
            <Col>
              <Row>
                <Row className={style["oppoPitcherHead"]}>
                  <div>상대의 선발 투수</div>
                </Row>
                <Row className={style["oppoPitcherBody"]}>
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
              <Row>
                <Row className={style["hitterHead"]}>
                  <div>선발 타자</div>
                </Row>
                <Row className={style["hitterBody"]}>
                  {hitters.map((hitter) => {
                    return <Hitter hitter={hitter}></Hitter>;
                  })}
                </Row>
              </Row>
              <Row
                className={style["btn"]}
                onClick={() => {
                  alert(hitters.length);
                }}
              >
                <div>
                  NEXT <AiFillPlayCircle className={style["start"]} />
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default AssignHitters;
