import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/logo.png';
import SearchIcon from '@mui/icons-material/Search';

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
                        <a class="navbar-item">
                            Albums
                        </a>

                        <a class="navbar-item">
                            Favoris
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">

                            <div class="control has-icons-right">
                                <input class="input is-medium" type="text" placeholder="Chercher un album" />

                                <span class="icon is-right">
                                    <SearchIcon style={{trasform:"rotate(90deg)"}}/>
                                </span>
                            </div>

                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}