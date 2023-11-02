import React, { useMemo } from 'react';
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
  const isBrowser = typeof window !== 'undefined';

  let email = '';

  if (isBrowser) {
    email = window.localStorage.getItem('email');
  }

  return (
    <PageTemplate>
      <Wrapper>
        {email ? (
          <>
            {' '}
            <H2>Thank you!</H2>
            <Text>
              An email has been sent to <strong>{email}</strong> containing your
              trial font files.
            </Text>
          </>
        ) : (
          <>
            <H2>Oops, looks like you're not supposed to be here!</H2>
          </>
        )}
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
