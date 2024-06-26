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
      <meta
        content="https://images.ctfassets.net/6l1e28rigfdw/7vjxcGYV1MEG0Oztauw0lV/0d41829ba60fb76627c5a2871409c3e2/Screenshot_2023-11-25_at_11.48.02_PM.png"
        name="image"
      />
      <meta content="https://victoriarushton.com" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="Victoria Rushton" property="og:title" />
      <meta
        content="Victoria designs typefaces and lettering."
        property="og:description"
      />
      <meta
        content="https://images.ctfassets.net/6l1e28rigfdw/7vjxcGYV1MEG0Oztauw0lV/0d41829ba60fb76627c5a2871409c3e2/Screenshot_2023-11-25_at_11.48.02_PM.png"
        property="og:image"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={siteUrl} name="twitter:url" />
      <meta
        content="Victoria designs typefaces and lettering."
        name="twitter:description"
      />
      <meta
        content="https://images.ctfassets.net/6l1e28rigfdw/7vjxcGYV1MEG0Oztauw0lV/0d41829ba60fb76627c5a2871409c3e2/Screenshot_2023-11-25_at_11.48.02_PM.png"
        name="twitter:image"
      />
      <link
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
        rel="icon"
      />
      {children}
    </>
  );
};

export default SEO;
