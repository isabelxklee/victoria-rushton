import React from 'react'
import {useSelector} from 'react-redux'
import {PSpace} from '../../styles/global-styles'
import {PreviewText} from '../../styles/component-styles'
import {PreviewTextContainer, SVG} from './styles'

const FontPreview = () => {
  const currentFont = useSelector((state) => state.currentFont.value)
  const previewTexts = useSelector((state) => state.previewTexts.value)

  console.log(previewTexts)

  return (
    <>
      {/* {filterPreviews().map((preview) => (
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
      ))} */}
    </>
  )
}

export default FontPreview
