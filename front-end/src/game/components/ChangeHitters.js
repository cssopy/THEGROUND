import { Table } from 'react-bootstrap';
import styles from '../css/ChangeCard.module.css';
import { memo } from 'react';
import Hitter from './Hitter';
import { useDrop } from 'react-dnd';


const ChangeHitters = memo((props) => {

  const { hitters, setHitters } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'reliefer',
    drop: () => ({ name: 'ChangeReliefers' }),
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
        <div className={`${styles.title}`}>선발 타자</div>
        <Table borderless className={styles.table} style={{height: '160px'}}>
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
            {hitters.map((hitter, idx) => (
              <Hitter
                className={styles.tr}
                key={idx}
                hitter={{...hitter, key:idx}}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
});


export default ChangeHitters;