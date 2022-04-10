import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/logo.png';
import {disconnect} from '../service/BDGestService';

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

                    {sessionStorage.getItem("connected") ?
                        <a class="navbar-item">
                            Collections
                        </a>
                        :
                        null
                    }
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                {sessionStorage.getItem("connected") ?
                                    <div>
                                        <Link to="/" class="button is-primary" onClick={disconnect}>
                                            <strong>Deconnection</strong>
                                        </Link>
                                    </div>

                                :
                                    <div>
                                        <Link to="/Inscription" class="button is-primary">
                                            <strong>Inscription</strong>
                                        </Link>
                                        <Link to="/Login" class="button is-light">
                                            Connexion
                                        </Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
