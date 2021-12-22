import React, {useState, useEffect} from 'react'
import FontHero from '../../components/FontHero'
import sanityClient from '../../client.js'
import {fontsQuery} from '../../queries.js'

const Home = () => {
  const [fonts, setFonts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(fontsQuery)
      .then((data) => setFonts(data))
      .catch(console.error)
  }, [])

  if (!fonts) return <div>Loading...</div>

  return <>{fonts && fonts.map((font) => <FontHero font={font} key={font._id} />)}</>
}

export default Home
