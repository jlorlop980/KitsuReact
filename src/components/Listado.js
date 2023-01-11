import React from "react";
import TiraAnimeCrs from "./TiraAnimeCrs.js";
import TiraMangaCrs from "./TiraMangaCrs";
import HeaderKitsu from "./HeaderKitsu.js";
import FooterKitsu from "./FooterKitsu.js";


function Listado(){

    return(
    <>
        <HeaderKitsu />
        <TiraAnimeCrs />
        <TiraMangaCrs />
        <a href="/">Volver</a>
        <FooterKitsu />
    </>
    );
}

export default Listado;
