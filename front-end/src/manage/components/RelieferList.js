import { memo } from "react";
import { Table } from "react-bootstrap";

import style from "../css/RelieferList.module.css";

import Reliefer from "./Reliefer";

const RelieferList = memo((props) => {
  return (
    <>
      <Table className={`${style["table"]} table-borderless`}>
        <thead className={style["thead"]}>
          <tr className={style["color-cst6"]}>
            <th>스탠드</th>
            <th>이름</th>
            <th>ERA</th>
            <th>삼진</th>
            <th>실점</th>
            <th>WHIP</th>
          </tr>
        </thead>
        <tbody className={style["tbody"]}>
          {props.reliefers.map((reliefer, index) => (
            <Reliefer key={index} reliefer={reliefer}></Reliefer>
          ))}
        </tbody>
      </Table>
    </>
  );
});

export default RelieferList;
