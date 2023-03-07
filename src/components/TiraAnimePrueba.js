import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // import Link component
import PackAnime from "./PackAnime.js";

//El comportamiento de este componente es exactamente idéntico al de manga solo que en este caso pasariamos en el link true ya que si es anime
//(posteriormente veremos el para que se usa parametro true o false) y que la llamada a la api es en el endpoint de anime por el resto es lo mismo
/**
 * @description Este componente se encarga de mostrar los animes que devuelve la api
 * @function
 * @name TiraAnimePrueba
 * @returns {JSX} JSX con los animes que nos devuelve la api.
 */
const TiraAnimePrueba = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://kitsu.io/api/edge/trending/anime");
    const animes = await data.json();
    setDatos(animes.data);
  };

  return (
    <div>
      <h1>Anime</h1>
      {console.log(datos)}
      <ul>
        {datos.map((anime) => (
          <li key={anime.id}>
            <Link
              to={`/producto/true/${anime.id}`}>
              <PackAnime
                sauce={anime.attributes.posterImage.tiny}
                name={anime.attributes.canonicalTitle}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TiraAnimePrueba;
