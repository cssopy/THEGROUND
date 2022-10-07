import styles from "../../css/main/BallVelocity.module.css";

const BallVelocity = (props) => {
  // 구속 나타내는 컴포넌트
  const { velocity, type } = props;

  return (
    <>
      <div className={`${styles["velocity-content"]}`}>
        <div
          className={`${styles["velocity-title"]} d-flex justify-content-center align-items-center`}
        >
          구속
        </div>
        <div className="d-flex justify-content-center">
          <div
            style={{
              fontSize: "20px",
              lineHeight: "46px",
              marginRight: "10px",
            }}
          >{`${type} `}</div>
          <div>{velocity} km/h</div>
        </div>
      </div>
    </>
  );
};

export default BallVelocity;
