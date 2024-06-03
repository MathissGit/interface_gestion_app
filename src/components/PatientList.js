import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SearchBar from './SearchBar';

const PatientList = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext); // Ajout de setSearchTerm
  const patients = ['Alice Brown', 'Bob White', 'Charlie Green', 'Diana Black'];

  const filteredPatients = patients.filter(patient =>
    patient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* Modification ici */}
      <ul>
        {filteredPatients.map((patient, index) => (
          <li key={index}>{patient}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
