const chessboard = document.querySelector(".chessboard");

const pieces = [
  "♜","♞","♝","♛","♚","♝","♞","♜",
  "♟","♟","♟","♟","♟","♟","♟","♟",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "♙","♙","♙","♙","♙","♙","♙","♙",
  "♖","♘","♗","♕","♔","♗","♘","♖"
];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Square color
    if ((row + col) % 2 === 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }

    const index = row * 8 + col;
    square.textContent = pieces[index];

    // Piece color
    if (index < 16) square.classList.add("black-piece");
    if (index >= 48) square.classList.add("white-piece");

    chessboard.appendChild(square);
  }
}
