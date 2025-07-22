import React from "react";
import Cell from "./Cell";

const Board = ({ size, solution }) => {
  return (
    <div
      className="grid gap-1 bg-black p-2 rounded-lg shadow-lg"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {[...Array(size)].map((_, row) =>
        [...Array(size)].map((_, col) => {
          const isDark = (row + col) % 2 === 1;
          const hasQueen = solution && solution[row] === col;
          return (
            <Cell key={`${row}-${col}`} hasQueen={hasQueen} isDark={isDark} />
          );
        })
      )}
    </div>
  );
};

export default Board;
