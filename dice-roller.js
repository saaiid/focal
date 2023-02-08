// dice-roller.js
const numberOfDice = process.argv[2];
const rolls = Array.from({ length: numberOfDice }, () => {
  return Math.floor(Math.random() * 6) + 1;
});
console.log(`Rolled ${numberOfDice} dice: ${rolls.join(", ")}`);