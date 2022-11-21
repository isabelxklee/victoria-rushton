import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {currentFontQuery} from '../queries'
import sanityClient from '../client.js'
import TypeTester from '../components/TypeTester'
import FontPreview from '../components/FontPreview'
import License from '../components/License'
import Announcement from '../components/Announcement'
import LoadingComponent from '../components/Loading'
import * as Global from '../styles/global-styles'
import * as Component from '../styles/component-styles'

const FontProfile = () => {
  const [currentFont, setCurrentFont] = useState(null)
  const {slug} = useParams()
  const divEl = useRef(null)

  useEffect(() => {
    sanityClient
      .fetch(currentFontQuery, {slug})
      .then((font) => {
        let data = font[0]
        setCurrentFont(data)
      })
      .catch(console.error)
  }, [slug])

  const handleClick = () => {
    divEl.current.scrollIntoView()
  }

  const weightOptions = () => {
    const arr = []

    currentFont.weights.map(
      (weight) => weight.number && arr.push({value: weight.number, label: weight.title})
    )

    return arr
  }

  return (
    <>
      {!currentFont ? (
        <LoadingComponent />
      ) : (
        <>
          <Component.HeroContainer>
            <Global.H1 $font={currentFont.title} $margin="0 0 40px 0">
              {currentFont.title}
            </Global.H1>
            <Component.Description>{currentFont.description}</Component.Description>
            <Global.Button onClick={handleClick}>License this font</Global.Button>
          </Component.HeroContainer>
          <FontPreview font={currentFont.title} />
          <TypeTester font={currentFont} weightOptions={weightOptions} />
          <Component.HeroContainer>
            <Global.H3>Supported Languages</Global.H3>
            <Global.P>{currentFont.supportedLanguages}</Global.P>
          </Component.HeroContainer>
          {currentFont.title.includes('Cecilie') && <Announcement />}
          <div ref={divEl}>
            <License font={currentFont} weightOptions={weightOptions} />
          </div>
        </>
      )}
    </>
  )
}

export default FontProfile
