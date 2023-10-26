import React from 'react';
import styled from 'styled-components';

import { COLORS, RowFlex } from '../../styles';

import { TypeTesterProps } from './TypeTesterInput';

const Wrapper = styled.div`
  padding: 100px 0;
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};
`;

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

const TypeTesterPreview = ({ font }: TypeTesterProps) => {
  console.log(font);

  return (
    <Wrapper>
      {font.weights.map((weight, index) => (
        <LineItem key={index}>
          <StyledRowFlex>
            <p>{weight.title}</p>
            <p>{weight.value}</p>
          </StyledRowFlex>
          <p>hello world</p>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
