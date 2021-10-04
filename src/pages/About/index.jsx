import React, {useState, useEffect} from 'react'
import {PSpace, Button, TextLink, H2} from '../../styles'
import {ProfilePic, IntroContainer, PressContainer} from './styles'
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
        <H2>Speaking and Writing</H2>
        {press &&
          press.map((object) => (
            <div key={object._id}>
              <p>{object.title}</p>
              {/* <p>{object.description}</p> */}
            </div>
          ))}
      </PressContainer>
    </>
  )
}

export default About
