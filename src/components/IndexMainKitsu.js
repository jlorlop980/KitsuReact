import React from "react";
import "../css/IndexMainKitsu.css";

//en este componente tenemos simplemente un titulo con un enlace al listado, nada que destacar
function IndexMainKitsu(props) {
    return(
        <main className="main-principal">
            <h1 className="main-principal-h1">Mantente al dia con todo el manga y anime</h1>
            <a href="/listado" className="main-principal-a">Empezar</a>
        </main>
    );
}

export default IndexMainKitsu; 
