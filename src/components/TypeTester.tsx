import React, { useState } from 'react';
import styled from 'styled-components';

import { Font } from '../pages';
import { COLORS, ColumnFlex, RowFlex } from '../styles';

const TextArea = styled.textarea<{
  $darkMode: boolean;
  $fontFamily: string;
  $size: string;
  $slant: string;
  $weight: string;
}>`
  font-weight: ${({ $weight }) => $weight};
  font-size: ${({ $size }) => `${$size}px`};
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.BLACK : COLORS.WHITE};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
  border: none;
  font-family: ${({ $fontFamily }) => $fontFamily};
  width: 100%;
  padding: 40px;
  resize: none;
  border-top: 2px solid ${COLORS.BLACK};
  border-bottom: 2px solid ${COLORS.BLACK};
  box-sizing: border-box;
  line-height: 1;
  height: 100%;

  ::placeholder {
    color: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
  }

  @media (max-width: 900px) {
    height: 300px;
  }
`;

const Wrapper = styled(RowFlex)`
  width: 100vw;
  margin-left: calc(50% - 50vw);
`;

const Left = styled(ColumnFlex)`
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  padding: 80px;
  gap: 20px;
`;

const Right = styled.div``;

interface TypeTesterProps {
  font: Font;
}

const TypeTester = ({ font }: TypeTesterProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState('400');
  const [selectedSlant, setSelectedSlant] = useState('Roman');
  const [selectedSize, setSelectedSize] = useState('60');

  const handleColorModeChange = () => {
    setDarkMode(darkMode => !darkMode);
  };

  return (
    <Wrapper>
      <Left>
        <label>Weight</label>
        <select onChange={event => setSelectedWeight(event.target.value)}>
          {font.weights.map(
            (weight: { title: string; value: number }, index: number) => (
              <option key={index} value={weight.value}>
                {weight.title}
              </option>
            )
          )}
        </select>

        {font.slants.length > 1 && (
          <>
            <label>Slant</label>
            <select onChange={event => setSelectedSlant(event.target.value)}>
              {font.slants.map((slant: { title: string }, index: number) => (
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
      </Left>
      <Right>
        <TextArea
          $darkMode={darkMode}
          $fontFamily={font.name}
          $size={selectedSize}
          $slant={selectedSlant}
          $weight={selectedWeight}
          placeholder="Type something..."
        />
      </Right>
    </Wrapper>
  );
};

export default TypeTester;
