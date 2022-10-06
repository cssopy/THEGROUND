import { memo } from "react";

import styles from "../../css/changePlayer/ChangeCard.module.css";
import hitStyles from "../../css/changePlayer/ChangeHitters.module.css";
import Hitter from "./Hitter";

const ChangeHitters = memo((props) => {
  // 타자들 목록
  const { hitters, hitToRel } = props;

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>선발 타자</div>
        <table className={hitStyles.table}>
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
          <tbody className={styles.content} style={{ height: "180px" }}>
            {hitters.map((hit) => {
              return (
                <Hitter
                  key={hit.hitterSeq}
                  idx={hit.hitterSeq}
                  hitter={hit}
                  hitToRel={hitToRel}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default ChangeHitters;
