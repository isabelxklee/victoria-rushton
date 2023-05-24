import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PageTemplate from '../components/PageTemplate';
import { H2, Button, Text, TextLink, FONT_WEIGHTS } from '../styles';
import {
  IntroContainer,
  ProfilePic,
  PressContainer,
  PressArticleContainer,
  PressArticleTitle,
  Container
} from '../components/styles';

const About = () => {
  const data = useStaticQuery(pageQuery);
  const about = data.allContentfulAbout.nodes[0];
  const press = data.allContentfulPress.nodes;

  return (
    <PageTemplate>
      <IntroContainer>
        <ProfilePic
          src="https://images.ctfassets.net/6l1e28rigfdw/HbVTH1MqZNqlrM4Cowe1E/a3eeb7e19a38d51d07f9edd5603eceb8/victoria_profile_pic.png"
          rel="no_link referrer"
          alt="Victoria Rushton"
        />
        <div>
          <H2>{about.greeting.greeting}</H2>
          <Text>{about.bio.bio}</Text>
          <Button style={{ margin: '26px 0' }}>
            <TextLink
              href={about.buttonURL}
              inputWeight={FONT_WEIGHTS.BOOK}
              $light={true}
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
                href={object.url}
                target="_blank"
                rel="no_referrer"
                $linkStyle={object.url && 'on'}
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
