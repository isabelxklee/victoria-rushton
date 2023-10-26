/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';

import { COLORS, Flex, RowFlex } from '../../../styles';

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

const ActionWrapper = styled(RowFlex)`
  justify-content: space-between;
  gap: 40px;
  padding: 30px 0;
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
    <>
      <div>
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
      </div>
    </>
  );
};

export default TypeInput;
