import React from 'react';
import '../css/Serie.css'
import HeaderComponent from './HeaderComponent';
import { useLocation } from 'react-router-dom';
import { getSerieById } from '../service/BDGestService';
import LoadingScreen from './LoadingScreen';



function useFetchData(id) {
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

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

function Serie() {
  const location = useLocation().pathname.slice(7);
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
        <p className='title'>Serie introuvable ...</p>
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
            <span class="tag is-danger is-medium">{data.titre}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Nombre d'albums</span>
            <span class="tag is-danger is-medium">{data.nbTomes}</span>
          </div>
          <div class="tags has-addons">
            <span class="tag is-dark is-medium">Auteur</span>
            <span class="tag is-danger is-medium">{data.auteur.nom} {data.auteur.prenom}</span>
          </div>

          <div className='content'>
            <h2 className='tag is-danger is-medium'>Description</h2>
            <blockquote id='descriptionAlbum'>{data.description}</blockquote>
          </div>
        </div>
      </div>
    </>
  )
}
export default Serie;