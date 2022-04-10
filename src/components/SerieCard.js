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
              <img src={props.serie.image} width="200" alt={props.serie.titre} />
            </div>
            <div className="card-content">
            <div class="tags has-addons">
                <span class="tag is-dark is-small">Titre</span>
                <span class="tag is-danger is-small">{props.serie.titre}</span>
            </div>
            <div class="tags has-addons">
                <span class="tag is-dark is-small">Catégorie</span>
                <span class="tag is-danger is-small">{props.serie.categorie}</span>
            </div>
            </div>
          </div>
      </Link>
    </div>
    </>
  );
}