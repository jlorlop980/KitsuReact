import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Youtube from "./../images/youtube.png";
import Crunchyroll from "./../images/crunchyroll.png";
import Netflix from "./../images/netflix.png";
import Amazon from "./../images/A.png";
import Default from "./../images/tv.png";
import "./../css/Producto.css";
import Lack from "./../images/mobile/Home.svg";

/**
 * @description Este componente se encarga de mostrar la informacion de un anime o manga en concreto
 * @function
 * @name Producto
 * @returns {JSX} JSX con la informacion del anime o manga.
 */
const Producto = () => {
    const [anime, setAnime] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id,isAnime } = useParams();
    const [videoM,setVideoM] =useState(false)
    const [enlace,setEnlace] =useState({})
    const regNetflix=/netflix/gi;
    const regCrunchy=/crunchy/gi;
    const regAmazon=/ama/gi;
    const hasUrl=false;
//aquí defino una funcion para mostrar el repodructor que queda en primer plano activande una capa por detras un div negro con poca opacidad la 
    //url la pongo en un iframe y la saco de la llamada a la api con el id de video
    function handleClick(){
        setVideoM(!videoM);
    }
//aqui compruebo una llamada anidada que hago a al api con los enlaces de visualizacion ya sea amazon, netflix crunchyroll etc pero como es un pcooc inconsistente ya que a veces no lo devuelve y otras como null he acabado dejando un icono de una casa
    //aunque la idea original era que dependiendo del enlace te lalma a su pagina para visualizarlo 
    function plataforma(a){
       if(regCrunchy.test(a)){
           return Crunchyroll
       } 
        else if(regNetflix.test(a)){
            return Netflix
        } 
        else if(regAmazon.test(a)){
            return Amazon
        } 
        else{
            return Default
        }
    }
//aquí hago las llamadas a la api ambas y guardo los datos los cuales los recojo de la url con el use useParams arriba definido con id y si es o no anime
    useEffect(() => {
      const obtenerAnime = async () => {
        const data = await fetch(`https://kitsu.io/api/edge/${isAnime=="true"?"anime":"manga"}/${id}`);
        const animeDetail = await data.json();
          console.log(animeDetail.data)
          if(isAnime=="true"){try{
          const enlaces= await fetch(animeDetail.data.relationships.streamingLinks.links.related);
          const enlaceDetail =await enlaces.json()
            hasUrl=!hasUrl;
            setEnlace(enlaceDetail.data[0])
          }

            catch{console.log("no tiene url")}
          }
          {/*enale.data.relationship.streamingLinks.self*/}
        setAnime(animeDetail.data);
        setIsLoading(false)
      };
      obtenerAnime();
    }, [id,isAnime]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="Pmain">
      {/* <h1>{anime.attributes.titles.en}</h1>*/}
        <img className="cartel" src={anime.attributes.posterImage.medium} alt={anime.attributes.titles.en}/>
        <div className="datos">
            <p className="nombre">{anime.attributes.canonicalTitle}</p>
            <div className="subdatos">
                <div className="subdatos-titulo">
                    <p className="elemento">Started</p>
                    <p className="elemento">Status</p>
                    <p className="elemento">Rating</p>
                    <p className="elemento">Episodes</p>
                    <p className="elemento">Ori. Title</p>
                    <p className="elemento">Synopsis</p>
                </div>
                
                <div className="subdatos-contenido">
                    <p className="elemento">{anime.attributes.startDate}</p>
                    <p className="elemento">{anime.attributes.status}</p>
                    <p className="elemento">{anime.attributes.averageRating}</p>
                    <p className="elemento">{anime.attributes.status=="current"?"~":anime.attributes.episodeCount}</p>
                    <p className="elemento">{anime.attributes.titles.ja_jp}</p>
                    <p >{anime.attributes.synopsis.slice(0,500)}</p>
                </div>
            </div>  
      </div>

    {isAnime=="true"?<>
        <a onClick={handleClick} className="yt">
            <img width="48" height="48" style={{zIndex:"1"}} src={Youtube}/>
      </a>
        
      <iframe className={videoM?"abierto":"cerrado"} width="560" height="315" src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className={`blackNoir  ${videoM?"open":"closed"}`}></div>
    <a href={hasUrl?enlace.attributes.url:"#"} className="enlace" >
        <img width="48" height="48" src={hasUrl?plataforma(enlace.attributes.url):Lack}/>
    </a></>:<p></p>}
    </main>
  );
};

export default Producto;
