import React from 'react';
import '../css/Serie.css'
import { format } from "date-fns";
import HeaderComponent from './HeaderComponent';
import { useLocation } from 'react-router-dom';
import { getSerieById } from '../service/BDGestService';
import LoadingScreen from './LoadingScreen';
import AlbumCard from './AlbumCard';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { getSerieSuivi}  from '../service/BDGestService';
import {addSerieSuivi} from '../service/BDGestService';
import {deleteSerieSuivi} from '../service/BDGestService';
import { useParams } from 'react-router-dom';
import image from '../asset/images/album.png';



function Serie() {
  const { id } = useParams();
  const [inSerieSuivi, setInSerieSuivi] = React.useState(false);


  function isConnected(){
    if(sessionStorage.getItem('connected') === 'true'){
      return true;
    }else{
      return false;
    }
  }

  function addToSerieSuivi(location){
    let user = sessionStorage.getItem('user')
    let id = JSON.parse(user)["id"]
  
    console.log(location, id)
    addSerieSuivi(id, location)
  }
  
  
  function deleteFromSerieSuivi(location){
    let user = sessionStorage.getItem('user')
    let id = JSON.parse(user)["id"]
  
    deleteSerieSuivi(id, location)
  }
  
  function isInSerieSuivi(location){
    if(isConnected()){
      let user = sessionStorage.getItem('user')
      let id = JSON.parse(user)["id"]
      console.log("icic")
      getSerieSuivi(id).then(data => {
        for (let i = 0; i < data.length; i++) {
          console.log("la")
          console.log(data[i])
          console.log(location)
          console.log(data[i]["id"])
          console.log("aledd")
          if(data[i]["id"] == location){
            setInSerieSuivi(true)
            console.log("pouet")
          }
        }
        });
      }
  }
function useFetchData(id) {
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    isInSerieSuivi(id)
  },[]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      getSerieById(id).then(data => {
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


function renderDate(date) {
  var date = new Date(date);

  return format(date, "MMMM do, yyyy");
}

  const location = useLocation().pathname.slice(7);
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
        <p className='title'>Serie introuvable ...</p>
      </>
    )
  }
  return (
    <>
      <HeaderComponent />
      <div id="bodySerie" className="box is-flex">
        <img id='image' className='el' src={data.image!=""?data.image:image} alt="album cover" />
        <div id='sideInformation' className=' m-5 el'>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Série</span>
            <span class="tag is-danger is-medium">{data.titre!=""?data.titre:"Indisponible"}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Nombre d'albums</span>
            <span class="tag is-danger is-medium">{data.nbTomes}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Auteur</span>
            <span class="tag is-danger is-medium">{data.auteur.nom} {data.auteur.prenom}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Création</span>
            <span class="tag is-danger is-medium"> {renderDate(data.debut)}</span>
          </div>
          <div className='content'>
            <h2 className='tag is-danger is-medium'>Description</h2>
            <blockquote id='descriptionAlbum'>{data.description!="null"?data.description:"Pas de description disponible ..."}</blockquote>
          </div>
          <>
              {
                isUserconnected ?
                <>
                    {
                      !inSerieSuivi ?
                    <button class="button is-success is-outlined" onClick={() => 
                      {addToSerieSuivi(id); setInSerieSuivi(true)}}>      
                    <span class="icon is-small" >
                      <CheckSharpIcon />
                    </span>
                    <span>Suivre la serie</span>
                    </button>
                    :
                  <button class="button is-danger is-outlined" onClick={() => {deleteFromSerieSuivi(id); setInSerieSuivi(false)}}>
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
      <h1 id="albumTitre" className='title'>Albums de la série</h1>
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
export default Serie;