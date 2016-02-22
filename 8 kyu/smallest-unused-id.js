// http://www.codewars.com/kata/smallest-unused-id

function nextId(ids){  
  let next = 0, sortedArray = (ids.sort((a, b) => a - b));  
  
  if (sortedArray[0] != 0) return 0;
  
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] + 1 != sortedArray[i+1]) {
      next = sortedArray[i] + 1;
      break;
    }      
  }
  
  return next;  
}