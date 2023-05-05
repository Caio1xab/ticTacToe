"use strict";
const gameStatus = document.querySelector(".gameStatus");

let gameActive = true;
let currentPlayer = "X";
let currentGame = ["", "", "", "", "", "", "", "", ""];

const winningStreaks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getCurrentClicked = function (e) {
  if (gameActive) {
    let clickedBlock = e.target;
    let getBlockIndex = Number(clickedBlock.dataset.blocksIndex);

    if (currentGame[getBlockIndex] !== "" || !gameActive) {
      return;
    }

    handleBlockPlayed(clickedBlock, getBlockIndex);
    resultValidation();
  }
};

const handleBlockPlayed = function (clickedBk, getBk) {
  currentGame[getBk] = currentPlayer;
  console.log(currentGame);
  if (clickedBk.innerText === "") {
    clickedBk.innerText = currentPlayer;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameStatus.innerText = `it's currently player ${currentPlayer} turn.`;
};

const resultValidation = function () {
  let wonGame = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningStreaks[i];
    let a = currentGame[winCondition[0]];
    let b = currentGame[winCondition[1]];
    let c = currentGame[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      wonGame = true;
      break;
    }
  }
  if (wonGame) {
    wonGame = false;
    gameActive = false;
    gameStatus.innerText = `THE PLAYER ${
      currentPlayer === "X" ? "O" : "X"
    } WON THE GAME.`;
    return;
  }

  if (!currentGame.includes("")) {
    gameStatus.innerText = `DRAW!!`;
  }
};

const restartingGame = function () {
  gameActive = true;
  currentPlayer = "X";
  gameStatus.innerText = `The ${currentPlayer} begins the game`;
  currentGame = ["", "", "", "", "", "", "", "", ""];
  document
    .querySelectorAll(".blocks")
    .forEach((block) => (block.innerText = ""));
};

document
  .querySelectorAll(".blocks")
  .forEach((blocks) => blocks.addEventListener("click", getCurrentClicked));
document.querySelector("#restartBtn").addEventListener("click", restartingGame);
