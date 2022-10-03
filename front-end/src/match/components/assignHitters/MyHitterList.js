import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

import style from "../../css/assignHitters/MyHitterList.module.css";

import Hitter from "./MyHitter";

const MyHitterList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Hitter,
    item: { hitter: props.hitter },
    drop: () => ({ name: "myHitters" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#ffffff00";
  if (isActive) {
    backgroundColor = "#aaaaaa6b";
  } else if (canDrop) {
    backgroundColor = "#aaaaaa32";
  }

  return (
    <>
      <Table className={`${style["table"]} table-borderless`}>
        <thead className={style["thead"]}>
          <tr className={style["color-cst6"]}>
            <th>스탠드</th>
            <th>이름</th>
            <th>타율</th>
            <th>게임수</th>
            <th>타수</th>
            <th>안타</th>
            <th>2루타</th>
            <th>3루타</th>
            <th>홈런</th>
            <th>타점</th>
            <th>볼넷</th>
            <th>삼진</th>
            <th>출루율</th>
            <th>장타율</th>
            <th>OPS</th>
          </tr>
        </thead>
        <tbody
          className={style["tbody"]}
          style={{ backgroundColor }}
          ref={drop}
        >
          {props.hitters.map((hitter) => (
            <Hitter
              key={hitter.hitterSeq}
              hitter={hitter}
              changeHitter={props.changeHitter}
            ></Hitter>
          ))}
        </tbody>
      </Table>
    </>
  );
});

export default MyHitterList;
