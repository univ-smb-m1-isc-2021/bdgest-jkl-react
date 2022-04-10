import React from 'react';
import '../css/AuteurCard.css'
import image from '../asset/images/author.png'

export default function AuteurCard(props) {

  return (
    <>
    <div className="auteurEl">
        <div className="card">
        <div className="card-image">
            <img src={image} width="200" alt={props.auteur.titre} />
        </div>
        <div className="card-content">
        <div class="tags has-addons">
            <span class="tag is-dark is-small">Nom</span>
            <span class="tag is-success is-small">{props.auteur.nom}</span>
        </div>
        <div class="tags has-addons">
            <span class="tag is-dark is-small">Prénom</span>
            <span class="tag is-success is-small">{props.auteur.prenom}</span>
        </div>
        <div class="tags has-addons">
            <span class="tag is-dark is-small">Albums écrit</span>
            <span class="tag is-success is-small">{props.auteur.albums.length}</span>
        </div>
        
        </div>
        </div>
    </div>
    </>
  );
}