import { memo } from 'react';
import { useDrop } from 'react-dnd';

import styles from '../css/ChangeCard.module.css';
import Reliefer from './Reliefer';


const ChangeReliefers = memo((props) => {

  
  const { reliefers, relToHit } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'hitter',
    drop: () => ({ name: 'ChangeHitters' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#ffffff00";
  if (isActive) {
    backgroundColor = "#aaaaaa6b";
  } else if (canDrop) {
    backgroundColor = "#aaaaaa32";
  }

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>후보 선수</div>
        <table borderless className={styles.table} style={{height: '500px'}}>
          <thead>
            <tr>
              <th>스탠드</th>
              <th>이름</th>
              <th>타율</th>
              <th>게임수</th>
              <th>타수</th>
              <th>OBP</th>
              <th>SLG</th>
              <th>홈런</th>
            </tr>
          </thead>
          <tbody
            className={styles.content}
            style={{ backgroundColor }}
            ref={drop}
          >
            {reliefers.map((reliefer, idx) => {
              if (reliefer !== 0) {
                return ((
                  <Reliefer
                    key={idx}
                    idx={idx}
                    reliefer={reliefer}
                    relToHit={relToHit}
                  />
                ))
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
});


export default ChangeReliefers;