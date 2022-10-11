import styles from "./Loading.module.css";
import title from "../assets/etc/title.png";
import subtitle from "../assets/etc/subtitle.png";
import ball from "../assets/etc/logo192.png";
import Music1 from "../assets/bgm/GROOVY_HIPHOP.mp3";
import Music2 from "../assets/bgm/HIGH_OCTANE.mp3";
import Music3 from "../assets/bgm/INDIE_ROCK_SPORT.mp3";
import Music4 from "../assets/bgm/INDIE_ROCK_SPORT_2.mp3";
import Music5 from "../assets/bgm/STRAIGHT.mp3";
import Music6 from "../assets/bgm/THE_LOUNGE.mp3";
import ReactHowler from "react-howler";

import { ProgressBar } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { configActions } from "../redux/slice/configSlice";

const Loading = () => {
  // api 통신 횟수나 크기 및 페이지에서의 useSelector 세팅에 따라 총 100을 채우도록 설계한다.
  // 아래 now로 퍼센테이지 관리하기
  const percentage = useSelector((state) => state.config.loading.percentage);
  const isLoading = useSelector((state) => state.config.loading.isLoading);
  const loginType = useSelector((state) => state.user.user.loginType);
  const jwt = useSelector((state) => state.user.user.jwt);
  const music = useSelector((state) => state.config.music);
  const url = useSelector((state) => state.config.url);
  const dispatch = useDispatch();

  useEffect(() => {
    if (percentage >= 100) {
      setTimeout(() => {
        dispatch(configActions.setIsLoading(false));
        dispatch(configActions.resetPercentage());
      }, 2000);
    }
  }, [percentage]);

  useEffect(() => {
    if (!loginType) {
      dispatch(configActions.setIsLoading(false));
      dispatch(configActions.resetPercentage());
      dispatch(configActions.setUrl(jwt ? "main" : ""));
    }
  }, []);

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
              now={percentage ? percentage : 0}
              className={styles.loading}
            />
            <>
              <img
                src={ball}
                alt="ball"
                className={styles.ball}
                style={{
                  marginLeft: `${-20 + (percentage ? 10 * percentage : 0)}px`,
                }}
              />
            </>
          </ProgressBar>
        </div>
        {music && !isLoading && url === "" && (
          <ReactHowler src={Music3} playing={true} loop={true} volume={1} />
        )}
        {music && !isLoading && url === "game" && (
          <ReactHowler src={Music4} playing={true} loop={true} volume={1} />
        )}
        {music &&
          !isLoading &&
          ["market", "manage", "result", "main", "guide"].includes(url) && (
            <ReactHowler src={Music1} playing={true} loop={true} volume={1} />
          )}
        {music && !isLoading && url === "match" && (
          <ReactHowler src={Music2} playing={true} loop={true} volume={1} />
        )}
      </div>
    </>
  );
};

export default Loading;
