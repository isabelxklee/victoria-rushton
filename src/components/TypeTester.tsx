/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Font } from '../pages';

interface TypeTesterProps {
  font: Font;
}

const TypeTester = ({ font }: TypeTesterProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState('');

  console.log(selectedWeight);

  return (
    <>
      <div>
        <label>Weight</label>
        <select onChange={event => setSelectedWeight(event.target.value)}>
          {font.weights.map((weight: any) => (
            <option value={weight.value}>{weight.title}</option>
          ))}
        </select>

        <p>Size</p>
      </div>
      <div>
        <textarea>hello world</textarea>
      </div>
    </>
  );
};

export default TypeTester;
