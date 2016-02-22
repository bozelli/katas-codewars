// http://www.codewars.com/kata/grasshopper-terminal-game-turn-function

const doTurn = () => {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}