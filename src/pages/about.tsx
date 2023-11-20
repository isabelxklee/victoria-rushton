/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { ExternalLink } from '../components/Links';
import PageTemplate from '../components/PageTemplate';
import {
  BREAKPOINTS,
  Button,
  COLORS,
  Flex,
  FONT_WEIGHTS,
  H2,
  Text
} from '../styles';

const IntroWrapper = styled(Flex)`
  padding-top: 120px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    flex-direction: column;
    align-items: center;
    padding: 60px 0;
    text-align: center;
  }
`;

const ProfilePic = styled.img`
  border-radius: 100%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border: 2px solid ${COLORS.BLACK};
  margin: 40px 80px 20px 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin: 0;
    width: 200px;
    height: 200px;
  }
`;

const PressWrapper = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  width: calc(100vw - 160px);
  margin-left: calc(50% - 50vw);
  padding: 80px;
  bottom: -80px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 40px;
    width: calc(100vw - 80px);
  }
`;

const Border = styled.div`
  border-left: 2px solid ${COLORS.WHITE};
  padding-left: 50px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding-left: 0;
    border-left: none;
  }
`;

const PressItemWrapper = styled.div`
  margin: 48px 0;
`;

const About = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.allContentfulAbout.nodes[0];
  const press = data.allContentfulPress.nodes;

  return (
    <PageTemplate>
      <IntroWrapper>
        <ProfilePic
          alt="Victoria Rushton"
          rel="no_link referrer"
          src="https://images.ctfassets.net/6l1e28rigfdw/HbVTH1MqZNqlrM4Cowe1E/a3eeb7e19a38d51d07f9edd5603eceb8/victoria_profile_pic.png"
        />
        <div>
          <H2>{about.greeting.greeting}</H2>
          <Text>{about.bio.bio}</Text>
          <Button style={{ margin: '26px 0' }}>
            <ExternalLink
              fontWeight={FONT_WEIGHTS.BOOK}
              light={true}
              url={about.buttonURL}>
              {about.buttonLabel}
            </ExternalLink>
          </Button>
        </div>
      </IntroWrapper>
      <PressWrapper>
        <Border>
          <H2>Speaking and Writing</H2>
          {press.map((object: any, index: number) => (
            <PressItemWrapper key={index}>
              <ExternalLink
                fontWeight={FONT_WEIGHTS.BOLD}
                light={true}
                textCase="uppercase"
                url={object.url}>
                {object.title}
              </ExternalLink>
              <Text>{object.description}</Text>
            </PressItemWrapper>
          ))}
        </Border>
      </PressWrapper>
    </PageTemplate>
  );
};

export default About;

const pageQuery = graphql`
  query {
    allContentfulAbout {
      nodes {
        buttonURL
        buttonLabel
        bio {
          bio
        }
        greeting {
          greeting
        }
      }
    }
    allContentfulPress {
      nodes {
        title
        description
        url
      }
    }
  }
`;
