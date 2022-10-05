import styles from "../css/ResultChart.module.css";

const ResultChart = (props) => {
  return (
    <div className={styles.chart}>
      <div style={{ width: "300px", display: "flex", justifyContent: "end" }}>
        <div
          className={styles.homeChart}
          style={{ width: `${(300 * 10) / 10}px` }}
        ></div>
      </div>
      <div style={{ width: "60px", textAlign: "end" }}>{"10"}</div>
      <div style={{ width: "140px", textAlign: "center" }}>
        {props.children}
      </div>
      <div style={{ width: "60px", textAlign: "start" }}>{"5"}</div>
      <div style={{ width: "300px" }}>
        <div
          className={styles.awayChart}
          style={{ width: `${(300 * 10) / 10}px` }}
        ></div>
      </div>
    </div>
  );
};

export default ResultChart;
