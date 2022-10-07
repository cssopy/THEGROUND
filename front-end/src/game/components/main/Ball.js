import styles from '../../css/main/Ball.module.css';


const Ball = (props) => {

  // 공 단일 객체. 타입, 좌표 등을 얻을 수 있다.
  const { ball } = props;

  return (
    <>
      <div className={styles[ball.type]} style={{left:ball.x+'px', top:ball.y+'px'}}>{ball.num}</div>
    </>
  );
};

export default Ball;