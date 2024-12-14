import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center my-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center w-full max-w-sm space-x-2"
      >
        <input
          type="text"
          placeholder="Search for an anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="p-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;