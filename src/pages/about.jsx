import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PageTemplate from '../components/PageTemplate';
import {
  Container,
  IntroContainer,
  PressArticleContainer,
  PressArticleTitle,
  PressContainer,
  ProfilePic} from '../components/styles';
import { Button, FONT_WEIGHTS,H2, Text, TextLink } from '../styles';

const About = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.allContentfulAbout.nodes[0];
  const press = data.allContentfulPress.nodes;

  return (
    <PageTemplate>
      <IntroContainer>
        <ProfilePic
          alt="Victoria Rushton"
          rel="no_link referrer"
          src="https://images.ctfassets.net/6l1e28rigfdw/HbVTH1MqZNqlrM4Cowe1E/a3eeb7e19a38d51d07f9edd5603eceb8/victoria_profile_pic.png"
        />
        <div>
          <H2>{about.greeting.greeting}</H2>
          <Text>{about.bio.bio}</Text>
          <Button style={{ margin: '26px 0' }}>
            <TextLink
              $light={true}
              href={about.buttonURL}
              inputWeight={FONT_WEIGHTS.BOOK}
              target="_blank"
            >
              {about.buttonLabel}
            </TextLink>
          </Button>
        </div>
      </IntroContainer>
      <PressContainer>
        <Container>
          <H2>Speaking and Writing</H2>
          {press.map((object, index) => (
            <PressArticleContainer key={index}>
              <PressArticleTitle
                $linkStyle={object.url && 'on'}
                href={object.url}
                rel="no_referrer"
                target="_blank"
              >
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
