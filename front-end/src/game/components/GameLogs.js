import styles from '../css/GameLogs.module.css';

const GameLogs = (props) => {

  const {logs} = props;

  return (
    <>
      <div className={`${styles.logs}`}>
        <div className={`${styles.title}`}>중계 기록</div>
        {logs.forEach(log => {
          return (<div>log</div>)
        })}
      </div>
    </>
  );
};

export default GameLogs;