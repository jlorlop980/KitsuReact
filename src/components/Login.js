import React from "react";
import "../css/Login.css";

function Login(props) {

    return(
        <main className="main-principal">
        <section className="main-principal-section">
            <form action="./assets/js/index.js" className="main-principal-section-form">
                
                <label htmlFor="user" className="main-principal-section-form-label">Usuario</label>
                <input type="text" id="user" className="main-principal-section-form-input"/>
                <label htmlFor="pass" className="main-principal-section-form-label">Contraseña</label>
                <input type="password" id="pass" className="main-principal-section-form-input"/>
            </form>
        </section>
        
        <a href="./informacionUser.html" className="main-principal-section-a">Enviar</a>
        <a href="./register" >Crear una cuenta</a>
    </main>
    );
    
}

export default Login;
