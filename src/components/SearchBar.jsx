// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or class..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border rounded p-2 w-full max-w-md"
    />
  );
};

export default SearchBar;
