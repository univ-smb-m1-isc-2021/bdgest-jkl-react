import 'bulma/css/bulma.min.css';
import './css/App.css'
import { Routes, Route } from "react-router-dom";
import Connexion from './components/ConnexionComponent';
import Inscription from './components/InscriptionComponent';
import HomePage from './components/HomePage';
import Album from './components/Album';
import AlbumList from './components/AlbumList';
import {getAllAlbums} from './service/BDGestService';

function App() {
  
  getAllAlbums();
  return (
    <div id='body'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/liste" element={<AlbumList />} />
      </Routes>
    </div>
  );
}

export default App;
