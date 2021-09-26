import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {PSpace, Content} from '../../styles'
import {PreviewText} from './styles'

const FontPreview = ({font}) => {
  const [previews, setPreviews] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "previewText"]{
            _id,
            text,
            size,
            lineHeight,
            "font": font[0]->title,
            "weightTitle": weight[0]->title,
            "weightNumber": weight[0]->number,
            "slant": slant[0]->title,
        }`
      )
      .then((data) => setPreviews(data))
      .catch(console.error)
  }, [font])

  return (
    <>
      {previews &&
        previews.map((preview) => (
          <div key={preview._id}>
            {preview.font === font && (
              <Content $padding="40px 0px">
                <PSpace>
                  {font} {preview.weightTitle}
                </PSpace>
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
              </Content>
            )}
          </div>
        ))}
    </>
  )
}

export default FontPreview
