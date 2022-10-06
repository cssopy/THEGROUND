import { useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux/es/exports";

import axios from "axios";

import MyHitterList from "./MyHitterList";
import Hitter from "./Hitter";
import Pitcher from "./Pitcher";

import style from "../../css/assignHitters/AssignHitters.module.css";

import BackApi from "../../../api/BackApi";
import { testActions } from "../../../redux/slice/testSlice";

const AssignHitters = (props) => {
  const {
    myHitters,
    setPageActive,
    brief,
    user,
    pitcher,
    oppoPitcher,
    players,
  } = props;

  const dispatch = useDispatch();

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
    if (
      hitters.filter((item) => {
        return item !== null;
      }).length === 9
    ) {
      const hitterLineup = {
        matchSeq: brief.matchSeq.startingPitcher,
        matchSettingPitcher: !brief.matchSeq.teamName
          ? brief.home.startingPitcher
          : brief.away.startingPitcher,
        matchSetting1st: hitters[0],
        matchSetting2nd: hitters[1],
        matchSetting3rd: hitters[2],
        matchSetting4th: hitters[3],
        matchSetting5th: hitters[4],
        matchSetting6th: hitters[5],
        matchSetting7th: hitters[6],
        matchSetting8th: hitters[7],
        matchSetting9th: hitters[8],
      };

      let lineUp = {};
      lineUp.home = {
        teamName: brief.home.teamName,
        teamLogoUrl: brief.home.teamLogoUrl,
      };
      lineUp.home.lineup = [];
      for (const [index, hit] of hitters.entries()) {
        lineUp.home.lineup.push({
          order: index + 1,
          playerSeq: hit.hitterSeq,
        });
      }
      lineUp.home.lineup.push({
        order: 10,
        playerSeq: pitcher.picherSeq,
      });
      lineUp.away = {
        teamName: brief.away.teamName,
        teamLogoUrl: brief.away.teamLogoUrl,
      };
      lineUp.away.lineup = [];
      for (const [index, hit] of players.hitter.entries()) {
        lineUp.away.lineup.push({
          order: index + 1,
          playerSeq: hit.hitterSeq,
        });
      }
      lineUp.away.lineup.push({
        order: 10,
        playerSeq: oppoPitcher.picherSeq,
      });

      dispatch(testActions.setBattingOrder(hitterLineup));
      setPageActive([false, false, true]);

      // (async () => {
      //   await axios
      //     .post(BackApi.game.brief, hitterLineup, {
      //       headers: {
      //         "X-ACCESS-TOKEN": user.jwt,
      //       },
      //     })
      //     .then(() => {
      //       setPageActive([false, false, true]);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // })();
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
                    hitters={myHitters2}
                    players={players}
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
                          backgroundColor:
                            oppoPitcher.pitArm === "L" ? "#bf0d3e" : "#0d5fbf",
                        }}
                      >
                        {oppoPitcher.pitArm === "L" ? "좌완" : "우완"}
                      </div>
                      {oppoPitcher.pitcherName}
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
