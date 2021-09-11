import React from 'react'
import {Divider} from '../../styles'
import {FontHeroContainer, Content, HeroPreview, FontHeroP, FontHeroPRight} from './styles'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../client.js'

const FontHero = ({font}) => {
  const calculateStyles = () => {
    return font.weights.length * font.slants.length
  }

  return (
    <FontHeroContainer>
      <Divider />
      <Content>
        {/* <InternalLink to={`/type/${font.name.toLowerCase().replace(/\s+/g, '-')}`}> */}
        <FontHeroP>{font.title}</FontHeroP>
        <FontHeroPRight>{calculateStyles()} available styles</FontHeroPRight>
        <HeroPreview>
          <BlockContent
            blocks={font.preview1}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </HeroPreview>
        View this font
        {/* </InternalLink> */}
      </Content>
    </FontHeroContainer>
  )
}

export default FontHero
