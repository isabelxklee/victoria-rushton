import React from 'react';
import styled from 'styled-components';

import { GlobalStyles } from '../styles.js';

const Wrapper = styled.div`
  padding: 120px 260px;
`;

const Text = styled.p`
  width: 600px;
`;

const Index = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Text>
          Victoria designs typefaces and lettering. Check them out on{' '}
          <a
            href="https://typenetwork.com/type-foundries/victoria-rushton"
            rel="noreferrer"
            target="_blank">
            Type Network
          </a>
          ,{' '}
          <a
            href="https://www.futurefonts.xyz/victoria-rushton"
            rel="noreferrer"
            target="_blank">
            Future Fonts
          </a>
          , or get in touch:{' '}
          <a href="mailto:hello@victoriarushton.com">
            hello@victoriarushton.com
          </a>
        </Text>
      </Wrapper>
    </>
  );
};

export default Index;
