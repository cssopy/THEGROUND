import styles from "../css/ResultLogs.module.css";

const ResultLogs = (props) => {
  const { logs, gameLog } = props;

  // 로그 종류에 따른 색 등 구분 필요

  return (
    <>
      <div className={styles.body}>
        <div
          className={`${styles.logs} ${gameLog[0] ? styles.changeLogs : ""} `}
        >
          <div
            className={`${styles.title} ${
              gameLog[0] ? styles.changeTitle : ""
            }`}
          >
            중계 기록
          </div>
          <div
            className={`${styles.content} ${
              gameLog[0] ? styles.changeContent : ""
            }`}
          >
            {logs.map((log, idx) => {
              return <div key={idx}>{log}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultLogs;
