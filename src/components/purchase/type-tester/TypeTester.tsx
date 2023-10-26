import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontType } from '../../../pages';
import { Button, Flex } from '../../../styles';
import { SimpleFontType } from '../PurchaseFlow';

import TypeInput from './TypeInput';
import TypePreview from './TypePreview';

const ButtonContainer = styled(Flex)`
  justify-content: end;
`;

export const StyledButton = styled(Button)`
  transition: 0.3s;
  height: 40px;
  padding: 0 12px;

  &:hover {
    opacity: 0.8;
  }
`;

export interface TypeTesterProps {
  addFont: (arg0: SimpleFontType) => void;
  availableFonts: SimpleFontType[];
  font: FontType;
  removeFont: (arg0: SimpleFontType) => void;
  selectedFonts: SimpleFontType[];
}

interface Props extends TypeTesterProps {
  setSelectedFonts: (arg0: SimpleFontType[]) => void;
}

const TypeTester = ({
  addFont,
  availableFonts,
  font,
  removeFont,
  selectedFonts,
  setSelectedFonts
}: Props) => {
  const [size, setSize] = useState<string>('40');
  const [previewText, setPreviewText] = useState<string>(
    'Hello world, this is Victoria Rushton.'
  );

  useEffect(() => {
    if (previewText.length < 1) {
      setPreviewText('Hello world, this is Victoria Rushton.');
    }
  }, [previewText.length]);

  const handleClick = () => {
    setSelectedFonts(availableFonts);
  };

  return (
    <>
      <TypeInput setPreviewText={setPreviewText} setSize={setSize} />
      <TypePreview
        addFont={addFont}
        availableFonts={availableFonts}
        font={font}
        previewText={previewText}
        removeFont={removeFont}
        selectedFonts={selectedFonts}
        size={size}
      />
      <ButtonContainer>
        <StyledButton onClick={() => handleClick()}>
          Purchase family
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

export default TypeTester;
