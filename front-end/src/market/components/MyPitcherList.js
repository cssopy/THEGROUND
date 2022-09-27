import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDrop } from "react-dnd";

import MyPitcher from "./MyPitcher";
import { ItemTypes } from "./ItemTypes.js";

import style from "../css/MyPitcherList.module.css";

import MyPitcherDetailModal from "./MyPitcherDetailModal";

const PitcherList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Pitcher,
    drop: () => ({ name: "MyPitcherList" }),
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
            <th>이닝수</th>
            <th>승리</th>
            <th>패배</th>
            <th>연봉</th>
          </tr>
        </thead>
        <tbody
          className={style["tbody"]}
          ref={drop}
          style={{ backgroundColor }}
          data-testid="myPitcherList"
        >
          {props.pitchers.map((pitcher, index) => {
            return (
              <MyPitcher
                key={index}
                idx={index}
                pitcher={pitcher}
                addPitcher={props.addPitcher}
                onMouseOver={() => {
                  onMouseOver(pitcher);
                }}
                onMouseLeave={onMouseLeave}
              ></MyPitcher>
            );
          })}
        </tbody>
      </Table>
      {modalIsOpen && <MyPitcherDetailModal pitcher={pitcher} />}
    </>
  );
});

export default PitcherList;
