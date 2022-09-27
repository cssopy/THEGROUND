import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/PitcherList.module.css";

const Pitcher = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Pitcher,
    item: { pitcher: props.pitcher },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 타자를 보유타자 영역에 넣을 경우
      if (didDrop) {
        // 보유 타자목록에 추가
        props.addMyPitcher(item.pitcher);
      }
    },
  }));

  if (isDragging) {
    props.onMouseLeave();
  }

  return (
    <>
      <tr
        ref={drag}
        data-testid={`pitcher`}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.addMyPitcher(props.pitcher);
            props.onMouseLeave();
          }
        }}
      >
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
        <td>{props.pitcher.inning}</td>
        <td>{props.pitcher.win}</td>
        <td>{props.pitcher.lose}</td>
        <td>{props.pitcher.salary.toLocaleString("ko-KR")}</td>
      </tr>
    </>
  );
};

export default Pitcher;
