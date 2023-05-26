/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Font } from '../pages';

interface TypeTesterProps {
  font: Font;
}

const TypeTester = ({ font }: TypeTesterProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [selectedSlant, setSelectedSlant] = useState('');
  const [selectedSize, setSelectedSize] = useState('32');

  const handleColorModeChange = () => {
    setDarkMode(darkMode => !darkMode);
  };

  console.log(selectedSize);

  return (
    <>
      <div>
        <label>Weight</label>
        <select onChange={event => setSelectedWeight(event.target.value)}>
          {font.weights.map((weight: any, index: number) => (
            <option key={index} value={weight.value}>
              {weight.title}
            </option>
          ))}
        </select>

        {font.slants.length > 1 && (
          <>
            <label>Slant</label>
            <select onChange={event => setSelectedSlant(event.target.value)}>
              {font.slants.map((slant: any, index: number) => (
                <option key={index} value={slant.title}>
                  {slant.title}
                </option>
              ))}
            </select>
          </>
        )}

        <label>Size</label>
        <input
          max="160"
          min="8"
          type="range"
          onChange={event => setSelectedSize(event.target.value)}></input>

        <button onClick={handleColorModeChange}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
      <div>
        <textarea placeholder="Type something..." />
      </div>
    </>
  );
};

export default TypeTester;
