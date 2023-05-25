/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { ExternalLink } from '../components/Links';
import PageTemplate from '../components/PageTemplate';
import { Container, FlexContainer } from '../components/styles';
import { Button, COLORS, FONT_WEIGHTS, H2, Text } from '../styles';

const IntroWrapper = styled(FlexContainer)`
  padding: 120px 0;

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    margin: 0;
    width: 200px;
    height: 200px;
  }
`;

const PressContainer = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  width: calc(100vw - 160px);
  margin-left: calc(50% - 50vw);
  padding: 80px;

  @media (max-width: 900px) {
    padding: 40px;
    width: calc(100vw - 80px);
  }
`;

const PressArticleTitle = styled(ExternalLink)`
  text-transform: uppercase;
  font-size: 16px;
`;

const PressArticleContainer = styled.div`
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
              inputWeight={FONT_WEIGHTS.BOOK}
              light={true}
              url={about.buttonURL}>
              {about.buttonLabel}
            </ExternalLink>
          </Button>
        </div>
      </IntroWrapper>
      <PressContainer>
        <Container>
          <H2>Speaking and Writing</H2>
          {press.map((object: any, index: number) => (
            <PressArticleContainer key={index}>
              <PressArticleTitle
                inputWeight={FONT_WEIGHTS.BOLD}
                light={true}
                url={object.url}>
                {object.title}
              </PressArticleTitle>
              <Text>{object.description}</Text>
            </PressArticleContainer>
          ))}
        </Container>
      </PressContainer>
    </PageTemplate>
  );
};

export default About;

const pageQuery = graphql`
  query MyQuery {
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
