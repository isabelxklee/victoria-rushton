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

  /* @media (max-width: 900px) {
    height: 300px;
  } */
`;

const SizeWrapper = styled(RowFlex)`
  align-items: baseline;
  justify-content: space-between;
`;

const Select = styled.select<{ $width: string }>`
  height: fit-content;
  width: ${({ $width }) => ($width === 'fixed' ? '170px' : '100%')};
  padding: 10px;
  font-family: 'Cecilie Sans', 'sans-serif';
  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px), calc(100% - 15px), calc(100% - 2.5em);
  background-position-y: calc(50%);
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Slider = styled.input`
  width: 100%;

  &::-webkit-slider-runnable-track {
    background-color: ${COLORS.WHITE};
    height: 2px;
    border-radius: 100px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${COLORS.BLACK};
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
  width: 500px;
`;

const Right = styled.div`
  width: 100%;
`;

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
        <Select onChange={event => setSelectedWeight(event.target.value)}>
          {font.weights
            .sort((a, b) => a.value - b.value)
            .map((weight: { title: string; value: number }, index: number) => (
              <option key={index} value={weight.value}>
                {weight.title}
              </option>
            ))}
        </Select>

        {font.slants.length > 1 && (
          <>
            <label>Slant</label>
            <Select onChange={event => setSelectedSlant(event.target.value)}>
              {font.slants.map((slant: { title: string }, index: number) => (
                <option key={index} value={slant.title}>
                  {slant.title}
                </option>
              ))}
            </Select>
          </>
        )}

        <SizeWrapper>
          <label>Size</label>
          <p>{selectedSize}px</p>
        </SizeWrapper>
        <Slider
          max="160"
          min="8"
          type="range"
          onChange={event => setSelectedSize(event.target.value)}
        />

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
