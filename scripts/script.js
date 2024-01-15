let computerSelection = "";
let userSelection = "";
let result = "";

function computerRandom() {
  let computerRandomNumber = Math.random();
  computerRandomNumber <= 0.33
    ? (computerSelection = "Scissors")
    : computerRandomNumber >= 0.67
    ? (computerSelection = "Rock")
    : (computerSelection = "Paper");
}

function whoWins(computerSelection, userSelection) {
  if (userSelection === computerSelection) {
    return (result = "draw");
  }
  if (userSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return (result = "user wins");
    } else {
      return (result = "computer wins");
    }
  }
  if (userSelection === "Scissors") {
    if (computerSelection === "Paper") {
      return (result = "user wins");
    } else {
      return (result = "computer wins");
    }
  }
  if (userSelection === "Paper") {
    if (computerSelection === "Rock") {
      return (result = "user wins");
    } else {
      return (result = "computer wins");
    }
  }
}

const wholeGame = document.querySelector(".game");

wholeGame.addEventListener("click", (evt) => {
  switch (true) {
    case evt.target.classList.contains("game__button_type_rock"):
      userSelection = "Rock";
      break;
    case evt.target.classList.contains("game__button_type_paper"):
      userSelection = "Paper";
      break;
    case evt.target.classList.contains("game__button_type_scissors"):
      userSelection = "Scissors";
      break;
  }
});
