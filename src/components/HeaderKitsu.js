import React, {useState} from "react";
import usuario from "../images/User.svg";
import logo from "../images/logo.svg";
import ajustes from "../images/Settings.svg";
import "../css/HeaderKitsu.css";


//aquí creo el header que como el footer tengo uno por cada versión, aunque en ese es interesante destacar que si estamos logueados
//cambia el enlace de "usuario" que nos redirige al login, por nuestro usuario y nos lleva a la pagina de usuario
//tambien aprovecho el enlace de ajuste que no utilizo le asigno la ruta de error para poder mostrarla facilmente
/**
 * @function
 * @name HeaderKitsu
 * @returns {JSX} 
 * @description  JSX con el footer simplemente con poco interactividad no más que estético
 */
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
                <li><a className="header-principal-nav-a" href="/404">ajustes<img src={ajustes} alt="ajustes" className="header-principal-nav-img" /></a></li>
            </ul>
        </nav>
    </header>

    <header className="header-mobile">
        <img src={logo} className="header-mobile-logo"/>
        <a href="./index.html" className="header-mobile-titulo">KITSU API</a>
    </header>

     </>   
    );
    
}

export default HeaderKitsu;
