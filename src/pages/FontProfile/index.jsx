import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../../client.js'
import TypeTester from '../../components/TypeTester'
import FontPreview from '../../components/FontPreview'
import License from '../../components/License'
import {HeroPreview} from '../../components/FontHero/styles'
import {Divider, Description, Button} from '../../styles'
import {TypeTesterBackground, HeroContainer} from './styles'

const FontProfile = () => {
  const [font, setFont] = useState(null)
  const {slug} = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
            _id,
            title,
            description,
            "slug": slug.current,
            "weights": weights[]->,
            "slants": slants[]->title,
        }`,
        {slug}
      )
      .then((font) => setFont(font[0]))
      .catch(console.error)
  }, [slug])

  if (!font) return <div>Loading...</div>

  return (
    <>
      {font && (
        <>
          <HeroContainer>
            <HeroPreview $isProfile={true}>{font.title}</HeroPreview>
            <Description>{font.description}</Description>
            <Button>License this font</Button>
          </HeroContainer>
          <FontPreview font={font.title} />
          <TypeTesterBackground>
            <TypeTester font={font} />
          </TypeTesterBackground>
          <License font={font} />
        </>
      )}
    </>
  )
}

export default FontProfile
