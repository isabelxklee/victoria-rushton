import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from '../client.js'
import BlockContent from '@sanity/block-content-to-react'
import TypeTester from '../components/TypeTester'

const FontProfile = () => {
  const [data, setData] = useState(null)
  const {slug} = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
            _id,
            title,
            "slug": slug.current,
            "weights": weights[]->title,
            "slants": slants[]->title,
            preview1,
            preview1Size,
            "preview 1 weight": preview1Weight[]->title,
            "preview 1 slant": preview1Slant[]->title,
            preview2,
            preview2Size,
            "preview 2 weight": preview2Weight[]->title,
            "preview 2 slant": preview2Slant[]->title,
            preview3,
            preview3Size,
            "preview 3 weight": preview3Weight[]->title,
            "preview 3 slant": preview3Slant[]->title,
        }`,
        {slug}
      )
      .then((data) => setData(data))
      .catch(console.error)
  }, [slug])

  return (
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <BlockContent
            blocks={data.preview1}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
          {/* <TypeTester font={data} /> */}
        </div>
      )}
    </>
  )
}

export default FontProfile
