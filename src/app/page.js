"use client";

import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // Evaluate the input safely
        const result = new Function('return ' + input)();
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleClearClick = () => {
    setInput('');
  };

  return (
    <div className="max-w-xs mx-auto mt-20 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-right mb-4 text-2xl bg-white p-4 rounded-lg shadow-inner text-black">{input}</div>
      <div className="grid grid-cols-4 gap-4">
        <button
          onClick={handleClearClick}
          className="col-span-4 bg-red-500 text-white p-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear
        </button>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((char) => (
          <button
            key={char}
            onClick={() => handleButtonClick(char)}
            className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
