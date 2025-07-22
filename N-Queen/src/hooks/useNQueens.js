import { useState } from "react";

export default function useNQueens(n) {
  const [solutions, setSolutions] = useState([]);
  const [currentSolution, setCurrentSolution] = useState([]);

  const isSafe = (board, row, col) => {
    for (let i = 0; i < row; i++) {
      if (
        board[i] === col ||
        board[i] - i === col - row ||
        board[i] + i === col + row
      ) {
        return false;
      }
    }
    return true;
  };

  const solve = (row = 0, board = []) => {
    if (row === n) {
      setSolutions((prev) => [...prev, [...board]]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row] = col;
        solve(row + 1, board);
      }
    }
  };

  const startSolving = () => {
    setSolutions([]);
    solve();
    if (solutions.length > 0) {
      setCurrentSolution(solutions[0]);
    }
  };

  return { solutions, currentSolution, setCurrentSolution, startSolving };
}
