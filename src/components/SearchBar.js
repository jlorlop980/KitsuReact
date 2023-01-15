import "../css/search.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText === "") {
      setSearchResults([]);
    } else {
      const searchAnime = async () => {
        const data = await fetch(
          `https://kitsu.io/api/edge/anime?filter%5Btext%5D%3D=${searchText.replace(/ /g, "%20")}`
        );
        const results = await data.json();
        setSearchResults(results.data);
      };
      searchAnime();
    }
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for anime..."
      />
      <div className="search-result-pop" >
      <ul className="search-result-pop">
        {searchResults.map((result) => (
          <li key={result.id}>
            <Link to={`/producto/${result.id}`}>
              {result.attributes.canonicalTitle}
            </Link>
          </li>
        ))}
      
      </ul>
      </div>
    </div>
  );
};

export default SearchBar;


