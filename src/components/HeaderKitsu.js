import React, {useState} from "react";
import usuario from "../images/User.svg";
import logo from "../images/logo.svg";
import ajustes from "../images/Settings.svg";
import "../css/HeaderKitsu.css";

function HeaderKitsu(props) {
 const [loged,setLoged] = useState(localStorage.getItem("iniciado"))
    return(
        <>
        <header className="header-principal">
        <img src={logo} className="header-principal-logo" />
        <a href="/" className="header-principal-titulo">KITSU API</a>
        <nav className="header-principal-nav">
            <ul>
                <li><a className="header-principal-nav-a" href={loged=="true"?"/informacionUser":"/login"}>{loged=="true"?localStorage.getItem("username"):"Usuario"}<img src={usuario} alt="usuario" className="header-principal-nav-img" /></a></li>
                <li><a className="header-principal-nav-a" href="/informacionUser">ajustes<img src={ajustes} alt="ajustes" className="header-principal-nav-img" /></a></li>
            </ul>
        </nav>
    </header>
    <header class="header-mobile">
        <img src={logo} class="header-mobile-logo"/>
        <a href="./index.html" class="header-mobile-titulo">KITSU API</a>
    </header>

     </>   
    );
    
}

export default HeaderKitsu;
