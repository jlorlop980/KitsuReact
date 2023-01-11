import React, {useState} from "react";
import PackAnime from "./PackAnime.js"

function TiraAnime(props) {
    const [datos,setDatos]=useState([]);
    
    function pedirDatos(){
        fetch(`https://kitsu.io/api/edge/anime`)
            .then(data => data.json())
            .then(response =>guardar(response))
            .catch(err =>console.log("no se ha podido contactart a la api"))
    }

    function guardar(dat){
        
        setDatos(dat);
        console.log(datos);
    }

    function crearDatos(){
        pedirDatos();
        return (datos.forEach(elemento => {
            <PackAnime sauce={elemento.attributes.titles.en} name={elemento.attributes.titles.en} />
        })

        );
    }


    return(
        <>
        { crearDatos() }
        </>
    );
    
}

export default TiraAnime;
