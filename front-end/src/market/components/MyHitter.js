import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/MyHitterList.module.css";

const Hitter = (props) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.MyHitter,
    item: { hitter: props.hitter },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 보유타자를 타자 영역에 넣을 경우
      if (didDrop) {
        // 보유 타자목록에서 삭제
        props.removeHitter(props.idx);
        // props.onMouseLeave();
      }
    },
  }));

  return (
    <>
      <tr
        ref={drag}
        data-testid={`myHitter`}
        // onMouseOver={props.onMouseOver}
        // onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.removeHitter(props.idx);
          }
        }}
      >
        <td>
          <div
            className={
              style[
                props.hitter.batArm === "좌타" ? "leftHitter" : "rightHitter"
              ]
            }
          >
            {props.hitter.batArm}
          </div>
        </td>
        <td>{props.hitter.name}</td>
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
