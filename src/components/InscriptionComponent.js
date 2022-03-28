import React from 'react';
import { Link } from 'react-router-dom';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import HeaderComponent from './HeaderComponent';

export default function Inscription(props) {
    return (
        <>
            <HeaderComponent />
            <div>
                <form>
                    <div class="box">
                        <div class="field">
                            <label class="label">Prénom</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="ex: Théo" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Nom</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="ex: Jubard" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Pseudo</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="ex: Barjonitro73" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label ">Email</label>
                            <p class="control has-icons-left">
                                <input class="input" type="email" placeholder="Email" />
                                <span class="icon is-small is-left">
                                    <EmailTwoToneIcon />
                                </span>
                            </p>
                        </div>

                        <div class="field">
                            <label class="label">Mot de passe</label>
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password" />
                                <span class="icon is-small is-left">
                                    <LockTwoToneIcon />
                                </span>
                            </p>
                        </div>

                        <div class="field">
                            <label class="label">Confirmation du mot de passe</label>
                            <div class="control">
                                <p class="control has-icons-left">
                                    <input class="input" type="password" placeholder="Password" />
                                    <span class="icon is-small is-left">
                                        <LockTwoToneIcon />
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div class="field">
                            <p class="control">
                                <button class="button is-success">
                                    Creation du compte
                                </button>
                            </p>
                        </div>
                        <Link to="/login">J'ai déjà un compte</Link>
                    </div>
                </form>
            </div>
        </>
    )
}