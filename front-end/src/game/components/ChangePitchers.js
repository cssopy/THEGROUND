import { memo } from 'react';
import { Table } from 'react-bootstrap';
import styles from '../css/ChangeCard.module.css';
import Pitcher from './Pitcher';

const ChangePitchers = memo((props) => {

  const { pitchers } = props;

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>선발 투수</div>
        <Table borderless className={styles.table} style={{height: '160px'}}>
          <thead>
            <tr>
              <th>스탠드</th>
              <th>이름</th>
              <th>ERA</th>
              <th>게임수</th>
              <th>이닝수</th>
              <th>승리</th>
              <th>패배</th>
            </tr>
          </thead>
          <tbody className={styles.content}>
            {pitchers.map((pitcher, idx) => (
              <Pitcher
                key={idx}
                pitcher={pitcher}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
});


export default ChangePitchers;