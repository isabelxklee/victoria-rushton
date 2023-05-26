import React from 'react';
import { graphql } from 'gatsby';

import PageTemplate from '../components/PageTemplate';
import { FontHeroWrapper } from '../components/styles';
import { Font } from '../pages';
import { Button, Text } from '../styles';

interface FontItem extends Font {
  description: {
    description: string;
  };
}

interface FontPageTemplateProps {
  data: {
    contentfulFont: FontItem;
  };
}

const FontPageTemplate = ({ data }: FontPageTemplateProps) => {
  const font = data.contentfulFont;

  return (
    <PageTemplate>
      <FontHeroWrapper>
        <h1>{font.name}</h1>
        <Text>{font.description && font.description.description}</Text>
        <Button style={{ margin: '26px 0' }}>License this font</Button>
      </FontHeroWrapper>
      <div></div>
      {/* preview texts */}
      {/* type tester */}
      {/* supported langauges */}
      {/* license */}
    </PageTemplate>
  );
};

export default FontPageTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulFont(slug: { eq: $slug }) {
      slug
      name
      weights {
        title
        value
      }
      slants {
        title
      }
      description {
        description
      }
      supportedLanguages {
        supportedLanguages
      }
    }
  }
`;
