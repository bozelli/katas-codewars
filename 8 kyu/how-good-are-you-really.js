// http://www.codewars.com/kata/how-good-are-you-really

const betterThanAverage = (classPoints, yourPoints) => yourPoints > (classPoints.reduce(function(a, b){ return a + b }) + yourPoints) / (classPoints.length + 1)
