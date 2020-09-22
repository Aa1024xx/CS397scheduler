import React, { useState } from 'react';
import {  ScrollView } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { getCourseTerm } from '../utils/course.js';
  
const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    
    return (
      <ScrollView>
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        <CourseSelector courses={termCourses} />
      </ScrollView>
    );
};
     

export default CourseList;