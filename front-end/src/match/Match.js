import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { configActions } from "../redux/slice/configSlice";
import { testActions } from "../redux/slice/testSlice";

import axios from "axios";

import MatchOPPO from "./components/matchOPPO/MatchOPPO";
import AssignHitters from "./components/assignHitters/assignHitters";
import MatchLineup from "./components/matchLineup/MatchLineup";

import BackApi from "../api/BackApi";

const Match = () => {
  const user = useSelector((state) => state.user.user);
  const players = useSelector((state) => state.player.players);

  // 테스트 데이터
  const matches = useSelector((state) => state.test.matches);
  const nextMatchIndex = useSelector((state) => state.test.nextMatchIndex);

  const dispatch = useDispatch();

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
  const [myPitcher, setMyPitcher] = useState({});
  const [oppoPitcher, setOppoPitcher] = useState({});

  useEffect(() => {
    if (user) {
      // (async () => {
      //   await axios
      //     .get(BackApi.game.brief, {
      //       headers: {
      //         "X-ACCESS-TOKEN": user.jwt,
      //       },
      //     })
      //     .then((res) => {
      //       setBrief(res.data);
      //       dispatch(configActions.setPersentage(50));
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //       dispatch(configActions.setPersentage(50));
      //     });
      // })();

      (async () => {
        await axios
          .get(BackApi.manage.rotation, {
            headers: {
              "X-ACCESS-TOKEN": user.jwt,
            },
          })
          .then((res) => {
            dispatch(
              testActions.setHome({
                teamName: user.userTeamname,
                teamLogoUrl: user.logoUrl,
                teamWin: user.userWin,
                teamLose: user.userLose,
                teamDraw: user.userDraw,
                startingPitcher: res.data.teamSetting1stSp.pitcherSeq,
              })
            );
            dispatch(configActions.setPersentage(50));
          })
          .catch((error) => {
            console.log(error);
            dispatch(configActions.setPersentage(50));
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
            dispatch(configActions.setPersentage(50));
          })
          .catch((error) => {
            console.log(error);
          });
      })();
    }
  }, []);

  useEffect(() => {
    setBrief(matches[nextMatchIndex]);
  }, [matches]);

  useEffect(() => {
    if (brief.matchSeq) {
      setMyPitcher(() => {
        for (let pit of players.pitcher) {
          if (pit.pitcherSeq === brief.home.startingPitcher) {
            return pit;
          }
        }
      });
      setOppoPitcher(() => {
        for (let pit of players.pitcher) {
          if (pit.pitcherSeq === brief.away.startingPitcher) {
            return pit;
          }
        }
      });
    } else {
      setMyPitcher(() => {
        for (let pit of players.pitcher) {
          if (pit.pitcherSeq === brief.away.startingPitcher) {
            return pit;
          }
        }
      });
      setOppoPitcher(() => {
        for (let pit of players.pitcher) {
          if (pit.pitcherSeq === brief.home.startingPitcher) {
            return pit;
          }
        }
      });
    }
  }, [brief]);

  return (
    <>
      {pageActive[0] && (
        <MatchOPPO
          brief={brief}
          players={players}
          setPageActive={setPageActive}
        ></MatchOPPO>
      )}
      {pageActive[1] && (
        <AssignHitters
          user={user}
          brief={brief}
          myHitters={myHitters}
          pitcher={myPitcher}
          oppoPitcher={oppoPitcher}
          players={players}
          setPageActive={setPageActive}
        ></AssignHitters>
      )}
      {pageActive[2] && <MatchLineup></MatchLineup>}
    </>
  );
};

export default Match;
