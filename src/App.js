import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Who from './pages/who';
import Download from './pages/download';
import Wwd from './pages/wwd';
import Industry from './pages/industry';
import HigherEducation from './pages/highereducation';
import Individual from './pages/individual';
import Privacy from './pages/privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/download" element={<Download/>} exact/>
        <Route path="/who" element={<Who/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/wwd" element={<Wwd/>} />
        <Route path="/highereducation" element={<HigherEducation/>} />
        <Route path="/industry" element={<Industry/>} />
        <Route path="/individual" element={<Individual/>} />

      </Routes>
    </Router>
  );
}

export default App;
