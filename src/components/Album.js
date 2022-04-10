import React, { useState } from 'react';
import '../css/Album.css'
import { format } from "date-fns";
import HeaderComponent from './HeaderComponent';
import { useLocation } from 'react-router-dom';
import { getAlbumById } from '../service/BDGestService';
import LoadingScreen from './LoadingScreen';


function useFetchData(id) {
  const [loading, setLoading] = useState([]);
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);

      getAlbumById(id).then(data => {
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

  function renderDate(date){
    var date = new Date(date);
  
    return format(date, "MMMM do, yyyy");
    }

function Album() {
  const location = useLocation().pathname.slice(7);
  const { loading, data } = useFetchData(location);

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
    )
  }
  return (
    <>
      <HeaderComponent />
      <div id="bodyAlbum" className="box is-flex">
        <img id='image' className='el' src={data.image} alt="album cover" />
        <div id='sideInformation' className=' m-5 el'>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Série</span>
            <span class="tag is-info is-medium">{data.serie}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Titre</span>
            <span class="tag is-info is-medium">{data.titre}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Numéro</span>
            <span class="tag is-info is-medium">{data.numero}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Auteur</span>
            <span class="tag is-info is-medium">{data.auteur}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">ISBN</span>
            <span class="tag is-info is-medium">{data.isbn}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Date</span>
            <span class="tag is-info is-medium">{data.date}</span>
          </div>
          <div className='content'>
            <h2 className='tag is-info is-medium'>Description</h2>
            <blockquote id='descriptionAlbum'>{data.description}</blockquote>
          </div>
        </div>
      </div>
    </>
  )
}
export default Album;