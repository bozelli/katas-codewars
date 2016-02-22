// http://www.codewars.com/kata/counting-in-the-amazon

function countArara(n) {
    var tribe = "";
    if (n > 0) {
      // repeat 'adak ' n/2 times
      tribe = Array(Math.floor(n/2)+1).join("adak ");
      if (n % 2 != 0) {
          tribe += "anane"
      }
    }
    return tribe.trim();
}