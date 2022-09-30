import styles from "../css/PitcherResult.module.css";

const PitcherResult = (props) => {
  const { res, pitcher } = props;

  return (
    <div className={styles.pit}>
      <div className={styles.title}>{res ? "승리" : "패전"} 투수</div>
      {pitcher && (
        <div className={styles.row}>
          <div style={{ textAlign: "center", width: "100%" }}>
            <div className={styles[`${pitcher.pitArm}-pitcher`]}>
              {pitcher.pitArm === "L" ? "좌완" : "우완"}
            </div>
            <span>{pitcher.pitcherName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PitcherResult;
