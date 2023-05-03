"use strict";
const gameStatus = document.querySelector(".gameStatus");

const currentPlayer = "X";
const messageWon = "The game has ended";
const messageDraw = "Draw!!";

const getCurrentClicked = function (e) {
  const clickedBlock = e.target;
  if (clickedBlock.dataset === "8") {
    gameStatus.innerText = "Wow";
  }
  console.log(clickedBlock);
};
document
  .querySelectorAll(".blocks")
  .forEach((blocks) => blocks.addEventListener("click", getCurrentClicked));
