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
          Victoria designs typefaces and lettering. Check them out on Type
          Network, Future Fonts, or get in touch: hello@victoriarushton.com
        </Text>
      </Wrapper>
    </>
  );
};

export default Index;
