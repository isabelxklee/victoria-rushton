import React from 'react';
import styled from 'styled-components';

import { H2, Text } from '../styles';

const Wrapper = styled.div`
  padding: 60px 0;
`;

const Confirmation = () => {
  return (
    <Wrapper>
      <H2>Thank you for downloading...!</H2>
      <Text>
        Your trial font files have been sent to your email. Delivery may take a
        couple minutes.
      </Text>
    </Wrapper>
  );
};

export default Confirmation;
