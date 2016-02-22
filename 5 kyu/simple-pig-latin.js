// http://www.codewars.com/kata/simple-pig-latin

function pigIt(str){
  return str.split(" ").map(x => x.slice(1) + x[0] + "ay").join(" ");
}