import React, { useMemo } from 'react';
import styled from 'styled-components';

import { FontType } from '../pages';
import { RowFlex, Text } from '../styles';

import { InternalLink } from './Links';
import { HeroCopy, SectionWrapper } from './sharedStyles';

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
    <SectionWrapper>
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
    </SectionWrapper>
  );
};

export default FontHero;
