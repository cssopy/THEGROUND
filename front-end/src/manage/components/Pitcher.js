const Pitcher = ({ pitcher }) => {
  return (
    <>
      <tr>
        <td>{pitcher.pitArm}</td>
        <td>{pitcher.playerName}</td>
        <td>{pitcher.avg}</td>
        <td>{pitcher.game}</td>
      </tr>
    </>
  );
};

export default Pitcher;
