import React from 'react';
import styled from 'styled-components';

import { Text } from '../styles';
import { PreviewTextItem } from '../templates/fontPageTemplate';

interface PreviewTextProps {
  text: PreviewTextItem;
}

const StyledText = styled.p<{
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
`;

const PreviewText = ({ text }: PreviewTextProps) => {
  console.log(text);
  return (
    <div>
      <Text>{text.font.name}</Text>
      <StyledText
        $fontFamily={text.font.name}
        $lineHeight={text.lineHeight}
        $size={text.size}
        $slant={text.slant.title}
        $weight={text.weight.value}>
        {text.text.text}
      </StyledText>
    </div>
  );
};

export default PreviewText;
