const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = Array.from(document.querySelectorAll("[data-cell]"));
const statusMessage = document.querySelector("#status-message");
const turnPill = document.querySelector("#turn-pill");
const playerCards = Array.from(document.querySelectorAll("[data-player-card]"));
const scoreX = document.querySelector("#score-x");
const scoreO = document.querySelector("#score-o");
const scoreDraw = document.querySelector("#score-draw");
const newRoundButton = document.querySelector("#new-round");
const resetButton = document.querySelector("#reset-game");

let board = Array(9).fill("");
let currentPlayer = "X";
let roundOver = false;
let scores = {
  X: 0,
  O: 0,
  draw: 0,
};

function updateTurnDisplay(message = `Player ${currentPlayer}, make your move`) {
  statusMessage.textContent = message;
  turnPill.textContent = currentPlayer;
  turnPill.className = `turn-pill marker-${currentPlayer.toLowerCase()}`;

  playerCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.playerCard === currentPlayer && !roundOver);
  });
}

function updateScores() {
  scoreX.textContent = scores.X;
  scoreO.textContent = scores.O;
  scoreDraw.textContent = scores.draw;
}

function findWinner() {
  return winningLines.find(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function endRound(winningLine) {
  roundOver = true;
  cells.forEach((cell) => {
    cell.disabled = true;
  });

  if (winningLine) {
    winningLine.forEach((index) => cells[index].classList.add("winning-cell"));
    scores[currentPlayer] += 1;
    updateTurnDisplay(`Player ${currentPlayer} wins this round!`);
  } else {
    scores.draw += 1;
    updateTurnDisplay("It's a draw. Great defense!");
  }

  updateScores();
}

function playCell(cell) {
  const index = Number(cell.dataset.cell);

  if (roundOver || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  cell.setAttribute("aria-label", `${cell.getAttribute("aria-label")}: ${currentPlayer}`);

  const winningLine = findWinner();
  if (winningLine) {
    endRound(winningLine);
    return;
  }

  if (board.every(Boolean)) {
    endRound(null);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateTurnDisplay();
}

function startRound() {
  board = Array(9).fill("");
  currentPlayer = "X";
  roundOver = false;

  cells.forEach((cell, index) => {
    cell.textContent = "";
    cell.disabled = false;
    cell.className = "cell";
    cell.setAttribute("aria-label", cell.dataset.defaultLabel || cell.getAttribute("aria-label"));
    cell.dataset.defaultLabel = cell.getAttribute("aria-label");
  });

  updateTurnDisplay();
}

function resetGame() {
  scores = {
    X: 0,
    O: 0,
    draw: 0,
  };
  updateScores();
  startRound();
}

cells.forEach((cell) => {
  cell.dataset.defaultLabel = cell.getAttribute("aria-label");
  cell.addEventListener("click", () => playCell(cell));
});

newRoundButton.addEventListener("click", startRound);
resetButton.addEventListener("click", resetGame);

updateScores();
startRound();
