// src/components/CourseList.js
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SearchBar from './SearchBar';

const CourseList = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const courses = ['Mathematics', 'Science', 'History', 'Geography', 'Art'];

  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TableContainer component={Paper}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCourses.map((course, index) => (
            <TableRow key={index}>
              <TableCell>{course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseList;
