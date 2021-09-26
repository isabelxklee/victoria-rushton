import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {PSpace} from '../../styles'
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
            "font": *[_type == 'font' && title == 'Embury Text'],
            "weightTitle": weight[0]->title,
            "weightNumber": weight[0]->number,
            "slant": slant[0]->title,
        }`
      )
      .then((data) => setPreviews(data))
      .catch(console.error)
  }, [])

  console.log(previews)

  return (
    <>
      {previews &&
        previews.map((preview) => (
          <div key={preview._id}>
            {preview.font[0].title === font.title && (
              <>
                <PSpace>
                  {font.title} {preview.weightTitle}
                </PSpace>
                <PreviewText
                  $size={preview.size}
                  $weight={preview.weightNumber}
                  $slant={preview.slant}
                  $font={font.title}
                >
                  {preview.text}
                </PreviewText>
              </>
            )}
          </div>
        ))}
    </>
  )
}

export default FontPreview
