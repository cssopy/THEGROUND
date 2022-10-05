import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

import axios from "axios";

import MatchOPPO from "./components/matchOPPO/MatchOPPO";
import AssignHitters from "./components/assignHitters/assignHitters";
import MatchLineup from "./components/matchLineup/MatchLineup";

import BackApi from "../api/BackApi";

const Match = () => {
  const user = useSelector((state) => state.user.user);

  const [pageActive, setPageActive] = useState([true, false, false]);

  const [brief, setBrief] = useState({
    away: {
      teamName: null,
      teamLogoUrl: null,
      teamWin: null,
      teamLose: null,
      teamDraw: null,
      startingPitcher: null,
    },
    home: {
      teamName: null,
      teamLogoUrl: null,
      teamWin: null,
      teamLose: null,
      teamDraw: null,
      startingPitcher: null,
    },
  });
  const [myHitters, setMyHitters] = useState([]);

  useEffect(() => {
    if (user) {
      (async () => {
        await axios
          .get(BackApi.game.brief, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            setBrief(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();

      (async () => {
        await axios
          .get(BackApi.trade.possHitters, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            setMyHitters(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })();
    }
  }, [user]);

  return (
    <>
      {pageActive[0] && (
        <MatchOPPO brief={brief} setPageActive={setPageActive}></MatchOPPO>
      )}
      {pageActive[1] && (
        <AssignHitters
          myHitters={myHitters}
          setPageActive={setPageActive}
        ></AssignHitters>
      )}
      {pageActive[2] && <MatchLineup></MatchLineup>}
    </>
  );
};

export default Match;
