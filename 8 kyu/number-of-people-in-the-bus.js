// http://www.codewars.com/kata/number-of-people-in-the-bus

const number = (busStops) => {
  var sums = busStops.reduce(function(a, b){ 
    return [a[0] + b[0], a[1] + b[1]];    
  });
  return sums[0] - sums[1];
}
