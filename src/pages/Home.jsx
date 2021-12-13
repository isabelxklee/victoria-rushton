import React, {useState, useEffect} from 'react'
import FontHero from '../components/FontHero'
import sanityClient from '../client.js'

const Home = () => {
  const [fonts, setFonts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "font"]{
            _id,
            title,
            homeText,
            homeTextSize,
            "homeTextSlant": homeTextSlant[0]->title,
            "homeTextWeight": homeTextWeight[0]->number,
            homeTextLineHeight,
            "slug": slug.current,
            "weights": weights[]->title,
            "slants": slants[]->title
        }`
      )
      .then((data) => setFonts(data))
      .catch(console.error)
  }, [])

  return <>{fonts && fonts.map((font) => <FontHero font={font} key={font._id} />)}</>
}

export default Home
