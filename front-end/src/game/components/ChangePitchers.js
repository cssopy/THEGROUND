import { memo, useCallback } from 'react';
import { Row } from 'react-bootstrap';

import styles from '../css/ChangeCard.module.css';
import pitStyles from '../css/ChangePitchers.module.css';
import Pitcher from './Pitcher';

const ChangePitchers = memo((props) => {

  const { pitchers, pitTopit } = props;

  const renderPit = useCallback((pit, idx) => {
    return (
      <Pitcher
        key={pit.pitcherSeq}
        index={idx}
        id={pit.pitcherSeq}
        pitcher={pit}
        pitTopit={pitTopit}
      />
    );
  }, []);

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>선발 투수</div>
        <Row>
          <table className={pitStyles.count}>
            <thead className={styles.thead}>
              <tr></tr>
            </thead>
            <tbody
              className={styles.content}
              style={{ height:'160px', paddingLeft: '15px' }}
            >
              <tr><td>1</td></tr>
              <tr><td>2</td></tr>
              <tr><td>3</td></tr>
              <tr><td>4</td></tr>
              <tr><td>5</td></tr>
            </tbody>
          </table>
          <table className={pitStyles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>스탠드</th>
                <th>이름</th>
                <th>ERA</th>
                <th>게임수</th>
                <th>이닝수</th>
                <th>승리</th>
                <th>패배</th>
                <th></th>
              </tr>
            </thead>
            <tbody
              className={styles.content}
              style={{ height:'160px' }}
            >
              {pitchers.map((pitcher, idx) => renderPit(pitcher, idx))}
            </tbody>
          </table>
        </Row>
      </div>
    </>
  );
});


export default ChangePitchers;