import { useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import MyHitterList from "./MyHitterList";
import Hitter from "./Hitter";
import Pitcher from "./Pitcher";

import style from "../../css/assignHitters/AssignHitters.module.css";

const AssignHitters = () => {
  const [myHitters, setMyHitters] = useState([
    {
      hitterSeq: 17,
      batArm: "R",
      hitterName: "타자17",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 18,
      batArm: "L",
      hitterName: "타자18",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 19,
      batArm: "R",
      hitterName: "타자19",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 20,
      batArm: "L",
      hitterName: "타자20",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 21,
      batArm: "R",
      hitterName: "abcdeabcdeabcdeabcde",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 22,
      batArm: "L",
      hitterName: "타자이름이무려열글자",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 23,
      batArm: "L",
      hitterName: "타자23",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 24,
      batArm: "L",
      hitterName: "타자24",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 25,
      batArm: "L",
      hitterName: "타자25",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 26,
      batArm: "L",
      hitterName: "타자26",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 27,
      batArm: "L",
      hitterName: "타자27",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 28,
      batArm: "L",
      hitterName: "타자28",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 29,
      batArm: "L",
      hitterName: "타자29",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 30,
      batArm: "L",
      hitterName: "타자30",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 31,
      batArm: "L",
      hitterName: "타자31",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
    {
      hitterSeq: 32,
      batArm: "L",
      hitterName: "타자32",
      avg: 0.314,
      game: 0.123,
      atBat: 0.456,
      obp: 0.789,
      slg: 0.159,
      homerun: 2,
    },
  ]);
  const [hitters, setHitters] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const pitcher = { pitcherSeq: 1, pitcherName: "박찬호", pitArm: "L" };

  const changeHitter = useCallback((hitter, targetIdx) => {
    let temHitters = hitters;
    let temMyHitters = myHitters;

    if (temHitters[targetIdx]) {
      let rIdx;
      for (let i = 0; i < temMyHitters.length; i++) {
        if (temMyHitters[i].hitterSeq === hitter.hitterSeq) {
          rIdx = i;
        }
      }
      temMyHitters.splice(rIdx, 1);
      temMyHitters.push(temHitters[targetIdx]);
      temHitters[targetIdx] = hitter;
    } else {
      let rIdx;
      for (let i = 0; i < temMyHitters.length; i++) {
        if (temMyHitters[i].hitterSeq === hitter.hitterSeq) {
          rIdx = i;
        }
      }
      temMyHitters.splice(rIdx, 1);
      temHitters[targetIdx] = hitter;
    }

    setHitters(() => {
      return [...temHitters];
    });
    setMyHitters(() => {
      return [...temMyHitters];
    });
  }, []);

  const changeHitter2 = useCallback((originIdx, targetIdx) => {
    let temHitters = hitters;

    let temp = temHitters[targetIdx];
    temHitters[targetIdx] = temHitters[originIdx];
    temHitters[originIdx] = temp;

    setHitters(() => {
      return [...temHitters];
    });
  }, []);

  const removeHitter = useCallback((originIdx) => {
    let temHitters = hitters;
    let temMyHitters = myHitters;

    if (hitters[originIdx] !== null) {
      temMyHitters.push(temHitters[originIdx]);
      temHitters[originIdx] = null;

      setHitters(() => {
        return [...temHitters];
      });
      setMyHitters(() => {
        return [...temMyHitters];
      });
    }
  }, []);

  const next = () => {
    if (
      hitters.filter((item) => {
        return item !== null;
      }).length === 9
    ) {
      alert("9명 전원 지정 완료");
    } else {
      alert(
        `${
          hitters.filter((item) => {
            return item !== null;
          }).length
        }명만 지정됨`
      );
    }
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
            <Row className={style["mainHead"]}>
              <div>타선 지정</div>
            </Row>
            <Row className={style["mainBody"]}>
              <Col>
                <Row className={style["playerHead"]}>
                  <div>보유 선수</div>
                </Row>
                <Row className={style["playerBody"]}>
                  <MyHitterList
                    hitters={myHitters}
                    changeHitter={changeHitter}
                  />
                </Row>
              </Col>
              <Col>
                <Row>
                  <Row className={style["oppoPitcherHead"]}>
                    <div>상대의 선발 투수</div>
                  </Row>
                  <Row className={style["oppoPitcherBody"]}>
                    <div>
                      <div
                        className={style["stand"]}
                        style={{
                          backgroundColor: true ? "#bf0d3e" : "#0d5fbf",
                        }}
                      >
                        좌완
                      </div>
                      류현진
                    </div>
                  </Row>
                </Row>
                <Row>
                  <Row className={style["hitterHead"]}>
                    <div>선발 타자</div>
                  </Row>
                  <Row className={style["hitterBody"]}>
                    {hitters.map((hitter, index) => {
                      return (
                        <Hitter
                          hitter={hitter}
                          key={index}
                          idx={index}
                          removeHitter={removeHitter}
                          changeHitter={changeHitter2}
                        ></Hitter>
                      );
                    })}
                    {<Pitcher pitcher={pitcher} />}
                  </Row>
                </Row>
                <Row className={style["btn"]} onClick={next}>
                  <div>
                    NEXT <AiFillPlayCircle className={style["start"]} />
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </DndProvider>
    </>
  );
};

export default AssignHitters;
