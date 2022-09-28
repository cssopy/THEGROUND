import style from "../css/HitterList.module.css";

const Hitter = (props) => {
  return (
    <>
      <tr onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
        <td>
          <div
            className={
              style[props.hitter.batArm === "L" ? "leftHitter" : "rightHitter"]
            }
          >
            {props.hitter.batArm === "L" ? "좌타" : "우타"}
          </div>
        </td>
        <td>{props.hitter.hitterName}</td>
        <td>{props.hitter.avg}</td>
        <td>{props.hitter.game}</td>
        <td>{props.hitter.atBat}</td>
        <td>{props.hitter.obp}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.homerun}</td>
      </tr>
    </>
  );
};
export default Hitter;
