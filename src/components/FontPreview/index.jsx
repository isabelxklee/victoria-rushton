import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {useSelector} from 'react-redux'
import {PSpace} from '../../styles/global-styles'
import {PreviewText} from '../../styles/component-styles'
import {PreviewTextContainer, SVG} from './styles'
import {previewTextQuery} from '../../queries'

const FontPreview = () => {
  const currentFont = useSelector((state) => state.currentFont.value)
  const [previews, setPreviews] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(previewTextQuery)
      .then((data) => setPreviews(data))
      .catch(console.error)
  }, [currentFont])

  const filterPreviews = () => {
    return previews.filter((preview) => preview.font === currentFont.title)
  }

  return (
    <>
      {filterPreviews().map((preview) => (
        <div key={preview._id}>
          <PreviewTextContainer>
            <PSpace>
              {currentFont} {preview.weightTitle}{' '}
              {preview.slant.includes('Italic') && preview.slant}
            </PSpace>
            {preview.useSVG && preview.svg ? (
              <SVG
                src={preview.svg.asset.url}
                alt={preview.svg.altText}
                $width={preview.svg.width}
              />
            ) : (
              <PreviewText
                $size={preview.size}
                $weight={preview.weightNumber}
                $slant={preview.slant}
                $font={currentFont}
                $lineHeight={preview.lineHeight}
                $margin="0"
              >
                {preview.text}
              </PreviewText>
            )}
          </PreviewTextContainer>
        </div>
      ))}
    </>
  )
}

export default FontPreview
