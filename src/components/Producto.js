import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Producto = (props) => {
  const [anime, setAnime] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id,isAnime } = useParams();


    useEffect(() => {
      const obtenerAnime = async () => {
        const data = await fetch(`https://kitsu.io/api/edge/${isAnime=="true"?"anime":"manga"}/${id}`);
        const animeDetail = await data.json();
        setAnime(animeDetail.data);
        setIsLoading(false);
      };
      obtenerAnime();
    }, [id,isAnime]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>{anime.attributes.titles.en}</h1>
        <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en}/>
        <p>{anime.attributes.synopsis}</p>
    </div>
  );
};

export default Producto;
