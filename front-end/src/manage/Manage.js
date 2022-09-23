import { useState, useEffect, useRef, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import style from "./css/Manage.module.css";

import HitterList from "./components/HitterList";
import PitcherList from "./components/PitcherList";
import BullpenList from "./components/BullpenList";

import HittersData from "../market/HittersData";
import PitchersData from "../market/PitchersData";
import BullpensData from "../market/BullpensData";

const Manage = () => {
  const initHittersRef = useRef([]);
  const initPitchersRef = useRef([]);
  const initBullpensRef = useRef([]);

  const [hitters, setHitters] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [bullpens, setBullpens] = useState([]);

  // 컴포넌트가 마운트 될때
  useEffect(() => {
    // 서버에서 데이터 얻어와서 초기화 (hitters, pitchers, bullpens, initPitchers, initBullpens)
    initHittersRef.current = HittersData;
    initPitchersRef.current = PitchersData;
    initBullpensRef.current = BullpensData;

    setHitters(initHittersRef.current);
    setPitchers(initPitchersRef.current);
    setBullpens(initBullpensRef.current);
  }, []);

  // reset 버튼 함수
  const reset = () => {
    // pitchers, reliefers를 save 하기전 값들인 initPitchersin, initBullpens으로 재초기화
    setPitchers(initPitchersRef.current);
    setBullpens(initBullpensRef.current);
  };

  // save 버튼 함수
  const save = () => {
    // 선수들 인원수 체크
    // 현재 pitchers, bullpens 의 목록을 서버에 전달
    alert(pitchers.length);
    alert(bullpens.length);
    alert(pitchers.length + bullpens.length);
  };

  //
  const addPitchers = useCallback((bullpen) => {
    setPitchers((pitchers) => {
      return [...pitchers, bullpen];
    });
    setBullpens((bullpens) => {
      return bullpens.filter((item) => {
        return item.pitcherSeq !== bullpen.pitcherSeq;
      });
    });
  }, []);

  const addBullpens = useCallback((pitcher) => {
    setBullpens((bullpens) => {
      return [...bullpens, pitcher];
    });
    setPitchers((pitchers) => {
      return pitchers.filter((item) => {
        return item.pitcherSeq !== pitcher.pitcherSeq;
      });
    });
  }, []);

  // useEffect(() => {
  //   console.log(bullpens);
  // }, [bullpens]);

  // // 컴포넌트가 업데이트 될때마다
  // useEffect(() => {
  //   console.log(pitchers);
  //   console.log(reliefers);
  // });

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Container
          fluid
          className={`${style["background"]} ${style["manage"]}`}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
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
                    <HitterList hitters={hitters}></HitterList>
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
                      addBullpens={addBullpens}
                    ></PitcherList>
                  </Container>
                </Row>
                <Row className={style["clubBody-row1-col2-row2"]}>
                  <Container className={style["pircherHead"]}>
                    구원 투수
                  </Container>
                  <Container className={style["pircherBody"]}>
                    <BullpenList
                      bullpens={bullpens}
                      addPitchers={addPitchers}
                    ></BullpenList>
                  </Container>
                </Row>
              </Col>
            </Row>
            <Row className={style["clubBody-row2"]}>
              <div className={style["clubBody-row2-div"]}>
                <Link
                  className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst1"]} ${style["link"]}`}
                  to="/main"
                >
                  MAIN
                </Link>
                &nbsp;&nbsp;
                <Link
                  className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst3"]} ${style["link"]}`}
                  to="/market"
                >
                  이적시장
                </Link>
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
