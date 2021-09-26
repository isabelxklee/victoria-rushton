import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
// import {P} from '../../styles'
// import {PreviewText} from './styles'

const FontPreview = ({font}) => {
  const [previews, setPreviews] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "previewText"]{
          _id,
          text,
          "font": font[]->title[0],
          "slant": slant[]->title[0],
          "weightTitle": weight[]->[0].title,
          "weightNumber": weight[]->[0].number,
          size
        }`
      )
      .then((data) => setPreviews(data))
      .catch(console.error)
  }, [])

  console.log(previews, font)

  return (
    <div>
      {/* <P>
        {font.title} {font.preview1weight[0].title}
      </P>
      <PreviewText
        $size={font.preview1size}
        $weight={font.preview1weight[0].number}
        $slant={font.preview1slant[0]}
      >
        {font.preview1text}
      </PreviewText> */}
    </div>
  )
}
export default FontPreview
