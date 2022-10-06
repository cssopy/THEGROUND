import styles from "../../css/changePlayer/ChangeReliefers.module.css";

const Reliefer = (props) => {
  // 단일 교체 선수 객체
  const { reliefer, relToHit, idx } = props;

  return (
    <>
      <tr>
        <td>
          <div
            className={
              styles[reliefer.batArm === "좌타" ? "leftHitter" : "rightHitter"]
            }
          >
            {reliefer.batArm}
          </div>
        </td>
        <td>{reliefer.name}</td>
        <td>{reliefer.avg}</td>
        <td>{reliefer.game}</td>
        <td>{reliefer.atBat}</td>
        <td>{reliefer.obp}</td>
        <td>{reliefer.slg}</td>
        <td>{reliefer.homerun}</td>
      </tr>
    </>
  );
};

export default Reliefer;
