import 'bulma/css/bulma.min.css';
import './css/App.css'
import Album from './components/Album';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';


function App() {
  return (
    <div id='body'>
        <Album serie="Marvel" title="Spiderman" isbn="2-7654-1005-7" num="269" author="Stan Lee" date="26/05/1988" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    </div>
  );
}

export default App;
