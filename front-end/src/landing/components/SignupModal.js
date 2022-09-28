import styles from "../css/SignupModal.module.css";
import title from "../../assets/etc/title.png";
import subtitle from "../../assets/etc/subtitle.png";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../slice/UserSlice";
import { useNavigate } from "react-router-dom";

const SignupModal = (props) => {
  let { loginType } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [logos, setLogos] = useState([]);
  const [selectLogo, setSelectLogo] = useState(false);
  const [myLogo, setMyLogo] = useState(false);
  const [valid, setValid] = useState(0);
  const clubNameInput = useRef("");
  const uid = useSelector((state) => state.user.uid);
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  var check_num = /[0-9]/;
  var check_eng = /[a-zA-Z]/;

  const handleClubName = () => {
    const target = clubNameInput.current.value;
    let count = 0;
    let special_check = 0;
    // 한글은 2자리로 체크
    for (let i = 0; i < target.length; i++) {
      if (check_kor.test(target[i])) {
        count += 2;
      } else if (check_eng.test(target[i]) || check_num.test(target[i])) {
        count += 1;
      } else {
        special_check = 1;
      }
    }

    if (count > 20) {
      setValid(1);
    } else {
      setValid(0);
    }
    if (special_check) {
      setValid((prev) => prev + 2);
    }
  };

  const userSubmit = () => {
    if (valid === 0 && clubNameInput.current.value.trim().length) {
      axios
        .post("https://j7d109.p.ssafy.io/back/users/signup", {
          uid,
          userTeamname: clubNameInput.current.value,
          logoSeq: myLogo.logoSeq,
          loginType,
        })
        .then((res) => {
          dispatch(userActions.setJwtToken(res.data.jwt));
          dispatch(userActions.setUserTeamname(res.data.userTeamname));
          localStorage.removeItem("uid");
          localStorage.removeItem("loginType");
          localStorage.setItem("jwt", res.data.jwt);
          navigate("/main");
        });
    }
  };

  useEffect(() => {
    axios.get("https://j7d109.p.ssafy.io/back/users/logos").then((res) => {
      setLogos(res.data);
      setMyLogo(res.data[0]);
    });
  }, []);

  const prev = () => {
    if (progress === 0) {
      return;
    }
    setProgress((prev) => (prev + 2) % 3);
  };

  const next = () => {
    if (progress === 2) {
      return;
    }
    setProgress((prev) => (prev + 1) % 3);
  };

  const moveCard = (event) => {
    setProgress(parseInt(event.target.value));
  };

  const select = () => {
    setSelectLogo((prev) => !prev);
  };

  const changeMyLogo = (event) => {
    setMyLogo(logos[parseInt(event.target.alt)]);
  };

  const closeModal = () => {
    dispatch(userActions.setJwtToken(""));
    dispatch(userActions.setUid(""));
    localStorage.clear();
  };

  return (
    <>
      <div>
        <div className={`${styles.modal} ${styles.open}`}>
          <div className={styles.modalBody}>
            <img src={title} alt="" className={styles.modalTitle} />
            <img src={subtitle} alt="" className={styles.modalSubtitle} />
            <div className={`${styles.content} ${styles[`move${progress}`]}`}>
              <div
                className={`${styles.hide} ${
                  progress === 0 ? styles.show : ""
                }`}
              >
                <div className={styles.contentTitle}>구단 로고</div>
                <div>나만의 팀을 나타내는 상징이 됩니다.</div>
                <div>
                  <img
                    src={myLogo ? myLogo.logoUrl : ""}
                    className={styles.img}
                    alt="myLogo"
                  />
                </div>
                <button className={styles.noBorder} onClick={select}>
                  {selectLogo ? "완료" : "로고 고르기"}
                </button>
              </div>
              <div
                className={`${styles.hide} ${
                  progress === 1 ? styles.show : ""
                }`}
              >
                <div className={styles.contentTitle}>구단명</div>
                <div style={{ marginBottom: "50px" }}>
                  구단의 아이덴티티를 나타냅니다.
                </div>
                <div className="d-flex justify-content-center">
                  <Form.Control
                    aria-label="Default"
                    aria-describedby="구단명"
                    ref={clubNameInput}
                    name="clubName"
                    onChange={handleClubName}
                    placeholder="ex) 드림즈 109"
                    style={{ height: "40px", width: "250px" }}
                    maxLength="20"
                  />
                </div>
                <span
                  style={{ fontSize: "12px", color: "gray", width: "300px" }}
                >
                  {valid === 0 && (
                    <>
                      <div>
                        숫자와 영문자 기준 최대 20자, 한글 기준 최대 10자
                      </div>
                      <div>특수 문자는 입력할 수 없습니다</div>
                    </>
                  )}
                  {valid % 2 === 1 && (
                    <div style={{ color: "red" }}>
                      글자 제한을 초과하였습니다
                    </div>
                  )}
                  {valid >= 2 && (
                    <div style={{ color: "red" }}>
                      특수 문자가 포함되어 있습니다
                    </div>
                  )}
                </span>
              </div>
              <div
                className={`${styles.hide} ${
                  progress === 2 ? styles.show : ""
                }`}
              >
                <div className="d-flex justify-content-center m-5">
                  <img
                    src={logos[0] ? myLogo.logoUrl : ""}
                    className={styles.logo}
                    alt="selectedLogo"
                  />
                  <div className={styles.userName}>
                    {clubNameInput.current.value}
                  </div>
                </div>
                <div>
                  {valid === 0 ? (
                    <>
                      <div>선택을 완료하시겠습니까?</div>
                      <p style={{ fontSize: "12px", color: "grey" }}>
                        구단 로고와 구단명은 마이페이지에서 수정 가능합니다.
                      </p>
                    </>
                  ) : (
                    <p style={{ fontSize: "16px", color: "red" }}>
                      입력하신 내용을 다시 확인해주세요.
                    </p>
                  )}

                  {valid === 0 ? (
                    <Button variant="primary" onClick={userSubmit}>
                      가입
                    </Button>
                  ) : (
                    <Button variant="dark" onClick={prev}>
                      수정 필요
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div>
                <button
                  className={`${styles.button} ${
                    progress === 0 ? styles.target : ""
                  }`}
                  value="0"
                  onClick={moveCard}
                />
                <button
                  className={`${styles.button} ${
                    progress === 1 ? styles.target : ""
                  }`}
                  value="1"
                  onClick={moveCard}
                />
                <button
                  className={`${styles.button} ${
                    progress === 2 ? styles.target : ""
                  }`}
                  value="2"
                  onClick={moveCard}
                />
              </div>
            </div>
            <div className="d-flex justify-content-around mt-3 mb-4">
              {progress !== 0 ? (
                <button onClick={prev} className={styles.noBorder}>
                  &#171;
                </button>
              ) : (
                <div style={{ width: "20px" }} />
              )}
              {progress !== 2 ? (
                <button onClick={next} className={styles.noBorder}>
                  &#187;
                </button>
              ) : (
                <div style={{ width: "20px" }} />
              )}
            </div>
            <span className={styles.back} onClick={closeModal}>
              &#8592;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CANCLE&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div
            className={`${styles.smallModal} ${
              selectLogo && !progress ? styles.openSmall : ""
            }`}
          >
            {logos.map((logo, idx) => {
              return (
                <img
                  src={logo.logoUrl}
                  className={`${styles.logoList} ${
                    myLogo && idx + 1 === myLogo.logoSeq ? styles.selected : ""
                  }`}
                  key={idx}
                  alt={idx}
                  onClick={changeMyLogo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
