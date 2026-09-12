//************* COMPENDIUM ********************* */
/*
You want to create an exact copy of a custom object. 
You want copy not just the top-level object, but also every object in references
*/
// use spread operator in nested objects as well

// This function uses the standard shallow copy approach
function cloneStudentShallow(student) {
  const studentCopy = { ...student };
  return studentCopy;
}

// This function performs a customized copy that goes deeper
function cloneStudentDeep(student) {
  const studentCopy = { ...student };
  studentCopy.testScores = [...studentCopy.testScores];
  return studentCopy;
}

// Create a new student
const student = {
  firstName: "Tazie",
  lastName: "Yang",
  testScores: [78, 88, 94, 91, 88, 96],
};

console.group("Shallow clone test");
const shallowStudentCopy = cloneStudentShallow(student);
// Now there are two objects sharing the same testScores array
// We can see this if we change some details.
// This affects just the copy:
shallowStudentCopy.firstName = "Dori";
// This affects both objects:
shallowStudentCopy.testScores[0] = 56;

console.log(student.testScores[0]); // 56
console.log(shallowStudentCopy.testScores[0]); // 56
console.groupEnd();

console.group("Deep clone test");
// Create a truly independent student copy
const deepStudentCopy = cloneStudentDeep(student);

// Verify the arrays are separate
deepStudentCopy.testScores[2] = 2;
console.log(student.testScores[2]); // 94
console.log(deepStudentCopy.testScores[2]); // 2
console.groupEnd();
