import React, {useState, useEffect} from 'react';
import PackAnime from "./PackAnime.js";

const TiraMangaCrs = () => {
  const [datos, setDatos] = useState([])
 
  useEffect(() => {
    obtenerDatos();
  }, [])
  
  const obtenerDatos =  async () => {
    const data = await fetch('https://kitsu.io/api/edge/trending/manga');
    const animes= await data.json();
    setDatos(animes.data);
  }

  return( 
    <div>
        <h1>Manga</h1>
      {console.log(datos)}
      <ul>
      {datos.map(anime=>(
        <li key={anime.id}><PackAnime sauce={anime.attributes.posterImage.tiny} name={typeof anime.attributes.titles.en_us!="undefined"?anime.attributes.titles.en_us:anime.attributes.titles.en}/></li>
      ))}
      </ul>
    </div>
  );
};

export default TiraMangaCrs;
