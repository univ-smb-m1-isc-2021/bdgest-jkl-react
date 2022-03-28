import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Connexion(props) {
    return (
    <>

    <div>
        <form>
            <div class="box">
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left">
                        <input class="input" type="email" id="email" placeholder="Email" />
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
                        <button class="button is-success">
                            Connexion
                        </button>
                    </p>
                    <Link to="/inscription">Je n'ai pas de compte</Link>
                </div>
            </div>
        </form>
    </div>

    </>
    )
}

