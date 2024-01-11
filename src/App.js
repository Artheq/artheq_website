import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Who from './pages/who';
import Download from './pages/download';
import Wwd from './pages/wwd';
import Industry from './pages/industry';
import HigherEducation from './pages/highereducation';
import Individual from './pages/individual';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Purpose from './pages/purpose';
import History from './pages/history';
import Why from './pages/why';
import Cookies from './pages/cookies';
import Admin from './components/AdminSignIn/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/download" element={<Download/>} exact/>
        <Route path="/who" element={<Who/>} />
        <Route path="/why" element={<Why/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/wwd" element={<Wwd/>} />
        <Route path="/highereducation" element={<HigherEducation/>} />
        <Route path="/industry" element={<Industry/>} />
        <Route path="/individual" element={<Individual/>} />
        <Route path="/purpose" element={<Purpose/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/admin" element={<Admin/>} /> 


      </Routes>
    </Router>
  );
}

export default App;
