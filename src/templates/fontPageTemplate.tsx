import React from 'react';
import { graphql } from 'gatsby';

import PageTemplate from '../components/PageTemplate';
import { FontHeroWrapper } from '../components/styles';
import { Button, Text } from '../styles';

export interface Font {
  description: {
    description: string;
  };
  heroCopy: {
    heroCopy: string;
  };
  name: string;
  slug: string;
  weights: {
    name: string;
    value: number;
  }[];
}

interface FontPageTemplateProps {
  data: {
    contentfulFont: Font;
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
        name
        value
      }
      heroCopy {
        heroCopy
      }
      description {
        description
      }
    }
  }
`;
