import React, {useState, useEffect} from 'react'
import {PSpace, P, Button, TextLink, H2} from '../../styles'
import {
  ProfilePic,
  IntroContainer,
  PressContainer,
  PressArticleTitle,
  PressArticleContainer,
  Container,
} from './styles'
import sanityClient from '../../client.js'

const About = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in ["about", "press"]] | order(_type) {
        _id,
        _type,
        greeting,
        aboutText,
        buttonText,
        buttonLink,
        title,
        description,
        date,
        link
      }`
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [])

  const about = data && data.filter((object) => object._type === 'about')[0]
  const press = data && data.filter((object) => object._type === 'press')

  return (
    <>
      {data && (
        <IntroContainer>
          <ProfilePic
            src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1633237161/victoria_profile_pic_ds7twb.png"
            rel="no_link referrer"
            alt="A black and white portrait of a woman wearing glasses."
          />
          <div>
            <H2>{about.greeting}</H2>
            <PSpace inputMargin="40px 0">{about.aboutText}</PSpace>
            <Button>
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