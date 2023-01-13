import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Producto = () => {
  const [anime, setAnime] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const obtenerAnime = async () => {
      const data = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
      const animeDetail = await data.json();
      setAnime(animeDetail.data);
      setIsLoading(false);
    };
    obtenerAnime();
  }, [id]);

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
