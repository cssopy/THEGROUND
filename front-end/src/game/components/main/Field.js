import fieldimg from "../../../assets/etc/ground2.png";
import Image from "react-bootstrap/Image";
import styles from "../../css/main/Field.module.css";

const Field = (props) => {
  // 현재 진루 상황
  const { runners } = props;

  return (
    <>
      <div
        className={`${styles["innerbox"]} d-flex justify-content-center align-items-center`}
      >
        <Image src={fieldimg} alt="baseball field" id={styles.field} />
        <div className={`${styles.first} ${styles[runners[0]]}`} />
        <div className={`${styles.second} ${styles[runners[1]]}`} />
        <div className={`${styles.third} ${styles[runners[2]]}`} />
      </div>
    </>
  );
};

export default Field;
