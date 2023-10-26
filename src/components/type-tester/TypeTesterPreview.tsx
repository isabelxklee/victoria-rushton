import React from 'react';
import styled from 'styled-components';

import { FontType } from '../../pages';
import { COLORS, RowFlex } from '../../styles';

const Wrapper = styled.div`
  padding: 100px 0;
`;

const LineItem = styled.div`
  border-top: 2px solid ${COLORS.BLACK};
`;

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;

interface TypeTesterPreviewProps {
  font: FontType;
  previewText: string;
}

const TypeTesterPreview = ({ font, previewText }: TypeTesterPreviewProps) => {
  return (
    <Wrapper>
      {font.weights.map((weight, index) => (
        <LineItem key={index}>
          <StyledRowFlex>
            <p>{weight.title}</p>
            <p>{weight.value}</p>
          </StyledRowFlex>
          <p>{previewText}</p>
        </LineItem>
      ))}
    </Wrapper>
  );
};

export default TypeTesterPreview;
