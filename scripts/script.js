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
