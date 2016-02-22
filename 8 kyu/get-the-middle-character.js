// http://www.codewars.com/kata/get-the-middle-character

const getMiddle = (s, l = s.length) => s.substr(l/2+(l%2-1), 2-l%2)