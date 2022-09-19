import { memo } from "react";
import { Table } from "react-bootstrap";
import { useDrop } from "react-dnd";

import Pitcher from "./Pitcher";
import { ItemTypes } from "./ItemTypes.js";

import style from "../css/PitcherList.module.css";

const PitcherList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Reliefer,
    drop: () => ({ name: "PitcherList" }),
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
            <th>ERA</th>
            <th>게임수</th>
            <th>이닝수</th>
            <th>승리</th>
            <th>패배</th>
          </tr>
        </thead>
        <tbody
          className={style["tbody"]}
          ref={drop}
          style={{ backgroundColor }}
          data-testid="pitcherList"
        >
          {props.pitchers.map((pitcher, index) => (
            <Pitcher key={index} pitcher={pitcher}></Pitcher>
          ))}
        </tbody>
      </Table>
    </>
  );
});

export default PitcherList;
