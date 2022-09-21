import styles from '../css/GameLogs.module.css';

const GameLogs = (props) => {

  const {logs} = props;

  // 로그 종류에 따른 색 등 구분 필요

  return (
    <>
      <div className={`${styles.logs}`}>
        <div className={`${styles.title}`}>중계 기록</div>
        <div className={styles.content}>
          {logs.map((log, idx) => {
            return (<div key={idx}>{log}</div>)
          })}
        </div>
      </div>
    </>
  );
};

export default GameLogs;