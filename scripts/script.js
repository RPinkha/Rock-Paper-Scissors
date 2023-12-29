let computerSelection = "";
let userSelection = "";

let computerRandomNumber = Math.random();
computerRandomNumber <= 0.33
  ? (computerSelection = "S")
  : computerRandomNumber >= 0.67
  ? (computerSelection = "R")
  : (computerSelection = "P");

console.log(computerRandomNumber, computerSelection);
