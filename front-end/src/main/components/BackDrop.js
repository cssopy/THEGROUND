const BackDrop = (props) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          margin: "0",
          padding: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: "1",
        }}
        onClick={() => {
          props.setModalIsOpen(false);
        }}
      ></div>
    </>
  );
};

export default BackDrop;
