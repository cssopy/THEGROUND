import style from "../css/MatchList.module.css";

const Match = (props) => {
  return (
    <>
      <tr>
        <td>{props.match.home}</td>
        <td>
          <span>{props.match.home_score}</span>
          <span className={style["scoreDash"]}>-</span>
          <span>{props.match.away_score}</span>
        </td>
        <td>{props.match.away}</td>
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
