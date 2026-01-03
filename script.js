const chessboard = document.querySelector(".chessboard");

const pieces = [
  "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜", // black back rank
  "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟", // black pawns
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙", // white pawns
  "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"  // white back rank
];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // coloring (already in your CSS logic)
    if ((row + col) % 2 === 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }

    const index = row * 8 + col;
    square.textContent = pieces[index];

    chessboard.appendChild(square);
  }
}
