import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontType } from '../pages';
import { Button, COLORS, RowFlex } from '../styles';

import { Select } from './sharedStyles';

const TextArea = styled.input<{
  $darkMode: boolean;
  $fontFamily: string;
  $size: string;
  $slant: string;
  $weight: number;
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
  gap: 20px;
`;

const Slider = styled.input`
  width: 200px;

  &::-webkit-slider-runnable-track {
    background-color: ${COLORS.BLACK};
    height: 2px;
    border-radius: 100px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${COLORS.WHITE};
  }
`;

const IconButton = styled(Button)<{ $darkMode: boolean }>`
  border: 2px solid
    ${({ $darkMode }) => ($darkMode ? COLORS.BLACK : COLORS.WHITE)};
  background: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.BLACK : COLORS.WHITE)};
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;

  &:hover {
    background: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
    color: ${({ $darkMode }) => ($darkMode ? COLORS.BLACK : COLORS.WHITE)};
  }
`;

interface TypeTesterProps {
  font: FontType;
}

const TypeTester = ({ font }: TypeTesterProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [selectedSlant, setSelectedSlant] = useState('Roman');
  const [selectedSize, setSelectedSize] = useState('60');

  const handleColorModeChange = () => {
    setDarkMode(darkMode => !darkMode);
  };

  useEffect(() => {
    setSelectedWeight(font.weights[0].value);
  }, [font.weights]);

  return (
    <div>
      <TextArea
        $darkMode={darkMode}
        $fontFamily={font.name}
        $size={selectedSize}
        $slant={selectedSlant}
        $weight={selectedWeight}
        placeholder="Type something..."
      />
      <div>
        <SizeWrapper>
          <label>Size</label>
          <Slider
            max="160"
            min="8"
            type="range"
            onChange={event => setSelectedSize(event.target.value)}
          />
        </SizeWrapper>

        <IconButton $darkMode={darkMode} onClick={handleColorModeChange}>
          {darkMode ? (
            <>
              Light{' '}
              <img
                alt=""
                src="https://images.ctfassets.net/6l1e28rigfdw/9yOSsDzz03WNEAKk9gj6d/471079ecc5ae1aa1483500197c29d4af/icon-sun.svg"
              />
            </>
          ) : (
            <>
              Dark{' '}
              <img
                alt=""
                src="https://images.ctfassets.net/6l1e28rigfdw/HpfZbGuPPV0KOHu6SSvxz/c6c5dd5faa177403975b61b11462047b/icon-moon.svg"
              />
            </>
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default TypeTester;
