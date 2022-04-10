import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import React from 'react';
import { Link } from 'react-router-dom';
import form from '../css/form.css';
import HeaderComponent from './HeaderComponent';

import { signin } from '../service/BDGestService';

function connect(){
    console.log("createAccount");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    signin(email,password);
}

export default function Connexion(props) {
    return (
    <>
    <HeaderComponent />
    <div className='form-width'>
            <div class="box">
                <div class="field">
                    <label class="label">Email ou pseudo</label>
                    <p class="control has-icons-left">
                        <input class="input" type="email" id="email" placeholder="luxem@gmail.com, LuxemTheFezdu73" />
                        <span class="icon is-small is-left">
                            <EmailTwoToneIcon/>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Mot de passe</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" id="password" placeholder="Password" />
                        <span class="icon is-small is-left">
                            <LockTwoToneIcon/>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <p class="control">
                        <Link to="/" class="button is-success" onClick={connect}>
                            Connexion
                        </Link>
                    </p>
                    <Link to="/inscription">Je n'ai pas de compte</Link>
                </div>
            </div>
    </div>

    </>
    )
}

