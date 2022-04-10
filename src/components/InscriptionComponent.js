import React from 'react';
import { Link } from 'react-router-dom';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import HeaderComponent from './HeaderComponent';
import form from '../css/form.css';
import {signin} from '../service/BDGestService';

function createAccount(){
    console.log("createAccount");
    var pseudo = document.getElementById("pseudo").value;
    var email = document.getElementById("mail").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    console.log(password1);
    console.log(password2);
    if(password1 === password2){
        signin(pseudo,email,password1);
    }else{
        alert("Les mots de passe ne correspondent pas");
    }
}

export default function Inscription(props) {
    return (
        <>
            <HeaderComponent />
            <div className='form-width'>
                <div class="box">

                    <div class="field">
                        <label class="label">Pseudo</label>
                        <div class="control">
                            <input id="pseudo" class="input" type="text" placeholder="ex: Barjonitro73" />
                        </div>
                    </div>

                    <div class="field">
                        <label class="label ">Email</label>
                        <p class="control has-icons-left">
                            <input id="mail" class="input" type="email" placeholder="Email" />
                            <span class="icon is-small is-left">
                                <EmailTwoToneIcon />
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Mot de passe</label>
                        <p class="control has-icons-left">
                            <input id="password1" class="input" type="password" placeholder="Password" />
                            <span class="icon is-small is-left">
                                <LockTwoToneIcon />
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Confirmation du mot de passe</label>
                        <div class="control">
                            <p class="control has-icons-left">
                                <input id="password2" class="input" type="password" placeholder="Password" />
                                <span class="icon is-small is-left">
                                    <LockTwoToneIcon />
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="field">
                        <p class="control">
                            <button class="button is-success" onClick={createAccount}>
                                Creation du compte
                            </button>
                        </p>
                    </div>
                    <Link to="/login">J'ai déjà un compte</Link>
                </div>
            </div>
        </>
    )
}