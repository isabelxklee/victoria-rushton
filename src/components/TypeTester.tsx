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

  const handleColorModeChange = () => {
    setDarkMode(darkMode => !darkMode);
  };

  return (
    <>
      <div>
        <label>Weight</label>
        <select onChange={event => setSelectedWeight(event.target.value)}>
          {font.weights.map((weight: any) => (
            <option value={weight.value}>{weight.title}</option>
          ))}
        </select>

        {font.slants.length > 1 && (
          <>
            <label>Slant</label>
            <select onChange={event => setSelectedSlant(event.target.value)}>
              {font.slants.map((slant: any) => (
                <option value={slant.title}>{slant.title}</option>
              ))}
            </select>
          </>
        )}

        <button onClick={handleColorModeChange}>Dark</button>
      </div>
      <div>
        <textarea>hello world</textarea>
      </div>
    </>
  );
};

export default TypeTester;
