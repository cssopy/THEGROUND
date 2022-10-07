import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./landing/Landing";
import Main from "./main/Main";
import Manage from "./manage/Manage";
import Market from "./market/Market";
import Game from "./game/Game";
import Match from "./match/Match";
import Result from "./result/Result";
import Guide from "./main/components/guide/Guide";
import Loading from "./loading/Loading";
import { useSelector } from "react-redux";

function App() {
  const url = useSelector((state) => state.config.url);

  return (
    <>
      <Loading />
      {url === "" && <Landing />}
      {url === "main" && <Main />}
      {url === "guide" && <Guide />}
      {url === "manage" && <Manage />}
      {url === "market" && <Market />}
      {url === "game" && <Game />}
      {url === "match" && <Match />}
      {url === "result" && <Result />}
    </>
  );
}

export default App;
