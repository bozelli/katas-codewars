// http://www.codewars.com/kata/grasshopper-debug

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  return `${c} is ${c > 0 ? 'above ' : ''}freezing temperature`  
}

const convertToCelsius = (temp) => (temp - 32) * (5/9)