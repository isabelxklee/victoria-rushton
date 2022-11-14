import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {PSpace} from '../../global-styles'
import {PreviewText, PreviewTextContainer, SVG} from './styles'
import {previewTextQuery} from '../../queries'

const FontPreview = ({font}) => {
  const [previews, setPreviews] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(previewTextQuery)
      .then((data) => setPreviews(data))
      .catch(console.error)
  }, [font])

  return (
    <>
      {previews &&
        previews.map((preview) => (
          <div key={preview._id}>
            {preview.font === font && (
              <PreviewTextContainer>
                <PSpace>
                  {font} {preview.weightTitle} {preview.slant.includes('Italic') && preview.slant}
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
                    $font={font}
                    $lineHeight={preview.lineHeight}
                    $margin="0"
                  >
                    {preview.text}
                  </PreviewText>
                )}
              </PreviewTextContainer>
            )}
          </div>
        ))}
    </>
  )
}

export default FontPreview
