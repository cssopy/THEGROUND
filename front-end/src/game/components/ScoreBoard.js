import styles from '../css/ScoreBoard.module.css';
import Table from 'react-bootstrap/esm/Table';

const ScoreBoard = (props) => {

  const { scores, R, H, B } = props;


  return (
    <>
      <Table bordered className={`${styles['score-board']}`}>
        <thead>
          <tr className={styles.top}>
            <th className={styles.left}></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>R</th>
            <th>H</th>
            <th className={styles.right}>B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={styles.left}>logo</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th className={styles.right}></th>
          </tr>          
          <tr className={styles.bottom}>
            <th className={styles.left}>logo</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th className={styles.right}></th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ScoreBoard;