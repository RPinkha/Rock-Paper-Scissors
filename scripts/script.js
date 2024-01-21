let computerSelection = "";
let userSelection = "";
let result = "";
let userScore = 0;
let computerScore = 0;

const wholeGame = document.querySelector(".game");
const gameResult = wholeGame.querySelector(".game__result");
const userScoreEl = wholeGame.querySelector(".game__score-user");
const computerScoreEl = wholeGame.querySelector(".game__score-computer");

function computerRandom() {
  let computerRandomNumber = Math.random();
  return computerRandomNumber <= 0.33
    ? (computerSelection = "Scissors")
    : computerRandomNumber >= 0.67
    ? (computerSelection = "Rock")
    : (computerSelection = "Paper");
}

function computerWins() {
  result = "Sorry, the computer wins";
  computerScore++;
  computerScoreEl.textContent = computerScore;
}

function userWins() {
  result = "You win!";
  userScore++;
  userScoreEl.textContent = userScore;
}

function whoWins(computerSelection, userSelection) {
  if (userSelection === computerSelection) {
    result = "It is a draw!";
  } else if (userSelection === "Rock") {
    if (computerSelection === "Scissors") {
      userWins();
    } else {
      computerWins();
    }
  } else if (userSelection === "Scissors") {
    if (computerSelection === "Paper") {
      userWins();
    } else {
      computerWins();
    }
  } else if (userSelection === "Paper") {
    if (computerSelection === "Rock") {
      userWins();
    } else {
      computerWins();
    }
  }
}

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
