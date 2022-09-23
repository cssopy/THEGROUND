import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./game/Game";
import Landing from "./landing/Landing";
import Main from "./main/Main";
import KakaoLoginHandler from "./landing/components/KakaoLoginHandler";
import SignupModal from "./landing/components/SignupModal";
import Manage from "./manage/Manage";
import Market from "./market/Market";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game" element={<Game />} />
      <Route path="/kakaoLogin" element={<KakaoLoginHandler />} />
      <Route path="/main" element={<Main />}></Route>
      <Route path="/signupModal" element={<SignupModal />}></Route>
      <Route path="/manage" element={<Manage />}></Route>
      <Route path="/market" element={<Market />}></Route>
    </Routes>
  );
}

export default App;
