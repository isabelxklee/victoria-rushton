import React from 'react'
import {PSpace, Button, TextLink, H2} from '../../styles'
import {ProfilePic, IntroContainer} from './styles'

const About = () => {
  return (
    <>
      <IntroContainer>
        <div>
          <H2>Hello! I'm Victoria.</H2>
          <PSpace inputMargin="40px 0">
            The great people at Font Bureau trained me to design and develop fonts, and along with
            them I became a founding type foundry partner at Type Network. I make custom typefaces
            for clients big and small, and retail typefaces for everyone, which you can also find
            there, here, and on Adobe Fonts. I graduated from RISD, and now teach at SVA and MICA
            Graduate Studies. I’ve moved a lot of places but now happily live in Baltimore. Students
            and new designers, especially those from underrepresented communities in tech and
            design, I’d love to give you free trial licenses for my typefaces. Check out my student
            licenses, or get in touch! We should work together and/or be friends.
          </PSpace>
          <Button>
            <TextLink href="mailto:hello@victoriarushton.com" inputWeight="300">
              Email me
            </TextLink>
          </Button>
        </div>
        <ProfilePic
          src="https://res.cloudinary.com/extrapickles/image/upload/c_scale,w_1000/v1633237161/victoria_profile_pic_ds7twb.png"
          rel="no_link referrer"
          alt="A black and white portrait of a woman wearing glasses."
        />
      </IntroContainer>
      <div>
        <H2>Speaking and Writing</H2>
      </div>
    </>
  )
}

export default About
