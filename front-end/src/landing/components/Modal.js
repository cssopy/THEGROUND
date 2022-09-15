import styles from "../css/Modal.module.css";
import title from "../../assets/title.png";
import subtitle from "../../assets/subtitle.png";

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
          {/* {props.children} */}
          <p className={styles.back} onClick={closeModal}>Back</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
