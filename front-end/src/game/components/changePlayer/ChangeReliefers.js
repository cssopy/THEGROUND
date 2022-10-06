import { memo } from "react";

import relStyles from "../../css/changePlayer/ChangeReliefers.module.css";
import styles from "../../css/changePlayer/ChangeCard.module.css";
import Reliefer from "./Reliefer";

const ChangeReliefers = memo((props) => {
  // 예비 타자들의 목록
  const { reliefers, relToHit } = props;

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>후보 선수</div>
        <table className={`${relStyles.table}`}>
          <thead className={styles.thead}>
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
          <tbody className={styles.content} style={{ height: "500px" }}>
            {reliefers.map((rel) => {
              return (
                <Reliefer
                  key={rel.hitterSeq}
                  idx={rel.hitterSeq}
                  reliefer={rel}
                  relToHit={relToHit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default ChangeReliefers;
