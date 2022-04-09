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
              <span className="card-title">{props.album.titre}</span>
            </div>
            <div className="card-content">
              <p>{props.album.description}</p>
            </div>
          </div>
      </Link>
    </div>
    </>
  );
}