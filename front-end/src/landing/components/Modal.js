import styles from "../css/Modal.module.css";
import title from "../../assets/etc/title.png";
import subtitle from "../../assets/etc/subtitle.png";
import kakaoBtn from "../../assets/etc/kakao_login.png";
import naverBtn from "../../assets/etc/naver_login.png";
import googleBtn from "../../assets/etc/google_login.png";
import SocialApi from "../../api/SocialApi";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slice/userSlice";

const Modal = (props) => {
  // 로그인 띄우는 모달
  const { closeModal, login } = props;
  const dispatch = useDispatch();

  // 버튼 클릭 시, 로그인 타입을 로컬 스토리지에 저장하고 동의 페이지로 이동
  const kakaoLogin = () => {
    dispatch(userActions.setLoginType("K"));
    window.location.href = SocialApi.kakao.auth;
  };

  const naverLogin = () => {
    dispatch(userActions.setLoginType("N"));
    window.location.href = SocialApi.naver.auth;
  };

  const googleLogin = () => {
    dispatch(userActions.setLoginType("G"));
    window.location.href = SocialApi.google.auth;
  };

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
            <div onClick={kakaoLogin}>
              <img
                className={styles.loginBtn}
                src={kakaoBtn}
                alt="kakaoButton"
              />
            </div>
            <div onClick={naverLogin}>
              <img
                className={styles.loginBtn}
                src={naverBtn}
                alt="naverButton"
              />
            </div>
            <div onClick={googleLogin}>
              <img
                className={styles.loginBtn}
                src={googleBtn}
                alt="googleButton"
              />
            </div>
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
