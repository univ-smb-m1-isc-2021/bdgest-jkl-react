import React from 'react';
import djam from '../asset/images/djam.jpg'
import '../css/Album.css'

/*const Album = (p) =>{

}*/
function Album(props) {
    return (
        <div id="bodyAlbum" className='box is-flex'>
            <img  id='image' className='el' src={djam} alt="Placeholder image"/>
            <div id='sideInformation' className='el'>
                <div class="tags has-addons">
                    <span class="tag is-dark is-medium">Série</span>
                    <span class="tag is-info is-medium">{props.serie}</span>
                </div>
                <div class="tags has-addons">
                    <span class="tag is-dark is-medium">Titre</span>
                    <span class="tag is-info is-medium">{props.title}</span>
                </div>
                <div class="tags has-addons">
                    <span class="tag is-dark is-medium">Numéro</span>
                    <span class="tag is-info is-medium">{props.num}</span>
                </div>
                <div class="tags has-addons">
                    <span class="tag is-dark is-medium">Auteur</span>
                    <span class="tag is-info is-medium">{props.author}</span>
                </div>
                <div class="tags has-addons">
                    <span class="tag is-dark is-medium">ISBN</span>
                    <span class="tag is-info is-medium">{props.isbn}</span>
                </div>
                <div class="tags has-addons">
                    <span class="tag is-dark is-medium">Date</span>
                    <span class="tag is-info is-medium">{props.date}</span>
                </div>
                <div className='content'>
                    <h2 className='tag is-info is-medium'>Description</h2>
                    <blockquote id='descriptionAlbum'>{props.description}</blockquote>
                </div>
            </div>
        </div>
    )
}
export default Album;