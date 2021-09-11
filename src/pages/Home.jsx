import React, {useState, useEffect} from 'react'
// import FontHero from '../components/FontHero'
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
            preview1,
            preview1Size,
            "preview 1 weight": preview1Weight[]->title,
            "preview 1 slant": preview1Slant[]->title,
            preview2,
            preview2Size,
            "preview 2 weight": preview2Weight[]->title,
            "preview 2 slant": preview2Slant[]->title,
            preview3,
            preview3Size,
            "preview 3 weight": preview3Weight[]->title,
            "preview 3 slant": preview3Slant[]->title,
        }`
      )
      .then((data) => setFonts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      {fonts &&
        fonts.map((font) => (
          // <FontHero font={font} key={font._id} />
          <h2>{font.title}</h2>
        ))}
    </>
  )
}

export default Home
