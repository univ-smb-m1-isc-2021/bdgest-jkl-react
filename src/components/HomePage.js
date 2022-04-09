import React from 'react';
import HeaderComponent from './HeaderComponent';
import AlbumCard from './AlbumCard';
import AlbumList from './AlbumList';

export default function HomePage(param) { 
    return(
        <>
            <HeaderComponent/>
            <AlbumCard album={{id: 1, titre: 'Tintin et Loris', serie: '2', auteur: 'auteur', numero: '65'}}/>
            <AlbumList/>
        </>
    )
}