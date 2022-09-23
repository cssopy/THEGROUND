import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/BullpenList.module.css";

const Bullpen = (props) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.Bullpen,
    item: { bullpen: props.bullpen },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 구원투수를 선발투수 영역에 넣을 경우
      if (didDrop) {
        // 선발투수목록에 추가
        props.addPitchers(item.bullpen);
        props.onMouseLeave();
      }
    },
  }));

  return (
    <>
      <tr
        ref={drag}
        data-testid={`bullpen`}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
      >
        <td>
          <div
            className={
              style[
                props.bullpen.pitArm === "좌완" ? "leftPitcher" : "rightPitcher"
              ]
            }
          >
            {props.bullpen.pitArm}
          </div>
        </td>
        <td>{props.bullpen.name}</td>
        <td>{props.bullpen.era}</td>
        <td>{props.bullpen.game}</td>
        <td>{props.bullpen.inning}</td>
        <td>{props.bullpen.win}</td>
        <td>{props.bullpen.lose}</td>
      </tr>
    </>
  );
};

export default Bullpen;
