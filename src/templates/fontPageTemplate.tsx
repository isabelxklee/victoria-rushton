import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import License from '../components/License';
import PageTemplate from '../components/PageTemplate';
import PreviewText from '../components/PreviewText';
import { HeroCopy, SectionWrapper } from '../components/sharedStyles';
import TypeTester from '../components/TypeTester';
import { Font } from '../pages';
import { Button, Text } from '../styles';

export interface PreviewTextItem {
  font: {
    name: string;
  };
  lineHeight: number;
  size: number;
  slant: {
    title: string;
  };
  text: {
    text: string;
  };
  weight: {
    title: string;
    value: number;
  };
}

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
    allContentfulPreviewText: {
      nodes: PreviewTextItem[];
    };
    contentfulFont: FontItem;
  };
}

const StyledSectionWrapper = styled(SectionWrapper)`
  border-bottom: none;
`;

const FontPageTemplate = ({ data }: FontPageTemplateProps) => {
  const font = data.contentfulFont;
  const previewTexts = data.allContentfulPreviewText.nodes;
  const buttonRef = useRef(null);

  console.log(buttonRef);

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
        <Button ref={buttonRef} style={{ margin: '26px 0' }}>
          License this font
        </Button>
      </SectionWrapper>
      <StyledSectionWrapper>
        {previewTexts.map((text: PreviewTextItem, index: number) => (
          <PreviewText key={index} previewText={text} />
        ))}
      </StyledSectionWrapper>
      <TypeTester font={font} />
      <SectionWrapper>
        <h3>Supported Languages</h3>
        <Text>{font.supportedLanguages.supportedLanguages}</Text>
      </SectionWrapper>
      <License font={font} />
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
        font {
          name
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
