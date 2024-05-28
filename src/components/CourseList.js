// src/components/CourseList.js
import React, { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

const CourseList = () => {
  const { searchTerm } = useContext(SearchContext);
  const courses = ['Mathematics', 'Science', 'History', 'Geography', 'Art'];

  const filteredCourses = courses.filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredCourses.map((course, index) => (
        <li key={index}>{course}</li>
      ))}
    </ul>
  );
};

export default CourseList;
