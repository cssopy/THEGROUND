import { useDrag } from "react-dnd";

const Hitter = (props) => {

  const { hitter, setHitters, reliefers } = props;

  const [{isDragging}, drag] = useDrag(() => ({
      type: 'hitter',
      item: { hitter },
      collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (result, monitor) => {
      const didDrop = monitor.getDropResult();
      // if (didDrop) {
      //   props.setHitters((prevState) => {
      //     return [...prevState, result.hitter];
      //   });
      // }
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