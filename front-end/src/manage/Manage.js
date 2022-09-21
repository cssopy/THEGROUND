import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import style from "./css/Manage.module.css";

import HitterList from "./components/HitterList";
import PitcherList from "./components/PitcherList";
import RelieferList from "./components/RelieferList";

const Manage = () => {
  const [hitters, setHitters] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [reliefers, setReliefers] = useState([]);

  // 사용자가 save 하기전 선발투수 및 구원투수 목록
  let initPitchers = [];
  let initReliefers = [];

  // 최초 한번 타자, 선발투수, 구원투수 데이터를 받아 초기화
  useEffect(() => {
    // 서버에서 데이터 얻어와서 초기화 (hitters, pitchers, reliefers, initPitchers, initReliefers)
    // API 구현되면 그때 다시 수정
    setHitters([
      {
        hitterSeq: 1,
        batArm: "우타",
        name: "리오넬 메시",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
      {
        hitterSeq: 2,
        batArm: "좌타",
        name: "레오나르도 다빈치",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
    ]);
    setPitchers([
      {
        pitcherSeq: 1,
        pitArm: "좌완",
        name: "리오넬 메시",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 2,
        pitArm: "우완",
        name: "레오나르도 다빈치",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
    ]);
    setReliefers([
      {
        pitcherSeq: 1,
        pitArm: "좌완",
        name: "리오넬 메시",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 2,
        pitArm: "우완",
        name: "레오나르도 다빈치",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
    ]);
  }, []);

  // reset 버튼 함수
  const reset = () => {
    // pitchers, reliefers를 save 하기전 값들인 initPitchersin, itReliefers으로 재초기화
    setPitchers(initPitchers);
    setReliefers(initReliefers);
  };

  // save 버튼 함수
  const save = () => {
    // 현재 pitchers, reliefers 의 목록을 서버에 전달
    // 구단관리 API에 저장 관련 API필요 => 백엔드에 요청
    alert("구단관리 API에 저장 관련 API필요 => 백엔드에 요청");
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container
          fluid
          className={`${style["background"]} ${style["manage"]}`}
        >
          <Container className={style["clubHead"]}>구단 관리</Container>
          <Container className={style["clubBody"]}>
            <Row className={style["clubBody-row1"]}>
              <Col className={style["clubBody-row1-col1"]}>
                <Row className={style["clubBody-row1-col1-row"]}>
                  <Container className={style["batterHead"]}>
                    보유 타자
                  </Container>
                  <Container className={style["batterBody"]}>
                    <HitterList
                      hitters={hitters}
                      setHitters={setHitters}
                    ></HitterList>
                  </Container>
                </Row>
              </Col>
              <Col className={style["clubBody-row1-col2"]}>
                <Row className={style["clubBody-row1-col2-row1"]}>
                  <Container className={style["pircherHead"]}>
                    선발 로테이션
                  </Container>
                  <Container className={style["pircherBody"]}>
                    <PitcherList
                      pitchers={pitchers}
                      setPitchers={setPitchers}
                    ></PitcherList>
                  </Container>
                </Row>
                <Row className={style["clubBody-row1-col2-row2"]}>
                  <Container className={style["pircherHead"]}>
                    구원 투수
                  </Container>
                  <Container className={style["pircherBody"]}>
                    <RelieferList
                      pitchers={pitchers}
                      setPitchers={setPitchers}
                      reliefers={reliefers}
                      setReliefers={setReliefers}
                    ></RelieferList>
                  </Container>
                </Row>
              </Col>
            </Row>
            <Row className={style["clubBody-row2"]}>
              <div className={style["clubBody-row2-div"]}>
                <div
                  className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst1"]}`}
                >
                  <Link className={style["link"]} to="/main">
                    MAIN
                  </Link>
                </div>
                &nbsp;&nbsp;
                <div
                  className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst3"]}`}
                >
                  <Link className={style["link"]} to="/market">
                    이적시장
                  </Link>
                </div>
                &nbsp;&nbsp;
                <div
                  className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst4"]}`}
                  onClick={reset}
                >
                  RESET
                </div>
                &nbsp;&nbsp;
                <div
                  className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst5"]}`}
                  onClick={save}
                >
                  SAVE
                </div>
              </div>
            </Row>
          </Container>
        </Container>
      </DndProvider>
    </>
  );
};

export default Manage;
