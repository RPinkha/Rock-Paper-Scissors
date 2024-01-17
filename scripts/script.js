let computerSelection = "";
let userSelection = "";
let result = "";

function computerRandom() {
  let computerRandomNumber = Math.random();
  return computerRandomNumber <= 0.33
    ? (computerSelection = "Scissors")
    : computerRandomNumber >= 0.67
    ? (computerSelection = "Rock")
    : (computerSelection = "Paper");
}

function whoWins(computerSelection, userSelection) {
  if (userSelection === computerSelection) {
    result = "It is a draw!";
  } else if (userSelection === "Rock") {
    if (computerSelection === "Scissors") {
      result = "You win!";
    } else {
      result = "Sorry, the computer wins";
    }
  } else if (userSelection === "Scissors") {
    if (computerSelection === "Paper") {
      result = "You win!";
    } else {
      result = "Sorry, the computer wins";
    }
  } else if (userSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = "You win!";
    } else {
      result = "Sorry, the computer wins";
    }
  }
}

const wholeGame = document.querySelector(".game");
const gameResult = wholeGame.querySelector(".game__result");

wholeGame.addEventListener("click", (evt) => {
  computerRandom();
  switch (true) {
    case evt.target.classList.contains("game__button_type_rock"):
      userSelection = "Rock";
      whoWins(computerSelection, userSelection);
      gameResult.textContent = result;
      break;
    case evt.target.classList.contains("game__button_type_paper"):
      userSelection = "Paper";
      whoWins(computerSelection, userSelection);
      gameResult.textContent = result;
      break;
    case evt.target.classList.contains("game__button_type_scissors"):
      userSelection = "Scissors";
      whoWins(computerSelection, userSelection);
      gameResult.textContent = result;
      break;
  }
});
