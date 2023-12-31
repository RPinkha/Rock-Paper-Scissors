let computerSelection = "";
let userSelection = "";
let result = "";

function computerRandom() {
  let computerRandomNumber = Math.random();
  computerRandomNumber <= 0.33
    ? (computerSelection = "S")
    : computerRandomNumber >= 0.67
    ? (computerSelection = "R")
    : (computerSelection = "P");
}

function whoWins(computerSelection, userSelection) {
  if (userSelection === computerSelection) {
    return (result = "draw");
  }
  if (userSelection === "R") {
    if (computerSelection === "S") {
      return (result = "user wins");
    } else {
      return (result = "computer wins");
    }
  }
  if (userSelection === "S") {
    if (computerSelection === "P") {
      return (result = "user wins");
    } else {
      return (result = "computer wins");
    }
  }
  if (userSelection === "P") {
    if (computerSelection === "R") {
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
      userSelection = "R";
      break;
    case evt.target.classList.contains("game__button_type_paper"):
      userSelection = "P";
      break;
    case evt.target.classList.contains("game__button_type_scissors"):
      userSelection = "S";
      break;
  }
});
