/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { Button, COLORS, H2, RowFlex } from '../../styles';

import TypeTesterPreview from './TypeTesterPreview';

const TextInput = styled.input`
  color: ${COLORS.BLACK};
  background: ${COLORS.WHITE};
  border: none;
  font-family: 'Cecilie Sans', 'sans-serif';
  font-size: 18px;
  border: 2px solid ${COLORS.BLACK};
  width: 100%;
  padding: 20px;
  resize: none;
  box-sizing: border-box;
  line-height: 1;
  height: 100%;

  ::placeholder {
    color: rgba(${COLORS.BLACK}, 0.3);
  }
`;

const SizeWrapper = styled(RowFlex)`
  align-items: baseline;
  gap: 20px;
`;

const ActionWrapper = styled(SizeWrapper)`
  justify-content: space-between;
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

export interface TypeTesterProps {
  font: FontType;
}

const TypeTesterInput = ({ font }: TypeTesterProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedSize, setSelectedSize] = useState('60');
  const [previewText, setPreviewText] = useState<string>(
    'Hello world, this is Victoria Rushton.'
  );

  const handleColorModeChange = () => {
    setDarkMode(darkMode => !darkMode);
  };

  const handleChange = (event: any) => {
    setPreviewText(event.target.value);
  };

  return (
    <>
      <div>
        <H2>Type something here</H2>
        <TextInput
          placeholder="Your preview text goes here"
          onChange={event => handleChange(event)}
        />
        <ActionWrapper>
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
        </ActionWrapper>
      </div>
      <TypeTesterPreview font={font} previewText={previewText} />
    </>
  );
};

export default TypeTesterInput;
