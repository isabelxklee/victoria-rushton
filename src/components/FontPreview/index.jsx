import React from 'react'
import {P} from '../../styles'
import {PreviewText} from './styles'

const FontPreview = ({font}) => (
  <div>
    <P>
      {font.title} {font.preview1weight[0].title}
    </P>
    <PreviewText
      $size={font.preview1size}
      $weight={font.preview1weight[0].number}
      $slant={font.preview1slant[0]}
    >
      {font.preview1text}
    </PreviewText>
  </div>
)

export default FontPreview
