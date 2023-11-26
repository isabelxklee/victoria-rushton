/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useSiteMetadata } from '../hooks/use-site-metadata';

interface SEOProps {
  children?: any;
}

const SEO = ({ children }: SEOProps) => {
  const { title, siteUrl } = useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta
        content="Victoria designs typefaces and lettering."
        name="description"
      />
      <meta content="" name="image" />
      <meta content="https://victoriarushton.com" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="Victoria Rushton" property="og:title" />
      <meta
        content="Victoria designs typefaces and lettering."
        property="og:description"
      />
      <meta content="" property="og:image" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={siteUrl} name="twitter:url" />
      <meta
        content="Victoria designs typefaces and lettering."
        name="twitter:description"
      />
      <meta content="" name="twitter:image" />
      <link
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
        rel="icon"
      />
      {children}
    </>
  );
};

export default SEO;
