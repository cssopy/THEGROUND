const Batter = (props) => {
  return (
    <>
      <tr>
        <td>{props.stand}</td>
        <td>{props.name}</td>
        <td>{props.avg}</td>
        <td>{props.onBase}</td>
        <td>{props.slug}</td>
        <td>{props.ops}</td>
        <td>{props.war}</td>
      </tr>
    </>
  );
};

export default Batter;
