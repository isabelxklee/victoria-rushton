import React, { ReactNode } from 'react';

import { GlobalStyles, Wrapper } from '../styles';

import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <SEO />
        <Header />
        {children}
      </Wrapper>
      <Footer />
    </>
  );
};

export default PageTemplate;
