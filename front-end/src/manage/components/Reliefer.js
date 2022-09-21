import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const Reliefer = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Reliefer,
    item: { reliefer: props.reliefer },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const didDrop = monitor.getDropResult();
      // 구원투수를 선발투수 영역에 넣을 경우
      if (didDrop) {
        // 선발투수목록에 추가
        props.setPitchers((prevState) => {
          return [...prevState, item.reliefer];
        });
        // 구원투수목록에서 삭제
      }
    },
  }));

  return (
    <>
      <tr ref={drag} data-testid={`reliefer`}>
        <td>{props.reliefer.pitArm}</td>
        <td>{props.reliefer.name}</td>
        <td>{props.reliefer.era}</td>
        <td>{props.reliefer.game}</td>
        <td>{props.reliefer.inning}</td>
        <td>{props.reliefer.win}</td>
        <td>{props.reliefer.lose}</td>
      </tr>
    </>
  );
};

export default Reliefer;
