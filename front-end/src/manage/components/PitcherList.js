import { memo } from "react";
import { Table } from "react-bootstrap";

import style from "../css/PitcherList.module.css";

import Pitcher from "./Pitcher";

const PitcherList = memo((props) => {
  return (
    <>
      <Table className={`${style["table"]} table-borderless`}>
        <thead className={style["thead"]}>
          <tr className={style["color-cst6"]}>
            <th>스탠드</th>
            <th>이름</th>
            <th>ERA</th>
            <th>게임수</th>
          </tr>
        </thead>
        <tbody className={style["tbody"]}>
          {props.pitchers.map((pitcher, index) => (
            <Pitcher key={index} pitcher={pitcher}></Pitcher>
          ))}
        </tbody>
      </Table>
    </>
  );
});

export default PitcherList;
