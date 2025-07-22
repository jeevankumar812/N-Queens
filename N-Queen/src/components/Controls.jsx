import React from "react";

const Controls = ({ n, setN, startSolving }) => {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <input
        type="number"
        min="4"
        max="12"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
        className="border border-gray-400 rounded px-3 py-1 text-black"
      />
      <button
        onClick={startSolving}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition-all"
      >
        Solve N Queens
      </button>
    </div>
  );
};

export default Controls;
