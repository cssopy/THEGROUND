import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from '../css/ChangePitchers.module.css';
import arrowImg from '../../assets/up-down-arrow.png';


const Pitcher = (props) => {

  const ref = useRef(null);
  const { pitcher, index, pitTopit } = props;

  const [{ isDragging }, drag] = useDrag({
    type: 'pitcher',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'pitcher',
    collect: (monitor) => ({
        handlerId: monitor.getHandlerId()
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      pitTopit(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });


  drag(drop(ref))

  return (
    <>
      <tr ref={ref} style={{ opacity: isDragging ? 0 : 1}}>
        <td>
          <div
            className={
              styles[
                pitcher.pitArm === "좌완" ? "leftPitcher" : "rightPitcher"
              ]
            }
          >
            {pitcher.pitArm}
          </div>
        </td>
        <td>{pitcher.name}</td>
        <td>{pitcher.era}</td>
        <td>{pitcher.game}</td>
        <td>{pitcher.inning}</td>
        <td>{pitcher.win}</td>
        <td>{pitcher.lose}</td>
        <td><img src={arrowImg} style={{width:'10px', opacity:0.3}} alt="arrow"></img></td>
      </tr>
    </>
  );
};

export default Pitcher;
