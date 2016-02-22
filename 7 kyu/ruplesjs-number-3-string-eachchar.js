// http://www.codewars.com/kata/ruplesjs-number-3-string-eachchar

String.prototype.eachChar = function(callback) {
  var arr = this.split('');
  
  if (arr.length == 0) return "";
  return typeof callback == 'function' ? 
      arr.map((a) => callback(a)).join('') 
    : arr.reduce((a,b) => a + callback + b) + callback;  
}