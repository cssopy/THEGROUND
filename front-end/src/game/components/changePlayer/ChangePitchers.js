import { memo } from "react";
import { Row } from "react-bootstrap";

import styles from "../../css/changePlayer/ChangeCard.module.css";
import pitStyles from "../../css/changePlayer/ChangePitchers.module.css";
import Pitcher from "./Pitcher";

const ChangePitchers = memo((props) => {
  // 선발 투수 목록
  const { pitchers, pitTopit, selected } = props;

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.title}`}>선발 투수</div>
        <Row>
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
              </tr>
            </thead>
            <tbody className={styles.content} style={{ height: "350px" }}>
              {pitchers.map((pit, idx) => {
                return (
                  <Pitcher
                    key={pit.pitcherSeq}
                    index={idx}
                    pitcher={pit}
                    pitTopit={pitTopit}
                    isSelected={pit.pitcherSeq === selected.pitcherSeq ? 1 : 0}
                  />
                );
              })}
            </tbody>
          </table>
        </Row>
      </div>
    </>
  );
});

export default ChangePitchers;
