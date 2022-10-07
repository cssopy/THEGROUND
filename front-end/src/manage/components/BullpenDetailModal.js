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
                  <td>ERA</td>
                  <td>경기수</td>
                  <td>이닝수</td>
                  <td>승리</td>
                  <td>패배</td>
                  <td>스탠드</td>
                  <td>세이브</td>
                  <td>홀드</td>
                  <td>삼진</td>
                  <td>피안타</td>
                  <td>피홈런</td>
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
                </tr>
                <tr>
                  <td>실점</td>
                  <td>볼넷</td>
                  <td>사구</td>
                  <td>승률</td>
                  <td>WHIP</td>
                  <td>SO9</td>
                  <td>BB9</td>
                  <td>삼진율</td>
                  <td>볼넷율</td>
                  <td>WPA</td>
                  <td>WAR</td>
                </tr>
                <tr>
                  <td>{pitcher.run}</td>
                  <td>{pitcher.walk}</td>
                  <td>{pitcher.hitByPitch}</td>
                  <td>{pitcher.rating}</td>
                  <td>{pitcher.whip}</td>
                  <td>{pitcher.so9}</td>
                  <td>{pitcher.bb9}</td>
                  <td>{pitcher.soRate}</td>
                  <td>{pitcher.bbRate}</td>
                  <td>{pitcher.wpa}</td>
                  <td>{pitcher.war}</td>
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
