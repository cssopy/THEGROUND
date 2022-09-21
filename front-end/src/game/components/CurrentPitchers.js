import styles from '../css/CurrentPitchers.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pitchers = (props) => {
  const {pitchers, now} = props;

  return (
    <>
      <Row className={`${styles.pitchers} align-items-center text-white`}>
        <Col>
          <div className={`${styles.name} ${now === 0 ? styles.now : ''} d-flex justify-content-center`}>{pitchers[0].name}</div>
          <div className={`${styles.content} d-flex justify-content-center`}>투구 수 : {pitchers[0].balls}</div>
          <div className={`${styles.content} d-flex justify-content-center`}>삼진 : {pitchers[0].threes}</div>
        </Col>
        <Col xs={1} className={`${styles.vs} d-flex justify-content-center`}>
        vs
        </Col>
        <Col>
        <div className={`${styles.name} ${now === 1 ? styles.now : ''} d-flex justify-content-center`}>{pitchers[1].name}</div>
          <div className={`${styles.content} d-flex justify-content-center`}>투구 수 : {pitchers[1].balls}</div>
          <div className={`${styles.content} d-flex justify-content-center`}>삼진 : {pitchers[1].threes}</div>
        </Col>
      </Row>
    </>
  );
};


export default Pitchers