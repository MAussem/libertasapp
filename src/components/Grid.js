import React from "react";

const GridTop = () => {
  // Generate an array of 100 numbers
  const gridCells = [...Array(100).keys()];

  return (
    <div className="grid">
      {gridCells.map((cell, index) => {
        // Randomly assign each cell as highlighted or not
        const isHighlighted = Math.random() > 0.9;

        return (
          <div
            key={index}
            className={`grid-cell ${isHighlighted ? "highlighted" : ""}`}
          />
        );
      })}
    </div>
  );
};

export default GridTop;
