import React from 'react'
import {HeroContainer} from '../FontProfile/styles'
import {P} from '../../styles'
import {ProfilePic} from './styles'

const About = () => {
  return (
    <>
      <HeroContainer>
        <h2>Hello! I'm Victoria.</h2>
        <P>
          The great people at Font Bureau trained me to design and develop fonts, and along with
          them I became a founding type foundry partner at Type Network. I make custom typefaces for
          clients big and small, and retail typefaces for everyone, which you can also find there,
          here, and on Adobe Fonts. I graduated from RISD, and now teach at SVA and MICA Graduate
          Studies. I’ve moved a lot of places but now happily live in Baltimore. Students and new
          designers, especially those from underrepresented communities in tech and design, I’d love
          to give you free trial licenses for my typefaces. Check out my student licenses, or get in
          touch! We should work together and/or be friends.
        </P>
        <ProfilePic
          src="https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg"
          rel="no_link referrer"
          alt=""
        />
        <button>Email me</button>
      </HeroContainer>
      <div>
        <h2>Speaking and Writing</h2>
      </div>
    </>
  )
}

export default About
