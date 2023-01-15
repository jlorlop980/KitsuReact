import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // import Link component
import PackAnime from "./PackAnime.js";

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
