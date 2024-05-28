// src/components/CoachList.js
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

const CoachList = () => {
    const { searchTerm } = useContext(SearchContext);
    const coaches = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Anna Williams'];

    const filteredCoaches = coaches.filter(coach =>
    coach.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    <ul>
        {filteredCoaches.map((coach, index) => (
        <li key={index}>{coach}</li>
        ))}
    </ul>
    );
};

export default CoachList;
