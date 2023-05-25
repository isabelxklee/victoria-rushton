import React, { ReactNode } from 'react';

import { GlobalStyles, Wrapper } from '../styles';

import Header from './Header';

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      {children}
    </Wrapper>
  );
};

export default PageTemplate;
