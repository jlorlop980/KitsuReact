import React from "react";
import usuario from "../images/User.svg";
import logo from "../images/logo.svg";
import ajustes from "../images/Settings.svg";
import "../css/HeaderKitsu.css";

function HeaderKitsu(props) {

    return(
        <header className="header-principal">
        <img src={logo} className="header-principal-logo" />
        <a href="./index.html" className="header-principal-titulo">KITSU API</a>
        <nav className="header-principal-nav">
            <ul>
                <li><a className="header-principal-nav-a" href="./registro.html">usuario<img src={usuario} alt="usuario" className="header-principal-nav-img" /></a></li>
                <li><a className="header-principal-nav-a" href="./informacionUser.html">ajustes<img src={ajustes} alt="ajustes" className="header-principal-nav-img" /></a></li>
            </ul>
        </nav>
    </header>
    );
    
}

export default HeaderKitsu;
