import './scss/App.scss';
import 'bulma/css/bulma.min.css';
import {MyComp} from './components/MyComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
        <MyComp/>
      </header>
    </div>
  );
}

export default App;