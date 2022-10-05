import { useState, useCallback, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { userActions } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

import axios from "axios";

import BackApi from "../../api/BackApi";

import style from "../css/UserInfoModal.module.css";
import { configActions } from "../../redux/slice/configSlice";

const UserInfoModal = (props) => {
  const dispatch = useDispatch();

  const { user, logos, setModalIsOpen, modalIsOpen } = props;

  const [userTeamName, setUserTeamName] = useState("");
  const [selectLogo, setSelectLogo] = useState(false);
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(true);

  const onChange = useCallback((e) => {
    setUserTeamName(e.target.value);
  }, []);

  useEffect(() => {
    setSelected(user.logo);
    setUserTeamName(user.userTeamname);
  }, []);

  const save = () => {
    if (window.confirm("회원정보 수정 하겠습니까?")) {
      // 회원 정보 수정
      axios
        .put(
          BackApi.users.modify,
          { userTeamname: userTeamName, logoSeq: selected.logoSeq },
          {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          }
        )
        .then((res) => {
          alert("회원정보 수정 완료");
          dispatch(userActions.setLogo(selected));
          dispatch(userActions.setUserTeamName(userTeamName));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const deleteUser = () => {
    if (window.confirm("정말 회원탈퇴 하시겠습니까?")) {
      axios
        .delete(BackApi.users.quit, {
          headers: { "X-ACCESS-TOKEN": user.jwt },
        })
        .then(() => {
          dispatch(userActions.setLogOut());
          dispatch(configActions.setUrl(""));
        })
        .catch((err) => console.error(err));
    }
  };

  const select = () => {
    setSelectLogo((prev) => !prev);
  };

  const changeMyLogo = (event) => {
    setSelected(logos[parseInt(event.target.alt)]);
  };

  return (
    <>
      <div
        className={`${style["box"]} ${modalIsOpen ? style["open"] : ""}`}
        onClick={() => {
          setModalIsOpen(false);
        }}
      >
        <Row className={style["modal"]} onClick={(e) => e.stopPropagation()}>
          <Row className={style["logo"]}>
            <img
              src={selected.logoUrl}
              style={{ WebkitUserDrag: "none", padding: "0px" }}
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
                    setModalIsOpen(false);
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
          onClick={(e) => e.stopPropagation()}
        >
          {logos.map((logo, idx) => {
            return (
              <img
                src={logo.logoUrl}
                className={`${style.logoList} ${
                  user.logo && idx + 1 === selected.logoSeq
                    ? style.selected
                    : ""
                }`}
                key={idx}
                alt={idx}
                onClick={changeMyLogo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserInfoModal;
