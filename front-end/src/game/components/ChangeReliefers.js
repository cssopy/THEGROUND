import { Table } from 'react-bootstrap';
import styles from '../css/ChangeCard.module.css';
import Reliefer from './Reliefer';
import { memo } from 'react';


const ChangeReliefers = memo((props) => {

  
  const { reliefers, relToHit } = props;
  
  // const rels = (rs) => {
    
  //   return (rs.map((reliefer, idx) => (
  //     <Reliefer
  //       key={idx}
  //       reliefer={{...reliefer, idx}}
  //       relToHit={relToHit}
  //     />
  //   )));
  // }

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>후보 선수</div>
        <Table borderless className={styles.table} style={{height: '480px'}}>
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
          <tbody className={styles.content}>
            {reliefers.map((reliefer, idx) => {
              if (reliefer != 0) {
                return ((
                  <Reliefer
                    key={idx}
                    reliefer={{...reliefer, idx}}
                    relToHit={relToHit}
                  />
                ))
              }
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
});


export default ChangeReliefers;