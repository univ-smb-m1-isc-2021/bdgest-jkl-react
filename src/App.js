import './scss/App.scss';
import 'bulma/css/bulma.min.css';
import { Routes, Route, Link } from "react-router-dom";
import {MyComp} from './components/MyComp';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<MyComp />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
