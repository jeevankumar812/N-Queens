import React from "react";
import queen from "../assets/queen.png";

const Cell = ({ hasQueen, isDark }) => {
  return (
    <div
      className={`w-14 h-14 flex items-center justify-center transition-all duration-300
        ${isDark ? "bg-gray-700" : "bg-gray-300"}
        hover:scale-105 hover:shadow-lg`}
    >
      {hasQueen && (
        <img
          src={queen}
          alt="queen"
          className="w-10 h-10 animate-bounce"
        />
      )}
    </div>
  );
};

export default Cell;
