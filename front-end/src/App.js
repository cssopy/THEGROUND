import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./landing/Landing";
import Main from "./main/Main";
import Manage from "./manage/Manage";
import Market from "./market/Market";
import Game from "./game/Game";
import Match from "./match/Match";
import Result from "./result/Result";
import Guide from "./main/components/guide/Guide";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />}></Route>
      <Route path="/guide" element={<Guide />}></Route>
      <Route path="/manage" element={<Manage />}></Route>
      <Route path="/market" element={<Market />}></Route>
      <Route path="/game" element={<Game />}></Route>
      <Route path="/match" element={<Match />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
}

export default App;
