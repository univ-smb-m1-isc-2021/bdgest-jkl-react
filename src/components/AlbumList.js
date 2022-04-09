import React from 'react';
import AlbumCard from './AlbumCard';
import HeaderComponent from './HeaderComponent';
import '../css/AlbumList.css'
import { getAllAlbums } from '../service/BDGestService';

function useFetchData(){
  const [loading, setLoading] = React.useState([]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    getAllAlbums().then(data => {
      setData(data);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  },[]);

  return { loading, data };
}

export default function AlbumList(props) {
/*let res =  getAllAlbums();
let albums = [];
let albums = [];
albums.push({id: 1, titre: 'Tintin et Loris', serie: '2', auteur: 'auteur', numero: '65'});
albums.push({id: 2, titre: 'Loris au toilette', serie: '2', auteur: 'auteur2', numero: '69'});
albums.push({id: 3, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 4, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 5, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 6, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 7, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 8, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 9, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 10, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 11, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 12, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 13, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});
albums.push({id: 14, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});*/


const{loading, data} = useFetchData();

if( loading ){
  return (
    <>
      <HeaderComponent/>
      <p className='title'>Loading...</p>
    </>
  );
}

if(data.length==0){
  return(
    <>
      <HeaderComponent/>
      <p className='title'>Aucun albums dans la base ...</p>
    </>
  )
}
  return (
      <>
        <HeaderComponent/>
        <div className="albumList">
                {data.map((item)=>{
                    return  <AlbumCard
                                album={item}
                                />
                })}
        </div>
    </>
  );
}