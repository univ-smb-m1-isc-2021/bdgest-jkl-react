import 'bulma/css/bulma.min.css';
import { Routes, Route } from "react-router-dom";
import {MyComp} from './components/MyComp';
import Connexion from './components/ConnexionComponent';
import Inscription from './components/InscriptionComponent';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
