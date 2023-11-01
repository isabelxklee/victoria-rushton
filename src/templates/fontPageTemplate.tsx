import React, { useCallback, useMemo, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import PageTemplate from '../components/PageTemplate';
import PreviewText from '../components/PreviewText';
import PurchaseFlow from '../components/purchase/PurchaseFlow';
import { HeroCopy, SectionWrapper } from '../components/sharedStyles';
import { FontType } from '../pages';
import { Button, H3, SmallText, Text } from '../styles';

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

export interface FontWeightType {
  title: string;
  value: number;
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

const SupportedLanguagesWrapper = styled.div`
  margin-top: 100px;
  padding: 40px 0;
`;

const ButtonGroup = styled.div`
  gap: 16px;
  display: flex;
  margin-top: 26px;
`;

const FontPageTemplate = ({ data }: FontPageTemplateProps) => {
  const font = data.contentfulFont;
  const previewTexts = data.allContentfulPreviewText.nodes;
  const divRef = useRef<HTMLDivElement>(null);

  const sortedWeights = useMemo(() => {
    return font.weights.sort((a, b) => a.value - b.value);
  }, [font.weights]);

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
        <ButtonGroup>
          <Button onClick={scrollToSection}>License this font</Button>
        </ButtonGroup>
      </SectionWrapper>
      <StyledSectionWrapper>
        {previewTexts.map((text: PreviewTextItem, index: number) => (
          <PreviewText key={index} previewText={text} />
        ))}
      </StyledSectionWrapper>
      <div ref={divRef} />
      <PurchaseFlow font={font} sortedWeights={sortedWeights} />
      <SupportedLanguagesWrapper>
        <H3>Supported Languages</H3>
        <SmallText>{font.supportedLanguages.supportedLanguages}</SmallText>
      </SupportedLanguagesWrapper>
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
