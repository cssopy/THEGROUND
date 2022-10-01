import { Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

import img from "../../assets/etc/ground2.png";

import style from "../css/UserInfoModal.module.css";

const UserInfoModal = (props) => {
  return (
    <>
      <Row className={style["modal"]}>
        <Row className={style["logo"]}>
          <img
            src={img}
            style={{ "-webkit-user-drag": "none" }}
            alt="logo"
          ></img>
        </Row>
        <Row>
          <BsPencilSquare
            className={style["logoBtn"]}
            onClick={() => {
              alert("로고 변경");
            }}
          />
        </Row>
        <Row>
          <Col>
            <Row className={style["level"]}>Lv.3</Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Row className={style["win"]}>
                  <div>W12</div>
                </Row>
              </Col>
              <Col>
                <Row className={style["lose"]}>
                  <div>L1</div>
                </Row>
              </Col>
              <Col>
                <Row className={style["draw"]}>
                  <div>D2</div>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className={style["nickname-left"]}>
              <div>구단명</div>
            </Row>
          </Col>
          <Col>
            <Row className={style["nickname-right"]}>
              <input></input>
            </Row>
          </Col>
        </Row>
        <Row style={{ margin: "0", padding: "0" }}>
          <Col>
            <Row className={style["btn-left"]}>
              <div
                onClick={() => {
                  alert("SAVE");
                }}
              >
                SAVE
              </div>
            </Row>
          </Col>
          <Col>
            <Row className={style["btn-right"]}>
              <div
                onClick={() => {
                  props.setModalIsOpen(false);
                }}
              >
                BACK
              </div>
            </Row>
          </Col>
        </Row>
        <Row className={style["deleteAC"]}>
          <div
            onClick={() => {
              alert("회원탈퇴");
            }}
          >
            회원탈퇴
          </div>
        </Row>
      </Row>
    </>
  );
};

export default UserInfoModal;
