import styles from '../css/StrikeZone.module.css';

const StrikeZone = (props) => {
  const { balls } = props;

  return (
    <>
      <div className={`${styles['strike-zone']}`} >
        공 날아오는거 찍기
      </div>
    </>
  );
};

export default StrikeZone;