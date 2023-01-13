import React from "react";
import "../css/Register.css";

function Register(){
    
    return(
        <main className="Rmain-principal">
            <section className="Rmain-principal-section">
                <form action="./assets/js/index.js" className="Rmain-principal-section-form">  
                    <label htmlFor="user" className="Rmain-principal-section-form-label">Usuario</label>
                    <input type="text" id="user" className="Rmain-principal-section-form-input"/>
                    <label htmlFor="pass" className="Rmain-principal-section-form-label">Contraseña</label>
                    <input type="password" id="pass" className="Rmain-principal-section-form-input"/>
                    <label htmlFor="rpass" className="Rmain-principal-section-form-label">Repetir contraseña</label>
                    <input type="password" id="rpass" className="Rmain-principal-section-form-input"/>
                </form>
            </section>
        
            <a href="./login" className="Rmain-principal-section-a">Enviar</a>
            <a href="./login" >ya tengo una cuenta</a>
        </main>
    );

}

export default Register;
