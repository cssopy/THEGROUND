import styles from "../../css/changePlayer/ChangeHitters.module.css";

const Hitter = (props) => {
  // 단일 타자 객체
  const { hitter, hitToRel, idx } = props;

  return (
    <>
      <tr>
        <td>
          <div
            className={
              styles[hitter.batArm === "좌타" ? "leftHitter" : "rightHitter"]
            }
          >
            {hitter.batArm}
          </div>
        </td>
        <td>{hitter.name}</td>
        <td>{hitter.avg}</td>
        <td>{hitter.game}</td>
        <td>{hitter.atBat}</td>
        <td>{hitter.obp}</td>
        <td>{hitter.slg}</td>
        <td>{hitter.homerun}</td>
      </tr>
    </>
  );
};

export default Hitter;
