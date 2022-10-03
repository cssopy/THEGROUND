import { useState, useEffect } from "react";

import axios from "axios";

import MatchOPPO from "./components/matchOPPO/MatchOPPO";
import AssignHitters from "./components/assignHitters/AssignHitters";

import BackApi from "../api/BackApi";

const Match = () => {
  const JWT_TOKEN =
    "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VyVWlkIjoiMTExMTExMTExMTExIiwiaWF0IjoxNjYzNTY2NzM1LCJleHAiOjMwMDAwMDAwMDB9.CVgg2N9NcxYDtA61W52HABxFCxv5robWwTxYll0dEa4";

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
    (async () => {
      await axios
        .get(BackApi.game.brief, {
          headers: {
            "X-ACCESS-TOKEN": JWT_TOKEN,
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
            "X-ACCESS-TOKEN": JWT_TOKEN,
          },
        })
        .then((res) => {
          setMyHitters(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  return (
    <>
      <MatchOPPO brief={brief}></MatchOPPO>
      <AssignHitters
        myHitters={myHitters}
        setMyHitters={setMyHitters}
      ></AssignHitters>
    </>
  );
};

export default Match;
