import styles from "../css/StartGame.module.css";
import {
  TbArrowDownLeft,
  TbArrowDownRight,
  TbArrowUpLeft,
  TbArrowUpRight,
} from "react-icons/tb";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { configActions } from "../../redux/slice/configSlice";

const StartGame = () => {
  const dispatch = useDispatch();

  const [showLanding, setShowLanding] = useState(false);
  const [anime, setAnime] = useState(0);

  const nowShow = () => {
    dispatch(configActions.setMusic(true));
    setShowLanding(true);
    localStorage.setItem("visited", true);
  };
  const changeModal = () => {
    if (anime === 10) {
      setAnime(11);
    }
  };

  useEffect(() => {
    if (anime <= 9) {
      setTimeout(() => setAnime((prev) => prev + 1), 1000);
    }
    if (anime > 10 && anime < 20) {
      setTimeout(() => setAnime((prev) => prev + 1), 1000);
    }
  });

  return (
    <>
      <div className={`${anime > 12 ? styles.change : ""} ${styles.start}`}>
        <div
          className={`${styles.notiBody} ${anime > 10 ? styles.hidden : ""} ${
            anime > 12 ? styles.remove : ""
          }`}
        >
          <div className={`${styles.row} ${anime >= 7 ? "" : styles.hidden}`}>
            <TbArrowUpLeft className={styles.upLeft} />
            <TbArrowUpRight className={styles.upRight} />
          </div>
          <div className={`${styles.notification}`}>
            <div>
              <div
                className={`${styles.title} ${anime >= 1 ? "" : styles.hidden}`}
              >
                NOTIFICATION
              </div>
              <div
                className={`${styles.text} ${anime >= 3 ? "" : styles.hidden}`}
              >
                1. 네 화살표가 모두 보이도록 화면 크기를 조절해주세요
              </div>
              <div
                className={`${styles.text} ${anime >= 4 ? "" : styles.hidden}`}
              >
                2. 원활한 게임 진행을 위해 볼륨을 조절해주세요
              </div>
              <div
                className={`${styles.text} ${anime >= 5 ? "" : styles.hidden}`}
              >
                3. 새로고침과 뒤로 가기는 삼가해주세요
              </div>
              <div
                className={`${styles.nextButton} ${
                  anime > 12 ? styles.remove : ""
                } ${anime > 9 ? "" : styles.hidden}`}
                onClick={changeModal}
              >
                NEXT
                <AiOutlineDoubleRight style={{ marginBottom: "5px" }} />
              </div>
            </div>
          </div>
          <div className={`${styles.row} ${anime >= 7 ? "" : styles.hidden}`}>
            <TbArrowDownLeft className={styles.downLeft} />
            <div>
              <div>
                Presented By Dreams109 - 김주원 이대희 이정재 이호승 홍성목
              </div>
              <div className={styles.small}>
                Royaty Free Music: Bensound.com/royalty-free-music
              </div>
            </div>
            <TbArrowDownRight className={styles.downRight} />
          </div>
        </div>
        <div
          className={`${styles.hiddenButton} ${
            showLanding ? styles.showLanding : ""
          } ${anime > 10 ? "" : styles.hidden}`}
        />
        <div
          className={`${styles.ball} ${anime > 12 ? "" : styles.hidden} ${
            anime < 12 ? styles.remove : ""
          }`}
          onClick={nowShow}
        />
        <div
          className={`${styles.hello} ${
            anime > 14 && !showLanding ? "" : styles.hidden
          }`}
        >
          Hit it!
        </div>
      </div>
    </>
  );
};

export default StartGame;
