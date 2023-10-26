import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontType } from '../pages';
import { Button, COLORS, ColumnFlex, RowFlex } from '../styles';

import { Select } from './sharedStyles';

const TextArea = styled.textarea<{
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
  justify-content: space-between;
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
    <Wrapper>
      <Left>
        <label>Weight</label>
        <Select
          onChange={event => setSelectedWeight(parseInt(event.target.value))}>
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
