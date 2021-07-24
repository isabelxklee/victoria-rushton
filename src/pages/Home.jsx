import React from 'react'
import FontHero from '../components/FontHero'

const Home = ({fonts}) => (
  <>
    {fonts.map((font) => (
      <FontHero font={font} key={font.id} />
    ))}
  </>
)

export default Home
