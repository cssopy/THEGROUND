import { Table } from "react-bootstrap";

import style from "../css/PitcherList.module.css";

import Pitcher from "./Pitcher";

const PitcherList = (props) => {
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
        <tbody className={style["tbody"]}>
          {props.pitchers.map((pitcher) => {
            return (
              <Pitcher key={pitcher.pitcherSeq} pitcher={pitcher}></Pitcher>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default PitcherList;
