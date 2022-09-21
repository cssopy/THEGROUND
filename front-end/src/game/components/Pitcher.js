import { useDrag } from "react-dnd";

const Pitcher = (props) => {

  const { pitcher } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'pitcher',
    item: { pitcher },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // if (didDrop) {
      //   // 선발투수목록에 추가
      //   props.setPitchers((prevState) => {
      //     return [...prevState, item.reliefer];
      //   });
      // }
    },
  }));

  return (
    <>
      <tr ref={drag}>
        <td>{pitcher.pitArm}</td>
        <td>{pitcher.name}</td>
        <td>{pitcher.era}</td>
        <td>{pitcher.game}</td>
        <td>{pitcher.inning}</td>
        <td>{pitcher.win}</td>
        <td>{pitcher.lose}</td>
      </tr>
    </>
  );
};

export default Pitcher;
