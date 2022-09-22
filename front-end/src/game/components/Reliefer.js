import { useDrag } from "react-dnd";
import styles from '../css/ChangeReliefers.module.css';

const Reliefer = (props) => {
  
  const { reliefer, relToHit, idx } = props

  const [, drag] = useDrag(() => ({
    type: 'reliefer',
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
              styles[
                reliefer.batArm === "좌타" ? "leftHitter" : "rightHitter"
              ]
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
