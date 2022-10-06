import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/BullpenList.module.css";
import { useEffect } from "react";

const Bullpen = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
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
        data-testid={`bullpen`}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.addPitchers(props.bullpen);
            props.onMouseLeave();
          }
        }}
      >
        <td>
          <div
            className={
              style[
                props.bullpen.pitArm === "L" ? "leftPitcher" : "rightPitcher"
              ]
            }
          >
            {props.bullpen.pitArm === "L" ? "좌완" : "우완"}
          </div>
        </td>
        <td>{props.bullpen.pitcherName}</td>
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
