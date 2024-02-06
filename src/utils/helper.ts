const checkWinInRow = (row: number, symbol: string, gameBoard: string[][]) => {
  let count = 0;
  for (let colIndex = 0; colIndex < 3; ++colIndex) {
    if (gameBoard[row][colIndex] === symbol) {
      ++count;
    }
  }
  return count === 3;
};

const checkWinInCol = (col: number, symbol: string, gameBoard: string[][]) => {
  let count = 0;
  for (let rowIndex = 0; rowIndex < 3; ++rowIndex) {
    if (gameBoard[rowIndex][col] === symbol) {
      ++count;
    }
  }
  return count === 3;
};

const checkWinInFirstDiagonal = (symbol: string, gameBoard: string[][]) => {
  let count = 0;
  for (let index = 0; index < 3; ++index) {
    if (gameBoard[index][index] === symbol) {
      ++count;
    }
  }
  return count === 3;
};

const checkWinInSecondDiagonal = (symbol: string, gameBoard: string[][]) => {
  let count = 0;
  for (let index = 2; index >= 0; --index) {
    if (gameBoard[index][2 - index] === symbol) {
      ++count;
    }
  }
  return count === 3;
};

export const checkWin = (row: number, col: number, symbol: string, gameBoard: string[][]) => {
  // checking win in the row
  if (checkWinInRow(row, symbol, gameBoard)) {
    return true;
  }

  // checking win in the column
  if (checkWinInCol(col, symbol, gameBoard)) {
    return true;
  }

  // checking win in first diagonal
  if (
    ((row === 0 && col === 0) || (row === 2 && col === 2)) &&
    checkWinInFirstDiagonal(symbol, gameBoard)
  ) {
    return true;
  }

  // checking win in second diagonal
  if (
    ((row === 2 && col === 0) || row === 0 || col === 2) &&
    checkWinInSecondDiagonal(symbol, gameBoard)
  ) {
    return true;
  }

  if (row === 1 && col === 1) {
    return (
      checkWinInFirstDiagonal(symbol, gameBoard) || checkWinInSecondDiagonal(symbol, gameBoard)
    );
  }

  return false;
};
