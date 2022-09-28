import { memo } from "react";
import { useDrop } from "react-dnd";

import styles from "../../css/changePlayer/ChangeCard.module.css";
import hitStyles from "../../css/changePlayer/ChangeHitters.module.css";
import Hitter from "./Hitter";

const ChangeHitters = memo((props) => {
  // 타자들 목록
  const { hitters, hitToRel } = props;

  // 이 영역에 드랍되면 선수 교체 실행
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "reliefer",
    drop: () => ({ name: "ChangeReliefers" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // 드래그 하고 있을 때 이 영역에 드랍 됨을 표시
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
          <tbody
            className={styles.content}
            style={{ backgroundColor, height: "180px" }}
            ref={drop}
          >
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
