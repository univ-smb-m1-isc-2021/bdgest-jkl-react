import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import {MyComp} from './MyComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComp/>
      </header>
    </div>
  );
}

export default App;
