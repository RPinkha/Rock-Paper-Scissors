let computerSelection = "";
let userSelection = "";

function computerRandom() {
  let computerRandomNumber = Math.random();
  computerRandomNumber <= 0.33
    ? (computerSelection = "S")
    : computerRandomNumber >= 0.67
    ? (computerSelection = "R")
    : (computerSelection = "P");
}

const wholeGame = document.querySelector(".game");
const rockButton = wholeGame.querySelector(".game__button_type_rock");
const paperButton = wholeGame.querySelector(".game__button_type_paper");
const scissorsButton = wholeGame.querySelector(".game__button_type_scissors");
