import styles from "../css/Modal.module.css";
import title from "../../assets/title.png";
import subtitle from "../../assets/subtitle.png";
import Kakao from "./Kakao.js";

const Modal = (props) => {
  const closeModal = () => {
    props.closeModal();
  };

  return (
    <>
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <img src={title} alt="" className={styles.modalTitle} />
          <img src={subtitle} alt="" className={styles.modalSubtitle} />
          <br />
          <Kakao />
          <p className={styles.back} onClick={closeModal}>
            BACK
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
