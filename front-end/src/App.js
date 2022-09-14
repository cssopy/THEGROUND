import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './game/Game';

function App() {
  return (
    <Routes>
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
