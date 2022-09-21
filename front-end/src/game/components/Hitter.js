import { useDrag } from "react-dnd";

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
        <td>{hitter.batArm}</td>
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