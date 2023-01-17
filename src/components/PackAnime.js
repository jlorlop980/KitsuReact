import React from "react";
import "./../css/PackAnime.css";

/**
 * @function
 * @name PackAnime
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.sauce - La URL de la imagen a mostrar.
 * @param {string} props.name - El nombre del anime o manga a mostrar.
 * @returns {JSX} 
 * @description  JSX con la imagen y el nombre del anime o manga.
 */

//este es un componente simple que usaremos tanto en el listado como en la página de búsqueda
//unicamente muestra una imagen y nombre que se le pasan como props
function PackAnime(props) {

    return(
        <div className="packed">
            <img height="156" width="110" src={props.sauce} alt="la que sea" />
            <p className="slug">{props.name}</p>
        </div>
    );
    
}

export default PackAnime;
