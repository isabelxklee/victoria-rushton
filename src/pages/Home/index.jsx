import React from 'react'
import FontHero from '../../components/FontHero'
import {useSelector} from 'react-redux'
import LoadingComponent from '../../components/Loading'

const Home = () => {
  const fonts = useSelector((state) => state.fonts.value)

  return (
    <>
      {!fonts ? <LoadingComponent /> : fonts.map((font) => <FontHero font={font} key={font._id} />)}
    </>
  )
}

export default Home
