import fieldimg from '../../assets/ground2.png';
import Image from 'react-bootstrap/Image';
import styles from '../css/Field.module.css';

const Field = (props) => {
  // const { runners } = props;

  return (
    <>
      <div className={`${styles['innerbox']} d-flex justify-content-center align-items-center`}>
        <Image src={fieldimg} alt='baseball field' id={styles.field}></Image>
      </div>
    </>
  );
};

export default Field;