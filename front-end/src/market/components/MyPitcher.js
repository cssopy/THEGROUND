import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/MyPitcherList.module.css";
import { useEffect } from "react";

const Pitcher = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
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
        props.addPitcher(item.pitcher);
      }
    },
  }));

  useEffect(() => {
    props.onMouseLeave();
  }, [isDragging]);

  return (
    <>
      <tr
        ref={drag}
        data-testid={`myPitcher`}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.addPitcher(props.pitcher);
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
