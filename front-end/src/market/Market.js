import { useState, useEffect, useRef, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import HitterList from "./components/HitterList";
import PicherList from "./components/PitcherList";
import MyHitterList from "./components/MyHitterList";
import MyPicherList from "./components/MyPitcherList";

import style from "./css/Market.module.css";
import HittersData from "./HittersData";
import PitchersData from "./PitchersData";

const Market = () => {
  // 컴포넌트가 처음 마운트 될 때
  useEffect(() => {
    initHittersRef.current = HittersData;
    initPitchersRef.current = PitchersData;

    setHitters(initHittersRef.current);
    setPitchers(initPitchersRef.current);
    setMyHitters(initHittersRef.current);
    setMyPitchers(initPitchersRef.current);
  }, []);

  // 저장 전 처음 보유 선수 목록
  const initHittersRef = useRef([]);
  const initPitchersRef = useRef([]);

  // 타자, 투수 토글 상태
  const [toggle, setToggle] = useState(true);

  // 전체 선수 목록
  const [hitters, setHitters] = useState([]);
  const [pitchers, setPitchers] = useState([]);

  // 보유 선수 목록
  const [myHitters, setMyHitters] = useState([]);
  const [myPitchers, setMyPitchers] = useState([]);

  // 예산 관련
  const [number, setNumber] = useState(100000);

  // 타자, 투수 목록 탭 css 관련
  const [listTab, setListTab] = useState(["#041e42", "#ffffff00"]);

  // 보유 타자에 선수 추가
  const addHitter = useCallback((hitter) => {
    setMyHitters((myHitters) => {
      return [...myHitters, hitter];
    });
  }, []);

  // 보유 타자에서 선수 제거
  const removeHitter = useCallback((idx) => {
    setMyHitters((myHitters) => {
      let temList = [...myHitters];
      temList.splice(idx, 1);
      return temList;
    });
  }, []);

  // 보유 투수에 선수 추가
  const addPitcher = useCallback((pitcher) => {
    setMyPitchers((myPitchers) => {
      return [...myPitchers, pitcher];
    });
  }, []);

  // 보유 투수에서 선수 제거
  const removePitcher = useCallback((idx) => {
    setMyPitchers((myPitchers) => {
      let temList = [...myPitchers];
      temList.splice(idx, 1);
      return temList;
    });
  }, []);

  const reset = () => {
    setMyHitters(initHittersRef.current);
    setMyPitchers(initPitchersRef.current);
  };

  const save = () => {
    // 예산 관련 로직
    // 타자, 투수 인원수 관련 로직
    alert(myHitters.length);
    alert(myPitchers.length);
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Row
          className={style["background"]}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <Row className={style["marketHead"]}>
              <div>이적 시장</div>
            </Row>
            <Row className={style["marketBody"]}>
              <Row>
                <Col>
                  <Row className={style["playerListHead"]}>
                    <Col>
                      <div
                        style={{ backgroundColor: listTab[0] }}
                        onClick={() => {
                          setListTab(["#041e42", "#ffffff00"]);
                          setToggle(true);
                        }}
                      >
                        타자 선수 목록
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{ backgroundColor: listTab[1] }}
                        onClick={() => {
                          setListTab(["#ffffff00", "#041e42"]);
                          setToggle(false);
                        }}
                      >
                        투수 선수 목록
                      </div>
                    </Col>
                  </Row>
                  <Row className={style["playerListBody"]}>
                    {toggle && (
                      <HitterList
                        hitters={hitters}
                        addHitter={addHitter}
                      ></HitterList>
                    )}
                    {!toggle && (
                      <PicherList
                        pitchers={pitchers}
                        addPitcher={addPitcher}
                      ></PicherList>
                    )}
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Row className={style["budget-top"]}>
                      <Col>
                        <div>예산 한도</div>
                      </Col>
                      <Col>
                        <div>사용 가능 예산</div>
                      </Col>
                    </Row>
                    <Row className={style["budget-bottom"]}>
                      <div className={style["budget-bottom-left"]}>
                        <div></div>
                        <div>{number.toLocaleString("ko-KR")} TG</div>
                      </div>
                      <div className={style["budget-bottom-right"]}>
                        <div></div>
                        <div>{number.toLocaleString("ko-KR")} TG</div>
                      </div>
                    </Row>
                  </Row>
                  <Row>
                    <Row className={style["playerHead"]}>
                      <div>
                        보유 선수 / 타자:{myHitters.length} 투수:
                        {myPitchers.length} 총:
                        {myHitters.length + myPitchers.length}
                      </div>
                    </Row>
                    <Row className={style["playerBody"]}>
                      {toggle && (
                        <MyHitterList
                          hitters={myHitters}
                          removeHitter={removeHitter}
                        ></MyHitterList>
                      )}
                      {!toggle && (
                        <MyPicherList
                          pitchers={myPitchers}
                          removePitcher={removePitcher}
                        ></MyPicherList>
                      )}
                    </Row>
                  </Row>
                </Col>
              </Row>
              <Row className={style["btnGroup"]}>
                <Link
                  className={`${style["btn"]} ${style["bg-color-cst1"]}`}
                  to="/main"
                >
                  MAIN
                </Link>
                <Link
                  className={`${style["btn"]} ${style["bg-color-cst3"]}`}
                  to="/manage"
                >
                  구단관리
                </Link>
                <div
                  className={`${style["btn"]} ${style["bg-color-cst4"]}`}
                  onClick={reset}
                >
                  RESET
                </div>
                <div
                  className={`${style["btn"]} ${style["bg-color-cst5"]}`}
                  onClick={save}
                >
                  SAVE
                </div>
              </Row>
            </Row>
          </div>
        </Row>
      </DndProvider>
    </>
  );
};

export default Market;
