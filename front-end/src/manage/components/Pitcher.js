import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../css/PitcherList.module.css";

const Pitcher = (props) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Pitcher,
    item: { pitcher: props.pitcher, index: props.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 선발투수를 구원투수 영역에 넣을 경우
      if (didDrop) {
        // 구원투수목록에 추가
        if (didDrop.name === "BullpenList") props.addBullpens(item.pitcher);
      }
    },
  }));

  // 드롭 가능하게 해줌
  const [, drop] = useDrop({
    accept: "pitcher",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      if (dragIndex === hoverIndex) {
        return;
      }
      // x, y 좌표를 비교해 절반 이상 넘어가면 위치 바뀌도록 함. 여러 칸을 건너 뛰면 한번에 다 넘어가야함.
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      props.pitTopit(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  if (isDragging) {
    props.onMouseLeave();
  }

  return (
    <>
      <tr
        ref={ref}
        data-testid={`pitcher`}
        onMouseOver={props.onMouseOver}
        onMouseLeave={props.onMouseLeave}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.addBullpens(props.pitcher);
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
        <td>{props.pitcher.game}</td>
        <td>{props.pitcher.inning}</td>
        <td>{props.pitcher.win}</td>
        <td>{props.pitcher.lose}</td>
      </tr>
    </>
  );
};

export default Pitcher;
