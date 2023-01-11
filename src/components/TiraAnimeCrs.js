import React, {useState, useEffect} from 'react';
import PackAnime from "./PackAnime.js";

const TiraAnimeCrs = () => {
  const [datos, setDatos] = useState([])
 
  useEffect(() => {
    obtenerDatos();
  }, [])
  
  const obtenerDatos =  async () => {
    const data = await fetch('https://kitsu.io/api/edge/trending/anime');
    const animes= await data.json();
    setDatos(animes.data);
  }

  return( 
    <div>
        <h1>Anime</h1>
      {console.log(datos)}
      <ul>
      {datos.map(anime=>(
        <li key={anime.id}><PackAnime sauce={anime.attributes.posterImage.tiny} name={anime.attributes.titles.en}/></li>
      ))}
      </ul>
    </div>
  );
};

export default TiraAnimeCrs;
