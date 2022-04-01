import React from 'react';
import HeaderComponent from './HeaderComponent';
import AlbumCard from './AlbumCard';
import tintin from './../asset/images/tintin-au-tibet-cover-fr.jpg';

export default function HomePage(param) { 
    return(
        <>
            <HeaderComponent/>
            <AlbumCard
                id={0}
                titre="Tintin au tibet"
                image={tintin} 
                link={"https://www.tintin.com/fr/albums/tintin-au-tibet"}
                description={"BD de tintin au tibet"}/>
        </>
    )
}