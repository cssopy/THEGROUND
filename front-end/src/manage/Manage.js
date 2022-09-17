import { Col, Container, Row } from "react-bootstrap";
import style from "./css/Manage.module.css";

import BatterList from "./components/BatterList";

const Manage = () => {
  return (
    <>
      <Container fluid className={style["background"]}>
        <Container className={style["clubHead"]}>구단 관리</Container>
        <Container className={style["clubBody"]}>
          <Row className={style["clubBody-row1"]}>
            <Col className={style["clubBody-row1-col1"]}>
              <Row className={style["clubBody-row1-col1-row"]}>
                <Container className={style["batterHead"]}>보유 타자</Container>
                <Container className={style["batterBody"]}>
                  <BatterList></BatterList>
                </Container>
              </Row>
            </Col>
            <Col className={style["clubBody-row1-col2"]}>
              <Row className={style["clubBody-row1-col2-row1"]}>
                <Container className={style["pircherHead"]}>
                  선발 로테이션
                </Container>
                <Container className={style["pircherBody"]}></Container>
              </Row>
              <Row className={style["clubBody-row1-col2-row2"]}>
                <Container className={style["pircherHead"]}>
                  구원 투수
                </Container>
                <Container className={style["pircherBody"]}></Container>
              </Row>
            </Col>
          </Row>
          <Row className={style["clubBody-row2"]}>
            <div className={style["clubBody-row2-div"]}>
              <div
                className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst1"]}`}
              >
                BACK
              </div>
              &nbsp;&nbsp;
              <div
                className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst3"]}`}
              >
                이적시장
              </div>
              &nbsp;&nbsp;
              <div
                className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst4"]}`}
              >
                RESET
              </div>
              &nbsp;&nbsp;
              <div
                className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst5"]}`}
              >
                SAVE
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Manage;
