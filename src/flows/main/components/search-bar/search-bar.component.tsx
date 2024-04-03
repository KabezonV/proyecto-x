import React from "react";
import useSearchBar from "../carousel/hooks/useSearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-bar.css";

const SearchBarComponent = () => {
  const { searchTerm, handleChange, handleSearch, handleBlur } = useSearchBar();

  return (
    <div class="search_bar">
      <input
        class="typing"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <a class="btn" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </a>
    </div>
  );
};

export default SearchBarComponent;
