/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, Flex } from '../../styles';

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
  flex: 1;

  ::placeholder {
    color: rgba(${COLORS.BLACK}, 0.3);
  }
`;

const ActionWrapper = styled(Flex)`
  justify-content: space-between;
  gap: 40px;
  padding: 30px 0;
  flex-direction: row;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
  }
`;

const SizeWrapper = styled(Flex)`
  align-items: center;
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
    height: 34px;
    width: 34px;

    /* border-radius: 100px;
    border: 2px solid #f4f4f4;
    background: #1e1e1e;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer; */
  }

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 100%;
  }
`;

interface TypeInputProps {
  setPreviewText: (arg0: string) => void;
  setSize: (arg0: string) => void;
}

const TypeInput = ({ setPreviewText, setSize }: TypeInputProps) => {
  const handleChange = (event: any) => {
    setPreviewText(event.target.value);
  };

  return (
    <ActionWrapper>
      <TextInput
        placeholder="Type something here..."
        onChange={event => handleChange(event)}
      />
      <SizeWrapper>
        <label>Size</label>
        <Slider
          max="100"
          min="14"
          type="range"
          onChange={event => setSize(event.target.value)}
        />
      </SizeWrapper>
    </ActionWrapper>
  );
};

export default TypeInput;
