import styles from '../css/StrikeZone.module.css';
import Ball from './Ball';

const StrikeZone = (props) => {
  const { balls } = props;

  const makeBalls = () => {
    const result = [];
    for (let i=0; i<balls.length; i++) {
      result.push(<Ball ball={{...balls[i], num:i}} key={i} />)
    }
    return result;
  };

  return (
    <>
      <div className={`${styles['strike-zone']} d-flex justify-content-center align-items-center`} >
        <div className={`${styles.mainbox} d-flex justify-content-center align-items-center`}>
          {makeBalls()}
          <div className={`${styles.row}`}></div>
          <div className={`${styles.col}`}></div>
        </div>
      </div>
    </>
  );
};

export default StrikeZone;