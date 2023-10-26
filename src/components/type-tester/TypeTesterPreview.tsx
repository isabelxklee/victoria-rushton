import React from 'react';
import styled from 'styled-components';

import { Button, COLORS, RowFlex } from '../../styles';
import { SimpleFontType } from '../PurchaseFlow';

import { TypeTesterProps } from './TypeTesterInput';

const Wrapper = styled.div`
  padding: 40px 0 100px 0;
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};
`;

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const PreviewText = styled.p<{
  $darkMode: boolean;
  $fontFamily: string;
  $size: string;
  $weight: number;
}>`
  font-weight: ${({ $weight }) => $weight};
  font-size: ${({ $size }) => `${$size}px`};
  font-family: ${({ $fontFamily }) => $fontFamily};
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.BLACK : COLORS.WHITE};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
  margin: 0 0 20px 0;
  width: 80%;
  line-break: anywhere;
`;

const StyledButton = styled(Button)`
  transition: 0.3s;
  height: 100%;

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
  size
}: TypeTesterPreviewProps) => {
  const handleClick = (weight: SimpleFontType) => {
    addFont(weight);
  };

  return (
    <Wrapper>
      {availableFonts.map((fontOption, index) => (
        <LineItem key={index}>
          <StyledRowFlex>
            <p>{fontOption.weightTitle}</p>
            <p>{fontOption.weightValue}</p>
          </StyledRowFlex>
          <StyledRowFlex>
            <PreviewText
              $darkMode={false}
              $fontFamily={font.name}
              $size={size}
              $weight={fontOption.weightValue}>
              {previewText}
            </PreviewText>
            <StyledButton onClick={() => handleClick(fontOption)}>
              Purchase
            </StyledButton>
          </StyledRowFlex>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
