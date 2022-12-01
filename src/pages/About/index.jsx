import React, {useState, useEffect} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {P, Button, TextLink, H2} from '../../styles/global-styles'
import {
  ProfilePic,
  IntroContainer,
  PressContainer,
  PressArticleTitle,
  PressArticleContainer,
  Container,
} from './styles'
import sanityClient from '../../client.js'
import {aboutQuery, pressQuery} from '../../queries.js'

const About = () => {
  const [about, setAbout] = useState(null)
  const [press, setPress] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(aboutQuery)
      .then((data) => setAbout(data[0]))
      .catch(console.error)

    sanityClient
      .fetch(pressQuery)
      .then((data) => setPress(data))
      .catch(console.error)
  }, [])

  return (
    <>
      {about && (
        <IntroContainer>
          <ProfilePic
            src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1633237161/victoria_profile_pic_ds7twb.png"
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
      )}

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
    </>
  )
}

export default About
