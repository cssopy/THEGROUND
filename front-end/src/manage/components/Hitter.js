import { useState } from "react";

const Hitter = ({ hitter }) => {
  const [likeList, setLikeList] = useState("");

  const testStyle = {
    position: "absolute",
    top: "300px",
    left: "300px",
    width: "150px",
    height: "150px",
    "border-radius": "50%",
    "background-color": "#ee6c4d",
    transform: "translate(-50%, -50%)",
  };

  const testobj = () => {
    return <div className="circle" style={testStyle}></div>;
  };
  const handleLeave = () => {
    setLikeList("");
  };
  const handleHover = () => {
    setLikeList(testobj);
    const circle = document.querySelector(".circle");
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      circle.style.left = mouseX + "px";
      circle.style.top = mouseY + "px";
    });
  };

  return (
    <>
      <tr onMouseOver={handleHover} onMouseLeave={handleLeave}>
        <td>{hitter.batArm}</td>
        <td>{hitter.name}</td>
        <td>{hitter.avg}</td>
        <td>{hitter.game}</td>
        <td>{hitter.atBat}</td>
        <td>{hitter.obp}</td>
        <td>{hitter.slg}</td>
        <td>{hitter.homerun}</td>
      </tr>
      {likeList}
    </>
  );
};
export default Hitter;
