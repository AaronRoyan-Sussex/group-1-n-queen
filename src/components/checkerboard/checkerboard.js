import React from "react";
import "./chessboard.css";

function CheckerBoard({ size, queenPositions, onQueenPlacement, isSolved }) {
  const columns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, size);

  const isInvalidSquare = (row, col) => {
    if (!isSolved) {
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
      borderColor: "white"
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
  const rowLabels = Array.from({ length: size }, (_, index) => index + 1);

  for (let roww = 0; roww < size; roww++) {
    const rowSquares = [];
    for (let col = 0; col < size; col++) {
      rowSquares.push(renderSquare(roww, col));
    }
    board.push(
      <div key={roww} className="main-board-row">
        <div className="column-label">{columns[roww]}</div> {/* Display column alphabet */}
        {rowSquares}
      </div>
    );
  }

  // Add row numbers

  return (
    <div className="main-board"> 
      <div className="row-labels d-flex flex-row ">
        {rowLabels.map((label) => (
          <div className="p-3" key={`row-label-${label}`}>{label}</div>
        ))}
      </div>
      {board}
    </div>
  );
}

export { CheckerBoard };
