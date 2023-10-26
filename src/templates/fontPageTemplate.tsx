import React, { useCallback, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import License from '../components/License';
import PageTemplate from '../components/PageTemplate';
import PreviewText from '../components/PreviewText';
import { HeroCopy, SectionWrapper } from '../components/sharedStyles';
import TypeTesterInput from '../components/type-tester/TypeTesterInput';
import { FontType } from '../pages';
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

interface FontItem extends FontType {
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

const SupportedLanguagesWrapper = styled(SectionWrapper)`
  padding-bottom: 120px;
  border-bottom: none;
`;

const FontPageTemplate = ({ data }: FontPageTemplateProps) => {
  const font = data.contentfulFont;
  const previewTexts = data.allContentfulPreviewText.nodes;
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback(() => {
    const current = divRef.current;

    window.scrollTo({
      top: current?.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <PageTemplate>
      <SectionWrapper>
        <HeroCopy
          $fontFamily={font.name}
          $lineHeight={font.heroCopyLineHeight}
          $size={font.heroCopyFontSize}
          $slant="regular"
          $weight={font.heroCopyWeight.value}>
          {font.name}
        </HeroCopy>
        <Text>{font.description && font.description.description}</Text>
        <Button style={{ margin: '26px 0' }} onClick={scrollToSection}>
          License this font
        </Button>
      </SectionWrapper>
      <StyledSectionWrapper>
        {previewTexts.map((text: PreviewTextItem, index: number) => (
          <PreviewText key={index} previewText={text} />
        ))}
      </StyledSectionWrapper>
      <SupportedLanguagesWrapper>
        <h3>Supported Languages</h3>
        <Text>{font.supportedLanguages.supportedLanguages}</Text>
      </SupportedLanguagesWrapper>
      <div ref={divRef} />
      <TypeTesterInput font={font} />
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
