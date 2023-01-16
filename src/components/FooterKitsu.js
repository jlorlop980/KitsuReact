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

        <footer class="footer-mobile">
            <nav class="footer-mobile-nav">
                <ul class="footer-mobile-nav-ul">
                    <li><a class="footer-mobile-nav-a" href="/"><img src={Home}/></a></li>
                    <li><a class="footer-mobile-nav-a" href="/login"><img src={User}/></a></li>
                    <li><a class="footer-mobile-nav-a" href="/listado"><img src={List}/></a></li>
                    <li><a class="footer-mobile-nav-a" href="/contacto"><img src={Contacto}/></a></li>
                </ul>
            </nav>
        </footer>
        </>
    );
    
}

export default FooterKitsu;
