import 'bulma/css/bulma.min.css';
import Album from './components/Album';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';


function App() {
  return (
    <div>
        <Album name="Omar" lastName="Khial"/>
        <Connexion/>
        <Inscription/>

    </div>
  );
}

export default App;
