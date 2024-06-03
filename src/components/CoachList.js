import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SearchBar from './SearchBar';

const CoachList = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext); // Ajout de setSearchTerm
  const coaches = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Anna Williams'];

  const filteredCoaches = coaches.filter(coach =>
    coach.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* Modification ici */}
      <ul>
        {filteredCoaches.map((coach, index) => (
          <li key={index}>{coach}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoachList;
