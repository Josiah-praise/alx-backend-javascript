#!/usr/bin/env node

export default function updateStudentGradeByCity(studentArray, city, newGrade) {
  // error handling
  if (!Array.isArray(studentArray) || typeof city !== 'string' || !Array.isArray(newGrade)) return [];
  // filter studentArray by city and map over the new array to add the grade
  return studentArray.filter((obj) => obj.location === city).map((obj) => {
    const $obj = obj;
    const studentGrade = newGrade.find((each) => each.studentId === obj.id);
    if (studentGrade) {
      $obj.grade = studentGrade.grade;
    } else {
      $obj.grade = 'N/A';
    }
    return $obj;
  });
}
