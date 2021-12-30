import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../../client.js'
import TypeTester from '../../components/TypeTester'
import FontPreview from '../../components/FontPreview'
import License from '../../components/License'
import Announcement from '../../components/Announcement'
import {Button, H1, H3, P} from '../../styles'
import {HeroContainer, Description} from './styles'
import {currentFontQuery} from '../../queries'
import LoadingComponent from '../../components/Loading'

const FontProfile = () => {
  const [font, setFont] = useState(null)
  const {slug} = useParams()
  const divEl = useRef(null)

  useEffect(() => {
    sanityClient
      .fetch(currentFontQuery, {slug})
      .then((font) => setFont(font[0]))
      .catch(console.error)
  }, [slug])

  const handleClick = () => {
    divEl.current.scrollIntoView()
  }

  const weightOptions = () => {
    const arr = []
    font.weights.map(
      (weight) => weight.number && arr.push({value: weight.number, label: weight.title})
    )

    return arr
  }

  const slantOptions = () => {
    const arr = []
    font.slants.map((slant) => arr.push({value: slant, label: slant}))

    return arr
  }

  if (!font) return <LoadingComponent />

  return (
    <>
      {font && (
        <>
          <HeroContainer>
            <H1 $font={font.title} $margin="0 0 40px 0">
              {font.title}
            </H1>
            <Description>{font.description}</Description>
            <Button onClick={handleClick}>License this font</Button>
          </HeroContainer>
          <FontPreview font={font.title} />
          <TypeTester font={font} weightOptions={weightOptions} slantOptions={slantOptions} />
          <HeroContainer>
            <H3>Supported Languages</H3>
            <P>{font.supportedLanguages}</P>
          </HeroContainer>
          {font.title.includes('Cecilie') && <Announcement />}
          <div ref={divEl}>
            <License font={font} weightOptions={weightOptions} slantOptions={slantOptions} />
          </div>
        </>
      )}
    </>
  )
}

export default FontProfile
