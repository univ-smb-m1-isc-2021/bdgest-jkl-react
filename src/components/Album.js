import React from 'react';
import '../css/Album.css'
import { format } from "date-fns";
import HeaderComponent from './HeaderComponent';
import { useParams } from 'react-router-dom';
import { getAlbumById } from '../service/BDGestService';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { getCollection } from '../service/BDGestService';
import {addToCollection} from '../service/BDGestService';
import {deleteFromCollection} from '../service/BDGestService';
import LoadingScreen from './LoadingScreen';
import image from '../asset/images/album.png'


  
export default function Album() {
  const { id } = useParams();
  console.log(id);
  const [inCollection, setInCollection] = React.useState(false);
  

  React.useEffect(() => {
    isInCollection(id)
  },[]);
  



function useFetchData(id) {
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);

      getAlbumById(id).then(data => {
        setData(data);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
      });
      clearTimeout(timer);
    }, 1000);
  }, []);
  return { loading, data };
}

  function renderDate(date){
    var date = new Date(date);
  
    return format(date, "MMMM do, yyyy");
    }

  function isInCollection(location){
    if(isConnected()){
      let user = sessionStorage.getItem('user')
      let id = JSON.parse(user)["id"]
      console.log("icic")
      getCollection(id).then(data => {
        for (let i = 0; i < data.length; i++) {
          console.log("la")
          console.log(data[i])
          if(data[i]["id"] == location){
            setInCollection(true)
            console.log("pouet")
          }
        }
        });
      }
  }

  function isConnected(){
    if(sessionStorage.getItem('connected') === 'true'){
      return true;
    }else{
      return false;
    }
  }

  function addToUserCollection(location){
    let user = sessionStorage.getItem('user')
    let id = JSON.parse(user)["id"]

    console.log(location, id)
    addToCollection(id, location)
  }
  

  function removeFromUserCollection(location){
    let user = sessionStorage.getItem('user')
    let id = JSON.parse(user)["id"]

    deleteFromCollection(id, location)
  }

  function renderDate(date) {
    var date = new Date(date);
  
    return format(date, "MMMM do, yyyy");
  }



  
  const{loading, data} = useFetchData(id);
  var isUserconnected = isConnected();

  if (loading) {
    return (   
     <>
      <LoadingScreen loading={loading} />
    </>
  );
  }



  if (!data) {
    return (
      <>
        <HeaderComponent />
        <p className='title'>Album introuvable ...</p>
      </>
    );
  }
  return (
            <>
                <HeaderComponent />
                    <div id="bodyAlbum" className="box is-flex">
                        <img id='image' className='el' src={data.image!=""?data.image:image} alt="album cover" />
                        <div id='sideInformation' className=' m-5 el'>
                            <div class="tags has-addons">
                                <span class="tag is-dark is-medium">Série</span>
                                <span class="tag is-info is-medium">{data.serie!=null?data.serie:"Indisponible"}</span>
                            </div>
                            <div class="tags has-addons">
                                <span class="tag is-dark is-medium">Titre</span>
                                <span class="tag is-info is-medium">{data.titre!=null?data.titre:"Indisponible"}</span>
                            </div>
                            <div class="tags has-addons">
                                <span class="tag is-dark is-medium">Numéro</span>
                                <span class="tag is-info is-medium">{data.numero!=""?data.numero:"Indisponible"}</span>
                            </div>
                            <div class="tags has-addons">
                                <span class="tag is-dark is-medium">Auteur</span>
                                <span class="tag is-info is-medium">{data.auteur!=null?data.auteur:"Indisponible"}</span>
                            </div>
                            <div class="tags has-addons">
                                <span class="tag is-dark is-medium">ISBN</span>
                                <span class="tag is-info is-medium">{data.isbn!=""?data.isbn:"Indisponible"}</span>
                            </div>
                            <div class="tags has-addons">
                                <span class="tag is-dark is-medium">Date</span>
                                <span class="tag is-info is-medium">{renderDate(data.creation)}</span>
                            </div>
                            <div className='content'>
                                <h2 className='tag is-info is-medium'>Description</h2>
                                <blockquote id='descriptionAlbum'>{data.description!="null"?data.description:"Aucune description pour cette album ..."}</blockquote>
                            </div>
    
                            <>
                              {
                                isUserconnected ?
                                <>
                                  {
                                    !inCollection ?
                                  <button class="button is-success is-outlined" onClick={() => 
                                    {addToUserCollection(id); setInCollection(true)}}>      
                                  <span class="icon is-small" >
                                    <CheckSharpIcon />
                                  </span>
                                  <span>Ajouter à ma collection</span>
                                  </button>
                                  :
                                <button class="button is-danger is-outlined" onClick={() => {removeFromUserCollection(id); setInCollection(false)}}>
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
            </>
      );
}

