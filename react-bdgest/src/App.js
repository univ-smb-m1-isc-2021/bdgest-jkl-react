import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import {MyComp} from './MyComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="button" class="button is-info" value="Bonjouir"/>
        <MyComp/>
      </header>
    </div>
  );
}

export default App;
