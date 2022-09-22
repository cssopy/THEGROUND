import { useState, useEffect, useCallback } from "react";
import { Row, Col, Button } from "react-bootstrap";



import styles from '../css/ChangePlayer.module.css';
import ChangePitcher from "./ChangePitchers";
import ChangeReliefers from "./ChangeReliefers";
import ChangeHitters from "./ChangeHitters";


const ChangePlayer = (props) => {

  const { open, close } = props;

  const [hitters, setHitters] = useState([]);
  const [pitchers, setPitchers] = useState([]);
  const [reliefers, setReliefers] = useState([]);
  
  // 사용자가 save 하기전 선발투수 및 구원투수 목록
  const [initHitters, setInitHitters] = useState([]);
  const [initPitchers, setInitPitchers] = useState([]);
  const [initReliefers, setInitReliefers] = useState([]);
  

  // 최초 한번 타자, 선발투수, 구원투수 데이터를 받아 초기화
  useEffect(() => {
    // 서버에서 데이터 얻어와서 초기화 (hitters, pitchers, reliefers, initPitchers, initReliefers)
    // API 구현되면 그때 다시 수정

    const apiHitters = [
      {
        hitterSeq: 1,
        batArm: "우타",
        name: "선발타자 1",
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
        name: "선발타자 2",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },{
        hitterSeq: 3,
        batArm: "우타",
        name: "선발타자 3",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
      {
        hitterSeq: 4,
        batArm: "좌타",
        name: "선발타자 4",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },{
        hitterSeq: 5,
        batArm: "우타",
        name: "선발타자 5",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
      {
        hitterSeq: 6,
        batArm: "좌타",
        name: "선발타자 6",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },{
        hitterSeq: 7,
        batArm: "우타",
        name: "선발타자 7",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
      {
        hitterSeq: 8,
        batArm: "좌타",
        name: "선발타자 8",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },{
        hitterSeq: 9,
        batArm: "우타",
        name: "선발타자 9",
        avg: 0.314,
        game: 0.123,
        atBat: 0.456,
        obp: 0.789,
        slg: 0.159,
        homerun: 2,
      },
    ];
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
    setHitters([...apiHitters]);
    setPitchers([...apiPitchers]);
    setReliefers([...apiReliefers]);
    setInitHitters([...apiHitters]);
    setInitPitchers([...apiPitchers]);
    setInitReliefers([...apiReliefers]);
  }, []);

  // reset 버튼 함수
  const reset = () => {
    // pitchers, reliefers를 save 하기전 값들인 initPitchersin, itReliefers으로 재초기화
    setHitters([...initHitters]);
    setPitchers([...initPitchers]);
    setReliefers([...initReliefers]);
  };

  // save 버튼 함수
  const save = () => {
    // 현재 pitchers, reliefers 의 목록을 서버에 전달
    // 구단관리 API에 저장 관련 API필요 => 백엔드에 요청
    alert("구단관리 API에 저장 관련 API필요 => 백엔드에 요청");
  };

  // Reliefer에서 Hitter로
  const relToHit = useCallback((rel, idx) => {
    setHitters((prevState) => { return [...prevState, rel] });
    setReliefers((prevState) => prevState.filter((r) => r.hitterSeq !== idx));
  }, []);

  // Hitter에서 Reliefer로
  const hitToRel = useCallback((hit, idx) => {
    setReliefers((prevState) => [...prevState, hit]);
    setHitters((prevState) => prevState.filter((h) => h.hitterSeq !== idx));
  }, []);

  const pitTopit = useCallback((dragIndex, hoverIndex) => {
    setPitchers((prevState) => {
      const pits = prevState.slice();
      pits.splice(dragIndex, 1);
      pits.splice(hoverIndex, 0, prevState[dragIndex]);
      return pits;
    });
  }, []);
      

  return (  
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={`${styles.modal} ${open ? styles.openModal : ""}`}>
      {open ? (
        <div className={styles.section}>
          <div className={styles.header}>
            선수 교체
            <button className={styles['close-button']} onClick={close}>
              &times;
            </button>
          </div>
          <div>
            <Row>
              <Col>
                <ChangeReliefers
                  reliefers={reliefers}
                  relToHit={relToHit}
                 />
              </Col>
              <Col>
                <Row>
                  <ChangePitcher
                    pitchers={pitchers}
                    pitTopit={pitTopit}
                  />
                </Row>
                <Row>
                  <ChangeHitters
                    hitters={hitters}
                    hitToRel={hitToRel}
                  />
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center m-4 ">
                    <Button className={styles.reset} variant="danger" onClick={reset}>
                      RESET
                    </Button>
                    <Button className={styles.save} variant="success" onClick={save}>
                      SAVE
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChangePlayer;