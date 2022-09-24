import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./landing/Landing";
import Main from "./main/Main";
import KakaoLoginHandler from "./landing/components/KakaoLoginHandler";
import NaverLoginHandler from "./landing/components/NaverLoginHandler";
import SignupModal from "./landing/components/SignupModal";
import Manage from "./manage/Manage";
import Market from "./market/Market";
import Game from "./game/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />}></Route>
      <Route path="/kakaoLogin" element={<KakaoLoginHandler />} />
      <Route path="/naverLogin" element={<NaverLoginHandler />} />
      <Route path="/signupModal" element={<SignupModal />}></Route>
      <Route path="/manage" element={<Manage />}></Route>
      <Route path="/market" element={<Market />}></Route>
      <Route path="/game" element={<Game />}></Route>
    </Routes>
  );
}

export default App;
