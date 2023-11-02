import React from 'react';
import styled from 'styled-components';

import { InternalLink } from '../../components/Links';
import PageTemplate from '../../components/PageTemplate';
import { H2, SecondaryButton, Text } from '../../styles';

const Wrapper = styled.div`
  padding: 60px 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

const Confirmation = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <H2>Thank you!</H2>
        <Text>An email has been sent containing your trial font files.</Text>
        <ButtonWrapper>
          <SecondaryButton>
            <InternalLink hideActive={true} url="/">
              Back to fonts
            </InternalLink>
          </SecondaryButton>
        </ButtonWrapper>
      </Wrapper>
    </PageTemplate>
  );
};

export default Confirmation;
