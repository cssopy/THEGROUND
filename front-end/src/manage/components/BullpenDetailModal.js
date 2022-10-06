import { Row } from "react-bootstrap";
import Radar from "./Radar";

import style from "../css/BullpenDetailModal.module.css";

const BullpenDetailModal = (props) => {
  const { pitcher } = props;

  const data = [
    {
      taste: "평균자책점",
      chardonay: pitcher.era / 5,
    },
    {
      taste: "경기",
      chardonay: pitcher.game / 100,
    },
    {
      taste: "이닝",
      chardonay: pitcher.inning / 300,
    },
    {
      taste: "승리",
      chardonay: pitcher.win / pitcher.game,
    },
    {
      taste: "패배",
      chardonay: pitcher.lose / pitcher.game,
    },
  ];
  return (
    <>
      <Row className={style["modal"]}>
        <Row className={style["head"]}>
          <div>{props.pitcher.pitcherName}</div>
        </Row>
        <Row className={style["body"]}>
          <Row>
            <Radar data={data} />
          </Row>
          <Row className={style["stat"]}>
            <table>
              <tbody>
                <tr>
                  <td>타율</td>
                  <td>게임수</td>
                  <td>스탠드</td>
                  <td>타수</td>
                  <td>안타</td>
                  <td>2루타</td>
                  <td>3루타</td>
                  <td>홈런</td>
                  <td>타점</td>
                  <td>득점</td>
                  <td>도루</td>
                </tr>
                <tr>
                  <td>{pitcher.era}</td>
                  <td>{pitcher.game}</td>
                  <td>{pitcher.inning}</td>
                  <td>{pitcher.win}</td>
                  <td>{pitcher.lose}</td>
                  <td>{pitcher.pitArm === "L" ? "좌" : "우"}</td>
                  <td>{pitcher.save}</td>
                  <td>{pitcher.hold}</td>
                  <td>{pitcher.strikeout}</td>
                  <td>{pitcher.hits}</td>
                  <td>{pitcher.homerun}</td>
                  {/* "era": 3,
            "game": 22,
            "inning": 121,
            "win": 10,
            "lose": 8,
            "pitArm": "L",
            "save": 0,
            "hold": 0,
            "strikeout": 144,
            "hits": 103,
            "homerun": 15,
            "run": 51,
            "walk": 21,
            "hitByPitch": 3,
            "rating": 0.0,
            "whip": 1.02,
            "so9": 10.65,
            "bb9": 1.55,
            "soRate": 29.5,
            "bbRate": 4.3,
            "wpa": 0.7,
            "war": 3.4, */}
                </tr>
                <tr>
                  <td>볼넷</td>
                  <td>삼진</td>
                  <td>출루율</td>
                  <td>장타율</td>
                  <td>OPS</td>
                  <td>IsoP</td>
                  <td>BABIP</td>
                  <td>wOBA</td>
                  <td>wrc</td>
                  <td>wpa</td>
                  <td>war</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default BullpenDetailModal;
