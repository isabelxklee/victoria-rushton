import React, {useState, useEffect} from 'react'
import FontHero from '../../components/FontHero'
import sanityClient from '../../client.js'
import {fontsQuery} from '../../queries.js'
import LoadingComponent from '../../components/Loading'

const Home = () => {
  const [fonts, setFonts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(fontsQuery)
      .then((data) => setFonts(data))
      .catch(console.error)
  }, [])

  if (!fonts) return <LoadingComponent />

  return <>{fonts && fonts.map((font) => <FontHero font={font} key={font._id} />)}</>
}

export default Home
