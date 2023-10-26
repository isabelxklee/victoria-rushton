import React from 'react';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { COLORS, RowFlex } from '../../styles';

const Wrapper = styled.div`
  padding: 100px 0;
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};
`;

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const PreviewText = styled.p<{ $darkMode: boolean; $fontFamily: string }>`
  /* font-weight: ${({ $weight }) => $weight}; */
  /* font-size: ${({ $size }) => `${$size}px`}; */
  font-family: ${({ $fontFamily }) => $fontFamily};
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.BLACK : COLORS.WHITE};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
`;

interface TypeTesterPreviewProps {
  font: FontType;
  previewText: string;
}

const TypeTesterPreview = ({ font, previewText }: TypeTesterPreviewProps) => {
  return (
    <Wrapper>
      {font.weights.map((weight, index) => (
        <LineItem key={index}>
          <StyledRowFlex>
            <p>{weight.title}</p>
            <p>{weight.value}</p>
          </StyledRowFlex>
          <PreviewText $darkMode={false} $fontFamily={font.name}>
            {previewText}
          </PreviewText>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
