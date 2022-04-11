import React from 'react';
import '../css/Auteur.css'
import HeaderComponent from './HeaderComponent';
import { useLocation } from 'react-router-dom';
import {getAuteurById} from '../service/BDGestService';
import LoadingScreen from './LoadingScreen';
import AlbumCard from './AlbumCard';
import image from '../asset/images/author.png'



function useFetchData(id) {
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      getAuteurById(id).then(data => {
        setData(data);
        setLoading(false);
        console.log(data);
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
      clearTimeout(timer);
    }, 1000);
  }, []);

  return { loading, data };
}

function Auteur() {
  const location = useLocation().pathname.slice(8);
  console.log(location);
  const { loading, data } = useFetchData(location);

  if (loading) {
    return (
      <>
        <HeaderComponent />
        <LoadingScreen loading={loading} />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <HeaderComponent />
        <p className='title'>Auteur introuvable ...</p>
      </>
    )
  }

  if(data.albums.length === 0) {
    return (
      
      <>
        <HeaderComponent />
        <div id="bodyAuteur" className="box is-flex">
          <img id='image' className='el' src={image} alt="album cover" />
          <div id='sideInformation' className=' m-5 el'>
              <div class="tags has-addons">
              <span class="tag is-dark is-medium">Nom</span>
              <span class="tag is-danger is-medium">{data.nom}</span>
            </div>
            <div class="tags has-addons">
              <span class="tag is-dark is-medium">Prénom</span>
              <span class="tag is-danger is-medium">{data.prenom}</span>
            </div>
            <div class="tags has-addons">
              <span class="tag is-dark is-medium">Nombre d'albums écrit</span>
              <span class="tag is-danger is-medium">{data.albums.length}</span>
            </div>
  
          </div>
        </div>
        <div>
        <h1 id="auteurTitre" className='title'>Albums écrit par l'auteur</h1>
        <h1 id="auteurPasAlbum" className='title'>Aucun album de l'auteur trouvé ...</h1>
        </div>
      </>
    )
  }
  return (
      
    <>
      <HeaderComponent />
      <div id="bodyAuteur" className="box is-flex">
        <img id='image' className='el' src={image} alt="album cover" />
        <div id='sideInformation' className=' m-5 el'>
            <div class="tags has-addons">
            <span class="tag is-dark is-medium">Nom</span>
            <span class="tag is-danger is-medium">{data.nom}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Prénom</span>
            <span class="tag is-danger is-medium">{data.prenom}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Nombre d'albums écrit</span>
            <span class="tag is-danger is-medium">{data.albums.length}</span>
          </div>

        </div>
      </div>
      <div>
      <h1 id="auteurTitre" className='title'>Albums écrit par l'auteur</h1>
        <div className="serieList">
          {data.albums.map((val) => {
            return <AlbumCard key={val.id}
              album={val}
            />
          })}
        </div>
      </div>
    </>
  )
}
export default Auteur;