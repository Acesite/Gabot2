import React, { useState, useEffect } from "react";
import logo from "../public/logo.jpg"; // adjust path if needed

const RandomPickGame = () => {
  const totalNumbers = 250; // ✅ only 250 boxes
  const [numbers, setNumbers] = useState([]);
  const [revealed, setRevealed] = useState([]);

  useEffect(() => {
    // create array 1..250 and shuffle
    const nums = Array.from({ length: totalNumbers }, (_, i) => i + 1);
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    setNumbers(nums);
    setRevealed(Array(totalNumbers).fill(false));
  }, []);

  const handleReveal = (index) => {
    setRevealed((prev) => {
      const newRevealed = [...prev];
      newRevealed[index] = true;
      return newRevealed;
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center mb-4">
        <img src={logo} alt="Game Logo" className="w-20 h-20 mb-2" />
        <h1 className="text-2xl font-bold text-center">SIPD PIKNIT</h1>
        <p className="text-center mt-1">
          Click a box to reveal its number! 🎲
        </p>
      </div>

      <div className="grid grid-cols-10 gap-1 h-[650px] overflow-y-scroll px-6 py-2 border rounded mx-auto w-fit">
        {numbers.map((num, index) => (
          <button
            key={index}
            onClick={() => handleReveal(index)}
            className={`w-20 h-20 rounded text-sm font-medium transition flex items-center justify-center
              ${revealed[index] ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"}
            `}
          >
            {revealed[index] ? num : "?"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RandomPickGame;
