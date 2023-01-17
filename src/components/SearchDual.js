import "../css/search.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const SearchDual = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isAnime, setIsAnime] = useState(true);
  const [hover, setHover] = useState(false);

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
