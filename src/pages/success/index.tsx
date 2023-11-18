import React from 'react';
import styled from 'styled-components';

import PageTemplate from '../../components/PageTemplate';
import { H2, Text, TextLink } from '../../styles';

const Wrapper = styled.div`
  padding: 120px 160px;
`;

const Success = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <H2>Thank you for your purchase!</H2>
        <Text>
          Your font files have been emailed to you. If you have any issues,
          please email Victoria at{' '}
          <TextLink href="mailto:hello@victoriarushton.com">
            hello@victoriarushton.com
          </TextLink>{' '}
          if you have any questions!
        </Text>
      </Wrapper>
    </PageTemplate>
  );
};

export default Success;
