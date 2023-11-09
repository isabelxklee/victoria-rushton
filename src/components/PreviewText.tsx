import React from 'react';
import styled from 'styled-components';

import { Text } from '../styles';
import { PreviewTextItem } from '../templates/fontPageTemplate';

interface PreviewTextProps {
  previewText: PreviewTextItem;
}

const Wrapper = styled.div`
  margin-bottom: 80px;
`;

const StyledText = styled(Text)<{
  $fontFamily: string;
  $lineHeight: number;
  $size: number;
  $slant: string;
  $weight: number;
}>`
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-weight: ${({ $weight }) => $weight};
  font-style: ${({ $slant }) => $slant};
  font-size: ${({ $size }) => `${$size}px`};
  line-height: ${({ $lineHeight }) => $lineHeight};
  margin: 20px 0;
`;

const PreviewText = ({ previewText }: PreviewTextProps) => {
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
        $weight={previewText.weight.value}>
        {previewText.text.text}
      </StyledText>
    </Wrapper>
  );
};

export default PreviewText;
