import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../../client.js'
import TypeTester from '../../components/TypeTester'
import FontPreview from '../../components/FontPreview'
import {HeroPreview, Content} from '../../components/FontHero/styles'
import {Divider, Description, Button} from '../../styles'

const FontProfile = () => {
  const [font, setFont] = useState(null)
  const {slug} = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
            _id,
            title,
            description,
            "slug": slug.current,
            "weights": weights[]->,
            "slants": slants[]->title,
        }`,
        {slug}
      )
      .then((font) => setFont(font[0]))
      .catch(console.error)
  }, [slug])

  if (!font) return <div>Loading...</div>

  console.log(font)

  return (
    <>
      {font && (
        <>
          <Divider />
          <Content $isProfile={true}>
            <HeroPreview $isProfile={true}>{font.title}</HeroPreview>
            <Description>{font.description}</Description>
            <Button>License this font</Button>
          </Content>
          <Divider />
          <FontPreview font={font.title} />
          <TypeTester font={font} />
        </>
      )}
    </>
  )
}

export default FontProfile

// queries
// "previews": *[_type == "previewText" && references(^._id)],
// preview1text,
// preview1size,
// "preview1weight": preview1weight[]->,
// "preview1slant": preview1slant[]->title,
// preview2text,
// preview2size,
// "preview2weight": preview2weight[]->,
// "preview2slant": preview2slant[]->title,
// preview3text,
// preview3size,
// "preview3weight": preview3weight[]->,
// "preview3slant": preview3slant[]->title,
