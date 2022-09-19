const Pitcher = ({ pitcher }) => {
  return (
    <>
      <tr>
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
