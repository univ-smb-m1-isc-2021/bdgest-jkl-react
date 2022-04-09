import React from 'react';
import tintin from '../asset/images/tintin-au-tibet-cover-fr.jpg'
import '../css/Album.css'
import HeaderComponent from './HeaderComponent';
import { useLocation } from 'react-router-dom';
import { getAlbumById } from '../service/BDGestService';



function useFetchData(id){
    const [loading, setLoading] = React.useState([]);
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      setLoading(true);
      getAlbumById(id).then(data => {
        setData(data);
        setLoading(false);
        console.log(data);
      }).catch(error => {
        console.log(error);
        setLoading(false);
      });
    },[]);
  
    return { loading, data };
  }

function Album() {
    const location = useLocation().pathname.slice(7);
    const{loading, data} = useFetchData(location);

    if( loading ){
        return (
          <>
            <HeaderComponent/>
            <p className='title'>Chargement...</p>
          </>
        );
      }
    
      if(!data){
        return(
          <>
            <HeaderComponent/>
            <p className='title'>Album introuvable ...</p>
          </>
        )
      }
    return (
        <>
            <HeaderComponent />
            <div className="columns is-vcentered">
                <div id="bodyAlbum" className="column is-8 m-5 box is-flex">
                    <img id='image' className='el' src={tintin} alt="album cover" />
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
                <div class="column">
                    <p class="bd-notification is-primary">Enim nostrud consectetur exercitation dolor officia ea non aliquip aliquip adipisicing sit id et. Elit et duis nulla laborum occaecat elit. Quis laborum anim mollit qui anim amet magna ut consectetur. Cupidatat mollit irure consequat commodo cupidatat voluptate deserunt esse cillum.

Consectetur cillum sit dolor cillum Lorem amet nisi ad ullamco ut sint. Labore incididunt id eu Lorem veniam id. Eiusmod sunt eiusmod commodo duis fugiat dolore laboris ipsum elit adipisicing excepteur amet duis. Id sit anim exercitation aute quis enim laborum veniam.

Quis cupidatat cillum anim elit aliquip id deserunt laboris duis ad exercitation. Lorem esse fugiat sunt nisi consectetur eiusmod. Sit amet duis magna reprehenderit Lorem culpa nulla dolor fugiat tempor veniam. Ea occaecat enim irure Lorem occaecat.

Incididunt tempor ea culpa laboris consectetur anim. Sunt ullamco elit dolor quis anim id veniam ea esse anim et ullamco labore. Cupidatat nisi ut deserunt sit non ullamco id commodo ea consequat labore non. Occaecat ullamco est reprehenderit minim ipsum nulla.Dolore magna reprehenderit est ex nisi do. Sit qui voluptate cillum aute excepteur in reprehenderit occaecat. Exercitation esse labore anim mollit quis velit laborum non officia veniam minim sit. Minim duis deserunt do incididunt sint aliquip anim cupidatat reprehenderit dolor. Ullamco deserunt in nisi sit sint consequat sunt laborum commodo. Nisi consectetur culpa id magna mollit ex aliquip proident sint duis in enim irure. Consequat eu commodo esse sit aute laboris in quis commodo proident elit exercitation commodo voluptate.</p>
                </div>
            </div>
        </>
    )
}
export default Album;