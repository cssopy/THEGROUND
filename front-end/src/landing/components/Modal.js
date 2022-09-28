import styles from "../css/Modal.module.css";
import title from "../../assets/etc/title.png";
import subtitle from "../../assets/etc/subtitle.png";
import Kakao from "./Kakao.js";
import Naver from "./Naver";
import Google from "./Google";
import Tal from "../Tal";

const Modal = (props) => {
  // 로그인 띄우는 모달
  const { closeModal, login } = props;

  return (
    <>
      <div
        className={`${styles.modal} ${login ? styles.open : ""}`}
        onClick={closeModal}
      >
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <img src={title} alt="" className={styles.modalTitle} />
          <img src={subtitle} alt="" className={styles.modalSubtitle} />
          <br />
          <div className={styles.buttons}>
            <Kakao />
            <Naver />
            <Google />
            <Tal />
          </div>
          <span className={styles.back} onClick={closeModal}>
            &#8592;&nbsp;&nbsp;&nbsp;BACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </>
  );
};

export default Modal;
