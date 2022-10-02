import styles from "./Loading.module.css";
import title from "../assets/etc/title.png";
import subtitle from "../assets/etc/subtitle.png";
import ball from "../assets/etc/logo192.png";
import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";

const Loading = () => {
  // api 통신 횟수나 크기 및 페이지에서의 useSelector 세팅에 따라 총 100을 채우도록 설계한다.
  // 아래 now로 퍼센테이지 관리하기
  const now = 100;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (now === 100) {
      setTimeout(() => {
        setIsLoading((prev) => false);
      }, 2000);
    }
  }, [now]);

  return (
    <>
      <div className={`${styles.bg} ${isLoading ? "" : styles.none}`}>
        <div className={styles.body}>
          <img src={title} alt="title" className={styles.title} />
          <img src={subtitle} alt="subtitle" className={styles.subtitle} />
          <div className={styles.text}>Now Loading...</div>
          <ProgressBar className={styles.loadingBar}>
            <ProgressBar
              animated
              variant="success"
              now={now}
              className={styles.loading}
            />
            <img
              src={ball}
              alt="ball"
              className={styles.ball}
              style={{ marginLeft: `${-20 + 10 * now}px` }}
            />
          </ProgressBar>
        </div>
      </div>
    </>
  );
};

export default Loading;
