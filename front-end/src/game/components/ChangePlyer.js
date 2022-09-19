import styles from '../css/ChangePlayer.module.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const ChangePlayer = (props) => {

  const { open, close } = props;

  return (  
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={`${styles.modal} ${open ? styles.openModal : ""}`}>
      {open ? (
        <div className={styles.section}>
          <div className={styles.header}>
            선수 교체
            <button className={styles['close-button']} onClick={close}>
              &times;
            </button>
          </div>
          <main>
            <Row>
              <Col>1</Col>
              <Col>
                <Row>2</Row>
                <Row>3</Row>
                <Row>
                  <Col>
                    <Button className={styles.reset} variant="danger">
                      RESET
                    </Button>
                    <Button className={styles.save} variant="success">
                      SAVE
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </main>
        </div>
      ) : null}
    </div>
  );
};

export default ChangePlayer;