import React from 'react';
import styled from 'styled-components';

import { H2, SecondaryButton, Text } from '../styles';

import { InternalLink } from './Links';

const Wrapper = styled.div`
  padding: 60px 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Confirmation = () => {
  return (
    <Wrapper>
      <H2>Thank you for downloading...!</H2>
      <Text>
        Your trial font files have been sent to your email. Delivery may take a
        couple minutes.
      </Text>
      <ButtonWrapper>
        <SecondaryButton>
          <InternalLink hideActive={true} url="/">
            Go back to fonts
          </InternalLink>
        </SecondaryButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Confirmation;
