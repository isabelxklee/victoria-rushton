import React, { useCallback } from 'react';
import styled from 'styled-components';

import { COLORS, RowFlex } from '../../../styles';
import { SimpleFontType } from '../PurchaseFlow';

import { StyledButton, TypeTesterProps } from './TypeTester';

const Wrapper = styled.div`
  padding: 40px 0;
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: 2px solid ${COLORS.BLACK};
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
  line-break: normal;
  line-height: 1.4;
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
              {status(fontOption) ? 'Remove font' : 'Select font'}
            </StyledButton>
          </StyledRowFlex>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
