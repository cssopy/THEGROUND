import { useState, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { userActions } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux/es/exports";

import axios from "axios";

import BackApi from "../../api/BackApi";

import style from "../css/UserInfoModal.module.css";

const UserInfoModal = (props) => {
  const dispatch = useDispatch();

  const { user, logos } = props;

  const [userTeamName, setUserTeamName] = useState(user.userTeamname);
  const [progress, setProgress] = useState(0);
  const [selectLogo, setSelectLogo] = useState(false);
  const [isActive, setIsActive] = useState(true);

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

  const btnToggle = () => {
    setIsActive((prev) => !prev);
    setTimeout(() => {
      setIsActive((prev) => !prev);
    }, 700);
  };

  const select = () => {
    setSelectLogo((prev) => !prev);
  };

  const changeMyLogo = (event) => {
    dispatch(userActions.setLogo(logos[parseInt(event.target.alt)]));
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
          <BsPencilSquare className={style["logoBtn"]} onClick={select} />
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
      <div
        className={`${style.smallModal} ${selectLogo ? style.openSmall : ""}`}
      >
        {logos.map((logo, idx) => {
          return (
            <img
              src={logo.logoUrl}
              className={`${style.logoList} ${
                user.logo && idx + 1 === user.logo.logoSeq ? style.selected : ""
              }`}
              key={idx}
              alt={idx}
              onClick={changeMyLogo}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserInfoModal;
