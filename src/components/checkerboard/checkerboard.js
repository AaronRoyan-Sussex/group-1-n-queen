import React from "react";

function CheckerBoard({ size, queenPositions, onQueenPlacement, isSolved }) {
  // const [isSolved, setIsSolved] = useState(false);
  // Helper function to check if a square should be marked as invalid
  const isInvalidSquare = (row, col) => {
    if(!isSolved){
      for (const queenPos of queenPositions) {
        if (
          queenPos.row === row ||
          queenPos.col === col ||
          queenPos.row - queenPos.col === row - col ||
          queenPos.row + queenPos.col === row + col
        ) {
          return true; // Invalid square
        }
      }
    }
    return false; // Valid square
  };

  const renderSquare = (row, col) => {
    const isQueen = queenPositions.some((queen) => queen.row === row && queen.col === col);
    const isInvalid = isInvalidSquare(row, col);
    const squareColor = (row + col) % 2 === 0 ? "white" : "black";
    const squareStyle = {
      backgroundColor: isQueen ? "green" : isInvalid && !isSolved ? "#bf2230" : squareColor,
      width: "40px",
      height: "40px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div
        key={`${row}-${col}`}
        className="square"
        style={squareStyle}
        onClick={() => onQueenPlacement(row, col)}
      >
        {isQueen && <span dangerouslySetInnerHTML={{ __html: "&#x265B;" }} />}
      </div>
    );
  };

  const board = [];
  for (let row = 0; row < size; row++) {
    const rowSquares = [];
    for (let col = 0; col < size; col++) {
      rowSquares.push(renderSquare(row, col));
    }
    board.push(
      <div key={row} className="board-row">
        {rowSquares}
      </div>
    );
  }

  return <div className="board">{board}</div>;
}

export { CheckerBoard };
