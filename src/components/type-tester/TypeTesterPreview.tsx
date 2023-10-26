import React from 'react';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { Button, COLORS, RowFlex } from '../../styles';

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

interface TypeTesterPreviewProps {
  font: FontType;
  previewText: string;
  size: string;
}

const TypeTesterPreview = ({
  font,
  previewText,
  size
}: TypeTesterPreviewProps) => {
  return (
    <Wrapper>
      {font.weights.map((weight, index) => (
        <LineItem key={index}>
          <StyledRowFlex>
            <p>{weight.title}</p>
            <p>{weight.value}</p>
          </StyledRowFlex>
          <StyledRowFlex>
            <PreviewText
              $darkMode={false}
              $fontFamily={font.name}
              $size={size}
              $weight={weight.value}>
              {previewText}
            </PreviewText>
            <StyledButton onClick={() => handleClick(font)}>
              Purchase
            </StyledButton>
          </StyledRowFlex>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
