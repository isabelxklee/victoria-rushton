import React from 'react'
import {Divider, InternalLink} from '../../styles'
import {FontHeroContainer, Content, FontHeroP, FontHeroPRight} from './styles'
import {PreviewText} from '../FontPreview/styles'

const FontHero = ({font}) => {
  const calculateStyles = () => {
    return font.weights.length * font.slants.length
  }

  return (
    <FontHeroContainer>
      <Divider />
      <Content>
        <InternalLink to={'/' + font.slug} key={font._id}>
          <FontHeroP>{font.title}</FontHeroP>
          <FontHeroPRight>{calculateStyles()} available styles</FontHeroPRight>
          <PreviewText $font={font.title} $size={font.homeSize}>
            {font.homePageText}
          </PreviewText>
          View this font
        </InternalLink>
      </Content>
    </FontHeroContainer>
  )
}

export default FontHero
