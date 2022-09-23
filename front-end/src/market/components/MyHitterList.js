import { memo, useState } from "react";
import { Table } from "react-bootstrap";

import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";

import style from "../css/MyHitterList.module.css";

import MyHitter from "./MyHitter";

import HitterDetailModal from "./HitterDetailModal";

const HitterList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Hitter,
    drop: () => ({ name: "MyHitterList" }),
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

  const onMouseOver = (hitter) => {
    setModalIsOpen(true);
    setHitter(hitter);
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
            <th>타율</th>
            <th>게임수</th>
            <th>타수</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>홈런</th>
          </tr>
        </thead>
        <tbody
          className={style["tbody"]}
          ref={drop}
          style={{ backgroundColor }}
          data-testid="myHitterList"
        >
          {props.hitters.map((hitter, index) => (
            <MyHitter
              key={index}
              idx={index}
              hitter={hitter}
              removeHitter={props.removeHitter}
              onMouseOver={() => {
                onMouseOver(hitter);
              }}
              onMouseLeave={onMouseLeave}
            ></MyHitter>
          ))}
        </tbody>
      </Table>
      {modalIsOpen && <HitterDetailModal hitter={hitter} />}
    </>
  );
});

export default HitterList;
