import { useRef } from "react";
import styles from "../../css/changePlayer/ChangePitchers.module.css";

const Pitcher = (props) => {
  const ref = useRef(null);

  // 단일 투수 객체
  const { pitcher, pitTopit } = props;

  // 드래그 가능하게 해줌

  return (
    <>
      <tr>
        <td>
          <div
            className={
              styles[pitcher.pitArm === "좌완" ? "leftPitcher" : "rightPitcher"]
            }
          >
            {pitcher.pitArm}
          </div>
        </td>
        <td>{pitcher.name}</td>
        <td>{pitcher.era}</td>
        <td>{pitcher.game}</td>
        <td>{pitcher.inning}</td>
        <td>{pitcher.win}</td>
        <td>{pitcher.lose}</td>
      </tr>
    </>
  );
};

export default Pitcher;
