import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/HitterList.module.css";

const Hitter = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Hitter,
    item: { hitter: props.hitter },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 타자를 보유타자 영역에 넣을 경우
      if (didDrop) {
        // 보유 타자목록에 추가
        props.addMyHitter(item.hitter);
      }
    },
  }));

  // if (isDragging) {
  //   props.onMouseLeave();
  // }

  return (
    <>
      <tr
        ref={drag}
        data-testid={`hitter`}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.addMyHitter(props.hitter);
            // props.onMouseLeave();
          }
        }}
      >
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
        <td>{props.hitter.obp}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.homerun}</td>
        <td>{props.hitter.salary.toLocaleString("ko-KR")}</td>
      </tr>
    </>
  );
};
export default Hitter;
