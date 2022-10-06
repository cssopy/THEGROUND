import { useState, useEffect, useCallback } from "react";
import { Row, Col, Button } from "react-bootstrap";

import styles from "../../css/changePlayer/ChangePlayer.module.css";
import NextPlayer from "./NextPlayer";
import ChangePitcher from "./ChangePitchers";
import ChangeReliefers from "./ChangeReliefers";

const ChangePlayer = (props) => {
  const { open, close } = props;

  const [pitchers, setPitchers] = useState([]);
  const [reliefers, setReliefers] = useState([]);

  // 사용자가 save 하기전 선발투수 및 구원투수 목록
  const [initPitchers, setInitPitchers] = useState([]);
  const [initReliefers, setInitReliefers] = useState([]);
  const [selected, setSelected] = useState("");
  const inning = 0;

  // 최초 한번 타자, 선발투수, 구원투수 데이터를 받아 초기화
  useEffect(() => {
    // 서버에서 데이터 얻어와서 초기화 (hitters, pitchers, reliefers, initPitchers, initReliefers)
    // API 구현되면 그때 다시 수정

    const apiPitchers = [
      {
        pitcherSeq: 1,
        pitArm: "좌완",
        name: "선발투수 1",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 2,
        pitArm: "우완",
        name: "선발투수 2",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 3,
        pitArm: "좌완",
        name: "선발투수 3",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 4,
        pitArm: "좌완",
        name: "선발투수 4",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
      {
        pitcherSeq: 5,
        pitArm: "우완",
        name: "선발투수 5",
        era: 0.274,
        game: 50,
        inning: 180,
        win: 37,
        lose: 11,
      },
    ];
    const apiReliefers = [
      {
        hitterSeq: 10,
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
        hitterSeq: 11,
        batArm: "좌타",
        name: "레오나르도 다빈치",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
      {
        hitterSeq: 12,
        batArm: "우타",
        name: "이정재",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
    ];
    setPitchers([...apiPitchers]);
    setReliefers([...apiReliefers]);
    setInitPitchers([...apiPitchers]);
    setInitReliefers([...apiReliefers]);
    setSelected(inning ? apiReliefers[0] : apiPitchers[0]);
  }, []);

  // reset 버튼 함수
  const reset = () => {
    // pitchers, reliefers를 save 하기전 값들인 initPitchersin, itReliefers으로 재초기화
    setPitchers([...initPitchers]);
    setReliefers([...initReliefers]);
    close();
  };

  // save 버튼 함수
  const save = () => {
    // 현재 pitchers, reliefers 의 목록을 서버에 전달
    // 구단관리 API에 저장 관련 API필요 => 백엔드에 요청
    alert("구단관리 API에 저장 관련 API필요 => 백엔드에 요청");
  };

  // Reliefer에서 Hitter로
  const relToHit = useCallback((rel) => {
    // setHitters((prevState) => {
    //   return [...prevState, rel];
    // });
    setSelected(rel);
  }, []);

  // Pitcher 순서 변경
  // const pitTopit = useCallback((dragIndex, hoverIndex) => {
  //   setPitchers((prevState) => {
  //     const pits = prevState.slice();
  //     pits.splice(dragIndex, 1);
  //     pits.splice(hoverIndex, 0, prevState[dragIndex]);
  //     return pits;
  //   });
  // }, []);

  const pitTopit = (pitcher) => {
    setSelected(pitcher);
  };

  return (
    <div
      className={`${styles.modal} ${open ? styles.openModal : ""}`}
      onClick={reset}
    >
      {open ? (
        <div className={styles.section} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            선수 교체
            <button className={styles["close-button"]} onClick={close}>
              &times;
            </button>
          </div>
          <div>
            <Row>
              {inning ? (
                <Col>
                  <Row>
                    <NextPlayer
                      player={selected}
                      now={inning}
                      hand={selected.batArm}
                    />
                  </Row>
                  <ChangeReliefers
                    reliefers={reliefers}
                    relToHit={relToHit}
                    selected={selected}
                  />
                </Col>
              ) : (
                <Col>
                  <Row>
                    <NextPlayer
                      player={selected}
                      now={inning}
                      hand={selected.pitArm}
                    />
                  </Row>
                  <Row>
                    <ChangePitcher
                      pitchers={pitchers}
                      pitTopit={pitTopit}
                      selected={selected}
                    />
                  </Row>
                </Col>
              )}
              <Row>
                <Col className={styles.buttons}>
                  <Button
                    className={styles.save}
                    variant="success"
                    onClick={save}
                  >
                    SAVE
                  </Button>
                  <Button
                    className={styles.reset}
                    variant="danger"
                    onClick={reset}
                  >
                    CANCLE
                  </Button>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChangePlayer;
