// http://www.codewars.com/kata/return-string-of-first-characters

function makeString(s){
  var letters = "";
  s.split(" ").forEach(function(item, index){
    letters += item.substring(0,1);
  });
  return letters;
}
