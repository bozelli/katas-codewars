// http://www.codewars.com/kata/grasshopper-grade-book

function getGrade (...scores) {
  let avg = scores.reduce((a, b) => a + b )/scores.length;
  if (avg <= 100 && avg >= 90) return 'A';
  if (avg < 90 && avg >= 80) return 'B';
  if (avg < 80 && avg >= 70) return 'C';
  if (avg < 70 && avg >= 60) return 'D';
  return 'F';
}