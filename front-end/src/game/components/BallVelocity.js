import styles from '../css/BallVelocity.module.css';

const BallVelocity = (props) => {

  return (
    <>
      <div className={`${styles['velocity-content']}`}>
        <div className={`${styles['velocity-title']} d-flex justify-content-center align-items-center`} >
          구속
        </div>
        <div className='d-flex justify-content-center'>
          { props.velocity } km/h
        </div>
      </div>
    </>
  );
};

export default BallVelocity;