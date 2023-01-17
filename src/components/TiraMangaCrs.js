import React, {useState, useEffect} from 'react';
import PackAnime from "./PackAnime.js";
import { Link } from "react-router-dom"; // import Link component

//en este componente por fin empezamos a llamar a la api en este caso seria al endpoint de manga y trending

const TiraMangaCrs = () => {
  const [datos, setDatos] = useState([])
 
  useEffect(() => {
    obtenerDatos();
  }, [])
 //mediante el uso de funciones asíncronas llamamos a la api para posteriormente parsear los datos y asignarlos al estado de datos que contendrá
    //los mismos
  const obtenerDatos =  async () => {
    const data = await fetch('https://kitsu.io/api/edge/trending/manga');
    const animes= await data.json();
    setDatos(animes.data);
  }
//una vez tenemos los datos hacemos un map para iterar los datos que hemos recibido y por cada elementp añadimos un elemento a al lista no ordenada del 
    //componente PackAnime previamente comentado, pero rodeado de la funcionalidad de link de react-router-dom para enviarnos un parametro en este caso
    //el id el cual necesitaremos para la llamada en el componente producto y el false de la ruta se debe a que tambien es un parametro que indica si es
    //manga o anime en este caso falso porque todos son mangas.
    
  return( 
    <div>
        <h1>Manga</h1>
      {console.log(datos)}
      <ul>
      {datos.map(anime=>(
        <li key={anime.id}>
          <Link
              to={`/producto/false/${anime.id}`}>
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

export default TiraMangaCrs;
