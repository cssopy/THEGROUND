import styles from '../css/BallCount.module.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const BallCount = (props) => {

  const { ballCounts } = props;

  const counting = (num, type) => {
    const result = [];
    for (let i=0; i<num; i++) {
      result.push(<div className={`${styles[type]} ${styles.count}`}></div>)
    }
    return result;
  };

  return (
    <>
      <div className={styles.bso}>
        <Row className='align-items-end'>
          <div className={`${styles.subtitle}`}>B</div>
          {counting(ballCounts[0], 'ball')}
        </Row>
        <Row className='align-items-end'>
          <div className={`${styles.subtitle}`}>S</div>
          {counting(ballCounts[1], 'strike')}
        </Row>
        <Row className='align-items-end'>
          <div className={`${styles.subtitle}`}>O</div>
          {counting(ballCounts[2], 'out')}
        </Row>
      </div>
    </>
  );
};

export default BallCount;