import React, { useState } from 'react';
import Course from './Course';
import {  ScrollView, StyleSheet } from 'react-native';
import TermSelector from './TermSelector';
  
const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    
    return (
      <ScrollView>
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        { termCourses.map(course => <Course key={course.id} course={course} />) }
      </ScrollView>
    );
};
   

export default CourseList;