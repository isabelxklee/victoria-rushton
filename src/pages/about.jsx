import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import {H2, H3, Button, Text, TextLink, FONT_WEIGHTS} from '../styles'
import {
  IntroContainer,
  ProfilePic,
  PressContainer,
  PressArticleContainer,
  PressArticleTitle,
  Container,
} from '../components/styles'

const About = () => {
  const data = useStaticQuery(pageQuery)
  const about = data.allContentfulAbout.nodes[0]
  const press = data.allContentfulPress.nodes

  console.log(about, press)

  return (
    <PageTemplate>
      <IntroContainer>
        <ProfilePic
          src="https://storage.googleapis.com/victoria-rushton-bucket/victoria_profile_pic_ds7twb.png"
          rel="no_link referrer"
          alt="A black and white portrait of a woman wearing glasses."
        />
        <div>
          <H2>{about.greeting.greeting}</H2>
          <Text>{about.bio.bio}</Text>
          <Button style={{margin: '26px 0'}}>
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
          {press &&
            press.map((object, index) => (
              <PressArticleContainer key={index}>
                <PressArticleTitle
                  href={object.link}
                  target="_blank"
                  rel="no_referrer"
                  $linkStyle={object.link && 'on'}
                >
                  {object.title}
                </PressArticleTitle>
                <Text>{object.description}</Text>
              </PressArticleContainer>
            ))}
        </Container>
      </PressContainer>
      {/*         
      <div>
        <H2>{about.greeting.greeting}</H2>
        <Text>{about.bio.bio}</Text>
        <Button>
          <a href={about.buttonURL}>{about.buttonLabel}</a>
        </Button>
      </div>
      <div>
        <H2>Speaking and Writing</H2>
        {press.map((press, index) => (
          <div key={index}>
            <H3>
              <a href={press.url}>{press.title}</a>
            </H3>
            <p>{press.description}</p>
          </div>
        ))}
      </div> */}
    </PageTemplate>
  )
}

export default About

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
`
