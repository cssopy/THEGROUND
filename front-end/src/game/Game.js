import styles from './css/Game.module.css';
import bgimg from '../assets/background1.jpg'

const Game = () => {

  return (
    <>
      <img src={bgimg} alt='bg' className={styles.bg}/>
      <div className={`${styles['box']} justify-self-center mx-auto`}>
        <div className={`${styles['innerbox']}`}></div> 
      </div>
    </>
  );
};

export default Game;