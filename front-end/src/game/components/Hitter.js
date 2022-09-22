import { useDrag } from "react-dnd";
import styles from '../css/ChangeHitters.module.css';

const Hitter = (props) => {

  const { hitter, hitToRel, idx } = props;

  const [, drag] = useDrag(() => ({
    type: 'hitter',
    item: { hitter, idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (droptem, monitor) => {
      const didDrop = monitor.getDropResult();
      if (didDrop) {
        hitToRel(droptem.hitter, droptem.idx);
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
                hitter.batArm === "좌타" ? "leftHitter" : "rightHitter"
              ]
            }
          >
            {hitter.batArm}
          </div>  
        </td>
        <td>{hitter.name}</td>
        <td>{hitter.avg}</td>
        <td>{hitter.game}</td>
        <td>{hitter.atBat}</td>
        <td>{hitter.obp}</td>
        <td>{hitter.slg}</td>
        <td>{hitter.homerun}</td>
      </tr>
    </>
  );
};


export default Hitter;