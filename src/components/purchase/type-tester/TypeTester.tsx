import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontType } from '../../../pages';
import { Flex } from '../../../styles';
import { StyledButton } from '../../sharedStyles';
import { SimpleFontType } from '../PurchaseFlow';

import TypeInput from './TypeInput';
import TypePreview from './TypePreview';

const ButtonContainer = styled(Flex)`
  justify-content: end;
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
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    if (previewText.length < 1) {
      setPreviewText('Hello world, this is Victoria Rushton.');
    }
  }, [previewText.length]);

  const handleClick = () => {
    if (selectedFonts.length === availableFonts.length) {
      setSelectedFonts([]);
    } else {
      setSelectedFonts(availableFonts);
    }

    setStatus(status => !status);
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
        <StyledButton $status={status} onClick={() => handleClick()}>
          {status ? 'Unselect all' : 'Select all'}
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

export default TypeTester;
