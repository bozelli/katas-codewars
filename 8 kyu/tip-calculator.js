// http://www.codewars.com/kata/tip-calculator

function calculateTip(amount, rating) {
  let percent = 0, fivePercent = amount*0.05;
  
  switch (rating.toLowerCase()){
    case 'excellent':
      percent += fivePercent;
    case 'great':
      percent += fivePercent;
    case 'good':
      percent += fivePercent;
    case 'poor':
      percent += fivePercent;
    case 'terrible':
      break;      
    default:
      return 'Rating not recognised';
  }   
  return Math.ceil(percent);
}