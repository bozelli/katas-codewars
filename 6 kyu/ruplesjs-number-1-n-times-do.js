// http://www.codewars.com/kata/ruplesjs-number-1-n-times-do


var i = 0;

Number.prototype.times = function(func) {
  let n = Math.round(this);  
  if (n <= 0) return null;
  
  func();
  return (n - 1).times(func);
}

console.log(i);