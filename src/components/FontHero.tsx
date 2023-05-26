import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Font } from '../pages';
import { RowFlex, Text } from '../styles';

import { InternalLink } from './Links';
import { FontHeroWrapper } from './styles';

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
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
        <h2>{font.heroCopy.heroCopy}</h2>
        <Text>View this font</Text>
      </InternalLink>
    </FontHeroWrapper>
  );
};

export default FontHero;
