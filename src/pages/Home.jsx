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
            "slug": slug.current,
            "weights": weights[]->title,
            "slants": slants[]->title,
            preview1text,
            preview1size,
            "preview1weight": preview1Weight[]->title,
            "preview1slant": preview1Slant[]->title,
            preview2text,
            preview2size,
            "preview2weight": preview2Weight[]->title,
            "preview2slant": preview2Slant[]->title,
            preview3text,
            preview3size,
            "preview3weight": preview3Weight[]->title,
            "preview3slant": preview3Slant[]->title,
        }`
      )
      .then((data) => setFonts(data))
      .catch(console.error)
  }, [])

  return <>{fonts && fonts.map((font) => <FontHero font={font} key={font._id} />)}</>
}

export default Home
