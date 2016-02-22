// http://www.codewars.com/kata/count-the-digit

function nbDig(n, d) {
  var count = 0, aux = '', compareTo = new RegExp(d, 'g');
  for (let i = 0; i <= n; i++) {    
    aux = (i*i).toString();    
    count += aux.length - aux.replace(compareTo, '').length;
  }  
  return count;
}