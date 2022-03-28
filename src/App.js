import 'bulma/css/bulma.min.css';
import './css/App.css'
import { Routes, Route } from "react-router-dom";
import Connexion from './components/ConnexionComponent';
import Inscription from './components/InscriptionComponent';
import HomePage from './components/HomePage';

function App() {
  return (
    <div id='body'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
