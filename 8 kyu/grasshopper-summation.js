// http://www.codewars.com/kata/grasshopper-summation

const summation = (num) => (num == 1) ? 1 : num + summation(num - 1)