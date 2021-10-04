import React, {useState, useEffect} from 'react'
import {PSpace, Button, TextLink, H2, Padding} from '../../styles'
import {
  ProfilePic,
  IntroContainer,
  PressContainer,
  PressArticleTitle,
  PressArticleContainer,
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

  console.log(press)

  return (
    <>
      {data && (
        <IntroContainer>
          <div>
            <H2>{about.greeting}</H2>
            <PSpace inputMargin="40px 0">{about.aboutText}</PSpace>
            <Button>
              <TextLink href={about.buttonLink} inputWeight="300">
                {about.buttonText}
              </TextLink>
            </Button>
          </div>
          <ProfilePic
            src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1633237161/victoria_profile_pic_ds7twb.png"
            rel="no_link referrer"
            alt="A black and white portrait of a woman wearing glasses."
          />
        </IntroContainer>
      )}

      <PressContainer>
        <Padding $padding="80px">
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
                  {object.link && '🔗 '}
                  {object.title}
                </PressArticleTitle>
                <PSpace>{object.description}</PSpace>
              </PressArticleContainer>
            ))}
        </Padding>
      </PressContainer>
    </>
  )
}

export default About
