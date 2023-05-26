import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Font } from '../pages';
import { RowFlex, Text } from '../styles';

import { InternalLink } from './Links';
import { FontHeroWrapper } from './styles';

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const HeroCopy = styled.h2<{
  $fontFamily: string;
  $lineHeight: number;
  $size: number;
  $slant: string;
  $weight: number;
}>`
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-style: ${({ $slant }) => $slant};
`;

interface FontHeroProps {
  font: Font;
}

const FontHero = ({ font }: FontHeroProps) => {
  const calculateStyles = useMemo(() => {
    return font.weights.length * font.slants.length;
  }, [font.slants.length, font.weights.length]);

  console.log(font);

  return (
    <FontHeroWrapper>
      <InternalLink url={`/${font.slug}`}>
        <StyledRowFlex>
          <Text>{font.name}</Text>
          <Text>{calculateStyles} available styles</Text>
        </StyledRowFlex>
        <HeroCopy
          $fontFamily={font.name}
          $lineHeight={font.heroCopyLineHeight}
          $size={font.heroCopyFontSize}
          $slant={font.heroCopySlant.title}
          $weight={font.heroCopyWeight.value}>
          {font.heroCopy.heroCopy}
        </HeroCopy>
        <Text>View this font</Text>
      </InternalLink>
    </FontHeroWrapper>
  );
};

export default FontHero;
