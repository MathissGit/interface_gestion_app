// src/components/Header.js
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SearchBar from './SearchBar';

const Header = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    return (
    <header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
    );
};

export default Header;
