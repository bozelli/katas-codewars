// http://www.codewars.com/kata/wilson-primes

function amIWilson(p) {
  return ((factorial(p-1) + 1) / (p * p)) % 1 === 0;  
}

function factorial(n) {
  if (n == 0)  return 1;
  else         return n*factorial(n-1);    
}