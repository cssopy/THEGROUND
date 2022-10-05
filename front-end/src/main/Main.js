import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { useSelector } from "react-redux";
import { userActions } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux/es/exports";
import { configActions } from "../redux/slice/configSlice";

import axios from "axios";

import UserInfoModal from "./components/UserInfoModal";
import BackDrop from "./components/BackDrop";
import MatchList from "./components/MatchList";
import PitcherList from "./components/PitcherList";
import title from "../assets/etc/title.png";
import subtitle from "../assets/etc/subtitle.png";

import style from "./css/Main.module.css";

import BackApi from "../api/BackApi";

const Main = () => {
  const user = useSelector((state) => state.user.user);
  const logos = useSelector((state) => state.logo.logos);

  const dispatch = useDispatch();

  const [matchs, setMatchs] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      // 선발 로테이션 조회
      (async () => {
        await axios
          .get(BackApi.manage.rotation, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            let pits = [];
            const keys = Object.keys(res.data);
            for (let i = 0; i < keys.length - 1; i++) {
              const key = keys[i];
              const value = res.data[key];
              pits.push(value);
            }
            setPitchers(pits);
            dispatch(configActions.setPersentage(65));
          })
          .catch((error) => {
            console.log(error);
          });
      })();
      // 경기 일정 조회
      (async () => {
        await axios
          .get(BackApi.main.schedules, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            setSchedules(res.data);
            dispatch(configActions.setPersentage(80));
          })
          .catch((error) => {
            console.log(error);
          });
      })();
      // 최근 경기 조회 없음
      (async () => {
        await axios
          .get(BackApi.main.matches, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            setMatchs(res.data);
            dispatch(configActions.setPersentage(100));
          })
          .catch((error) => {
            console.log(error);
          });
      })();
    }
  }, [user]);

  const signOut = () => {
    dispatch(userActions.setLogOut());
    dispatch(configActions.setUrl(""));
  };

  return (
    <>
      <Row
        className={style["background"]}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <Row className={style["mainHead"]}>
            <div
              style={{ background: "rgba(5, 20, 48, 0.5)" }}
              className={style["mainHead-menu"]}
            >
              PvE
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                alert("차후 업데이트 예정");
              }}
            >
              PvP
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                dispatch(configActions.setUrl("manage"));
              }}
            >
              구단관리
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                dispatch(configActions.setUrl("market"));
              }}
            >
              이적시장
            </div>
            <div
              className={style["mainHead-menu"]}
              onClick={() => {
                dispatch(configActions.setUrl("guide"));
              }}
            >
              가이드
            </div>
          </Row>
          <Row className={style["mainBody"]}>
            <Row>
              <Col className={style["mainBody-row1-col1"]}>
                <Row className={style["mainBody-row1-col1-row1"]}>
                  <Col>
                    <Row className={style["titleArea"]}>
                      <Row>
                        <img
                          className={style["titleImg"]}
                          src={title}
                          alt="title"
                        ></img>
                      </Row>
                      <Row>
                        <img
                          className={style["subTitleImg"]}
                          src={subtitle}
                          alt="subtitle"
                        ></img>
                      </Row>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <div
                        className={style["startGameBtn"]}
                        onClick={() => {
                          dispatch(configActions.setIsLoading(true));
                          dispatch(configActions.setUrl("match"));
                        }}
                      >
                        게임 시작
                      </div>
                    </Row>
                    <Row>
                      <div className={style["signOutBtn"]} onClick={signOut}>
                        로그아웃
                      </div>
                    </Row>
                  </Col>
                </Row>
                <Row className={style["mainBody-row1-col1-row2"]}>
                  <Col>
                    <img
                      className={style["teamLogo"]}
                      src={user.logoUrl}
                      alt="teamlogo"
                    ></img>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Row className={style["level"]}>
                          Lv.{user.userLevel}
                        </Row>
                      </Col>
                      <Col>
                        <Row className={style["nickName"]}>
                          {user.userTeamname}
                        </Row>
                      </Col>
                      <Col>
                        <BsPencilSquare
                          className={style["infoBtn"]}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setModalIsOpen(true);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <div className={style["barAll"]}>
                        <div
                          className={style["bar"]}
                          style={{ width: user.userExp / 40000 }}
                        ></div>
                        <div className={style["barVal"]}>
                          {user.userExp} / 40000
                        </div>
                      </div>
                    </Row>
                    <Row className={style["WLD"]}>
                      <Col style={{ color: "cornflowerblue" }}>
                        W{user.userWin}
                      </Col>
                      <Col style={{ color: "darksalmon" }}>
                        L{user.userLose}
                      </Col>
                      <Col style={{ color: "darkseagreen" }}>
                        D{user.userDraw}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className={style["recentMatchListHead"]}>
                  <div>최근 경기 목록</div>
                </Row>
                <Row className={style["recentMatchListBody"]}>
                  {matchs.length !== 0 && (
                    <MatchList matchs={matchs}></MatchList>
                  )}
                  {matchs.length === 0 && <div>최근 경기 목록이 없습니다.</div>}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className={style["matchScheduleHead"]}>
                  <div>경기 일정</div>
                </Row>
                <Row className={style["matchScheduleBody"]}>
                  {schedules.length !== 0 && (
                    <>
                      <Col>
                        <Row className={style["schedule"]}>
                          <div>1st</div>
                          <img src={schedules[0].logoUrl} alt="teamlogo"></img>
                          <div>{schedules[0].teamName}</div>
                        </Row>
                      </Col>
                      <Col>
                        <Row className={style["schedule"]}>
                          <div>2nd</div>
                          <img src={schedules[1].logoUrl} alt="teamlogo"></img>
                          <div>{schedules[1].teamName}</div>
                        </Row>
                      </Col>
                      <Col>
                        <Row className={style["schedule"]}>
                          <div>3th</div>
                          <img src={schedules[2].logoUrl} alt="teamlogo"></img>
                          <div>{schedules[2].teamName}</div>
                        </Row>
                      </Col>
                    </>
                  )}
                  {schedules.length === 0 && <div>경기 일정이 없습니다.</div>}
                </Row>
              </Col>
              <Col>
                <Row className={style["startingRotationHead"]}>
                  <div>선발 로테이션</div>
                </Row>
                <Row className={style["startingRotationBody"]}>
                  <PitcherList pitchers={pitchers}></PitcherList>
                </Row>
              </Col>
            </Row>
          </Row>
        </div>
      </Row>
      {modalIsOpen && <BackDrop setModalIsOpen={setModalIsOpen} />}
      {modalIsOpen && (
        <UserInfoModal
          user={user}
          logos={logos}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </>
  );
};

export default Main;
