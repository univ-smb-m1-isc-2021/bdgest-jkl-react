import 'bulma/css/bulma.min.css';
import './css/App.css'
import { Routes, Route } from "react-router-dom";
import Connexion from './components/ConnexionComponent';
import Inscription from './components/InscriptionComponent';
import HomePage from './components/HomePage';
import Album from './components/Album';
import CatalogPage from './components/CatalogPage';
import SeriePage from './components/SeriePage';
import Serie from './components/Serie';

function App() {
  
  return (
    <div id='body'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/serie/:id" element={<Serie />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/catalogue" element={<CatalogPage />} />
        <Route path="/serie" element={<SeriePage/>} />
      </Routes>
    </div>
  );
}

export default App;
