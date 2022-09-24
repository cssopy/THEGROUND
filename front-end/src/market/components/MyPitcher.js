import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/PitcherList.module.css";

const Pitcher = (props) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.MyPitcher,
    item: { pitcher: props.pitcher },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 타자를 보유타자 영역에 넣을 경우
      if (didDrop) {
        // 보유 타자목록에서 제거
        props.removePitcher(props.idx);
        // props.onMouseLeave();
      }
    },
  }));

  return (
    <>
      <tr
        ref={drag}
        data-testid={`myPitcher`}
        // onMouseOver={props.onMouseOver}
        // onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.removePitcher(props.idx);
          }
        }}
      >
        <td>
          <div
            className={
              style[
                props.pitcher.pitArm === "좌완" ? "leftPitcher" : "rightPitcher"
              ]
            }
          >
            {props.pitcher.pitArm}
          </div>
        </td>
        <td>{props.pitcher.name}</td>
        <td>{props.pitcher.era}</td>
        <td>{props.pitcher.game}</td>
        <td>{props.pitcher.inning}</td>
        <td>{props.pitcher.win}</td>
        <td>{props.pitcher.lose}</td>
      </tr>
    </>
  );
};

export default Pitcher;