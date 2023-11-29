function calculateStudentGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return "A";
      break;
    case score >= 80 && score <= 89:
      return "B";
      break;
    case score >= 70 && score <= 79:
      return "C";
      break;
    case score >= 60 && score <= 69:
      return "D";
      break;
    case score >= 0 && score <= 59:
      return "F";
      break;
    default:
      return "F";
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
