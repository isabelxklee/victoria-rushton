import React from 'react'
import FontHero from '../../components/FontHero'
import {useSelector} from 'react-redux'

const Home = () => {
  const fonts = useSelector((state) => state.fonts.value)

  return (
    <>
      {fonts.map((font) => (
        <FontHero key={font._id} font={font} />
      ))}
    </>
  )
}

export default Home
