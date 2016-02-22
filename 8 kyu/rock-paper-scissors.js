// http://www.codewars.com/kata/rock-paper-scissors

const rps = (p1, p2, playerToShow) => {
  if (p1 === p2) return "Draw!";
    
  if ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors'))
    return `Player ${playerToShow || '1'} won!`;
  
  return rps (p2, p1, '2');
};