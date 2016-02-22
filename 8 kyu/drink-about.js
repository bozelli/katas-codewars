// http://www.codewars.com/kata/drink-about

var peopleWithAgeDrink = function(old) {
  let beverage = 'whisky';
  if (old < 14) beverage = 'toddy';
  else if (old < 18) beverage = 'coke';
  else if (old < 21) beverage = 'beer';
  
  return 'drink ' + beverage;
};