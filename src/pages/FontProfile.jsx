import React, {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
// import {useDispatch, useSelector} from 'react-redux'
import sanityClient from '../client.js'
import TypeTester from '../components/TypeTester'
import FontPreview from '../components/FontPreview'
import License from '../components/License'
import Announcement from '../components/Announcement'
import LoadingComponent from '../components/Loading'
import * as Global from '../styles/global-styles'
import * as Component from '../styles/component-styles'
import {currentFontQuery} from '../queries'

const FontProfile = () => {
  const [font, setFont] = useState(null)
  // const dispatch = useDispatch()
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

  return (
    <>
      {!font ? (
        <LoadingComponent />
      ) : (
        <>
          <Component.HeroContainer>
            <Global.H1 $font={font.title} $margin="0 0 40px 0">
              {font.title}
            </Global.H1>
            <Component.Description>{font.description}</Component.Description>
            <Global.Button onClick={handleClick}>License this font</Global.Button>
          </Component.HeroContainer>
          <FontPreview font={font.title} />
          <TypeTester font={font} weightOptions={weightOptions} />
          <Component.HeroContainer>
            <Global.H3>Supported Languages</Global.H3>
            <Global.P>{font.supportedLanguages}</Global.P>
          </Component.HeroContainer>
          {font.title.includes('Cecilie') && <Announcement />}
          <div ref={divEl}>
            <License font={font} weightOptions={weightOptions} />
          </div>
        </>
      )}
    </>
  )
}

export default FontProfile
