// http://www.codewars.com/kata/decibel-scale

function dBScale(intensity) {
  return 10 * Math.log10(intensity / Math.pow(10, -12));
}