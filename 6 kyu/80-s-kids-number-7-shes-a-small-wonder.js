// http://www.codewars.com/kata/80-s-kids-number-7-shes-a-small-wonder

function Robot() {
  this.words = ['thank', 'you', 'for', 'teaching', 'me', 'i', 'already', 'know', 'the', 'word', 'do', 'not', 'understand', 'input'];
}

Robot.prototype.learnWord = function(word) {  
  if (/^[a-z]+$/gi.test(word) == false) {
    return "I do not understand the input";
  }
  else if (this.words.indexOf(word.toLowerCase()) >= 0) {
    return `I already know the word ${word}`; 
  } 
  else {
    this.words.push(word);
    return `Thank you for teaching me ${word}`;
  }  
}