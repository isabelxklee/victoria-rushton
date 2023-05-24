import React from 'react';
import { Wrapper, GlobalStyles } from '../styles';
import Header from './Header';

const PageTemplate = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {children}
    </Wrapper>
  );
};

export default PageTemplate;
