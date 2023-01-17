import React from "react";
import TiraAnimeCrs from "./TiraAnimeCrs.js";
import TiraMangaCrs from "./TiraMangaCrs";
import TiraAnimePrueba from "./TiraAnimePrueba.js";
import SearchBar from "./SearchBar.js";
import SearchDual from "./SearchDual.js";
import "./../css/Listado.css";

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
