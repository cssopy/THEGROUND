import { Table } from "react-bootstrap";

import style from "../css/HoldingBatter.module.css";

import Batter from "./Batter";

const BatterList = () => {
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
            <th>OPS</th>
            <th>WAR</th>
          </tr>
        </thead>
        <tbody className={style["tbody"]}>
          <Batter
            stand="우타"
            name="리오넬 메시"
            avg={0.314}
            onBase={0.123}
            slug={0.456}
            ops={0.789}
            war={0.159}
          ></Batter>
          <Batter
            stand="좌타"
            name="리오넬 메시2"
            avg={0.314}
            onBase={0.123}
            slug={0.456}
            ops={0.789}
            war={0.159}
          ></Batter>
        </tbody>
      </Table>
    </>
  );
};

export default BatterList;
