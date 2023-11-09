import React, { useCallback, useMemo, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { InternalLink } from '../components/Links';
import PageTemplate from '../components/PageTemplate';
import PreviewText from '../components/PreviewText';
import PurchaseFlow from '../components/purchase/PurchaseFlow';
import { HeroCopy } from '../components/sharedStyles';
import { FontType } from '../pages';
import {
  BREAKPOINTS,
  Button,
  COLORS,
  H3,
  SecondaryButton,
  SmallText,
  Text
} from '../styles';

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

const Wrapper = styled.div`
  border-bottom: 2px solid ${COLORS.BLACK};
  padding: 20px 0;
`;

const PreviewWrapper = styled.div`
  padding: 100px 0;
  border-bottom: 2px solid ${COLORS.BLACK};
`;

const SupportedLanguagesWrapper = styled.div`
  margin-top: 100px;
  padding: 40px 0;
`;

const TextWrapper = styled.div`
  padding: 100px 0 120px 0;
`;

const ButtonGroup = styled.div`
  gap: 16px;
  display: flex;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    gap: 8px;
  }
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

  const url = useMemo(() => {
    return `/${font.slug}/download-trial-font`;
  }, [font.slug]);

  return (
    <PageTemplate>
      <Wrapper>
        <TextWrapper>
          <HeroCopy
            $fontFamily={font.name}
            $lineHeight={font.heroCopyLineHeight}
            $size={font.heroCopyFontSize}
            $slant="regular"
            $weight={font.heroCopyWeight.value}
            margin="20px 0">
            {font.name}
          </HeroCopy>
          <Text>{font.description && font.description.description}</Text>
        </TextWrapper>
        <ButtonGroup>
          <Button onClick={scrollToSection}>License this font</Button>
          <SecondaryButton>
            <InternalLink hideActive={true} url={url}>
              Download trial fonts
            </InternalLink>
          </SecondaryButton>
        </ButtonGroup>
      </Wrapper>
      <PreviewWrapper>
        {previewTexts.map((text: PreviewTextItem, index: number) => (
          <PreviewText key={index} previewText={text} />
        ))}
      </PreviewWrapper>
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
    allContentfulPreviewText(
      sort: { order: ASC }
      filter: { font: { slug: { eq: $slug } } }
    ) {
      nodes {
        order
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
