import React, { useCallback } from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, Text } from '../styles';
import { PreviewTextItem } from '../templates/fontPageTemplate';

interface PreviewTextProps {
  previewText: PreviewTextItem;
}

const Wrapper = styled.div`
  margin-bottom: 80px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin-bottom: 40px;
  }
`;

const StyledText = styled(Text)<{
  $fontFamily: string;
  $lineHeight: number;
  $size: number;
  $slant: string;
  $weight: number;
  mobileFontSize: number;
  mobileLineHeight: number;
}>`
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-weight: ${({ $weight }) => $weight};
  font-style: ${({ $slant }) => $slant};
  font-size: ${({ $size }) => `${$size}px`};
  line-height: ${({ $lineHeight }) => $lineHeight};
  margin: 20px 0;

  @media (max-width: ${BREAKPOINTS.SMALL}) {
    font-size: ${({ mobileFontSize }) => `${mobileFontSize}px`};
    line-height: ${({ mobileLineHeight }) => mobileLineHeight};
  }
`;

const PreviewText = ({ previewText }: PreviewTextProps) => {
  const mobileFontSize = useCallback((size: number) => {
    return size <= 16 ? size : size * 0.6;
  }, []);

  const mobileLineHeight = useCallback((lineHeight: number) => {
    return lineHeight ? lineHeight * 1.2 : 1.2;
  }, []);

  return (
    <Wrapper>
      <Text>
        {previewText.font.name} {previewText.weight.title}{' '}
        {previewText.slant.title !== 'Roman' && previewText.slant.title}
      </Text>
      <StyledText
        $fontFamily={previewText.font.name}
        $lineHeight={previewText.lineHeight}
        $size={previewText.size}
        $slant={previewText.slant.title}
        $weight={previewText.weight.value}
        mobileFontSize={mobileFontSize(previewText.size)}
        mobileLineHeight={mobileLineHeight(previewText.lineHeight)}>
        {previewText.text.text}
      </StyledText>
    </Wrapper>
  );
};

export default PreviewText;
