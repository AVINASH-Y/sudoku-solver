function solveSudoku(board) {
    if (solve(board)) {
      console.log("Solution:");
      printBoard(board);
    } else {
      console.log("No solution exists.");
    }
  }
  
  function solve(board) {
    const emptySpot = findEmptySpot(board);
    if (!emptySpot) {
      return true; // Sudoku solved
    }
  
    const [row, col] = emptySpot;
  
    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
  
        if (solve(board)) {
          return true;
        }
  
        board[row][col] = 0; // Undo the choice
      }
    }
  
    return false; // No valid number found
  }
  
  function isValid(board, row, col, num) {
    // Check if the number exists in the current row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }
  
    // Check if the number exists in the current column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }
  
    // Check if the number exists in the current 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  function findEmptySpot(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          return [row, col];
        }
      }
    }
  
    return null;
  }
  
  function printBoard(board) {
    for (let row = 0; row < 9; row++) {
      let rowStr = "";
      for (let col = 0; col < 9; col++) {
        rowStr += board[row][col] + " ";
      }
      console.log(rowStr.trim());
    }
  }
  
  // Example usage
  const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  solveSudoku(board);
  