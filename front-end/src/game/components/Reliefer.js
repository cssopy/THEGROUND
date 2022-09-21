import { useDrag } from "react-dnd";

const Reliefer = (props) => {
  
  const { reliefer, relToHit } = props

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'reliefer',
    item: { reliefer },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (droptem, monitor) => {
      const didDrop = monitor.getDropResult();
      if (didDrop) {
        relToHit(droptem.reliefer);
        console.log(droptem.reliefer);
      }
    },
  }));

  return (
    <>
      <tr ref={drag}>
        <td>{reliefer.batArm}</td>
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
