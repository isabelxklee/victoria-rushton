import React from 'react';
import { graphql } from 'gatsby';

import PageTemplate from '../components/PageTemplate';
import { HeroCopy, SectionWrapper } from '../components/sharedStyles';
import TypeTester from '../components/TypeTester';
import { Font } from '../pages';
import { Button, Text } from '../styles';

interface FontItem extends Font {
  description: {
    description: string;
  };
  supportedLanguages: {
    supportedLanguages: string;
  };
}

interface FontPageTemplateProps {
  data: {
    allContentfulPreviewText: any;
    contentfulFont: FontItem;
  };
}

const FontPageTemplate = ({ data }: FontPageTemplateProps) => {
  const font = data.contentfulFont;
  const previewTexts = data.allContentfulPreviewText;

  return (
    <PageTemplate>
      <SectionWrapper>
        <HeroCopy
          $fontFamily={font.name}
          $lineHeight={font.heroCopyLineHeight}
          $size={font.heroCopyFontSize}
          $slant={font.heroCopySlant.title}
          $weight={font.heroCopyWeight.value}>
          {font.name}
        </HeroCopy>
        <Text>{font.description && font.description.description}</Text>
        <Button style={{ margin: '26px 0' }}>License this font</Button>
      </SectionWrapper>
      <div></div>
      {/* preview texts */}
      {/* type tester */}
      <h2>hello world</h2>
      <TypeTester font={font} />
      <SectionWrapper>
        <h3>Supported Languages</h3>
        <Text>{font.supportedLanguages.supportedLanguages}</Text>
      </SectionWrapper>
      {/* license */}
    </PageTemplate>
  );
};

export default FontPageTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulFont(slug: { eq: $slug }) {
      name
      slug
      description {
        description
      }
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
      supportedLanguages {
        supportedLanguages
      }
    }
    allContentfulPreviewText(filter: { font: { slug: { eq: $slug } } }) {
      nodes {
        text {
          text
        }
        weight {
          value
          title
        }
        slant {
          title
        }
        size
        lineHeight
      }
    }
  }
`;
