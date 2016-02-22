// http://www.codewars.com/kata/stringy-strings

const stringy = (size) => {
  let nums = '';
  for (let i = 1; i <= size; i++) {
    if (i % 2 == 0) nums += '0';
    else nums += '1';
  }
  return nums;
}