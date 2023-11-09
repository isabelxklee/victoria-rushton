import React, { useCallback } from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, Flex, RowFlex } from '../../styles';
import { SimpleFontType } from '../purchase/PurchaseFlow';
import { StyledButton } from '../sharedStyles';

import { TypeTesterProps } from './TypeTester';

const Wrapper = styled.div`
  padding: 40px 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 10px 0;
  }
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};
  padding-bottom: 10px;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: 2px solid ${COLORS.BLACK};
  }

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-bottom: 20px;
  }
`;

const Top = styled(RowFlex)`
  justify-content: space-between;
`;

const Bottom = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
  }
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
  margin: 0;
  width: 80%;
  line-break: normal;
  line-height: 1.4;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin: 0 0 20px 0;
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
          <Top>
            <p>
              {fontOption.weightTitle}{' '}
              {fontOption.slant !== 'Roman' && fontOption.slant}
            </p>
            <p>{fontOption.weightValue}</p>
          </Top>
          <Bottom>
            <PreviewText
              $darkMode={false}
              $fontFamily={font.name}
              $size={size}
              $slant={fontOption.slant}
              $weight={fontOption.weightValue}>
              {previewText}
            </PreviewText>
            <StyledButton
              $status={status(fontOption)}
              onClick={() => handleClick(fontOption)}>
              {status(fontOption) ? '- Remove font' : '+ Select font'}
            </StyledButton>
          </Bottom>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
