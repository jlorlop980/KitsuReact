import React from "react";
import "../css/Contacto.css";


function Contacto(){
      
    return( 
        <>
            <main className="Cmain-principal">
                <section className="Cmain-principal-section">
                    <form id="contacto" action="./assets/js/index.js" className="Cmain-principal-section-form">  
                        <label htmlFor="nomb" className="Cmain-principal-section-form-label">Nombre</label>
                        <input type="text" id="nomb" className="Cmain-principal-section-form-input"/>
                        <label htmlFor="appe" className="Cmain-principal-section-form-label">Apellido</label>
                        <input type="text" id="appe" className="Cmain-principal-section-form-input" />
                        <label htmlFor="mail" className="Cmain-principal-section-form-label">Email</label>
                        <input type="email" id="mail" className="Cmain-principal-section-form-input" />     
                    </form>
                    <div className="Cmain-principal-section-textarea">
                        <label htmlFor="mensa" className="Cmain-principal-section-textarea-label">Mensaje</label>
                        <textarea form="contacto" id="mensa" className="Cmain-principal-section-form-input Cmain-pricipal-section-form-mensaje"></textarea>
                    </div>        
                </section>
                <a href="/listado" className="Cmain-principal-section-a">Enviar</a>
            </main>
        </> 
    ); 

}

export default Contacto
