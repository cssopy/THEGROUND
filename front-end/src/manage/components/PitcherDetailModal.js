import { Row } from "react-bootstrap";
import Radar from "./Radar";

import style from "../css/PitcherDetailModal.module.css";

const PitcherDetailModal = (props) => {
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
          <Row className={style["stat"]}></Row>
        </Row>
      </Row>
    </>
  );
};

export default PitcherDetailModal;
