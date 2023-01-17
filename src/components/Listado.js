import React from "react";
import TiraMangaCrs from "./TiraMangaCrs";
import TiraAnimePrueba from "./TiraAnimePrueba.js";
import SearchDual from "./SearchDual.js";
import "./../css/Listado.css";

//este componente sirve de apoyo para unir el componente de la barra de busqueda y el listado como tal, que debido a mi api puedes usar el endpoint /anime o /manga
//por lo que hago 2 listados uno de manga y uno de anime en este listado como pone ahí vamos a llamar a la api para que los que según la api son los mas populares
//en ese momento

function Listado(){

    return(
    <main className="lisMain">
        <div className="lisBus">
            <h2>Trending</h2>
            <SearchDual/>
        </div>

        <div className="lisElementos">
            <div className="lisAnimes">
               <TiraAnimePrueba />
            </div>

            <div className="lisMangas">
                <TiraMangaCrs />
            </div>
        </div>
    </main>
    );
}

export default Listado;
