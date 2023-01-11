import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Who from './pages/who';
import Download from './pages/download';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/download" element={<Download/>} exact/>
        <Route path="/who" element={<Who/>} />
      </Routes>
    </Router>
  );
}

export default App;
