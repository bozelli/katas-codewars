// http://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number

const divisibleBy = (numbers, divisor) => (numbers.map(function(n){ return n%divisor === 0 ? n : null })).filter(isNotNull)

const isNotNull = (value) => value != null