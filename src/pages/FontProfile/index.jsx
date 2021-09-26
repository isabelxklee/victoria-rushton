import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../../client.js'
import TypeTester from '../../components/TypeTester'
import FontHero from '../../components/FontHero'
import {StyledBlock} from './styles'
import {Divider} from '../../styles'

const FontProfile = () => {
  const [font, setFont] = useState(null)
  const {slug} = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
            _id,
            title,
            "slug": slug.current,
            "weights": weights[]->,
            "slants": slants[]->title,
            preview1text,
            preview1size,
            "preview1weight": preview1weight[]->,
            "preview1slant": preview1slant[]->title,
            preview2text,
            preview2size,
            "preview2weight": preview2weight[]->,
            "preview2slant": preview2slant[]->title,
            preview3text,
            preview3size,
            "preview3weight": preview3weight[]->,
            "preview3slant": preview3slant[]->title,
        }`,
        {slug}
      )
      .then((font) => setFont(font[0]))
      .catch(console.error)
  }, [slug])

  if (!font) return <div>Loading...</div>

  return (
    <>
      {font && (
        <div>
          <FontHero font={font} isProfile={true} />
          <Divider />
          <h1>{font.title}</h1>
          <p>
            {font.title} {font.preview1weight[0].title}
          </p>
          <StyledBlock
            blocks={font.preview1text}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
            $fontSize={font.preview1size}
            $fontWeight={font.preview1weight[0].number}
          />
          <TypeTester font={font} />
        </div>
      )}
    </>
  )
}

export default FontProfile
