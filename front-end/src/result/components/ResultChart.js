import styles from "../css/ResultChart.module.css";

const ResultChart = (props) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center fs-5`}
      style={{ width: "900px", heigth: "30px", padding: "0px" }}
    >
      <div style={{ width: "300px", display: "flex", justifyContent: "end" }}>
        <div
          className={styles.homeChart}
          style={{ width: `${(300 * 7) / 10}px`, height: "20px" }}
        ></div>
      </div>
      <div style={{ width: "100px", textAlign: "end" }}>{"10"}</div>
      <div style={{ width: "100px", textAlign: "center" }}>
        {props.children}
      </div>
      <div style={{ width: "100px", textAlign: "start" }}>{"5"}</div>
      <div style={{ width: "300px" }}>
        <div
          className={styles.awayChart}
          style={{ width: `${(300 * 9) / 10}px`, height: "20px" }}
        ></div>
      </div>
    </div>
  );
};

export default ResultChart;
