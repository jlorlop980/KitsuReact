import "../css/search.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Este compotente es el que tenemos en la página de listado ya que hace las veces de listado y de buscador, en este componente
//vamos a llamar en tiempo real a la api según escribamos en la barra de busqueda, para que sea mas interesante también tenemos un botón con el
//que cambiamos entre llamar a la api con el endpoint de anime o el de manga ya que hay animes sin manga (pocos) y mangas sin anime 
//tambien usamos una expresión regular para sustituir los espacios por el caracter encodeado como nos indíca la documentación de la api


const SearchDual = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isAnime, setIsAnime] = useState(true);
  const [hover, setHover] = useState(false);

    //aqui como anteriormente llamamos a la api solo que ahora controlamos si llamamos al endpoint de anime o manga ademas con filter los usamos 
    //tal y como indica la api para poder buscar por texto en vez de id
  useEffect(() => {
    if (searchText === "") {
      setSearchResults([]);
      setShowResults(false);
    } else {
      const search = async () => {
        const data = await fetch(
          `https://kitsu.io/api/edge/${isAnime ? 'anime' : 'manga'}?filter%5Btext%5D%3D=${searchText.replace(/ /g, "%20")}`
        );
        const results = await data.json();
        setSearchResults(results.data);
        setShowResults(true);
      };
      search();
    }
  }, [searchText, isAnime]);
//cuando se llama a los datos se muestra un desplegable de la barra de busqueda con los resultados con un enlace en el que lleva el id y si es anime o no para el componente de producto
  return (
      <div>
      <div>
        <input className="botoncito"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for anime/manga..."
        />
        <button className="botoncito" onClick={() => setIsAnime(!isAnime)}>
          {isAnime ? "Search manga" : "Search anime"}
        </button>
      <Link to={"/search"}>
        <button className="botoncito">
            Página de busqueda
        </button>
      </Link>
      </div>
      
        <div className="search" 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}      
        >
          <ul className={`search ${hover?"mON":"mOFF"}`}>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={{
                  pathname: `/producto/${isAnime}/${result.id}`,
                  state: {isAnime}
                }}>
                {result.attributes.canonicalTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      
    </div>
  );
};

export default SearchDual;
