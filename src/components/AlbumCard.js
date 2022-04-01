import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumCard(props) {
  return (
    <Link to={`/album/${props.id}`}>
      <div className="card">
        <div className="card-image">
          <img src={props.image} width="200" alt={props.title} />
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-content">
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a href={props.link}>{props.link}</a>
        </div>
      </div>
    </Link>
  );
}