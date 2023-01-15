import React, { useState } from "react";
import PackAnime from "./PackAnime";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isAnime, setIsAnime] = useState(true);
  const [categories, setCategories] = useState("");
  const [sortMethod, setSortMethod] = useState("averageRating");
  const [sortDirection, setSortDirection] = useState(false);
  const [pageLimit, setPageLimit] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const categoriesOptions = ["adventure", "Samurai", "Boxing", "musical-band", "magic", "alien", "zombies"];
  const sortMethodsOptions = ["averageRating", "popularityRank", "ageRating", "startDate"];

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

  return (
    <div>
      <div>
      <button onClick={() => setIsAnime(!isAnime)}>
        {isAnime ? "Show manga" : "Show anime"}
        </button>

        <label>
          Select category:
          <select onChange={(e) => setCategories(e.target.value)}>
            <option value="">All</option>
            {categoriesOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select sort method:
          <select onChange={(e) => setSortMethod(e.target.value)}>
            {sortMethodsOptions.map((sortMethod) => (
              <option key={sortMethod} value={sortMethod}>
                {sortMethod}
              </option>
            ))}
          </select>
        </label>
        <button onClick={() => setSortDirection(!sortDirection)}>
          {sortDirection ? "Ascending" : "Descending"}
        </button>
      </div>
      <div>
        <label>
          Number of items per page:
          <input
            type="number"
            value={pageLimit}
            onChange={(e) => setPageLimit(e.target.value)}
          />
        </label>
        <button onClick={() => setIsAnime(!isAnime)}>
          {isAnime ? "Search manga" : "Search anime"}
        </button>
      </div>
      <button onClick={handleSearch}>Search</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>
                <PackAnime
                  sauce={result.attributes.posterImage.tiny}
                  name={result.attributes.canonicalTitle}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
