import { memo } from "react";
import { useDrop } from "react-dnd";

import relStyles from "../../css/changePlayer/ChangeReliefers.module.css";
import styles from "../../css/changePlayer/ChangeCard.module.css";
import Reliefer from "./Reliefer";

const ChangeReliefers = memo((props) => {
  // 예비 타자들의 목록
  const { reliefers, relToHit } = props;

  // 이 영역에 드랍 되었을 경우 추가됨
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "hitter",
    drop: () => ({ name: "ChangeHitters" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // 드래그 중일 때 색상 변화
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
          <tbody
            className={styles.content}
            style={{ backgroundColor, height: "500px" }}
            ref={drop}
          >
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
