import React from 'react';
import djam from '../asset/images/djam.jpg'
import '../css/Album.css'

/*const Album = (p) =>{

}*/
function Album(props) {
      return ( 
      <>
        <div className="box">
            <div className="image">
                <img src={djam} alt="Djamel: la bd"></img>
            </div>
            <div className="description">

            </div>
        </div>
      </>
       )
  }

export default Album;