const Reliefer = ({ reliefer }) => {
  return (
    <>
      <tr>
        <td>{reliefer.stand}</td>
        <td>{reliefer.name}</td>
        <td>{reliefer.avg}</td>
        <td>{reliefer.onBase}</td>
        <td>{reliefer.slug}</td>
        <td>{reliefer.ops}</td>
      </tr>
    </>
  );
};

export default Reliefer;
