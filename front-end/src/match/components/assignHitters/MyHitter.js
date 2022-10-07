import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../../css/assignHitters/MyHitterList.module.css";

const MyHitter = (props) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.MyHitter,
    item: { hitter: props.hitter },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();

      if (didDrop) {
        props.changeHitter(item.hitter, didDrop.targetIdx);
      }
    },
  }));

  return (
    <>
      <tr ref={drag}>
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
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.slg}</td>
        <td>{props.hitter.slg}</td>
      </tr>
    </>
  );
};
export default MyHitter;
