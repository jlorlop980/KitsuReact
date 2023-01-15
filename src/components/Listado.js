import React from "react";
import TiraAnimeCrs from "./TiraAnimeCrs.js";
import TiraMangaCrs from "./TiraMangaCrs";
import TiraAnimePrueba from "./TiraAnimePrueba.js";
import SearchBar from "./SearchBar.js";
import SearchDual from "./SearchDual.js";

function Listado(){

    return(
    <>  
        <h2>Trending</h2>
        <SearchDual/>
        <TiraAnimePrueba />
        <TiraMangaCrs />
        <a href="/">Volver</a>
    </>
    );
}

export default Listado;
