import React, { useMemo } from 'react';
import styled from 'styled-components';

import { FontType } from '../pages';
import { BREAKPOINTS, COLORS, RowFlex, Text } from '../styles';

import { InternalLink } from './Links';

const Wrapper = styled.div`
  border-bottom: 2px solid ${COLORS.BLACK};
  padding: 20px 0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 40px;
  }

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 10px 0;
  }
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
  margin: 100px 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    font-size: ${({ $size }) => `${$size * 0.6}px`};
    margin: 40px 0;
  }
`;

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

interface FontHeroProps {
  font: FontType;
}

const FontHero = ({ font }: FontHeroProps) => {
  const calculateStyles = useMemo(() => {
    return font.weights.length * font.slants.length;
  }, [font.slants.length, font.weights.length]);

  return (
    <Wrapper>
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
      </InternalLink>
    </Wrapper>
  );
};

export default FontHero;
