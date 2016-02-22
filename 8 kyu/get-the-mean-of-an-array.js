// http://www.codewars.com/kata/get-the-mean-of-an-array

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);