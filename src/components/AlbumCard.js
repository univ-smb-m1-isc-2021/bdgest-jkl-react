import React from 'react';

export default function AlbumCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.album.image} alt={props.album.title} />
        <span className="card-title">{props.album.title}</span>
      </div>
      <div className="card-content">
        <p>{props.album.description}</p>
      </div>
      <div className="card-action">
        <a href={props.album.link}>{props.album.link}</a>
      </div>
    </div>
  );
}