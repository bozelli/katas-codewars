// http://www.codewars.com/kata/grasshopper-terminal-game-number-1

function Hero (name) {
  return {
    name : !name ? 'Hero' : name,
    position : '00',
    health : 100,
    damage : 5,
    experience : 0    
  }
}