import React, { Component } from 'react';

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
                            <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Mot de passe</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" id="password" placeholder="Password" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <p class="control">
                        <button class="button is-success">
                            Connexion
                        </button>
                    </p>
                </div>
            </div>
        </form>
    </div>

    </>
    )
}

