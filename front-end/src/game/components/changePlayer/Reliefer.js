import { useDrag } from "react-dnd";
import styles from "../../css/changePlayer/ChangeReliefers.module.css";

const Reliefer = (props) => {
  // 단일 교체 선수 객체
  const { reliefer, relToHit, idx } = props;

  // 드래그 가능하게 해줌
  const [, drag] = useDrag(() => ({
    type: "reliefer",
    item: { reliefer, idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (droptem, monitor) => {
      const didDrop = monitor.getDropResult();
      if (didDrop) {
        relToHit(droptem.reliefer, droptem.idx);
      }
    },
  }));

  return (
    <>
      <tr ref={drag}>
        <td>
          <div
            className={
              styles[reliefer.batArm === "좌타" ? "leftHitter" : "rightHitter"]
            }
          >
            {reliefer.batArm}
          </div>
        </td>
        <td>{reliefer.name}</td>
        <td>{reliefer.avg}</td>
        <td>{reliefer.game}</td>
        <td>{reliefer.atBat}</td>
        <td>{reliefer.obp}</td>
        <td>{reliefer.slg}</td>
        <td>{reliefer.homerun}</td>
      </tr>
    </>
  );
};

export default Reliefer;
