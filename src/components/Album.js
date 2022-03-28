import React from 'react';
import djam from '../asset/images/djam.jpg'
import '../css/Album.css'

/*const Album = (p) =>{

}*/
function Album(props) {
    return (
        <article id="bodyAlbum" className='message is-success'>
            <div class="message-header">
                <p>Album</p>
            </div>
            <div class="message-body">
                <div className='is-flex'>
                    <img className='image' src={djam} alt="Placeholder image"/>
                    <div>
                        <h2 className='title'>Série</h2>
                        <p className='subtitle'>{props.serie}</p>
                        <h2 className='title'>Titre</h2>
                        <p className='subtitle'>{props.title}</p>
                        <h2 className='title'>Numéro</h2>
                        <p className='subtitle'>{props.num}</p>
                        <h2 className='title'>Auteur</h2>
                        <p className='subtitle'>{props.author}</p>
                        <h2 className='title'>ISBN</h2>
                        <p className='subtitle'>{props.isbn}</p>
                        <h2 className='title'>Date</h2>
                        <p className='subtitle'>{props.date}</p>
                        <h2 className='title'>Description</h2>
                        <p className='subtitle'>{props.description}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default Album;