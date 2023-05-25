/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FontHero from '../components/FontHero';
import PageTemplate from '../components/PageTemplate';
import { Font } from '../templates/fontPageTemplate';

const IndexPage = () => {
  const data = useStaticQuery(pageQuery);
  const fonts = data.allContentfulFont.nodes;

  return (
    <PageTemplate>
      {fonts.map((font: Font, index: number) => (
        <FontHero key={index} font={font} />
      ))}
    </PageTemplate>
  );
};

export default IndexPage;

const pageQuery = graphql`
  query {
    allContentfulFont {
      nodes {
        name
        slug
        description {
          description
        }
        heroCopy {
          heroCopy
        }
        weights {
          name
          value
        }
      }
    }
  }
`;
