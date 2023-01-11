import React from "react";
import reddit from "../images/Reddit.svg";
import facebook from "../images/Facebook.svg";
import instagram from "../images/Instagram.svg";
import twitter from "../images/Twitter.svg";
import "../css/FooterKitsu.css";

function FooterKitsu(props){

    return(
        <footer className="footer-principal"> 
            <ul className="footer-principal-redes">
                <li><a href="https://kitsu.io/explore/anime"><img src={twitter} alt="Twitter" className="footer-principal-redes-img" /></a></li>
                <li><a href="https://kitsu.io/explore/anime"><img src={facebook} alt="Facebook" className="footer-principal-redes-img" /></a></li>
                <li><a href="https://kitsu.io/explore/anime"><img src={instagram} alt="Instagram" className="footer-principal-redes-img" /></a></li>
                <li><a href="https://kitsu.io/explore/anime"><img src={reddit}  alt="Reddit" className="footer-principal-redes-img" /></a></li>
            </ul>
            <a href="./contacto.html" className="footer-principal-contacto">Contacto</a>
        </footer>
    );
}

export default FooterKitsu;
