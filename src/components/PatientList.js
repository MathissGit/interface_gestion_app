// src/components/PatientList.js
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import SearchBar from './SearchBar';

const PatientList = () => {
  const { searchTerm } = useContext(SearchContext);
  const patients = ['Alice Brown', 'Bob White', 'Charlie Green', 'Diana Black'];

  const filteredPatients = patients.filter(patient =>
    patient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar />
      <ul>
        {filteredPatients.map((patient, index) => (
          <li key={index}>{patient}</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
