import style from "../css/PitcherList.module.css";

const Rotation = (props) => {
  return (
    <>
      <tr>
        <td>
          <div
            className={
              style[
                props.pitcher.pitArm === "L" ? "leftPitcher" : "rightPitcher"
              ]
            }
          >
            {props.pitcher.pitArm === "L" ? "좌완" : "우완"}
          </div>
        </td>
        <td>{props.pitcher.pitcherName}</td>
        <td>{props.pitcher.era}</td>
        <td>{props.pitcher.game}</td>
        <td>{props.pitcher.inning}</td>
        <td>{props.pitcher.win}</td>
        <td>{props.pitcher.lose}</td>
      </tr>
    </>
  );
};

export default Rotation;
