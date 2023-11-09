import React, { useMemo } from 'react';
import styled from 'styled-components';

import { FontType } from '../pages';
import { BREAKPOINTS, COLORS, RowFlex, Text } from '../styles';

import { InternalLink } from './Links';
import { HeroCopy } from './sharedStyles';

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
          $weight={font.heroCopyWeight.value}
          margin="100px 0">
          {font.heroCopy.heroCopy}
        </HeroCopy>
      </InternalLink>
    </Wrapper>
  );
};

export default FontHero;
