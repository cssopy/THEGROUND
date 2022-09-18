import styles from "../css/Modal.module.css";
import title from "../../assets/title.png";
import subtitle from "../../assets/subtitle.png";
import { useState, useRef } from "react";

const signupModal = (props) => {
  const clubNameInput = useRef();
  const closeModal = () => {
    props.closeModal();
  };

  const [state, setState] = useState({ clubName: "" });
  const handelChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = () => {
    if (state.clubName.length < 1) {
      clubNameInput.current.focus();
      return;
    }
    //가입정보 백으로 보내주는 것 구현해야함
    alert("회원가입성공");
    setState({
      clubName: "",
    })
  }

  return (
    <>
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
          <img src={title} alt="" className={styles.modalTitle} />
          <img src={subtitle} alt="" className={styles.modalSubtitle} />
          <br />
          <p>구단사진 정하기</p>
          <input
            ref={clubNameInput}
            name="clubName"
            value={state.clubName}
            onChange={handelChangeState}
          />
          <p className={styles.back} onClick={closeModal}>
            BACK
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
