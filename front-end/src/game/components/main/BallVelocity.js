import styles from "../../css/main/BallVelocity.module.css";

const BallVelocity = (props) => {
  // 구속 나타내는 컴포넌트
  return (
    <>
      <div className={`${styles["velocity-content"]}`}>
        <div
          className={`${styles["velocity-title"]} d-flex justify-content-center align-items-center`}
        >
          구속
        </div>
        <div className="d-flex justify-content-center">
          {props.velocity} km/h
        </div>
      </div>
    </>
  );
};

export default BallVelocity;
