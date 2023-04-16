//defining variables
const cells = document.querySelectorAll(".cell");
let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;
let gameState = Array(9);
gameState.fill(null);
let gameOver = false;
const gameArea = document.querySelector(".gameArea");
const reset = document.querySelector(".reset");
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//looping through cells
cells.forEach((cell, index) => {
  //add eventlistener "click" to each cell
  cell.addEventListener("click", () => {
    //check if game is not over
    if (!gameOver) {
      //if so add symbol of each player in the cell
      cell.textContent = currentPlayer;
      //if playerX made move set playerX value to playerO
      gameState[index] = currentPlayer;
      currentPlayer == playerX
        ? (currentPlayer = playerO)
        : (currentPlayer = playerX);
      //add number of cell in the gameState array
      gameArea.textContent = `${currentPlayer}'s move`;
    }
    //call check winner function
    checkWinner();
  });
});
reset.addEventListener("click", () => {
  currentPlayer = playerX;
  gameState.fill(null);
  gameArea.textContent = "PlayerX's move";
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  gameOver = false;
});
//reset game by returning variebles to their original values
function checkWinner() {
  //loop through wining numbers
  for (let i = 0; i < winningCombinations.length; i++) {
    //contruct array from a,b,c which will be winning combination in each iteration
    const [a, b, c] = winningCombinations[i];
    //check if indexed where O or X are located are not null and are same
    if (
      gameState[a] &&
      gameState[a] == gameState[b] &&
      gameState[b] == gameState[c]
    ) {
      //if not set gameOver true
      gameOver = true;
      gameArea.textContent = `${gameState[a]} hadWon`;
    }
  }
  if (!gameState.includes(null)) {
    gameOver = true;
    gameArea.textContent = `It's Draw`;
  }
}