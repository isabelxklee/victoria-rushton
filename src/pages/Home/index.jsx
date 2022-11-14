import React from 'react'

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
