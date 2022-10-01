import MatchOPPO from "./components/matchOPPO/MatchOPPO";
import AssignHitters from "./components/assignHitters/AssignHitters";
import { useState } from "react";

const Match = () => {
  return (
    <>
      <MatchOPPO></MatchOPPO>
      <AssignHitters></AssignHitters>
    </>
  );
};

export default Match;
