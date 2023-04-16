const cells = document.querySelectorAll(".cell");
let playerX = "X";
let playerO = "O";
let currentPlayer = playerX;
let gameState = Array(9);
cells.forEach((cell,index) => {
  cell.addEventListener("click", () => {
    cell.textContent = currentPlayer;
    currentPlayer == playerX ? currentPlayer = playerO:currentPlayer = playerX;
  });
});
//ჩვენ გვნდა რომ იუზერს შეეძლოს X შეიყვანოს ხოლო X ის მერე O
//თუ რომელიმე იუზერი ბოლომდე შეავსებს კუბიკებს თამაში უნდა შეწყდეს და მოგებული დაიწეროს
//თუ ვერცერთმა ვერ მოიგო ფრე
