import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux/es/exports";

import Pitcher from "./Pitcher";
import { ItemTypes } from "./ItemTypes.js";

import style from "../css/PitcherList.module.css";

import PitcherDetailModal from "./PitcherDetailModal";

const PitcherList = memo((props) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Bullpen,
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

  const players = useSelector((state) => state.player.players);

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
          data-testid="pitcherList"
        >
          {props.pitchers.map((pitcher, index) => {
            return (
              <Pitcher
                key={pitcher.pitcherSeq}
                index={index}
                pitcher={pitcher}
                addBullpens={props.addBullpens}
                pitTopit={props.pitTopit}
                onMouseOver={() => {
                  onMouseOver(pitcher);
                }}
                onMouseLeave={onMouseLeave}
              ></Pitcher>
            );
          })}
        </tbody>
      </Table>
      {modalIsOpen && <PitcherDetailModal pitcher={pitcher} />}
    </>
  );
});

export default PitcherList;
