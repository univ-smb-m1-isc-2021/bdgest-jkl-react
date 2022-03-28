import React, { Component } from 'react';

export default function Inscription(props) {
    return (
    <>
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
                        <input class="input" type="text" placeholder="ex: Jubard"/>
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
                            <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Mot de passe</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" />
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Confirmation du mot de passe</label>
                    <div class="control">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password"/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
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
            </div>
        </form>
    </div>
    </>
    )
}