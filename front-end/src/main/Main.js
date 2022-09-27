import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BsPencilSquare } from "react-icons/bs";
import UserInfoModal from "./components/UserInfoModal";
import BackDrop from "./components/BackDrop";

import MatchList from "./components/MatchList";
import PitcherList from "./components/PitcherList";

import title from "../assets/title.png";
import subtitle from "../assets/subtitle.png";
import teamLogo from "../assets/ground2.png";

import style from "./css/Main.module.css";

const Main = () => {
  const navigate = useNavigate();

  const [menuBar, setMeunuBar] = useState([true, false, false, false]);
  const [matchs, setMatchs] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const activeMenu = "rgba(5, 20, 48, 0.5)";

  useEffect(() => {
    setMatchs([
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Lose",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Draw",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
      {
        home: "삼성 라이온즈",
        away: "롯데 자이언츠",
        home_score: 3,
        away_score: 0,
        result: "Win",
      },
    ]);
    setPitchers([
      {
        pitcherSeq: 1,
        pitArm: "좌완",
        name: "투수1",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 2,
        pitArm: "우완",
        name: "투수2",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 3,
        pitArm: "좌완",
        name: "투수3",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 4,
        pitArm: "우완",
        name: "투수4",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 5,
        pitArm: "좌완",
        name: "투수5",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 6,
        pitArm: "우완",
        name: "투수6",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 7,
        pitArm: "우완",
        name: "투수6",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 8,
        pitArm: "우완",
        name: "투수6",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
    ]);
  }, []);

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
              style={menuBar[0] ? { background: activeMenu } : {}}
              className={style["mainHead-menu"]}
              onClick={() => {
                setMeunuBar([true, false, false, false]);
              }}
            >
              PvE
            </div>
            <div
              style={menuBar[1] ? { background: activeMenu } : {}}
              className={style["mainHead-menu"]}
              onClick={() => {
                alert("차후 업데이트 예정");
              }}
            >
              PvP
            </div>
            <div
              style={menuBar[2] ? { background: activeMenu } : {}}
              className={style["mainHead-menu"]}
              onClick={() => {
                setMeunuBar([false, false, true, false]);
                navigate("/manage");
              }}
            >
              구단관리
            </div>
            <div
              style={menuBar[3] ? { background: activeMenu } : {}}
              className={style["mainHead-menu"]}
              onClick={() => {
                setMeunuBar([false, false, false, true]);
                navigate("/market");
              }}
            >
              이적시장
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
                          navigate("/game");
                        }}
                      >
                        게임 시작
                      </div>
                    </Row>
                    <Row>
                      <div
                        className={style["signOutBtn"]}
                        onClick={() => {
                          alert("로그아웃 처리");
                        }}
                      >
                        로그아웃
                      </div>
                    </Row>
                  </Col>
                </Row>
                <Row className={style["mainBody-row1-col1-row2"]}>
                  <Col>
                    <img
                      className={style["teamLogo"]}
                      src={teamLogo}
                      alt="teamlogo"
                    ></img>
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <Row className={style["level"]}>Lv.{3}</Row>
                      </Col>
                      <Col>
                        <Row className={style["nickName"]}>구단 명</Row>
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
                        <div className={style["bar"]}></div>
                        <div className={style["barVal"]}>28000 / 40000</div>
                      </div>
                    </Row>
                    <Row className={style["WLD"]}>
                      <Col style={{ color: "cornflowerblue" }}>W12</Col>
                      <Col style={{ color: "darksalmon" }}>L1</Col>
                      <Col style={{ color: "darkseagreen" }}>D2</Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className={style["recentMatchListHead"]}>
                  <div>최근 경기 목록</div>
                </Row>
                <Row className={style["recentMatchListBody"]}>
                  <MatchList matchs={matchs}></MatchList>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className={style["matchScheduleHead"]}>
                  <div>경기 일정</div>
                </Row>
                <Row className={style["matchScheduleBody"]}>
                  <Col>
                    <Row className={style["schedule"]}>
                      <div>1st</div>
                      <img src={teamLogo} alt="teamlogo"></img>
                      <div>중신 브라더스</div>
                    </Row>
                  </Col>
                  <Col>
                    <Row className={style["schedule"]}>
                      <div>2nd</div>
                      <img src={teamLogo} alt="teamlogo"></img>
                      <div>중신 브라더스</div>
                    </Row>
                  </Col>
                  <Col>
                    <Row className={style["schedule"]}>
                      <div>3th</div>
                      <img src={teamLogo} alt="teamlogo"></img>
                      <div>중신 브라더스</div>
                    </Row>
                  </Col>
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
      {modalIsOpen && <UserInfoModal setModalIsOpen={setModalIsOpen} />}
    </>
  );
};

export default Main;
