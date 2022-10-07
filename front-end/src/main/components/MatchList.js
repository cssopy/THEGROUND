import { Table } from "react-bootstrap";

import style from "../css/MatchList.module.css";

import Match from "./Match";

const MatchList = (props) => {
  return (
    <>
      <Table className={`${style["table"]} table-borderless`}>
        <thead className={style["thead"]}>
          <tr className={style["color-cst6"]}>
            <th>Home</th>
            <th>점수</th>
            <th>Away</th>
            <th>결과</th>
          </tr>
        </thead>
        <tbody className={style["tbody"]}>
          {props.matchs.map((match, index) => (
            <Match key={index} match={match}></Match>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default MatchList;
