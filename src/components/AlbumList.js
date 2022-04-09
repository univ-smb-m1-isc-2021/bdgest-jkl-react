import React from 'react';
import AlbumCard from './AlbumCard';
import {getAllAlbums} from '../service/BDGestService';

export default function AlbumList(props) {
//let albums = getAllAlbums();
let albums = [];
albums.push({id: 1, titre: 'Tintin et Loris', serie: '2', auteur: 'auteur', numero: '65'});
albums.push({id: 2, titre: 'Loris au toilette', serie: '2', auteur: 'auteur2', numero: '69'});
albums.push({id: 3, titre: 'Loris mange du poisson', serie: '2', auteur: 'auteur3', numero: '100'});

  return (
    <div className="row">
             {albums.map((item)=>{
                return  <AlbumCard
                            id={item.id}
                            titre={item.titre}
                            image={""} 
                            link={"https://www.tintin.com/fr/albums/tintin-au-tibet"}
                            description={"BD de tintin au tibet"}/>
            })}

    </div>
  );
}