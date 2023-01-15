import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchBarPop = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchText === "") {
      setSearchResults([]);
      setShowResults(false);
    } else {
      const searchAnime = async () => {
        const data = await fetch(
          `https://kitsu.io/api/edge/anime?filter%5Btext%5D%3D=${searchText.replace(/ /g, "%20")}`
        );
        const results = await data.json();
        setSearchResults(results.data);
        setShowResults(true);
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
      {showResults && (
        <div className="search-results-popup">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <Link to={`/producto/${result.id}`}>
                  {result.attributes.titles.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBarPop;
