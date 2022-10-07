import { useRef } from "react";
import { Row } from "react-bootstrap";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";

import style from "../../css/assignHitters/Player.module.css";

const Hitter = (props) => {
  const ref = useRef(null);

  const [, drag] = useDrag(() => ({
    type: ItemTypes.Hitter,
    item: { hitter: props.hitter },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();

      if (didDrop) {
        if (didDrop.name === "myHitters") {
          props.removeHitter(props.idx);
        } else {
          props.changeHitter(props.idx, didDrop.targetIdx);
        }
      }
    },
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.MyHitter, ItemTypes.Hitter],
    item: { hitter: props.hitter },
    drop: () => ({ targetIdx: props.idx }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let opacity = 1;
  if (isActive) {
    opacity = 1;
  } else if (canDrop) {
    opacity = 0.7;
  }

  drag(drop(ref));

  return (
    <>
      <Row
        style={{ margin: "0", padding: "0" }}
        onMouseDown={(e) => {
          if (e.button === 2) {
            props.removeHitter(props.idx);
          }
        }}
      >
        <div className={style["seq"]}>{props.idx + 1}</div>
        <div className={style["playerInfo"]} ref={ref} style={{ opacity }}>
          {props.hitter ? (
            props.hitter.batArm === "L" ? (
              <div className={style["leftHitter"]}></div>
            ) : (
              <div className={style["rightHitter"]}></div>
            )
          ) : null}
          {props.hitter ? props.hitter.hitterName : null}
        </div>
      </Row>
    </>
  );
};

export default Hitter;
