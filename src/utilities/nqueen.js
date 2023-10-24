async function nqueen(size, placedQueens, col, setQueenPos) {
  let i = 0;
  console.log('heyyy',placedQueens, col, size);
  if (col >= size) {
    return { solved: true, queenPos: placedQueens };
  }
  // Math.ceil(Math.random() * size)
  for (i = 0; i < size; i++) {
    const newPos = { row: i, col };

    if (isSafe(placedQueens, newPos)) {
      placedQueens.push(newPos);
      setQueenPos([...placedQueens]);

      const result = await nqueen(size, placedQueens, col + 1, setQueenPos);

      if (result.solved) {
        return result;
      }

      placedQueens.pop();
      setQueenPos([...placedQueens]);
    }
  }

  return { solved: false, queenPos: placedQueens };
}

function isSafe(queenPositions, newPos) {
  for (const queenPos of queenPositions) {
    if (
      queenPos.row === newPos.row ||
      queenPos.col === newPos.col ||
      queenPos.row - queenPos.col === newPos.row - newPos.col ||
      queenPos.row + queenPos.col === newPos.row + newPos.col
    ) {
      return false;
    }
  }
  return true;
}

export { nqueen };
