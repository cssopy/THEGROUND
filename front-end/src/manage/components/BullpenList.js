import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDrop } from "react-dnd";

import style from "../css/BullpenList.module.css";

import Bullpen from "./Bullpen";
import { ItemTypes } from "./ItemTypes.js";

import PitcherDetailModal from "./PitcherDetailModal";

const BullpenList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Pitcher,
    drop: () => ({ name: "BullpenList" }),
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pitcher, setPitcher] = useState();

  const onMouseOver = (pitcher) => {
    setModalIsOpen(true);
    setPitcher(pitcher);
  };

  const onMouseLeave = () => {
    setModalIsOpen(false);
  };

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
          data-testid="bullpenList"
        >
          {props.bullpens.map((bullpen, index) => {
            if (bullpen != 0) {
              return (
                <Bullpen
                  key={index}
                  bullpen={bullpen}
                  addPitchers={props.addPitchers}
                  removeBullpens={props.removeBullpens}
                  onMouseOver={() => {
                    onMouseOver(bullpen);
                  }}
                  onMouseLeave={onMouseLeave}
                ></Bullpen>
              );
            }
          })}
        </tbody>
      </Table>
      {modalIsOpen && <PitcherDetailModal pitcher={pitcher} />}
    </>
  );
});

export default BullpenList;
