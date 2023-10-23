/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FontHero from '../components/FontHero';
import PageTemplate from '../components/PageTemplate';

export interface FontType {
  heroCopy: {
    heroCopy: string;
  };
  heroCopyFontSize: number;
  heroCopyLineHeight: number;
  heroCopySlant: {
    title: string;
  };
  heroCopyWeight: {
    title: string;
    value: number;
  };
  name: string;
  slants: {
    title: string;
  }[];
  slug: string;
  weights: {
    title: string;
    value: number;
  }[];
}

const IndexPage = () => {
  const data = useStaticQuery(pageQuery);
  const fonts = data.allContentfulFont.nodes;

  return (
    <PageTemplate>
      {fonts.map((font: FontType, index: number) => (
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
        heroCopy {
          heroCopy
        }
        heroCopyFontSize
        heroCopyLineHeight
        heroCopySlant {
          title
        }
        heroCopyWeight {
          value
          title
        }
        weights {
          title
          value
        }
        slants {
          title
        }
      }
    }
  }
`;
