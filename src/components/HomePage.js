import React from 'react';
import HeaderComponent from './HeaderComponent';
import AlbumCard from './AlbumCard';
import tintin from './../asset/images/tintin-au-tibet-cover-fr.jpg';

export default function HomePage(param) { 
    return(
        <>
            <HeaderComponent/>
            <AlbumCard album={{id: 1, titre: 'Tintin et Loris', serie: '2', auteur: 'auteur', numero: '65'}}/>
        </>
    )
}