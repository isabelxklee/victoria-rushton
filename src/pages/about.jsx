import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import {H2, H3, Button, Text} from '../styles'
import {IntroContainer} from '../components/styles'

const About = () => {
  const data = useStaticQuery(pageQuery)
  const about = data.allContentfulAbout.nodes[0]
  const press = data.allContentfulPress.nodes

  return (
    <PageTemplate>
      <IntroContainer>
        <ProfilePic
          src="https://storage.googleapis.com/victoria-rushton-bucket/victoria_profile_pic_ds7twb.png"
          rel="no_link referrer"
          alt="A black and white portrait of a woman wearing glasses."
        />
        <div>
          <H2>{about.greeting}</H2>
          <BlockContent blocks={about.bio} />
          <Button style={{margin: '26px 0'}}>
            <TextLink href={about.buttonLink} inputWeight="300" $light={true} target="_blank">
              {about.buttonText}
            </TextLink>
          </Button>
        </div>
      </IntroContainer>
      <PressContainer>
        <Container>
          <H2>Speaking and Writing</H2>
          {press &&
            press.map((object) => (
              <PressArticleContainer key={object._id}>
                <PressArticleTitle
                  href={object.link}
                  target="_blank"
                  rel="no_referrer"
                  $linkStyle={object.link && 'on'}
                >
                  {object.title}
                </PressArticleTitle>
                <P>{object.description}</P>
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
