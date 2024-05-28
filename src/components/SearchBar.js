// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    };

    return (
    <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
    />
    );
};

export default SearchBar;
