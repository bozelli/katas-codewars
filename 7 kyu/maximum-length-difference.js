// http://www.codewars.com/kata/maximum-length-difference

function mxdiflg(a1, a2) {
    if (!a1 || !a2 || a1.length == 0 || a2.length == 0) {
      return -1;      
    }
    let l1 = strLenghtsAndSorted(a1),
        l2 = strLenghtsAndSorted(a2);
        
    return Math.max(Math.abs(l1[0] - l2[l2.length - 1]), Math.abs(l2[0] - l1[l1.length - 1]));
}

const strLenghtsAndSorted = (arr) => arr.map((item) => item.length).sort((a, b) => a - b)
