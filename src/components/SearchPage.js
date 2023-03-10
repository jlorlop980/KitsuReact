import React, { useState } from "react";
import PackAnime from "./PackAnime";
import {Link} from "react-router-dom";
import "./../css/Searchpage.css";
import Fondo from "./../images/fondoSP.jpeg";

//en esta pagina podemos hacer una busqueda por filtros como son la categoría o o parametros de ordenación como son la popularidad o la fecha de salida
//así mismo podemos controlar esta ordenación de forma ascendente o descendete además de comprobar si son animes o mangas  y el numero de elementos por página
//con un máximo de 20 por página
/**
 * @description Este componente se encarga de mostrar la pagina de busqueda
 * @function
 * @name SearchPage
 * @returns {JSX} JSX con la pagina de busqueda con distintos filtros para buscar por ejemplo por categoria.
 */
const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isAnime, setIsAnime] = useState(true);
  const [categories, setCategories] = useState("adventure");
  const [sortMethod, setSortMethod] = useState("averageRating");
  const [sortDirection, setSortDirection] = useState(false);
  const [pageLimit, setPageLimit] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const categoriesOptions = ["adventure", "Samurai", "Boxing", "musical-band", "magic", "alien", "zombie","robot","martial-arts","idol","space","fantasy-world","time-travel","mecha","demon","love","comedy","isekai","seinen","shounen","josei","psychological","drama","dystopia","sports","horror","lice-of-life"];
  const sortMethodsOptions = ["averageRating", "popularityRank", "ageRating", "startDate"];
//aqui comprobamoslos filtros (usamos el "-" para poder cambiar entre descendente o ascendente)
  const handleSearch = async () => {
    setIsLoading(true);
    const sort = sortDirection ? `-${sortMethod}` : sortMethod;
    const data = await fetch(
      `https://kitsu.io/api/edge/${isAnime ? "anime" : "manga"}?filter%5Bcategories%5D=${categories}&page%5Blimit%5D=${pageLimit}&sort=${sort}`
    );
    const searchResults = await data.json();
    setSearchResults(searchResults.data);
    setIsLoading(false);
  };
//también tenemos un imagen al fondo de la página ya que los estilos es lo que menos me he centrado, además cada elemento es tambien un link a la página de producto
//como anteriormente usamos un map para poder mostrar todos los elementos
    return (
    <div className="SPmain">
      <div className="busquedas">
      <button className="botoncito" onClick={() => setIsAnime(!isAnime)}>
        {isAnime ? "Show manga" : "Show anime"}
        </button>

        <label>
          Select category:
          <select className="botoncito" onChange={(e) => setCategories(e.target.value)}>
            {categoriesOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select sort method:
          <select className="botoncito" onChange={(e) => setSortMethod(e.target.value)}>
            {sortMethodsOptions.map((sortMethod) => (
              <option key={sortMethod} value={sortMethod}>
                {sortMethod}
              </option>
            ))}
          </select>
        </label>
        <button className="botoncito" onClick={() => setSortDirection(!sortDirection)}>
          {sortDirection ? "Ascending" : "Descending"}
        </button>
        <label>
          Number of items per page:
          <input className="botoncito" max="20"
            type="number"
            value={pageLimit}
            onChange={(e) => {
              const value = Math.min(Math.max(parseInt(e.target.value) || 1, 1), 20);
              setPageLimit(value);
            }}
          />
        </label>
      </div>
      <button className="botoncito" onClick={handleSearch}>Search</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul className="todos">
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={`/producto/${isAnime}/${result.id}`}>
                <PackAnime
                  sauce={result.attributes.posterImage.tiny}
                  name={result.attributes.canonicalTitle}
                />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <img className="fondo" src={Fondo} />
    </div>
  );
};

export default SearchPage;
