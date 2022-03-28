// react connection component
import React from 'react'

export default function Connexion(){
    return(
        // connection form
        <div className="connexion">
            <h1>Connexion</h1>
            <form>
                <label>
                    <input type="text" name="username" placeholder="username" />
                </label>
                <label>
                    <input type="password" name="password" placeholder="password" />
                </label>
                <input type="submit" value="Connexion" />
            </form>
        </div>    
    )

}