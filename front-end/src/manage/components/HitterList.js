import { memo } from "react";
import { Table } from "react-bootstrap";

import style from "../css/HitterList.module.css";

import Hitter from "./Hitter";

const HitterList = memo((props) => {
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
        <tbody className={style["tbody"]}>
          {props.hitters.map((hitter, index) => (
            <Hitter key={index} hitter={hitter}></Hitter>
          ))}
        </tbody>
      </Table>
    </>
  );
});

export default HitterList;
