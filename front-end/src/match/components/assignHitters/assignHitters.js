import { useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import MyHitterList from "./MyHitterList";
import Hitter from "./Hitter";
import Pitcher from "./Pitcher";

import style from "../../css/assignHitters/AssignHitters.module.css";

const AssignHitters = (props) => {
  const { myHitters, setPageActive } = props;

  const [myHitters2, setMyHitters] = useState(myHitters);
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
    let temMyHitters = myHitters2;

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
    let temMyHitters = myHitters2;

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
    // if (
    //   hitters.filter((item) => {
    //     return item !== null;
    //   }).length === 9
    // ) {
    //   setPageActive([false, false, true]);
    // } else {
    //   alert(
    //     `${
    //       hitters.filter((item) => {
    //         return item !== null;
    //       }).length
    //     }명만 지정됨`
    //   );
    // }
    setPageActive([false, false, true]);
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
                    hitters={myHitters2}
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
