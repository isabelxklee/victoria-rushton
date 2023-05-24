import React, { useMemo } from 'react';
import styled from 'styled-components';
import { FontHeroWrapper } from './styles';
import { Text, RowFlex, InvisibleLink } from '../styles';

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const FontHero = ({ font }) => {
  const calculateStyles = useMemo(() => {
    return font.weights.length;
    // * font.slants.length
  });

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
