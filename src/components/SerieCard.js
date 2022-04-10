import React from 'react';
import tintin from '../asset/images/tintin-au-tibet-cover-fr.jpg'
import { Link } from 'react-router-dom';
import '../css/SerieCard.css'

export default function SerieCard(props) {

  return (
    <>
    <div className="serieEl">
      <Link to={`/serie/${props.serie.id}`}>
          <div className="card">
            <div className="card-image">
              <img src={tintin} width="200" alt={props.serie.titre} />
            </div>
            <div className="card-content">
                <p>{props.serie.titre}</p>
                <p>{props.serie.description}</p>
            </div>
          </div>
      </Link>
    </div>
    </>
  );
}