import './scss/App.scss';
import 'bulma/css/bulma.min.css';
import {MyComp} from './components/MyComp';
import Connexion from './components/Connexion';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp/>
        <Connexion/>
        <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      </header>

    </div>
  );
}

export default App;
