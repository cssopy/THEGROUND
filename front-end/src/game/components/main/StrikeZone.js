import styles from "../../css/main/StrikeZone.module.css";
import Ball from "./Ball";

const StrikeZone = (props) => {
  // strike 존 영역 표시 및 공 표시
  const { balls } = props;

  // 공 컴포넌트 생성
  const makeBalls = () => {
    const result = [];
    for (let i = 0; i < balls.length; i++) {
      result.push(<Ball ball={{ ...balls[i], num: i + 1 }} key={i} />);
    }
    return result;
  };

  return (
    <>
      <div
        className={`${styles["strike-zone"]} d-flex justify-content-center align-items-center`}
      >
        <div
          className={`${styles.mainbox} d-flex justify-content-center align-items-center`}
        >
          {makeBalls()}
          <div className={`${styles.row}`}></div>
          <div className={`${styles.col}`}></div>
        </div>
      </div>
    </>
  );
};

export default StrikeZone;
