import React from 'react';
import styled from 'styled-components';

import { Button, H2, Text } from '../styles';

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
        <Button>
          <InternalLink hideActive={true} light={true} url="/">
            Go back to fonts
          </InternalLink>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Confirmation;
