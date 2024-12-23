import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from './components/MainMenu'
import Main from "./components/Main";
import './App.css';

function App() {
    return (
      <Router basename="/SMECT-Manutencao">
          <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="/main" element={<Main />} />
          </Routes>
      </Router>
  );
}

export default App;
