import React from 'react'
import FontHero from '../components/FontHero'

const Home = ({fonts}) => {
  return (
    <>
      {fonts.map((font) => (
        <FontHero key={font._id} font={font} />
      ))}
    </>
  )
}

export default Home
