import { useState, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

import axios from "axios";

import BackApi from "../../api/BackApi";

import style from "../css/UserInfoModal.module.css";

const UserInfoModal = (props) => {
  const { user, logos } = props;

  const [userTeamName, setUserTeamName] = useState(user.userTeamname);

  const onChange = useCallback((e) => {
    setUserTeamName(e.target.value);
  }, []);

  const save = () => {
    if (window.confirm("회원정보 수정 하겠습니까?")) {
      user.userTeamname = userTeamName;
      // 회원 정보 수정
      axios
        .put(
          BackApi.users.modify,
          { userTeamname: user.userTeamname, logoSeq: 1 },
          {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          }
        )
        .then((res) => {
          alert("회원정보 수정 완료");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const deleteUser = () => {
    if (window.confirm("정말 회원탈퇴 하시겠습니까?")) {
      alert("네");
    }
  };

  return (
    <>
      <Row className={style["modal"]}>
        <Row className={style["logo"]}>
          <img
            src={user.logoUrl}
            style={{ WebkitUserDrag: "none" }}
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
            <Row className={style["level"]}>Lv.{user.userLevel}</Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Row className={style["win"]}>
                  <div>W{user.userWin}</div>
                </Row>
              </Col>
              <Col>
                <Row className={style["lose"]}>
                  <div>L{user.userLose}</div>
                </Row>
              </Col>
              <Col>
                <Row className={style["draw"]}>
                  <div>D{user.userDraw}</div>
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
              <input
                type="text"
                name="userTeamName"
                value={userTeamName}
                onChange={onChange}
              ></input>
            </Row>
          </Col>
        </Row>
        <Row style={{ margin: "0", padding: "0" }}>
          <Col>
            <Row className={style["btn-left"]}>
              <div onClick={save}>SAVE</div>
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
          <div onClick={deleteUser}>회원탈퇴</div>
        </Row>
      </Row>
    </>
  );
};

export default UserInfoModal;
