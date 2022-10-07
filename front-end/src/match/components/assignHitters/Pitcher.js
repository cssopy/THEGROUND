import { Row } from "react-bootstrap";

import style from "../../css/assignHitters/Player.module.css";

const Hitter = (props) => {
  return (
    <>
      <Row style={{ margin: "0", padding: "0" }}>
        <div className={style["seq"]}>SP</div>
        <div className={style["playerInfo"]}>
          {props.pitcher ? (
            props.pitcher.pitArm === "L" ? (
              <div className={style["leftPitcher"]}></div>
            ) : (
              <div className={style["rightPitcher"]}></div>
            )
          ) : null}
          {props.pitcher ? props.pitcher.pitcherName : null}
        </div>
      </Row>
    </>
  );
};

export default Hitter;
