import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/logo.png';

export default function HeaderComponent() {

    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link to="/">
                        <img className="m-2" alt="icon" src={logo} width={"80"} height={"28"} />
                    </Link>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link to="/catalogue" class="navbar-item">
                                Albums
                        </Link>
                        <Link to="/serie" class="navbar-item">
                                Séries
                        </Link>
                        <Link to="/auteur" class="navbar-item">
                            Auteurs
                        </Link>

                        <a class="navbar-item">
                            Collections
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Inscription</strong>
                                </a>
                                <a class="button is-light">
                                    Connexion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}