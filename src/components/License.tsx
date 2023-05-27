import React, { useState } from 'react';

import { Font } from '../pages';
import { RowFlex, Text } from '../styles';

import { Select } from './sharedStyles';

interface LicenseProps {
  font: Font;
}

const License = ({ font }: LicenseProps) => {
  const [selectedLicense, setSelectedLicense] = useState('');

  return (
    <div>
      <h2>License this font</h2>
      <RowFlex>
        <div>
          <label>Select License</label>
          <Select onChange={event => setSelectedLicense(event.target.value)}>
            {font.weights
              .sort((a, b) => a.value - b.value)
              .map(
                (weight: { title: string; value: number }, index: number) => (
                  <option key={index} value={weight.value}>
                    {weight.title}
                  </option>
                )
              )}
          </Select>
          <Text>For uses, not exceeding:</Text>

          <div>
            <label>Select Fonts</label>
            {font.weights
              .sort((a, b) => a.value - b.value)
              .map(
                (weight: { title: string; value: number }, index: number) => (
                  <button key={index}>{weight.title}</button>
                )
              )}
          </div>
        </div>
        <div>
          <Text>Cart</Text>
        </div>
      </RowFlex>
    </div>
  );
};

export default License;
