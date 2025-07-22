import React, { useState } from "react";
import useNQueens from "../hooks/useNQueens";
import Board from "../components/Board";
import Controls from "../components/Controls";

const Home = () => {
  const [n, setN] = useState(4);
  const { currentSolution, startSolving } = useNQueens(n);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        N Queens Visualizer
      </h1>
      <Board size={n} solution={currentSolution} />
      <Controls n={n} setN={setN} startSolving={startSolving} />
    </div>
  );
};

export default Home;
