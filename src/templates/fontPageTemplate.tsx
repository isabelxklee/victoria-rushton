import React, { useCallback, useMemo, useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { InternalLink } from '../components/Links';
import PageTemplate from '../components/PageTemplate';
import PreviewText from '../components/PreviewText';
import PurchaseFlow from '../components/purchase/PurchaseFlow';
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

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 40px 0;
  }
`;

const SupportedLanguagesWrapper = styled.div`
  margin: 60px 0 0 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin: 40px 0 80px 0;
  }
`;

const TextWrapper = styled.div`
  padding: 100px 0 120px 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 40px 0 60px 0;
  }
`;

const ButtonGroup = styled.div`
  gap: 16px;
  display: flex;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    gap: 8px;
  }
`;

const HeroCopy = styled.h2<{
  $fontFamily: string;
  $lineHeight: number;
  $size: number;
  $slant: string;
  $weight: number;
}>`
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-style: ${({ $slant }) => $slant};
  margin: 10px 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    font-size: 48px;
  }
`;

const GIF = styled.img`
  width: 100%;
`;

const GIFWrapper = styled.div`
  margin-top: 20px;
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
            $weight={font.heroCopyWeight.value}>
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
        {font.slug === 'cecilie-sans' && (
          <>
            <Text>
              Cecilie Sans is also available as a variable font! Purchase 5
              styles to receive it along with your order.
            </Text>
            <GIFWrapper>
              <GIF
                alt="gif"
                src="https://images.ctfassets.net/6l1e28rigfdw/2jgBsoLCbB04g4Tmi4Jnix/e890c19df671f6fe26ec127a22495c01/Cecilie-sans-Variable-1.gif"
              />
              <GIF
                alt="gif"
                src="https://images.ctfassets.net/6l1e28rigfdw/6wA9uD4YPng337IhT6sd1F/6affd334aaacd03637efa4b66a292738/Cecilie-sans-Variable-2.gif"
              />
            </GIFWrapper>
          </>
        )}
      </PreviewWrapper>
      <div ref={divRef} />
      <PurchaseFlow font={font} />
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
