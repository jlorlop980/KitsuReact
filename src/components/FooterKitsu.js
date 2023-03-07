import React from "react";
import reddit from "../images/Reddit.svg";
import facebook from "../images/Facebook.svg";
import instagram from "../images/Instagram.svg";
import twitter from "../images/Twitter.svg";
import Home from "./../images/mobile/Home.svg";
import List from "./../images/mobile/List.svg";
import User from "./../images/mobile/User.svg";
import Contacto  from "./../images/mobile/Contacto.svg";
import "../css/FooterKitsu.css";

//Este componente es en el que creo el footer y al principio traté de usar el mismo diseño que en el modulo de diseño por eso tengo 2 footer-principal-redes-img
//uno correspondiente a el escritorio y otro al de móvil que se oculta o se muestran dependiendo de el tamaño de la pantalla
/**
 * @function
 * @name FooterKitsu
 * @returns {JSX} 
 * @description  JSX con el footer simplemente con poco interactividad no más que estético
 */
function FooterKitsu(props){

    return(
        <>
        <footer className="footer-principal"> 
            <ul className="footer-principal-redes">
                <li><a target="_blank" href="https://kitsu.io/explore/anime"><img src={twitter} alt="Twitter" className="footer-principal-redes-img" /></a></li>
                <li><a target="_blank" href="https://kitsu.io/explore/anime"><img src={facebook} alt="Facebook" className="footer-principal-redes-img" /></a></li>
                <li><a target="_blank" href="https://kitsu.io/explore/anime"><img src={instagram} alt="Instagram" className="footer-principal-redes-img" /></a></li>
                <li><a target="_blank" href="https://kitsu.io/explore/anime"><img src={reddit}  alt="Reddit" className="footer-principal-redes-img" /></a></li>
            </ul>
            <a href="/contacto" className="footer-principal-contacto">Contacto</a>
        </footer>

        <footer className="footer-mobile">
            <nav className="footer-mobile-nav">
                <ul className="footer-mobile-nav-ul">
                    <li><a className="footer-mobile-nav-a" href="/"><img src={Home}/></a></li>
                    <li><a className="footer-mobile-nav-a" href="/login"><img src={User}/></a></li>
                    <li><a className="footer-mobile-nav-a" href="/listado"><img src={List}/></a></li>
                    <li><a className="footer-mobile-nav-a" href="/contacto"><img src={Contacto}/></a></li>
                </ul>
            </nav>
        </footer>
        </>
    );
    
}

export default FooterKitsu;
