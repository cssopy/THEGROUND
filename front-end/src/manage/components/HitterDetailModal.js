import { Row } from "react-bootstrap";
import Radar from "./Radar";

import style from "../css/HitterDetailModal.module.css";

const HitterDetailModal = (props) => {
  const { hitter } = props;

  // 타율 출루율 장타율 볼넷 삼진
  const data = [
    {
      taste: "타율",
      chardonay: hitter.avg,
    },
    {
      taste: "출루율",
      chardonay: hitter.obp,
    },
    {
      taste: "장타율",
      chardonay: hitter.slg,
    },
    {
      taste: "볼넷",
      chardonay: hitter.walks / 200,
    },
    {
      taste: "삼진",
      chardonay: hitter.strikeout / 200,
    },
  ];

  return (
    <>
      <Row className={style["modal"]}>
        <Row className={style["head"]}>
          <div>{props.hitter.hitterName}</div>
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
                  <td>{hitter.avg}</td>
                  <td>{hitter.game}</td>
                  <td>{hitter.batArm === "L" ? "좌" : "우"}</td>
                  <td>{hitter.atBat}</td>
                  <td>{hitter.hit}</td>
                  <td>{hitter.doubles}</td>
                  <td>{hitter.triple}</td>
                  <td>{hitter.homerun}</td>
                  <td>{hitter.rbi}</td>
                  <td>{hitter.run}</td>
                  <td>{hitter.steal}</td>
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
                  <td>{hitter.walks}</td>
                  <td>{hitter.strikeout}</td>
                  <td>{hitter.obp}</td>
                  <td>{hitter.slg}</td>
                  <td>{hitter.ops}</td>
                  <td>{hitter.isop}</td>
                  <td>{hitter.babip}</td>
                  <td>{hitter.woba}</td>
                  <td>{hitter.wrc}</td>
                  <td>{hitter.wpa}</td>
                  <td>{hitter.war}</td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default HitterDetailModal;
