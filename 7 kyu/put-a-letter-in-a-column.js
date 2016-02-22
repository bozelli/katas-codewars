// http://www.codewars.com/kata/put-a-letter-in-a-column

const buildRowText = (index, character) => {  
  return "| ".repeat(index + 1) + character + "| ".repeat(9 - index);
}

String.prototype.repeat = function(times){
    return new Array(times + 1).join(this).trim();
}
