import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button, COLORS, RowFlex } from '../../../styles';
import { SimpleFontType } from '../PurchaseFlow';

import { TypeTesterProps } from './TypeTester';

const Wrapper = styled.div`
  padding: 40px 0;
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};

  &:first-child {
    border-top: none;
  }
`;

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const PreviewText = styled.p<{
  $darkMode: boolean;
  $fontFamily: string;
  $size: string;
  $slant: string;
  $weight: number;
}>`
  font-weight: ${({ $weight }) => $weight};
  font-size: ${({ $size }) => `${$size}px`};
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-style: ${({ $slant }) => ($slant === 'Roman' ? 'normal' : 'italic')};
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.BLACK : COLORS.WHITE};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
  margin: 0 0 10px 0;
  width: 80%;
  line-break: anywhere;
  line-height: 1.4;
`;

const StyledButton = styled(Button)`
  transition: 0.3s;
  height: 40px;
  padding: 0 12px;

  &:hover {
    opacity: 0.8;
  }
`;

interface TypeTesterPreviewProps extends TypeTesterProps {
  previewText: string;
  size: string;
}

const TypeTesterPreview = ({
  addFont,
  availableFonts,
  font,
  previewText,
  removeFont,
  selectedFonts,
  size
}: TypeTesterPreviewProps) => {
  const status = useCallback(
    (fontOption: SimpleFontType) => {
      return selectedFonts.includes(fontOption);
    },
    [selectedFonts]
  );

  const handleClick = (fontOption: SimpleFontType) => {
    if (status(fontOption)) {
      removeFont(fontOption);
    } else {
      addFont(fontOption);
    }
  };

  return (
    <Wrapper>
      {availableFonts.map((fontOption, index) => (
        <LineItem key={index}>
          <StyledRowFlex>
            <p>
              {fontOption.weightTitle}{' '}
              {fontOption.slant !== 'Roman' && fontOption.slant}
            </p>
            <p>{fontOption.weightValue}</p>
          </StyledRowFlex>
          <StyledRowFlex>
            <PreviewText
              $darkMode={false}
              $fontFamily={font.name}
              $size={size}
              $slant={fontOption.slant}
              $weight={fontOption.weightValue}>
              {previewText}
            </PreviewText>
            <StyledButton onClick={() => handleClick(fontOption)}>
              {status(fontOption) ? 'Remove' : 'Add to cart'}
            </StyledButton>
          </StyledRowFlex>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
