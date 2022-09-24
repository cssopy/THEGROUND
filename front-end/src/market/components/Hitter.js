import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/HitterList.module.css";

const Hitter = (props) => {
  const [, drag] = useDrag(() => ({
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
        props.addHitter(item.hitter);
        // props.onMouseLeave();
      }
    },
  }));

  return (
    <>
      <tr
        ref={drag}
        data-testid={`hitter`}
        // onMouseOver={props.onMouseOver}
        // onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.addHitter(props.hitter);
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
