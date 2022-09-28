import { Col, Row } from "react-bootstrap";

import style from "../../css/assignHitters/AssignHitters.module.css";

const AssignHitters = () => {
  return (
    <>
      <Row className={style["background"]}>
        <div>
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
                  상대의 선발 투수 바디
                </Row>
              </Row>
              <Row>
                <Row className={style["hitterHead"]}>
                  <div>선발 타자</div>
                </Row>
                <Row className={style["hitterBody"]}>선발 타자 바디</Row>
              </Row>
              <Row>
                <div>OK</div>
              </Row>
            </Col>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default AssignHitters;
