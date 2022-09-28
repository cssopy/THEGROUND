import style from "../css/MatchList.module.css";

import teamLogo from "../../assets/etc/ground2.png";

const Match = (props) => {
  return (
    <>
      <tr>
        <td>
          {props.match.home}
          &nbsp;&nbsp;&nbsp;
          <img
            className={style["matchTeamLogo"]}
            src={teamLogo}
            alt="teamlogo"
          ></img>
        </td>
        <td>
          <span>{props.match.home_score}</span>
          <span className={style["scoreDash"]}>-</span>
          <span>{props.match.away_score}</span>
        </td>
        <td>
          <img
            className={style["matchTeamLogo"]}
            src={teamLogo}
            alt="teamlogo"
          ></img>
          &nbsp;&nbsp;&nbsp;
          {props.match.away}
        </td>
        <td
          style={{
            color:
              props.match.result === "Win"
                ? "cornflowerblue"
                : props.match.result === "Lose"
                ? "darksalmon"
                : "darkseagreen",
          }}
        >
          {props.match.result}
        </td>
      </tr>
    </>
  );
};

export default Match;
