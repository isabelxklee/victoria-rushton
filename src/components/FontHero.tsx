import React, { useMemo } from 'react';
import styled from 'styled-components';

import { InvisibleLink, RowFlex, Text } from '../styles';
import { Font } from '../templates/fontPageTemplate';

import { FontHeroWrapper } from './styles';

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

interface FontHeroProps {
  font: Font;
}

const FontHero = ({ font }: FontHeroProps) => {
  const calculateStyles = useMemo(() => {
    return font.weights.length;
    // * font.slants.length
  }, [font.weights.length]);

  return (
    <FontHeroWrapper>
      <InvisibleLink to={`/${font.slug}`}>
        <StyledRowFlex>
          <Text>{font.name}</Text>
          <Text>{calculateStyles} available styles</Text>
        </StyledRowFlex>
        <h2>{font.heroCopy.heroCopy}</h2>
        <Text>View this font</Text>
      </InvisibleLink>
    </FontHeroWrapper>
  );
};

export default FontHero;