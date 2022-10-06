import { useState, useEffect, useRef, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { configActions } from "../redux/slice/configSlice";

import axios from "axios";

import HitterList from "./components/HitterList";
import PicherList from "./components/PitcherList";
import MyHitterList from "./components/MyHitterList";
import MyPicherList from "./components/MyPitcherList";

import style from "./css/Market.module.css";

import BackApi from "../api/BackApi";

const Market = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  // 저장 전 처음 보유 선수 목록
  const initHittersRef = useRef([]);
  const initMyHittersRef = useRef([]);
  const initPitchersRef = useRef([]);
  const initMyPitchersRef = useRef([]);

  // 타자, 투수 토글 상태
  const [toggle, setToggle] = useState(true);

  // 전체 선수 목록
  const [hitters, setHitters] = useState([]);
  const [pitchers, setPitchers] = useState([]);

  // 보유 선수 목록
  const [myHitters, setMyHitters] = useState([]);
  const [myPitchers, setMyPitchers] = useState([]);

  // 예산 관련
  const [myPayroll, setMyPayroll] = useState(0);

  // 타자, 투수 목록 탭 css 관련
  const [listTab, setListTab] = useState(["#041e42", "#ffffff00"]);

  // 컴포넌트가 처음 마운트 될 때
  useEffect(() => {
    if (user) {
      // 미보유 타자 목록 조회
      (async () => {
        await axios
          .get(BackApi.trade.notPossHitters, {
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
      // 보유 타자 목록 조회
      (async () => {
        await axios
          .get(BackApi.trade.possHitters, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            let payroll = res.data.reduce(function add(sum, item) {
              return sum + item.salary;
            }, 0);
            setMyPayroll(myPayroll + payroll);
            initMyHittersRef.current = res.data;
            setMyHitters(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
      // 미보유 투수 목록 조회
      (async () => {
        await axios
          .get(BackApi.trade.notPossPitchers, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            initPitchersRef.current = res.data;
            setPitchers(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
      // 보유 투수 목록 조회
      (async () => {
        await axios
          .get(BackApi.trade.possPitchers, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            let payroll = res.data.reduce(function add(sum, item) {
              return sum + item.salary;
            }, 0);
            setMyPayroll(myPayroll + payroll);
            initMyPitchersRef.current = res.data;
            setMyPitchers(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
    }
  }, [user]);

  // 보유 타자에 선수 추가
  const addMyHitter = (hitter) => {
    let totalPayroll =
      myHitters.reduce(function add(sum, item) {
        return sum + item.salary;
      }, 0) +
      myPitchers.reduce(function add(sum, item) {
        return sum + item.salary;
      }, 0) +
      hitter.salary;
    if (totalPayroll > user.userPayroll) {
      alert("예산 한도를 초과할 수 없습니다.");
      return;
    }

    setMyHitters((myHitters) => {
      return [...myHitters, hitter];
    });
    setHitters((hitters) => {
      return hitters.filter((item) => {
        return item.hitterSeq !== hitter.hitterSeq;
      });
    });
  };

  // 미보유 타자에 선수 추가
  const addHitter = useCallback((hitter) => {
    setHitters((hitters) => {
      return [...hitters, hitter];
    });
    setMyHitters((myHitters) => {
      return myHitters.filter((item) => {
        return item.hitterSeq !== hitter.hitterSeq;
      });
    });
  }, []);

  // 보유 투수에 선수 추가
  const addMyPitcher = (pitcher) => {
    let totalPayroll =
      myHitters.reduce(function add(sum, item) {
        return sum + item.salary;
      }, 0) +
      myPitchers.reduce(function add(sum, item) {
        return sum + item.salary;
      }, 0) +
      pitcher.salary;
    if (totalPayroll > user.userPayroll) {
      alert("예산 한도를 초과할 수 없습니다.");
      return;
    }

    setMyPitchers((myPitchers) => {
      return [...myPitchers, pitcher];
    });
    setPitchers((pitchers) => {
      return pitchers.filter((item) => {
        return item.pitcherSeq !== pitcher.pitcherSeq;
      });
    });
  };

  // 미보유 투수에 선수 추가
  const addPitcher = useCallback((pitcher) => {
    setPitchers((pitchers) => {
      return [...pitchers, pitcher];
    });
    setMyPitchers((myPitchers) => {
      return myPitchers.filter((item) => {
        return item.pitcherSeq !== pitcher.pitcherSeq;
      });
    });
  }, []);

  const reset = () => {
    setHitters(initHittersRef.current);
    setMyHitters(initMyHittersRef.current);
    setPitchers(initPitchersRef.current);
    setMyPitchers(initMyPitchersRef.current);
  };

  const save = () => {
    alert("주석 처리 필요");
    if (myPitchers.length < 7) {
      alert("투수는 최소 7명 이상이어야 합니다.");
      return;
    }
    if (myHitters.length < 9) {
      alert("타자는 최소 9명 이상이어야 합니다.");
      return;
    }
    if (myPitchers.length + myHitters.length < 20) {
      alert("보유 선수는 최소 20명 이상이어야 합니다.");
      return;
    }
    let myTotalSal =
      myHitters.reduce(function add(sum, item) {
        return sum + item.salary;
      }, 0) +
      myPitchers.reduce(function add(sum, item) {
        return sum + item.salary;
      }, 0);
    if (user.userPayroll < myTotalSal) {
      alert("보유 예산을 초과했습니다.");
      return;
    }

    let myPitchersSeq = [];
    let myHittersSeq = [];
    for (let pitcher of myPitchers) {
      myPitchersSeq.push(pitcher.pitcherSeq);
    }
    for (let hitter of myHitters) {
      myHittersSeq.push(hitter.hitterSeq);
    }

    // 이적선수 저장
    const afterPlayers = {
      pitcher: myPitchersSeq,
      hitter: myHittersSeq,
    };
    (async () => {
      axios
        .put(BackApi.trade.save, afterPlayers, {
          headers: {
            "X-ACCESS-TOKEN": user.jwt,
          },
        })
        .then(() => {
          initHittersRef.current = [...hitters];
          initMyHittersRef.current = [...myHitters];
          initPitchersRef.current = [...pitchers];
          initMyPitchersRef.current = [...myPitchers];
          alert("저장 완료");
        })
        .catch((error) => {
          console.log(error);
        });
    })();
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
              <Row className={style["mpZero"]}>
                <Col>
                  <Row className={style["playerListHead"]}>
                    <Col className={style["playerListHead-div"]}>
                      <div
                        className={style["playerListHead-div"]}
                        style={{ backgroundColor: listTab[0] }}
                        onClick={() => {
                          setListTab(["#041e42", "#ffffff00"]);
                          setToggle(true);
                        }}
                      >
                        타자 선수 목록
                      </div>
                    </Col>
                    <Col className={style["playerListHead-div"]}>
                      <div
                        className={style["playerListHead-div"]}
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
                        addMyHitter={addMyHitter}
                      ></HitterList>
                    )}
                    {!toggle && (
                      <PicherList
                        pitchers={pitchers}
                        addMyPitcher={addMyPitcher}
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
                        <div>{user.userPayroll.toLocaleString("ko-KR")} TG</div>
                      </div>
                      <div className={style["budget-bottom-right"]}>
                        <div></div>
                        <div>
                          {(
                            user.userPayroll -
                            myHitters.reduce(function add(sum, item) {
                              return sum + item.salary;
                            }, 0) -
                            myPitchers.reduce(function add(sum, item) {
                              return sum + item.salary;
                            }, 0)
                          ).toLocaleString("ko-KR")}{" "}
                          TG
                        </div>
                      </div>
                    </Row>
                  </Row>
                  <Row className={style["mpZero"]}>
                    <Row className={style["playerHead"]}>
                      <div>
                        보유 선수 / 타자:{myHitters.length} 투수:
                        {myPitchers.length} 총:
                        {myHitters.length + myPitchers.length}
                      </div>
                    </Row>
                    <Row className={`${style["playerBody"]}`}>
                      {toggle && (
                        <MyHitterList
                          hitters={myHitters}
                          addHitter={addHitter}
                        ></MyHitterList>
                      )}
                      {!toggle && (
                        <MyPicherList
                          pitchers={myPitchers}
                          addPitcher={addPitcher}
                        ></MyPicherList>
                      )}
                    </Row>
                  </Row>
                </Col>
              </Row>
              <Row className={style["btnGroup"]}>
                <div
                  className={`${style["btn"]} ${style["bg-color-cst1"]}`}
                  onClick={() => {
                    dispatch(configActions.setUrl("main"));
                  }}
                >
                  MAIN
                </div>
                <div
                  className={`${style["btn"]} ${style["bg-color-cst3"]}`}
                  onClick={() => {
                    dispatch(configActions.setUrl("manage"));
                  }}
                >
                  구단관리
                </div>
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
