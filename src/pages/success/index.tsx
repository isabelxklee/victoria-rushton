import React from 'react';
import styled from 'styled-components';

import { InternalLink } from '../../components/Links';
import PageTemplate from '../../components/PageTemplate';
import { Button, ColumnFlex, H2, Text, TextLink } from '../../styles';

const Wrapper = styled.div`
  padding: 120px 160px;
`;

const TextWrapper = styled(ColumnFlex)`
  gap: 20px;
  margin-bottom: 40px;
`;

const Success = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <H2>Thank you for your purchase!</H2>
        <TextWrapper>
          <Text>
            Your font files have been emailed to you. If you have any issues,
            please email Victoria at{' '}
            <TextLink href="mailto:hello@victoriarushton.com">
              hello@victoriarushton.com
            </TextLink>{' '}
            if you have any questions!
          </Text>
        </TextWrapper>
        <Button>
          <InternalLink light={true} url="/">
            Back to fonts
          </InternalLink>
        </Button>
      </Wrapper>
    </PageTemplate>
  );
};

export default Success;
