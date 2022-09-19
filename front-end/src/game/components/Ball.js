import styles from '../css/Ball.module.css';

// 스트라이크, 볼에 따라 공 색 구별?
// 아니면 그냥 다양한 색으로? 그것도 아니면 바로 직전 공만 다른 색으로?
const Ball = (props) => {

  const { ball } = props;

  return (
    <>
      <div className={styles[ball.type]} style={{left:ball.x+'px', top:ball.y+'px'}}>{ball.num}</div>
    </>
  );
};

export default Ball;