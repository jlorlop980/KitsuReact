import React from "react";
import HeaderKitsu from "./HeaderKitsu.js";
import FooterKitsu from "./FooterKitsu.js";
import "../css/Contacto.css";


function Contacto(){
      
    return( 
        <>
        <HeaderKitsu />
            <main className="main-principal">
                <section className="main-principal-section">
                    <form id="contacto" action="./assets/js/index.js" className="main-principal-section-form">  
                        <label htmlFor="nomb" className="main-principal-section-form-label">Nombre</label>
                        <input type="text" id="nomb" className="main-principal-section-form-input"/>
                        <label htmlFor="appe" className="main-principal-section-form-label">Apellido</label>
                        <input type="text" id="appe" className="main-principal-section-form-input" />
                        <label htmlFor="mail" className="main-principal-section-form-label">Email</label>
                        <input type="email" id="mail" className="main-principal-section-form-input" />     
                    </form>
                    <div className="main-principal-section-textarea">
                        <label htmlFor="mensa" className="main-principal-section-textarea-label">Mensaje</label>
                        <textarea form="contacto" id="mensa" className="main-principal-section-form-input main-pricipal-section-form-mensaje"></textarea>
                    </div>        
                </section>
                <a href="/listado" className="main-principal-section-a">Enviar</a>
            </main>
        <FooterKitsu />
        </> 
    ); 

}

export default Contacto
