import React, { useState } from "react";
import './animnumApp.css'

const generateRandomNumber = () => Math.floor(Math.random() * 10);

const NumAnimate = () => {
    const [targetNumbers, setTargetNumbers] = useState([0, 0, 0, 0, 0]);
    const [rollCounts, setRollCounts] = useState([3, 3, 3, 3, 3]); // Initial roll counts for each column
  
    const handleChangeNumbers = () => {
      const newTargetNumbers = Array(5).fill(0).map(generateRandomNumber);
      const newRollCounts = Array(5).fill(0).map(() => 3 + Math.floor(Math.random() * 2)); // Random roll counts for variety
      console.log(newTargetNumbers, newRollCounts)
      setRollCounts(newRollCounts);
      setTargetNumbers(newTargetNumbers);

    };
  
    return (
      <div className="app">
        <div className="spinner-container">
          {Array(5)
            .fill(0)
            .map((_, colIndex) => (
              <div key={colIndex} className="number-column">
                            {console.log((targetNumbers[colIndex] + rollCounts[colIndex] * 10) * 60, colIndex)}
                <div
                  className="number-list"
                  style={{
                    transform: `translateY(-${
                      (targetNumbers[colIndex] + rollCounts[colIndex] * 10) * 60
                      
                    }px)`,
                    transition: `transform ${2 + rollCounts[colIndex] * 0.5}s cubic-bezier(0.25, 1.5, 0.5, 1)`,
                  }}
                >
                  {Array(40) // Repeat 0–9 four times for each column
                    .fill(0)
                    .map((_, index) => (
                      <div key={index}>{index % 10}</div>
                    ))}
                </div>
              </div>
            ))}

        </div>
        <button onClick={handleChangeNumbers}>Spin Numbers</button>
      </div>
    );
  };

export default NumAnimate;
