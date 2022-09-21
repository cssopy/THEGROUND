import styles from '../css/CurrentHitter.module.css';

const CurrentHitter = (props) => {
  const {hitter} = props;

  return (
    <>
      <div className={`${styles.hitters} text-white py-2`}>
        <div className={`${styles.name} d-flex justify-content-center`}>{hitter.name}</div>
        <div className={`${styles.content} d-flex justify-content-center`}>{hitter.position[0]}<p className={styles.dashes}>ㅣ</p>{hitter.position[1]}</div>
        <div className={`${styles.log} d-flex justify-content-center`}>{hitter.log.join(', ')}</div>
      </div>
    </>
  );
};


export default CurrentHitter;