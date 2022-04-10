import React from 'react';
import tintin from '../asset/images/tintin-au-tibet-cover-fr.jpg'
import { Link } from 'react-router-dom';
import '../css/AlbumCard.css'

export default function AlbumCard(props) {

  return (
    <>
    <div className="albumEl">
      <Link to={`/album/${props.album.id}`}>
          <div className="card">
            <div className="card-image">
              <img src={tintin} width="200" alt={props.album.titre} />
            </div>
            <div className="card-content">
            <div class="tags has-addons">
                <span class="tag is-dark is-small">Titre</span>
                <span class="tag is-info is-small">{props.album.titre}</span>
            </div>
            <div class="tags has-addons">
                <span class="tag is-dark is-small">Numéro</span>
                <span class="tag is-info is-small">{props.album.numero}</span>
            </div>
            <div class="tags has-addons">
                <span class="tag is-dark is-small">ISBN</span>
                <span class="tag is-info is-small">{props.album.isbn}</span>
            </div>
            
            </div>
          </div>
      </Link>
    </div>
    </>
  );
}