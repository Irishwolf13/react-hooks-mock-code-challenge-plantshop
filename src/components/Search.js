import React, { useState } from "react";

function Search({ handleSearchInput, searchInput }) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={(e) => handleSearchInput(e)}
      />
    </div>
  );
}

export default Search;
