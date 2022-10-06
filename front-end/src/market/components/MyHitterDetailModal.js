import { Row } from "react-bootstrap";
import Radar from "./Radar";

import style from "../css/MyHitterDetailModal.module.css";

const MyHitterDetailModal = (props) => {
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
          <Row className={style["stat"]}></Row>
        </Row>
      </Row>
    </>
  );
};

export default MyHitterDetailModal;
