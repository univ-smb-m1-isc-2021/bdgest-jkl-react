import React from 'react';
import '../css/Auteur.css'
import { useParams } from 'react-router-dom';

import HeaderComponent from './HeaderComponent';
import { useLocation } from 'react-router-dom';
import {getAuteurById} from '../service/BDGestService';
import LoadingScreen from './LoadingScreen';
import AlbumCard from './AlbumCard';
import image from '../asset/images/author.png'
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { getAuteurSuivi}  from '../service/BDGestService';
import {addAuteurSuivi} from '../service/BDGestService';
import {deleteAuteurSuivi} from '../service/BDGestService';

function Auteur() {
  const { id } = useParams();
  const [inAuteurSuivi, setInAuteurSuivi] = React.useState(false);

function useFetchData(id) {
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    isInAuteurSuivi(id)
  },[]);
  

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

function isConnected(){
  if(sessionStorage.getItem('connected') === 'true'){
    return true;
  }else{
    return false;
  }
}

function addToAuteurSuivi(location){
  let user = sessionStorage.getItem('user')
  let id = JSON.parse(user)["id"]

  console.log(location, id)
  addAuteurSuivi(id, location)
}


function deleteFromAuteurSuivi(location){
  let user = sessionStorage.getItem('user')
  let id = JSON.parse(user)["id"]

  deleteAuteurSuivi(id, location)
}

function isInAuteurSuivi(location){
  if(isConnected()){
    let user = sessionStorage.getItem('user')
    let id = JSON.parse(user)["id"]
    console.log("icic")
    getAuteurSuivi(id).then(data => {
      for (let i = 0; i < data.length; i++) {
        console.log("la")
        console.log(data[i])
        console.log(location)
        console.log(data[i]["id"])
        console.log("aledd")
        if(data[i]["id"] == location){
          setInAuteurSuivi(true)
          console.log("pouet")
        }
      }
      });
    }
}

  const location = useLocation().pathname.slice(8);
  console.log(location);
  const { loading, data } = useFetchData(location);
  var isUserconnected = isConnected();


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

            <>
              {
                isUserconnected ?
                <>
                    {
                      !inAuteurSuivi ?
                    <button class="button is-success is-outlined" onClick={() => 
                      {addToAuteurSuivi(id); setInAuteurSuivi(true)}}>      
                    <span class="icon is-small" >
                      <CheckSharpIcon />
                    </span>
                    <span>Ajouter à ma collection</span>
                    </button>
                    :
                  <button class="button is-danger is-outlined" onClick={() => {deleteFromAuteurSuivi(id); setInAuteurSuivi(false)}}>
                    <span class="icon is-small" >
                      <CloseSharpIcon />
                    </span>
                    <span>Supprimer de ma collection</span>
                  </button>
                    }
                </>
                :
              <div className='content'>
                  <blockquote>Vous n'êtes pas connecté, connectez vous pour ajouter à une collection</blockquote>
              </div>
              }
             </>
  
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

          <>
              {
                isUserconnected ?
                <>
                    {
                      !inAuteurSuivi ?
                    <button class="button is-success is-outlined" onClick={() => 
                      {addToAuteurSuivi(id); setInAuteurSuivi(true)}}>      
                    <span class="icon is-small" >
                      <CheckSharpIcon />
                    </span>
                    <span>Suivre</span>
                    </button>
                    :
                  <button class="button is-danger is-outlined" onClick={() => {deleteFromAuteurSuivi(id); setInAuteurSuivi(false)}}>
                    <span class="icon is-small" >
                      <CloseSharpIcon />
                    </span>
                    <span>Ne plus suivre</span>
                  </button>
                    }
                </>
                :
              <div className='content'>
                  <blockquote>Vous n'êtes pas connecté, connectez vous pour ajouter à une collection</blockquote>
              </div>
              }
             </>

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