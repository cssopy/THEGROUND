import { useState, useEffect, useRef, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux/es/exports";
import { configActions } from "../redux/slice/configSlice";

import axios from "axios";

import style from "./css/Manage.module.css";

import HitterList from "./components/HitterList";
import PitcherList from "./components/PitcherList";
import BullpenList from "./components/BullpenList";

import BackApi from "../api/BackApi";
import { useSelector } from "react-redux";

const Manage = () => {
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.config.isLoading);

  const dispatch = useDispatch();

  const initHittersRef = useRef([]);
  const initPitchersRef = useRef([]);
  const initBullpensRef = useRef([]);

  const [hitters, setHitters] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [bullpens, setBullpens] = useState([]);

  // 컴포넌트가 마운트 될때
  useEffect(() => {
    if (user) {
      // 구원 투수 목록 조회
      (async () => {
        await axios
          .get(BackApi.manage.pitchers, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            initBullpensRef.current = res.data;
            setBullpens(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
      // 보유 타자 목록 조회
      (async () => {
        await axios
          .get(BackApi.manage.hitters, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            initHittersRef.current = res.data;
            setHitters(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
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
            initPitchersRef.current = pits;
            setPitchers(pits);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
    }
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
    if (pitchers.length !== 5) {
      alert("선발 로테이션 인원이 5명이 되어야 합니다");
      return;
    }
    const rotation = {
      teamSetting1stSp: pitchers[0].pitcherSeq,
      teamSetting2ndSp: pitchers[1].pitcherSeq,
      teamSetting3rdSp: pitchers[2].pitcherSeq,
      teamSetting4thSp: pitchers[3].pitcherSeq,
      teamSetting5thSp: pitchers[4].pitcherSeq,
    };

    (async () => {
      await axios
        .put(BackApi.manage.rotation, rotation, {
          headers: {
            "X-ACCESS-TOKEN": user.jwt,
          },
        })
        .then(() => {
          initPitchersRef.current = [...pitchers];
          initBullpensRef.current = [...bullpens];
          alert("저장 완료");
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  };

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

  // Pitcher 순서 변경
  const pitTopit = useCallback((dragIndex, hoverIndex) => {
    setPitchers((prevState) => {
      const pits = prevState.slice();
      pits.splice(dragIndex, 1);
      pits.splice(hoverIndex, 0, prevState[dragIndex]);
      return pits;
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
        <Row
          className={`${style["background"]} ${style["manage"]}`}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          {!isLoading && (
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              <Row className={style["clubHead"]}>
                <div>구단 관리</div>
              </Row>
              <Container className={style["clubBody"]}>
                <Row className={style["clubBody-row1"]}>
                  <Col className={style["clubBody-row1-col1"]}>
                    <Row className={style["clubBody-row1-col1-row"]}>
                      <Row className={style["batterHead"]}>
                        <div>보유 타자</div>
                      </Row>
                      <Row className={style["batterBody"]}>
                        <HitterList hitters={hitters}></HitterList>
                      </Row>
                    </Row>
                  </Col>
                  <Col className={style["clubBody-row1-col2"]}>
                    <Row className={style["clubBody-row1-col2-row1"]}>
                      <Row className={style["pircherHead"]}>
                        <div>선발 로테이션</div>
                      </Row>
                      <Row className={style["pircherBody"]}>
                        <PitcherList
                          pitchers={pitchers}
                          addBullpens={addBullpens}
                          pitTopit={pitTopit}
                        ></PitcherList>
                      </Row>
                    </Row>
                    <Row className={style["clubBody-row1-col2-row2"]}>
                      <Row className={style["pircherHead"]}>
                        <div>구원 투수</div>
                      </Row>
                      <Row className={style["pircherBody"]}>
                        <BullpenList
                          bullpens={bullpens}
                          addPitchers={addPitchers}
                        ></BullpenList>
                      </Row>
                    </Row>
                  </Col>
                </Row>
                <Row className={style["clubBody-row2"]}>
                  <div className={style["clubBody-row2-div"]}>
                    <div
                      className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst1"]} ${style["link"]}`}
                      onClick={() => {
                        dispatch(configActions.setUrl("main"));
                      }}
                    >
                      MAIN
                    </div>
                    &nbsp;&nbsp;
                    <div
                      className={`${style["clubBody-row2-div-btn"]} ${style["bg-color-cst3"]} ${style["link"]}`}
                      onClick={() => {
                        dispatch(configActions.setUrl("market"));
                      }}
                    >
                      이적시장
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
            </div>
          )}
        </Row>
      </DndProvider>
    </>
  );
};

export default Manage;
