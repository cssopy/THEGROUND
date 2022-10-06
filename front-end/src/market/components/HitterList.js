import { memo, useState } from "react";
import { Table } from "react-bootstrap";

import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";

import style from "../css/HitterList.module.css";

import Hitter from "./Hitter";

import HitterDetailModal from "./HitterDetailModal";

const HitterList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.MyHitter,
    drop: () => ({ name: "hitterList" }),
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
  const [hitter, setHitter] = useState();

  // const onMouseOver = (hitter) => {
  //   setModalIsOpen(true);
  //   setHitter(hitter);
  // };

  // const onMouseLeave = () => {
  //   setModalIsOpen(false);
  // };

  return (
    <>
      <Table className={`${style["table"]} table-borderless`}>
        <thead className={style["thead"]}>
          <tr className={style["color-cst6"]}>
            <th>스탠드</th>
            <th>이름</th>
            <th>타율</th>
            <th>출루율</th>
            <th>장타율</th>
            <th>홈런</th>
            <th>TG</th>
          </tr>
        </thead>
        <tbody
          className={style["tbody"]}
          ref={drop}
          style={{ backgroundColor }}
          data-testid="hitterList"
        >
          {props.hitters.map((hitter) => (
            <Hitter
              key={hitter.hitterSeq}
              hitter={hitter}
              addMyHitter={props.addMyHitter}
              // onMouseOver={() => {
              //   onMouseOver(hitter);
              // }}
              // onMouseLeave={onMouseLeave}
            ></Hitter>
          ))}
        </tbody>
      </Table>
      {/* {modalIsOpen && <HitterDetailModal hitter={hitter} />} */}
    </>
  );
});

export default HitterList;
